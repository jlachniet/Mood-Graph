import { DateString } from '../dates';
import { Pixel, PixelValue } from '../pixels';
import { hasProperty, isArrayOf } from './utils';
import { isNull, isObject } from './utils';

/**
 * Checks whether a value is an array of pixels.
 * @param value The value to check.
 * @returns Whether the value is an array of pixels.
 */
export function isPixelArray(value: unknown): value is Pixel[] {
	return isArrayOf(value, isPixel);
}

/**
 * Checks whether a value is a pixel.
 * @param value The value to check.
 * @returns Whether the value is a pixel.
 */
function isPixel(value: unknown): value is Pixel {
	return (
		isObject(value) &&
		hasProperty(value, 'dateString', isDateString) &&
		(hasProperty(value, 'value', isPixelValue) ||
			hasProperty(value, 'value', isNull))
	);
}

/**
 * Checks whether a value is a date string.
 * @param value The value to check.
 * @returns Whether the value is a date string.
 */
export function isDateString(value: unknown): value is DateString {
	return typeof value === 'string' && /^.{4}-.{2}-.{2}$/.test(value);
}

/**
 * Checks whether a value is a pixel value.
 * @param value The value to check.
 * @returns Whether the value is a pixel value.
 */
function isPixelValue(value: unknown): value is PixelValue {
	const pixelValues: unknown[] = [1, 2, 3, 4, 5];
	return pixelValues.includes(value);
}
