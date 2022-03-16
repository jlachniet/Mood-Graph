import { LoadingIcon } from '../components/LoadingIcon';
import { Metadata } from '../components/Metadata/Metadata';
import { MovingAverageOption } from '../types/math';
import { getCurrentDateString, getDateStringRange } from '../utils/dates';
import { useAuthenticatedRoute } from '../utils/hooks/firebase';
import { usePixels } from '../utils/hooks/pixels';
import { getMovingAverage, MOVING_AVERAGE_OPTIONS } from '../utils/math';
import {
	CategoryScale,
	Chart,
	ChartData,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
} from 'chart.js';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

export default function Graph() {
	useAuthenticatedRoute();

	const { pixels } = usePixels();

	const [graphOptions, setGraphOptions] = useState<MovingAverageOption[]>([]);
	const [selectedGraphOption, setSelectedGraphOption] =
		useState<MovingAverageOption | null>(null);

	const [graphData, setGraphData] = useState<ChartData<'line'> | null>(null);

	useEffect(() => {
		if (pixels) {
			const oldOptionsLength = graphOptions.length;

			const options = [...MOVING_AVERAGE_OPTIONS].filter(
				(option) => option.windowSize <= pixels.length
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

			setGraphOptions(options);

			if (oldOptionsLength !== options.length) {
				setSelectedGraphOption(options[0]);
			}
		}
	}, [pixels, graphOptions.length]);

	useEffect(() => {
		if (pixels && graphOptions && selectedGraphOption) {
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
				selectedGraphOption.windowSize,
				selectedGraphOption.windowSize / 2
			);

			setGraphData({
				labels: graphDates,
				datasets: [
					{
						label: `Daily Mood (Averaged over ${selectedGraphOption.windowSize} days)`,
						data: graphValues,
						borderColor: '#8b5cf6',
						backgroundColor: '#8b5cf6',
					},
				],
			});
		}
	}, [pixels, graphOptions, selectedGraphOption]);

	useEffect(() => {
		Chart.register(
			CategoryScale,
			LinearScale,
			PointElement,
			LineElement,
			Title,
			Tooltip,
			Legend
		);
	}, []);

	return (
		<>
			<Metadata title="Mood Graph - Graph" url="/graph" />
			{pixels && graphOptions ? (
				<div className="flex max-h-screenheightminusnavbar justify-center p-4">
					<main className="flex w-full max-w-xl flex-col rounded-md bg-neutral-50 px-2 py-4 text-center shadow dark:bg-neutral-800">
						<h1 className="mb-2 font-display text-3xl font-extrabold">Graph</h1>
						{graphData && selectedGraphOption ? (
							<>
								<div>
									<label htmlFor="averaging-options" className="mr-2">
										Graph mode:
									</label>
									<select
										id="averaging-options"
										className="mb-3 w-fit rounded-lg border border-neutral-700 px-1 py-0.5 shadow dark:border-transparent dark:bg-neutral-600"
										value={graphOptions.indexOf(selectedGraphOption)}
										onChange={(event) => {
											setSelectedGraphOption(
												graphOptions[parseInt(event.target.value)]
											);
										}}
									>
										{graphOptions.map((option, index) => (
											<option key={option.title} value={index}>
												{option.title}
											</option>
										))}
									</select>
								</div>
								<div>
									<Line
										options={{
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
														color: '#171717',
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
														color: '#262626',
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
											},
										}}
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
