import { Pixel } from '../types/pixels';
import { ClientUserSettings, ServerUserSettings } from '../types/settings';
import {
	getCurrentDateString,
	getFirstDateStringOfMonth,
	getLastDateStringOfMonth,
	getMaxDateString,
} from './dates';

/**
 * Gets a set of client user settings from a set of pixels and
 * {@link ServerUserSettings}.
 * @param pixels The pixels.
 * @param serverUserSettings The server user settings.
 * @returns The client user settings.
 */
export function getInitialUserSettings(
	pixels: Pixel[],
	serverUserSettings: ServerUserSettings
): ClientUserSettings {
	if (pixels.length > 0) {
		const dateStrings = pixels.map((pixel) => pixel.dateString);

		const startDate = getFirstDateStringOfMonth(dateStrings[0]);
		const endDate = getLastDateStringOfMonth(
			getMaxDateString(
				dateStrings[dateStrings.length - 1],
				getCurrentDateString()
			)
		);

		return {
			...serverUserSettings,
			startDate,
			endDate,
			preferredStartDate: startDate,
			preferredEndDate: endDate,
		};
	} else {
		const startDate = getFirstDateStringOfMonth(getCurrentDateString());
		const endDate = getLastDateStringOfMonth(getCurrentDateString());

		return {
			...serverUserSettings,
			startDate,
			endDate,
			preferredStartDate: startDate,
			preferredEndDate: endDate,
		};
	}
}

/**
 * Checks whether the preffered start and end dates in a set of user settings
 * are valid.
 * @param userSettings The user settings.
 * @returns True if the preffered start and end dates are valid, or a string
 * describing the error otherwise.
 */
export function checkUserSettingDates(
	settings: ClientUserSettings
): true | string {
	if (settings.preferredStartDate === '' || settings.preferredEndDate === '') {
		return 'Please enter a valid start and end date.';
	}

	const startYear = parseInt(settings.preferredStartDate.substring(0, 5));
	const endYear = parseInt(settings.preferredEndDate.substring(0, 5));

	if (startYear < 2000 || startYear > 2100) {
		return 'Start year must be between 2000 and 2100.';
	}

	if (endYear < 2000 || endYear > 2100) {
		return 'End year must be between 2000 and 2100.';
	}

	if (
		new Date(settings.preferredStartDate) > new Date(settings.preferredEndDate)
	) {
		return 'Start date must be before end date.';
	}

	return true;
}
