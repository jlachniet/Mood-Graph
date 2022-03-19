import { LoadingIcon } from '../components/LoadingIcon';
import { Metadata } from '../components/Metadata/Metadata';
import { useAuthenticatedRoute } from '../hooks/firebase';
import { usePixels } from '../hooks/pixels';
import { useThemeContext } from '../hooks/theme';
import { MovingAverageOption } from '../types/math';
import { getMovingAverage, PRESET_MOVING_AVERAGE_OPTIONS } from '../utils/math';
import { getCurrentDateString, getDateStringRange } from '../utils/time';
import {
	CategoryScale,
	Chart,
	ChartData,
	ChartOptions,
	LinearScale,
	LineElement,
	PointElement,
} from 'chart.js';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

export default function Graph() {
	useAuthenticatedRoute();

	const { pixels } = usePixels();

	const { theme } = useThemeContext();

	const [graphOptions, setGraphOptions] = useState<MovingAverageOption[]>([]);
	const [selectedGraphOption, setSelectedGraphOption] = useState<number | null>(
		null
	);

	const [formCustomWindowSize, setFormCustomWindowSize] = useState('1');
	const [customWindowSize, setCustomWindowSize] = useState(1);

	const [graphData, setGraphData] = useState<ChartData<'line'> | null>(null);

	function getChartOptions(): ChartOptions<'line'> {
		return {
			elements: {
				point: {
					radius: 0,
				},
			},
			scales: {
				x: {
					grid: {
						color: '#d4d4d4',
						lineWidth: 2,
					},
					ticks: {
						color: theme === 'light' ? '#171717' : '#fafafa',
						font: {
							family: 'Inter',
							size: 13,
						},
						maxTicksLimit: 15,
					},
				},
				y: {
					min: 1,
					max: 5,
					grid: {
						color: '#a3a3a3',
						lineWidth: 2,
					},
					ticks: {
						color: theme === 'light' ? '#262626' : '#f5f5f5',
						font: {
							family: 'Inter',
							size: 13,
						},
					},
				},
			},
			aspectRatio: 1.5,
			plugins: {
				legend: {
					display: false,
				},
				tooltip: {
					enabled: false,
				},
			},
		};
	}

	useEffect(() => {
		if (pixels) {
			const oldOptionsLength = graphOptions.length;

			const options = [...PRESET_MOVING_AVERAGE_OPTIONS].filter(
				(option) =>
					typeof option === 'string' || option.windowSize <= pixels.length
			);

			const autoWindowSize = Math.max(
				Math.floor(Math.min(pixels.length / 10, 30)),
				1
			);

			if (autoWindowSize > 1) {
				options.unshift({
					title: `Auto (Averaged over ${autoWindowSize} days)`,
					windowSize: autoWindowSize,
				});
			}

			options.push({
				title: 'Custom',
				windowSize: customWindowSize,
			});

			setGraphOptions(options);

			if (oldOptionsLength !== options.length) {
				setSelectedGraphOption(0);
			}
		}
	}, [pixels, graphOptions.length, customWindowSize]);

	useEffect(() => {
		if (pixels && graphOptions && selectedGraphOption !== null) {
			const graphDates = getDateStringRange(
				pixels[0]?.dateString ?? getCurrentDateString(),
				pixels[pixels.length - 1]?.dateString ?? getCurrentDateString()
			);

			const graphValues = getMovingAverage(
				graphDates.map(
					(dateString) =>
						pixels.find((pixel) => pixel.dateString === dateString)?.value ??
						null
				),
				graphOptions[selectedGraphOption].windowSize,
				graphOptions[selectedGraphOption].windowSize / 2
			);

			setGraphData({
				labels: graphDates,
				datasets: [
					{
						data: graphValues,
						borderColor: '#8b5cf6',
					},
				],
			});
		}
	}, [pixels, graphOptions, selectedGraphOption]);

	useEffect(() => {
		const parsedFormCustomWindowSize = parseInt(formCustomWindowSize);

		if (
			Number.isInteger(parsedFormCustomWindowSize) &&
			parsedFormCustomWindowSize >= 1 &&
			parsedFormCustomWindowSize <= 99999
		) {
			setCustomWindowSize(parsedFormCustomWindowSize);
		}
	}, [formCustomWindowSize]);

	useEffect(() => {
		Chart.register(CategoryScale, LinearScale, PointElement, LineElement);
	}, []);

	return (
		<>
			<Metadata title="Mood Graph - Graph" url="/graph" />
			{pixels && graphOptions.length > 0 ? (
				<div className="flex max-h-screenheightminusnavbar justify-center p-4">
					<main className="flex w-full max-w-xl flex-col rounded-md bg-neutral-50 px-2 py-4 text-center shadow dark:bg-neutral-800">
						<h1 className="mb-4 font-display text-3xl font-extrabold">Graph</h1>
						{graphData && selectedGraphOption !== null && pixels.length >= 2 ? (
							<>
								<div className="mb-2">
									<label htmlFor="averaging-options" className="mr-2">
										Graph mode:
									</label>
									<select
										id="averaging-options"
										className="w-fit rounded-lg border border-neutral-700 bg-neutral-50 px-1 py-0.5 shadow dark:border-transparent dark:bg-neutral-600"
										value={selectedGraphOption}
										onChange={(event) => {
											setSelectedGraphOption(parseInt(event.target.value));
										}}
									>
										{graphOptions.map((option, index) => (
											<option key={option.title} value={index}>
												{option.title}
											</option>
										))}
									</select>
								</div>
								{graphOptions[selectedGraphOption].title === 'Custom' && (
									<div className="mb-2">
										<label htmlFor="window-size" className="mr-2">
											Days to average over:
										</label>
										<input
											id="window-size"
											type="number"
											className="w-20 rounded-lg border border-neutral-700 bg-neutral-50 px-2 py-0.5"
											value={formCustomWindowSize}
											min={1}
											max={99999}
											onChange={(event) => {
												const newWindowSize = event.target.value;
												setFormCustomWindowSize(newWindowSize);
											}}
										/>
									</div>
								)}
								<div>
									<Line
										key="dark"
										options={getChartOptions()}
										data={graphData}
									/>
								</div>
							</>
						) : (
							<p>
								Add some days to your{' '}
								<Link href="/dashboard">
									<a className="text-blue-600 dark:text-blue-500">dashboard</a>
								</Link>{' '}
								to get started!
							</p>
						)}
					</main>
				</div>
			) : (
				<div className="flex h-screenheightminusdoublenavbar items-center justify-center">
					<LoadingIcon />
				</div>
			)}
		</>
	);
}
