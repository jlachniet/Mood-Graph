import { Pixel, PixelUpdater, PixelUploaderState } from '../../../types/pixels';
import { getCurrentDateString } from '../../../utils/dates';
import saveAs from 'file-saver';
import { useEffect, useState } from 'react';

export function SettingsMenuBackup(props: {
	pixels: Pixel[];
	updatePixel: PixelUpdater;
	uploaderState: PixelUploaderState;
	setUploaderState: (uploaderState: PixelUploaderState) => void;
	setUploadedData: (uploadedData: string | null) => void;
}) {
	const updatePixel = props.updatePixel;
	const setUploaderState = props.setUploaderState;
	const setUploadedData = props.setUploadedData;

	const [fileReader] = useState(new FileReader());

	useEffect(() => {
		fileReader.onload = (data) => {
			const uploadedData = data.target?.result;

			if (typeof uploadedData === 'string') {
				setUploadedData(uploadedData);
				setUploaderState('confirming');
			}
		};
	}, [fileReader, updatePixel, setUploaderState, setUploadedData]);

	return (
		<div>
			<h3 className="mb-2 font-display text-lg font-semibold">Backup</h3>
			<div className="mb-2 rounded-lg border border-neutral-700 p-2">
				<h4 className="mb-2 text-lg font-bold">Import Data</h4>
				<input
					id="import-data"
					className="rounded bg-neutral-700 p-2 text-neutral-200 shadow-sm"
					type="file"
					accept=".json"
					onChange={(event) => {
						if (event.target.files) {
							fileReader.readAsText(event.target.files[0]);
						}
					}}
				/>
				{props.uploaderState === 'success' && (
					<p className="mt-1 font-bold text-green-700">Imported!</p>
				)}
				{props.uploaderState === 'error' && (
					<p className="mt-1 font-bold text-red-700">Failed to import!</p>
				)}
			</div>
			<button
				className="m-auto block rounded-md bg-primary px-2 py-1 text-white shadow hover:bg-primary-light"
				onClick={() => {
					saveAs(
						new Blob([JSON.stringify(props.pixels)]),
						`Mood Graph Backup (${getCurrentDateString()}).json`
					);
				}}
			>
				Export Data
			</button>
		</div>
	);
}
