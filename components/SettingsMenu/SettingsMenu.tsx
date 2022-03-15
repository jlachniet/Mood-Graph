import {
	ClientUserSettings,
	SettingsMenuState,
	SettingsUpdater,
} from '../../types/settings';
import { SettingsMenuBackup } from './SettingsMenuBackup';
import { SettingsMenuCalendar } from './SettingsMenuCalendar';
import { SettingsMenuReminders } from './SettingsMenuReminders';
import { BsX } from 'react-icons/bs';

export function SettingsMenu(props: {
	settings: ClientUserSettings;
	updateSettings: SettingsUpdater;
	setSettingsMenuState: (state: SettingsMenuState) => void;
}) {
	return (
		<div className="absolute top-1/2 left-1/2 z-40 w-fit -translate-x-1/2 -translate-y-1/2 rounded-md bg-neutral-100 px-6 py-4 text-center">
			<h2 className="mb-3 font-display text-2xl font-extrabold">Settings</h2>
			<button
				className="absolute right-1 top-1"
				onClick={() => props.setSettingsMenuState('closed')}
			>
				<BsX className="h-6 w-6" />
			</button>
			<SettingsMenuReminders />
			<SettingsMenuCalendar {...props} />
			<SettingsMenuBackup />
		</div>
	);
}
