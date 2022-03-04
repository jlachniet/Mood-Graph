import { DateString } from './dates';

/**
 * A set of user settings on the client.
 */
export interface ClientUserSettings extends ServerUserSettings {
	/**
	 * The start date of the calendar.
	 */
	startDate: DateString;
	/**
	 * The end date of the calendar.
	 */
	endDate: DateString;
	/**
	 * The preffered start date of the calendar, may or may not be valid.
	 */
	preferredStartDate: string;
	/**
	 * The preffered end date of the calendar, may or may not be valid.
	 */
	preferredEndDate: string;
}

/**
 * A set of user settings on the server.
 */
export interface ServerUserSettings {
	/**
	 * An example setting that would be stored on the server.
	 */
	exampleSetting?: boolean;
}

/**
 * A function that updates a set of settings.
 */
export type SettingsUpdater = (
	/**
	 * The new settings.
	 */
	settings: Partial<ClientUserSettings>
) => void;
