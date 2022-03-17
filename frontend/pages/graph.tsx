import { MoodGraphHead } from '../components/MoodGraphHead';
import { Navbar } from '../components/Navbar';
import { getDateStringRange } from '../utils/dates';
import { useAuthenticatedRoute } from '../utils/hooks/firebase';
import { usePixels } from '../utils/hooks/pixels';
import { getMovingAverage } from '../utils/math';
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
	const [data, setData] = useState<ChartData<'line'> | null>(null);

	useEffect(() => {
		if (pixels) {
			const windowSize = Math.max(
				Math.floor(Math.min(pixels.length / 10, 30)),
				1
			);

			const graphDates = getDateStringRange(
				pixels[0].dateString,
				pixels[pixels.length - 1].dateString
			);

			const graphValues = getMovingAverage(
				graphDates.map(
					(dateString) =>
						pixels.find((pixel) => pixel.dateString === dateString)?.value ??
						null
				),
				windowSize,
				windowSize / 2
			);

			setData({
				labels: graphDates,
				datasets: [
					{
						label: `Daily Mood (Averaged over ${windowSize} days)`,
						data: graphValues,
						borderColor: '#9c61fa',
						backgroundColor: '#9c61fa',
					},
				],
			});
		}
	}, [pixels]);

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

					{data && (
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
											labels: {
												font: {
													family: 'Inter',
													size: 15,
												},
											},
											onClick: () => {
												return;
											},
										},
									},
								}}
								data={data}
							/>
						</div>
					)}
				</main>
			</div>
		</>
	);
}
