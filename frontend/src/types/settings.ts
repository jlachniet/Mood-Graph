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

/**
 * The state of the settings menu.
 */
export type SettingsMenuState =
	/**
	 * The settings menu is closed.
	 */
	| 'closed'
	/**
	 * The settings menu is open, and no upload is in progress.
	 */
	| 'open'
	/**
	 * The settings menu is open, and the user is confirming an import.
	 */
	| 'confirming'
	/**
	 * The settings menu is open, and the user is importing.
	 */
	| 'importing'
	/**
	 * The settings menu is open, and an import was successful.
	 */
	| 'success'
	/**
	 * The settings menu is open, and an import failed.
	 */
	| 'error';
