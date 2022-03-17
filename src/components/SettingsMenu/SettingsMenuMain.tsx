import {
	ClientUserSettings,
	SettingsMenuState,
	SettingsUpdater,
} from '../../types/settings';
import { SettingsMenuBackup } from './SettingsMenuBackup';
import { SettingsMenuCalendar } from './SettingsMenuCalendar';
import { SettingsMenuReminders } from './SettingsMenuReminders';
import { BsX } from 'react-icons/bs';

export function SettingsMenuMain(props: {
	settings: ClientUserSettings;
	updateSettings: SettingsUpdater;
	settingsMenuState: SettingsMenuState;
	setSettingsMenuState: (state: SettingsMenuState) => void;
	setImportedData: (data: string | null) => void;
}) {
	return (
		<>
			<h2 className="mb-3 font-display text-2xl font-extrabold">Settings</h2>
			<button
				className="absolute right-1 top-1"
				onClick={() => props.setSettingsMenuState('closed')}
			>
				<BsX className="h-6 w-6" />
			</button>
			<SettingsMenuReminders />
			<SettingsMenuCalendar {...props} />
			<SettingsMenuBackup {...props} />
		</>
	);
}
