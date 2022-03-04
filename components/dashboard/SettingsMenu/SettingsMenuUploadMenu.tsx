import { isPixelArray } from '../../../types/guards/pixels';
import { PixelUploaderState } from '../../../types/pixels';
import { ClientUserSettings, SettingsUpdater } from '../../../types/settings';
import { useDefaultAuthState } from '../../../utils/hooks/firebase';
import { getInitialUserSettings } from '../../../utils/settings';
import LoadingHeart from '../../LoadingHeart';
import { doc, getFirestore, writeBatch } from 'firebase/firestore';
import { chunk } from 'lodash';
import { useState } from 'react';

export default function SettingsMenuUploadMenu(props: {
	userSettings: ClientUserSettings;
	updateUserSettings: SettingsUpdater;
	uploadedData: string | null;
	uploaderState: PixelUploaderState;
	setUploaderState: (uploaderState: PixelUploaderState) => void;
}) {
	const [user] = useDefaultAuthState();
	const [importPercentage, setImportPercentage] = useState(0);

	async function importUploadedData() {
		if (props.uploadedData && user) {
			try {
				props.setUploaderState('importing');

				const pixels = JSON.parse(props.uploadedData);

				if (!isPixelArray(pixels)) {
					throw new Error('Input file was not a valid pixel array');
				}

				const leaveHandler = () => '';

				// To-do: handle back button presses
				window.onbeforeunload = leaveHandler;

				const pixelGroups = chunk(pixels, 500);
				let pixelGroupsProcessed = 0;

				for (const pixelGroup of pixelGroups) {
					const pixelBatch = writeBatch(getFirestore());

					pixelGroup.forEach((pixel) => {
						const pixelRef = doc(
							getFirestore(),
							`/users/${user.uid}/pixels/${pixel.dateString}`
						);
						pixelBatch.set(pixelRef, pixel);
					});

					await pixelBatch.commit();

					pixelGroupsProcessed++;
					setImportPercentage(
						Math.round((pixelGroupsProcessed / (pixelGroups.length - 1)) * 100)
					);
				}

				window.onbeforeunload = null;

				const newStartDate = getInitialUserSettings(
					pixels,
					props.userSettings
				).startDate;
				const newEndDate = getInitialUserSettings(
					pixels,
					props.userSettings
				).endDate;

				props.updateUserSettings({
					startDate: newStartDate,
					endDate: newEndDate,
					preferredStartDate: newStartDate,
					preferredEndDate: newEndDate,
				});

				props.setUploaderState('success');
			} catch (error) {
				console.error(error);
				props.setUploaderState('error');
			}
		}
	}

	return (
		<>
			{props.uploaderState === 'importing' ? (
				<>
					<p>Importing your pixels... ({importPercentage}%)</p>
					<LoadingHeart />
				</>
			) : (
				<>
					<p className="mb-2 max-w-[24rem]">
						<strong className="text-red-700">Warning: </strong>Importing this
						data will merge your current pixels with the pixels you uploaded and
						overwrite any existing pixels!
					</p>
					<button
						className="m-1 rounded-md bg-neutral-600 px-2 py-1 text-white shadow hover:bg-neutral-500"
						onClick={() => {
							props.setUploaderState('default');
						}}
					>
						Cancel
					</button>
					<button
						className="m-1 rounded-md bg-primary px-2 py-1 text-white shadow hover:bg-primary-light"
						onClick={importUploadedData}
					>
						Confirm
					</button>
				</>
			)}
		</>
	);
}
