import { SettingsMenuState } from '../../types/settings';
import { Button } from '../Form/Button';
import { BsX } from 'react-icons/bs';

export function SettingsMenuImportConfirmation(props: {
	setSettingsMenuState: (state: SettingsMenuState) => void;
}) {
	return (
		<>
			<h2 className="mb-3 font-display text-2xl font-extrabold">
				Confirm Import
			</h2>
			<button
				className="absolute right-1 top-1"
				onClick={() => props.setSettingsMenuState('closed')}
			>
				<BsX className="h-6 w-6" />
			</button>
			<strong className="mb-2 block">
				Are you sure you want to import this data?
			</strong>
			<p className="mb-4">
				Importing this data will merge your current data with the data you just
				selected, and will overwrite any existing data points.{' '}
				<strong className="text-red-600 underline underline-offset-1">
					This action cannot be undone!
				</strong>
			</p>
			<Button
				onClick={() => props.setSettingsMenuState('closed')}
				background="bg-neutral-500"
				color="text-neutral-100"
				className="mr-2"
			>
				Cancel
			</Button>
			<Button
				onClick={() => props.setSettingsMenuState('importing')}
				background="bg-red-500"
				color="text-neutral-100"
			>
				Import Data
			</Button>
		</>
	);
}
