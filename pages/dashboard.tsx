/* eslint-disable tailwindcss/classnames-order */
import { Calendar } from '../components/Calendar/Calendar';
import { Button } from '../components/Form/Button';
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
				<div className="p-4 text-center h-[calc(100vh-2.75rem-1px)]">
					<main className="relative inline-block h-full w-full max-w-screen-sm rounded-md bg-neutral-100 shadow">
						<div className="absolute z-10 inset-x-0 rounded-t-md bg-violet-800 p-4 shadow text-neutral-100">
							<h1 className="font-display text-3xl mb-2 font-extrabold">
								Dashboard
							</h1>
							<Button>Settings</Button>
						</div>
						<div className="absolute inset-x-2 bottom-2 top-24 overflow-auto p-4">
							<Calendar
								pixels={pixelsToPixelYear(
									pixels,
									userSettings.startDate,
									userSettings.endDate
								)}
								selectedPixel={selectedPixel}
								setSelectedPixel={setSelectedPixel}
							/>
						</div>
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
