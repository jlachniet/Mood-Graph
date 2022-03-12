import { getGoogleCalendarLink } from '../../utils/calendar';
import { LinkButton } from '../Form/LinkButton';

export function SettingsMenuReminders() {
	return (
		<div className="mb-4">
			<h3 className="mb-2 font-display text-lg font-semibold">
				Daily Reminders
			</h3>
			<LinkButton
				href={getGoogleCalendarLink()}
				background="bg-violet-500"
				color="text-neutral-100"
			>
				<a className="" target="_blank">
					Add to Google Calendar
				</a>
			</LinkButton>
		</div>
	);
}
