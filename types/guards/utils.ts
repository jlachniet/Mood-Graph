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
export function isString(value: unknown): value is string | undefined {
	return typeof value === 'string' || value === undefined;
}

/**
 * Checks whether a value is an object.
 * @param value The value to check.
 * @returns Whether the value is an object.
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
 * @param predicate The guard to check the property with.
 * @returns Whether the object has the property and the property is of the
 * correct type.
 */
export function hasProperty<K extends string, T>(
	object: object,
	key: K,
	predicate: (value: unknown) => value is T
): object is { [P in K]: T } {
	return isObject(object) && predicate(object[key]);
}

/**
 * Checks whether an object has a property that matches a given predicate or is
 * undefined.
 * @param object The object to check.
 * @param key The key of the property to check.
 * @param predicate The guard to check the property with.
 * @returns Whether the object has the property and the property is of the
 * correct type or is undefined.
 */
export function hasOptionalProperty<K extends string, T>(
	object: unknown,
	key: K,
	predicate: (value: unknown) => value is T
): object is { [P in K]: T | undefined } {
	return (
		isObject(object) && (isUndefined(object[key]) || predicate(object[key]))
	);
}

/**
 * Checks whether a value is an array where all elements match a given
 * predicate.
 * @param value The value to check.
 * @param predicate The guard to check the values with.
 * @returns Whether the value is an array of the correct type.
 */
export function isArrayOf<T>(
	value: unknown,
	guard: (value: unknown) => value is T
): value is T[] {
	return Array.isArray(value) && value.every(guard);
}
