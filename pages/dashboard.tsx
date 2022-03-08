import { Calendar } from '../components/Calendar/Calendar';
import { LoadingIcon } from '../components/LoadingIcon';
import { Metadata } from '../components/Metadata/Metadata';
import { useAuthenticatedRoute } from '../utils/hooks/firebase';
import { usePixels } from '../utils/hooks/pixels';
import { useUserSettings } from '../utils/hooks/settings';
import { pixelsToPixelYear } from '../utils/pixels';
import { useState } from 'react';

export default function Dashboard() {
	useAuthenticatedRoute();

	const { pixels } = usePixels();
	const [selectedPixel, setSelectedPixel] = useState<string | null>(null);

	const [userSettings] = useUserSettings();

	return (
		<>
			<Metadata title="Mood Graph - Dashboard" url="/dashboard" />
			{selectedPixel && (
				<div
					className="absolute left-0 top-0 z-20 h-full w-full bg-neutral-900 opacity-50"
					onClick={() => {
						setSelectedPixel(null);
					}}
				/>
			)}
			{pixels && userSettings ? (
				<div className="p-4 text-center">
					<main className="inline-block w-full max-w-screen-sm rounded-md bg-neutral-100 p-4 shadow">
						<h1 className="font-display text-3xl mb-2 font-extrabold">
							Dashboard
						</h1>
						<Calendar
							pixels={pixelsToPixelYear(
								pixels,
								userSettings.startDate,
								userSettings.endDate
							)}
							selectedPixel={selectedPixel}
							setSelectedPixel={setSelectedPixel}
						/>
					</main>
				</div>
			) : (
				<div className="flex h-[calc(100vh-5.5rem-2px)] items-center justify-center">
					<LoadingIcon />
				</div>
			)}
		</>
	);
}
