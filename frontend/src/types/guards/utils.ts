/**
 * Checks whether a value is null.
 * @param value The value to check.
 * @returns Whether the value is null.
 */
export function isNull(value: unknown): value is null {
	return value === null;
}

/**
 * Checks whether a value is undefined.
 * @param value The value to check.
 * @returns Whether the value is undefined.
 */
function isUndefined(value: unknown): value is undefined {
	return value === undefined;
}

/**
 * Checks whether a value is a string.
 * @param value The value to check.
 * @returns Whether the value is a string.
 */
export function isString(value: unknown): value is string {
	return typeof value === 'string';
}

/**
 * Checks whether a value is an object.
 * @param value The value to check.
 * @returns Whether the value is an object.
 * @remarks Returns a record so that if a value matches this predicate, it is
 * possible to check any arbitrary property of the object without TypeScript
 * throwing an error.
 */
export function isObject(value: unknown): value is Record<string, unknown> {
	return (
		value !== null && (typeof value === 'object' || typeof value === 'function')
	);
}

/**
 * Checks whether an object has a property that matches a given predicate.
 * @param object The object to check.
 * @param key The key of the property to check.
 * @param predicate A type guard to check the value of the property against.
 * @returns Whether the object has the property of the correct type.
 */
export function hasProperty<Key extends string, Type>(
	object: Record<string, unknown>,
	key: Key,
	predicate: (value: unknown) => value is Type
): object is { [K in Key]: Type } {
	return predicate(object[key]);
}

/**
 * Checks whether an object has a property that matches a given predicate or is
 * undefined.
 * @param object The object to check.
 * @param key The key of the property to check.
 * @param predicate A type guard to check the value of the property against.
 * @returns Whether the object has the property of the correct type.
 */
export function hasOptionalProperty<Key extends string, Type>(
	object: Record<string, unknown>,
	key: Key,
	predicate: (value: unknown) => value is Type
): object is { [K in Key]: Type | undefined } {
	return isUndefined(object[key]) || predicate(object[key]);
}

/**
 * Checks whether a value is an array of elements that match a given predicate.
 * @param value The value to check.
 * @param predicate A type guard to check each element against.
 * @returns Whether the value is an array of elements of the correct type.
 */
export function isArrayOf<Type>(
	value: unknown,
	predicate: (value: unknown) => value is Type
): value is Type[] {
	return Array.isArray(value) && value.every(predicate);
}
