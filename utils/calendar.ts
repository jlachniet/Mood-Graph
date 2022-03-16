import { AddToGoogleCalendarOptions } from '../types/calendar';
import { getCurrentDateString } from './dates';

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
