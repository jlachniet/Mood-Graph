import { getGoogleCalendarLink } from '../../../utils/calendar';
import Link from 'next/link';

export function SettingsMenuDailyReminders() {
	return (
		<div className="mb-4">
			<h3 className="mb-2 font-display text-lg font-semibold">
				Daily Reminders
			</h3>
			<Link href={getGoogleCalendarLink()}>
				<a
					className="rounded-md bg-primary px-2 py-1 text-white shadow hover:bg-primary-light"
					target="_blank"
				>
					Add to Google Calendar
				</a>
			</Link>
		</div>
	);
}
