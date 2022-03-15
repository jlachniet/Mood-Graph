import { Pixel } from '../../types/pixels';
import { SettingsMenuState } from '../../types/settings';
import { getCurrentDateString } from '../../utils/dates';
import { saveJSON } from '../../utils/files';
import { Button } from '../Form/Button';
import { useEffect, useState } from 'react';

export function SettingsMenuBackup(props: {
	pixels: Pixel[];
	setSettingsMenuState: (state: SettingsMenuState) => void;
}) {
	const [fileReader] = useState(new FileReader());

	const setSettingsMenuState = props.setSettingsMenuState;

	useEffect(() => {
		fileReader.onload = (data) => {
			const uploadedData = data.target?.result;

			if (typeof uploadedData !== 'string') {
				throw new Error('Uploaded data was not a string');
			}

			setSettingsMenuState('confirming');
		};
	}, [fileReader, setSettingsMenuState]);

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
					saveJSON(
						`Mood Graph Backup (${getCurrentDateString()}).json`,
						props.pixels
					)
				}
				background="bg-sky-500"
				color="text-neutral-100"
			>
				Export Data
			</Button>
		</div>
	);
}
