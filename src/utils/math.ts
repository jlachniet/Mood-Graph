import { MovingAverageOption } from '../types/math';
import { mean } from 'lodash';

export const MOVING_AVERAGE_OPTIONS: MovingAverageOption[] = [
	{
		title: 'Default (No averaging)',
		windowSize: 1,
	},
	{
		title: 'Averaged over 3 days',
		windowSize: 3,
	},
	{
		title: 'Averaged over 1 week',
		windowSize: 7,
	},
	{
		title: 'Averaged over 1 month',
		windowSize: 30,
	},
	{
		title: 'Averaged over 3 months',
		windowSize: 90,
	},
	{
		title: 'Averaged over 6 months',
		windowSize: 180,
	},
	{
		title: 'Averaged over 1 year',
		windowSize: 365,
	},
];

/**
 * Gets the moving average of an array of numbers and/or null values.
 * @param values The values to get the moving average of.
 * @param windowSize The window size of the moving average.
 * @param minNonNull The minimum number of non-null values for a data point to
 * be included in the moving average. Defaults to zero.
 * @returns The moving average.
 */
export function getMovingAverage(
	values: (number | null)[],
	windowSize: number,
	minNonNull = 0
) {
	return values.map((number, index) => {
		const nonNullValues = values
			.slice(Math.max(index - windowSize + 1, 0), index + 1)
			.filter((numberOrNull) => numberOrNull !== null);

		return nonNullValues.length >= minNonNull ? mean(nonNullValues) : null;
	});
}
