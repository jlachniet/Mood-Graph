import { isDateString } from '../../types/guards/pixels';
import { ClientUserSettings, SettingsUpdater } from '../../types/settings';
import { checkUserSettingDates } from '../../utils/settings';
import { useEffect, useState } from 'react';

export function SettingsMenuCalendar(props: {
	settings: ClientUserSettings;
	updateSettings: SettingsUpdater;
}) {
	const { settings, updateSettings } = props;

	const [warning, setWarning] = useState<string | null>(null);

	useEffect(() => {
		if (settings) {
			const userSettingsCheck = checkUserSettingDates(settings);

			if (userSettingsCheck !== true) {
				setWarning(userSettingsCheck);
			} else {
				if (
					(settings.startDate !== settings.preferredStartDate ||
						settings.endDate !== settings.preferredEndDate) &&
					isDateString(settings.preferredStartDate) &&
					isDateString(settings.preferredEndDate)
				) {
					updateSettings({
						startDate: settings.preferredStartDate,
						endDate: settings.preferredEndDate,
					});
				}
				setWarning(null);
			}
		}
	}, [settings, updateSettings]);

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
					className="rounded-md border border-neutral-600 bg-neutral-50 p-0.5 text-center text-neutral-800"
					type="date"
					id="start-date"
					value={settings.preferredStartDate}
					min="2000-01-01"
					max="2100-12-31"
					onChange={(event) =>
						updateSettings({
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
					className="rounded-md border border-neutral-600 bg-neutral-50 p-0.5 text-center text-neutral-800"
					type="date"
					id="end-date"
					value={settings.preferredEndDate}
					min="2000-01-01"
					max="2100-12-31"
					onChange={(event) =>
						updateSettings({
							preferredEndDate: event.target.value,
						})
					}
				/>
			</div>
			<p className="font-bold text-red-600">{warning}</p>
		</div>
	);
}
