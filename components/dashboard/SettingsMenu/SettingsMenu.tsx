import { Pixel, PixelUpdater, PixelUploaderState } from '../../../types/pixels';
import { ClientUserSettings, SettingsUpdater } from '../../../types/settings';
import { SettingsMenuBackup } from './SettingsMenuBackup';
import { SettingsMenuCalendarOptions } from './SettingsMenuCalendarOptions';
import { SettingsMenuDailyReminders } from './SettingsMenuDailyReminders';
import SettingsMenuUploadMenu from './SettingsMenuUploadMenu';
import { useState } from 'react';
import { BsX } from 'react-icons/bs';

export function SettingsMenu(props: {
	pixels: Pixel[];
	updatePixel: PixelUpdater;
	userSettings: ClientUserSettings;
	uploaderState: PixelUploaderState;
	setUploaderState: (uploaderState: PixelUploaderState) => void;
	updateUserSettings: SettingsUpdater;
	setShowingSettingsMenu: (showingSettingsMenu: boolean) => void;
}) {
	const [uploadedData, setUploadedData] = useState<string | null>(null);

	return (
		<div className="fixed left-2/4 top-2/4 z-30 min-w-fit translate-x-[-50%] translate-y-[-50%] rounded-md bg-gray-300 p-4 text-neutral-900">
			<h2 className="pb-2 font-display text-2xl font-extrabold">
				{props.uploaderState === 'confirming' ? 'Confirm Import' : 'Settings'}
			</h2>
			{props.uploaderState !== 'importing' && (
				<button
					className="absolute right-2 top-2"
					onClick={(event) => {
						event.stopPropagation();
						props.setShowingSettingsMenu(false);
					}}
				>
					<BsX size="1.25rem" />
				</button>
			)}

			{props.uploaderState === 'confirming' ||
			props.uploaderState === 'importing' ? (
				<SettingsMenuUploadMenu
					userSettings={props.userSettings}
					updateUserSettings={props.updateUserSettings}
					uploadedData={uploadedData}
					uploaderState={props.uploaderState}
					setUploaderState={props.setUploaderState}
				/>
			) : (
				<>
					<SettingsMenuDailyReminders />
					<SettingsMenuCalendarOptions
						userSettings={props.userSettings}
						updateUserSettings={props.updateUserSettings}
					/>
					<SettingsMenuBackup
						pixels={props.pixels}
						updatePixel={props.updatePixel}
						uploaderState={props.uploaderState}
						setUploaderState={props.setUploaderState}
						setUploadedData={setUploadedData}
					/>
				</>
			)}
		</div>
	);
}
