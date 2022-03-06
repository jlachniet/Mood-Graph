import { MoodGraphHead } from '../components/MoodGraphHead';
import { Navbar } from '../components/Navbar';
import { MovingAverageOption } from '../types/math';
import { getCurrentDateString, getDateStringRange } from '../utils/dates';
import { useAuthenticatedRoute } from '../utils/hooks/firebase';
import { usePixels } from '../utils/hooks/pixels';
import { getMovingAverage, MOVING_AVERAGE_OPTIONS } from '../utils/math';
import {
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Chart,
	ChartData,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

export default function Graph() {
	useAuthenticatedRoute();

	const [pixels] = usePixels();
	const [averagingOptions, setAveragingOptions] = useState<
		MovingAverageOption[]
	>([]);
	const [selectedAveragingOption, setSelectedAveragingOption] =
		useState<MovingAverageOption | null>(null);

	const [graphData, setGraphData] = useState<ChartData<'line'> | null>(null);

	useEffect(() => {
		if (pixels) {
			const oldOptionsLength = averagingOptions.length;

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

			setAveragingOptions(options);

			if (oldOptionsLength !== options.length) {
				setSelectedAveragingOption(options[0]);
			}
		}
	}, [pixels, averagingOptions.length]);

	useEffect(() => {
		if (pixels && averagingOptions && selectedAveragingOption) {
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
				selectedAveragingOption.windowSize,
				selectedAveragingOption.windowSize / 2
			);

			setGraphData({
				labels: graphDates,
				datasets: [
					{
						label: `Daily Mood (Averaged over ${selectedAveragingOption.windowSize} days)`,
						data: graphValues,
						borderColor: '#9c61fa',
						backgroundColor: '#9c61fa',
					},
				],
			});
		}
	}, [pixels, averagingOptions, selectedAveragingOption]);

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
			<MoodGraphHead title="Mood Graph - Graph" url="/graph" />
			<Navbar />
			<div className="flex h-[calc(100vh-2.5rem)] items-center justify-center text-center font-display">
				<main className="m-4">
					<h1 className="mb-4 text-4xl font-extrabold">Graph</h1>
					{graphData && selectedAveragingOption && (
						<>
							<label htmlFor="averaging-options" className="mr-2">
								Graph mode:
							</label>
							<select
								id="averaging-options"
								className="mb-3 rounded-lg p-1"
								value={averagingOptions.indexOf(selectedAveragingOption)}
								onChange={(event) => {
									setSelectedAveragingOption(
										averagingOptions[parseInt(event.target.value)]
									);
								}}
							>
								{averagingOptions.map((option, index) => (
									<option key={option.title} value={index}>
										{option.title}
									</option>
								))}
							</select>
							<div className="w-[calc(100vw-1rem)] max-w-[40rem]">
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
													color: '#634f6b',
													lineWidth: 2,
												},
												ticks: {
													color: '#dcd5e6',
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
													color: '#9681b8',
													lineWidth: 2,
												},
												ticks: {
													color: '#dcd5e6',
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
					)}
				</main>
			</div>
		</>
	);
}
