/**
 * Options used to generate an "Add to Google Calendar" link.
 * @see {@link https://github.com/InteractionDesignFoundation/add-event-to-calendar-docs/blob/main/services/google.md}
 */
export interface AddToGoogleCalendarOptions {
	action: 'TEMPLATE';
	text: string;
	dates: string;
	details?: string;
	recur?: string;
}
