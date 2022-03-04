import { isDateString } from '../../../types/guards/pixels';
import { ClientUserSettings, SettingsUpdater } from '../../../types/settings';
import { checkUserSettingDates } from '../../../utils/settings';
import { useEffect, useState } from 'react';

export function SettingsMenuCalendarOptions(props: {
	userSettings: ClientUserSettings;
	updateUserSettings: SettingsUpdater;
}) {
	const [userSettingsWarning, setUserSettingsWarning] = useState<string | null>(
		null
	);
	const { userSettings, updateUserSettings } = props;

	useEffect(() => {
		if (userSettings) {
			const userSettingsCheck = checkUserSettingDates(userSettings);

			if (userSettingsCheck !== true) {
				setUserSettingsWarning(userSettingsCheck);
			} else {
				if (
					(userSettings.startDate !== userSettings.preferredStartDate ||
						userSettings.endDate !== userSettings.preferredEndDate) &&
					isDateString(userSettings.preferredStartDate) &&
					isDateString(userSettings.preferredEndDate)
				) {
					updateUserSettings({
						startDate: userSettings.preferredStartDate,
						endDate: userSettings.preferredEndDate,
					});
					setUserSettingsWarning(null);
				}
			}
		}
	}, [userSettings, updateUserSettings]);

	return (
		<div className="mb-4">
			<h3 className="mb-2 font-display text-lg font-semibold">
				Calendar Options
			</h3>
			<div className="mb-2">
				<label className="mr-2" htmlFor="end-date">
					Start Date:
				</label>
				<input
					className="text-center text-neutral-200"
					type="date"
					id="start-date"
					value={props.userSettings.preferredStartDate}
					min="2000-01-01"
					max="2100-12-31"
					onChange={(event) =>
						props.updateUserSettings({
							preferredStartDate: event.target.value,
						})
					}
				/>
			</div>
			<div className="mb-2">
				<label className="mr-2" htmlFor="end-date">
					End Date:
				</label>
				<input
					className="text-center text-neutral-200"
					type="date"
					id="end-date"
					value={props.userSettings.preferredEndDate}
					min="2000-01-01"
					max="2100-12-31"
					onChange={(event) =>
						props.updateUserSettings({
							preferredEndDate: event.target.value,
						})
					}
				/>
			</div>
			{userSettingsWarning && (
				<p className="font-bold text-red-600">{userSettingsWarning}</p>
			)}
		</div>
	);
}
