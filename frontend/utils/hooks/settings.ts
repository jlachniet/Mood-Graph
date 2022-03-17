import {
	ClientUserSettings,
	ServerUserSettings,
	SettingsUpdater,
} from '../../types/settings';
import { getInitialUserSettings } from '../settings';
import { useAuthenticatedDocumentData, useDefaultAuthState } from './firebase';
import { usePixels } from './pixels';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { isEqual, pickBy } from 'lodash';
import { useEffect, useState } from 'react';

/**
 * A custom hook that returns a tuple containing the current user's settings or
 * null if they aren't available, and a function to update the settings.
 * @returns The hook.
 */
export function useUserSettings(): [
	ClientUserSettings | null,
	SettingsUpdater
] {
	const [user] = useDefaultAuthState();
	const [pixels] = usePixels();

	const [clientUserSettings, setClientUserSettings] =
		useState<ClientUserSettings | null>(null);
	const [serverUserSettings, serverUserSettingsLoading] =
		useAuthenticatedDocumentData<ServerUserSettings>((user) =>
			doc(getFirestore(), 'users', user.uid)
		);
	const [previousServerUserSettings, setPreviousServerUserSettings] =
		useState<ServerUserSettings>({});

	function updateSetting(updatedSettings: Partial<ClientUserSettings>) {
		if (clientUserSettings) {
			setClientUserSettings({
				...clientUserSettings,
				...updatedSettings,
			});
		}

		const syncedKeys: (keyof ClientUserSettings)[] = ['exampleSetting'];
		const syncedKeyStrings: string[] = syncedKeys;

		if (user) {
			setDoc(
				doc(getFirestore(), `/users/${user.uid}`),
				pickBy(updatedSettings, (value, key) => syncedKeyStrings.includes(key)),
				{ merge: true }
			);
		}
	}

	useEffect(() => {
		if (serverUserSettingsLoading || pixels === null) {
			return;
		}

		const newSettings: ServerUserSettings = serverUserSettings ?? {};

		if (!isEqual(previousServerUserSettings, newSettings)) {
			setPreviousServerUserSettings(newSettings);
		}

		if (clientUserSettings === null) {
			setClientUserSettings(getInitialUserSettings(pixels, newSettings));
		} else {
			const updatedSettings: ClientUserSettings = {
				...clientUserSettings,
				...newSettings,
			};

			if (!isEqual(clientUserSettings, updatedSettings)) {
				setClientUserSettings(updatedSettings);
			}
		}
	}, [
		serverUserSettings,
		serverUserSettingsLoading,
		pixels,
		clientUserSettings,
		previousServerUserSettings,
	]);

	return [clientUserSettings, updateSetting];
}
