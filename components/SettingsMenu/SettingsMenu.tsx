import { ClientUserSettings, SettingsUpdater } from '../../types/settings';
import { SettingsMenuCalendar } from './SettingsMenuCalendar';
import { SettingsMenuReminders } from './SettingsMenuReminders';

export function SettingsMenu(props: {
	settings: ClientUserSettings;
	updateSettings: SettingsUpdater;
}) {
	return (
		<div className="absolute top-1/2 left-1/2 z-40 w-fit -translate-x-1/2 -translate-y-1/2 rounded-md bg-neutral-100 px-6 py-4 text-center">
			<h2 className="mb-3 font-display text-2xl font-extrabold">Settings</h2>
			<SettingsMenuReminders />
			<SettingsMenuCalendar {...props} />
		</div>
	);
}
