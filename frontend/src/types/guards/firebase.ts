import { hasOptionalProperty, isObject, isString } from './utils';
import { ServiceAccount } from 'firebase-admin/app';

/**
 * Checks whether a value is a Firebase {@link ServiceAccount service account}.
 * @param value The value to check.
 * @returns Whether the value is a Firebase service account.
 */
export function isServiceAccount(value: unknown): value is ServiceAccount {
	return (
		isObject(value) &&
		hasOptionalProperty(value, 'projectId', isString) &&
		hasOptionalProperty(value, 'clientEmail', isString) &&
		hasOptionalProperty(value, 'privateKey', isString)
	);
}
