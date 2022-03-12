import { Calendar } from '../components/Calendar/Calendar';
import { CalendarEditor } from '../components/Calendar/CalendarEditor';
import { Button } from '../components/Form/Button';
import { LoadingIcon } from '../components/LoadingIcon';
import { Metadata } from '../components/Metadata/Metadata';
import { Pixel } from '../types/pixels';
import { useAuthenticatedRoute } from '../utils/hooks/firebase';
import { usePixels } from '../utils/hooks/pixels';
import { useUserSettings } from '../utils/hooks/settings';
import { useState } from 'react';

export default function Dashboard() {
	useAuthenticatedRoute();

	const { pixels } = usePixels();
	const { userSettings } = useUserSettings();

	const [selectedPixel, setSelectedPixel] = useState<Pixel | null>(null);

	return (
		<>
			<Metadata title="Mood Graph - Dashboard" url="/dashboard" />
			{selectedPixel && (
				<>
					<CalendarEditor
						selectedPixel={selectedPixel}
						setSelectedPixel={setSelectedPixel}
					/>
					<div
						className="absolute left-0 top-0 z-30 h-full w-full cursor-pointer bg-neutral-900 opacity-50"
						onClick={() => setSelectedPixel(null)}
					/>
				</>
			)}
			{pixels && userSettings ? (
				<div className="flex max-h-screenheightminusnavbar justify-center p-4">
					<div className="flex w-full max-w-xl flex-col rounded-md bg-transparent text-center shadow">
						<header className="z-10 rounded-t-md bg-violet-400 px-6 py-4 shadow">
							<h1 className="mb-2 font-display text-3xl font-extrabold">
								Dashboard
							</h1>
							<Button>Settings</Button>
						</header>
						<main className="overflow-hidden rounded-b-md bg-neutral-50 p-4">
							<Calendar
								pixels={pixels}
								settings={userSettings}
								setSelectedPixel={setSelectedPixel}
							/>
						</main>
					</div>
				</div>
			) : (
				<div className="flex h-screenheightminusdoublenavbar items-center justify-center">
					<LoadingIcon />
				</div>
			)}
		</>
	);
}
