import { Calendar } from '../components/Calendar/Calendar';
import { CalendarEditor } from '../components/Calendar/CalendarEditor';
import { Button } from '../components/Form/Button';
import { LoadingIcon } from '../components/LoadingIcon';
import { Metadata } from '../components/Metadata/Metadata';
import { SettingsMenu } from '../components/SettingsMenu/SettingsMenu';
import { useAuthenticatedRoute } from '../hooks/firebase';
import { usePixels } from '../hooks/pixels';
import { useSettings } from '../hooks/settings';
import { Pixel } from '../types/pixels';
import { SettingsMenuState } from '../types/settings';
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
			{settings && pixels && (selectedPixel || settingsMenuState !== 'closed') && (
				<>
					{selectedPixel ? (
						<CalendarEditor
							selectedPixel={selectedPixel}
							setSelectedPixel={setSelectedPixel}
						/>
					) : (
						<SettingsMenu
							settings={settings}
							updateSettings={updateSettings}
							settingsMenuState={settingsMenuState}
							setSettingsMenuState={setSettingsMenuState}
						/>
					)}
					<div
						className="fixed inset-0 z-30 bg-neutral-900 opacity-50"
						onClick={() => {
							if (settingsMenuState !== 'importing') {
								setSelectedPixel(null);
								setSettingsMenuState('closed');
							}
						}}
					/>
				</>
			)}
			{pixels && settings ? (
				<div className="flex max-h-screenheightminusnavbar justify-center p-4">
					<div className="flex w-full max-w-xl flex-col rounded-md bg-transparent text-center shadow">
						<header className="z-10 rounded-t-md bg-violet-400 px-6 py-4 shadow dark:bg-violet-800">
							<h1 className="mb-2 font-display text-3xl font-extrabold">
								Dashboard
							</h1>
							<Button
								background="bg-sky-300"
								color="text-neutral-800"
								onClick={() => setSettingsMenuState('open')}
							>
								Settings
							</Button>
						</header>
						<main className="overflow-hidden rounded-b-md bg-neutral-50 p-4 dark:bg-neutral-800">
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
