import { AddToGoogleCalendarOptions } from '../types/calendar';
import { DateString } from '../types/dates';

export const MONTH_NAMES = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const MILLISECONDS_PER_DAY = 86400000;

/**
 * Gets a date string from a date, in the user's timezone.
 * @param date The date.
 * @param useLocalTimezone Whether to use the user's local timezone, as opposed to UTC.
 * @returns The date string.
 * @example getDateStringFromDate(new Date(2020, 2, 13)) // "2020-03-13"
 */
function getDateStringFromDate(
	date: Date,
	useLocalTimezone = false
): DateString {
	if (useLocalTimezone) {
		const year = date.getFullYear().toString();
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const day = date.getDate().toString().padStart(2, '0');

		return `${year}-${month}-${day}` as DateString;
	} else {
		return date.toISOString().split('T')[0] as DateString;
	}
}

/**
 * Gets a range of date strings between two dates.
 * @param startDateString The start date string.
 * @param endDateString The end date string.
 * @returns The date strings.
 * @example getDateStringRange('2022-01-01', '2022-01-03') // ["2022-01-01", "2022-01-02", "2022-01-03"]
 */
export function getDateStringRange(
	startDateString: DateString,
	endDateString: DateString
): DateString[] {
	const dateStrings: DateString[] = [];
	const currentDate = new Date(startDateString);

	while (currentDate <= new Date(endDateString)) {
		dateStrings.push(getDateStringFromDate(currentDate));
		currentDate.setTime(currentDate.getTime() + MILLISECONDS_PER_DAY);
	}

	return dateStrings;
}

/**
 * Gets the current date as a date string.
 * @returns The date string.
 * @example getCurrentDateString() // "2020-03-13"
 */
export function getCurrentDateString(): DateString {
	return getDateStringFromDate(new Date(), true);
}

/**
 * Gets the larger of two date strings.
 * @param dateString1 The first date string.
 * @param dateString2 The second date string.
 * @returns The larger date string.
 */
export function getMaxDateString(
	dateString1: DateString,
	dateString2: DateString
): DateString {
	return new Date(dateString1) > new Date(dateString2)
		? dateString1
		: dateString2;
}

/**
 * Gets the date string of the first day of the month for a given date string.
 * @param dateString The given date string.
 * @returns The first date string of that month.
 * @example getFirstDateStringOfMonth('2022-01-15') // "2022-01-01"
 */
export function getFirstDateStringOfMonth(dateString: DateString): DateString {
	return (dateString.substring(0, 7) + '-01') as DateString;
}

/**
 * Gets the date string of the last day of the month for a given date string.
 * @param dateString The given date string.
 * @returns The last date string of that month.
 * @example getLastDateStringOfMonth('2022-01-15') // "2022-01-31"
 */
export function getLastDateStringOfMonth(dateString: DateString): DateString {
	const year = parseInt(dateString.substring(0, 4));
	const month = parseInt(dateString.substring(5, 7));
	const numberOfDaysInMonth = new Date(year, month, 0).getDate();

	return (dateString.substring(0, 8) + numberOfDaysInMonth) as DateString;
}

export function sleep(seconds: number) {
	return new Promise<void>((resolve) => {
		setTimeout(resolve, seconds * 1000);
	});
}

/**
 * Gets a link to add daily reminders to a Google Calendar.
 * @returns The link to add daily reminders to a Google Calendar.
 */
export function getGoogleCalendarLink() {
	const reminderDate = `${getCurrentDateString().replaceAll('-', '')}T210000`;

	const event: AddToGoogleCalendarOptions = {
		action: 'TEMPLATE',
		text: 'Mood Graph',
		dates: `${reminderDate}/${reminderDate}`,
		details: 'How was your day today?\n\nhttps://moodgraph.app/dashboard',
		recur: 'RRULE:FREQ=DAILY',
	};

	return `https://calendar.google.com/calendar/render?${Object.entries(event)
		.map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
		.join('&')}`;
}

globalThis.__WB_DISABLE_DEV_LOGS;
