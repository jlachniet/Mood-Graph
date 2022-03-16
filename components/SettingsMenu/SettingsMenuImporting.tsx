import { isPixelArray } from '../../types/guards/pixels';
import {
	ClientUserSettings,
	SettingsMenuState,
	SettingsUpdater,
} from '../../types/settings';
import { useDefaultAuthState } from '../../utils/hooks/firebase';
import { getInitialUserSettings } from '../../utils/settings';
import { doc, getFirestore, writeBatch } from 'firebase/firestore';
import { chunk } from 'lodash';
import { useEffect, useState } from 'react';

export function SettingsMenuImporting(props: {
	settings: ClientUserSettings;
	updateSettings: SettingsUpdater;
	setSettingsMenuState: (state: SettingsMenuState) => void;
	importedData: string | null;
}) {
	const { user } = useDefaultAuthState();

	const [importProgress, setImportProgress] = useState(0);

	const { settings, updateSettings, setSettingsMenuState, importedData } =
		props;

	useEffect(() => {
		async function importPixels() {
			if (!user) {
				throw new Error('Importing screen rendered without a user');
			}

			if (importedData === null) {
				throw new Error('Importing screen rendered without imported data');
			}

			try {
				const pixels = JSON.parse(importedData);

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
					setImportProgress(pixelGroupsProcessed / pixelGroups.length);
				}

				window.onbeforeunload = null;

				const newStartDate = getInitialUserSettings(pixels, settings).startDate;
				const newEndDate = getInitialUserSettings(pixels, settings).endDate;

				updateSettings({
					startDate: newStartDate,
					endDate: newEndDate,
					preferredStartDate: newStartDate,
					preferredEndDate: newEndDate,
				});

				setSettingsMenuState('success');
			} catch (error) {
				console.error(error);
				setSettingsMenuState('error');
			}
		}

		importPixels();
	}, [user, settings, updateSettings, setSettingsMenuState, importedData]);

	return (
		<>
			<h2 className="mb-3 font-display text-2xl font-extrabold">Importing</h2>
			<strong className="mb-4 block">Please do not close this page!</strong>
			<div
				className="inline-block h-3 bg-green-600 transition-all"
				style={{ width: 256 * importProgress }}
			/>
			<div
				className="inline-block h-3 bg-gray-600 transition-all"
				style={{ width: 256 * (1 - importProgress) }}
			/>
			<span className="ml-2 font-display font-semibold">
				{Math.floor(importProgress * 100)}%
			</span>
		</>
	);
}
