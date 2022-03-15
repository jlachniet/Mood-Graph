import { Calendar } from '../components/Calendar/Calendar';
import { CalendarEditor } from '../components/Calendar/CalendarEditor';
import { Button } from '../components/Form/Button';
import { LoadingIcon } from '../components/LoadingIcon';
import { Metadata } from '../components/Metadata/Metadata';
import { SettingsMenu } from '../components/SettingsMenu/SettingsMenu';
import { Pixel } from '../types/pixels';
import { SettingsMenuState } from '../types/settings';
import { useAuthenticatedRoute } from '../utils/hooks/firebase';
import { usePixels } from '../utils/hooks/pixels';
import { useSettings } from '../utils/hooks/settings';
import { useState } from 'react';

export default function Dashboard() {
	useAuthenticatedRoute();

	const { pixels } = usePixels();
	const { settings, updateSettings } = useSettings();

	const [selectedPixel, setSelectedPixel] = useState<Pixel | null>(null);
	const [settingsMenuState, setSettingsMenuState] =
		useState<SettingsMenuState>('closed');

	return (
		<>
			<Metadata title="Mood Graph - Dashboard" url="/dashboard" />
			{settings && (selectedPixel || settingsMenuState !== 'closed') && (
				<>
					{selectedPixel ? (
						<CalendarEditor
							selectedPixel={selectedPixel}
							setSelectedPixel={setSelectedPixel}
						/>
					) : (
						<SettingsMenu settings={settings} updateSettings={updateSettings} />
					)}
					<div
						className="absolute left-0 top-0 z-30 h-full w-full cursor-pointer bg-neutral-900 opacity-50"
						onClick={() => {
							setSelectedPixel(null);
							setSettingsMenuState('closed');
						}}
					/>
				</>
			)}
			{pixels && settings ? (
				<div className="flex max-h-screenheightminusnavbar justify-center p-4">
					<div className="flex w-full max-w-xl flex-col rounded-md bg-transparent text-center shadow">
						<header className="z-10 rounded-t-md bg-violet-400 px-6 py-4 shadow">
							<h1 className="mb-2 font-display text-3xl font-extrabold">
								Dashboard
							</h1>
							<Button onClick={() => setSettingsMenuState('open')}>
								Settings
							</Button>
						</header>
						<main className="overflow-hidden rounded-b-md bg-neutral-50 p-4">
							<Calendar
								pixels={pixels}
								settings={settings}
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
