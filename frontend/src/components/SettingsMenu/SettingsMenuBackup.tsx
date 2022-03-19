import { usePixels } from '../../hooks/pixels';
import { SettingsMenuState } from '../../types/settings';
import { saveJSON } from '../../utils/files';
import { getCurrentDateString } from '../../utils/time';
import { Button } from '../Form/Button';
import { useEffect, useState } from 'react';
import { BiSad } from 'react-icons/bi';

export function SettingsMenuBackup(props: {
	settingsMenuState: SettingsMenuState;
	setSettingsMenuState: (state: SettingsMenuState) => void;
	setImportedData: (data: string | null) => void;
}) {
	const { pixels } = usePixels();

	const [fileReader] = useState(new FileReader());

	const setSettingsMenuState = props.setSettingsMenuState;
	const setImportedData = props.setImportedData;

	useEffect(() => {
		fileReader.onload = (data) => {
			const uploadedData = data.target?.result;

			if (typeof uploadedData !== 'string') {
				throw new Error('Uploaded data was not a string');
			}

			setImportedData(uploadedData);
			setSettingsMenuState('confirming');
		};
	}, [fileReader, setSettingsMenuState, setImportedData]);

	return (
		<div>
			<h3 className="mb-2 font-display text-lg font-semibold">Backup</h3>
			<label
				tabIndex={0}
				className="mr-2 inline-block cursor-pointer rounded bg-red-500 px-2 py-1 font-display font-semibold text-neutral-100 shadow hover:brightness-110"
			>
				Import Data
				<input
					type="file"
					accept=".json"
					onChange={(event) => {
						if (event.target.files) {
							fileReader.readAsText(event.target.files[0]);
						}
					}}
					className="hidden"
				/>
			</label>
			<Button
				onClick={() =>
					saveJSON(`Mood Graph Backup (${getCurrentDateString()}).json`, pixels)
				}
				background="bg-sky-500"
				color="text-neutral-100"
			>
				Export Data
			</Button>
			{props.settingsMenuState === 'success' && (
				<p className="mt-3 font-display font-semibold text-green-600">
					Imported successfully!
				</p>
			)}
			{props.settingsMenuState === 'error' && (
				<p className="mt-3 font-display font-semibold text-red-600">
					Failed to import. <BiSad className="inline-block h-6 w-6 pb-0.5" />
				</p>
			)}
		</div>
	);
}
