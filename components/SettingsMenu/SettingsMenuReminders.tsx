import { getGoogleCalendarLink } from '../../utils/calendar';
import { LinkButton } from '../Form/LinkButton';
import { SiGooglecalendar } from 'react-icons/si';

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
				target="_blank"
			>
				<SiGooglecalendar className="mr-1.5 mb-0.5 inline-block h-5 w-5" />
				Add to Google Calendar
			</LinkButton>
		</div>
	);
}
