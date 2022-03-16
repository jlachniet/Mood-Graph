import {
	ClientUserSettings,
	SettingsMenuState,
	SettingsUpdater,
} from '../../types/settings';
import { SettingsMenuBackup } from './SettingsMenuBackup';
import { SettingsMenuCalendar } from './SettingsMenuCalendar';
import { SettingsMenuImportConfirmation } from './SettingsMenuImportConfirmation';
import { SettingsMenuImporting } from './SettingsMenuImporting';
import { SettingsMenuReminders } from './SettingsMenuReminders';
import { useState } from 'react';
import { BsX } from 'react-icons/bs';

export function SettingsMenu(props: {
	settings: ClientUserSettings;
	updateSettings: SettingsUpdater;
	settingsMenuState: SettingsMenuState;
	setSettingsMenuState: (state: SettingsMenuState) => void;
}) {
	const [importedData, setImportedData] = useState<string | null>(null);

	return (
		<div className="absolute top-1/2 left-1/2 z-40 mr-4 w-fit max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-neutral-100 px-6 py-4 text-center shadow-md">
			{props.settingsMenuState === 'confirming' ? (
				<SettingsMenuImportConfirmation {...props} />
			) : props.settingsMenuState === 'importing' ? (
				<SettingsMenuImporting {...props} importedData={importedData} />
			) : (
				<>
					<h2 className="mb-3 font-display text-2xl font-extrabold">
						Settings
					</h2>
					<button
						className="absolute right-1 top-1"
						onClick={() => props.setSettingsMenuState('closed')}
					>
						<BsX className="h-6 w-6" />
					</button>
					<SettingsMenuReminders />
					<SettingsMenuCalendar {...props} />
					<SettingsMenuBackup {...props} setImportedData={setImportedData} />
				</>
			)}
		</div>
	);
}
