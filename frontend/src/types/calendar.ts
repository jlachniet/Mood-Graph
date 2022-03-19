/**
 * Options used to generate an "Add to Google Calendar" link.
 * @see {@link https://github.com/InteractionDesignFoundation/add-event-to-calendar-docs/blob/main/services/google.md}
 */
export interface AddToGoogleCalendarOptions {
	/**
	 * The Google Calendar action to add an event from a template.
	 */
	action: 'TEMPLATE';
	/**
	 * The title of the event.
	 */
	text: string;
	/**
	 * The start and end time of the event.
	 * @see {@link https://github.com/InteractionDesignFoundation/add-event-to-calendar-docs/blob/main/services/google.md#dates}
	 */
	dates: string;
	/**
	 * The description of the event.
	 */
	details?: string;
	/**
	 * The rule determining when the event recurs.
	 * @see {@link https://github.com/InteractionDesignFoundation/add-event-to-calendar-docs/blob/main/services/google.md#recur}
	 */
	recur?: string;
}
