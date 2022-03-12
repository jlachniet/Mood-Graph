import { DateString } from '../types/dates';
import { Pixel, PixelMonth, PixelValue, PixelYear } from '../types/pixels';
import { getDateStringRange } from './dates';
import { groupBy } from 'lodash';

export const PIXEL_COLORS: Record<PixelValue | 'null', string> = {
	1: 'bg-red-500',
	2: 'bg-orange-500',
	3: 'bg-yellow-500',
	4: 'bg-green-500',
	5: 'bg-blue-500',
	null: 'bg-zinc-300',
};

/**
 * Groups an array of pixels into an array of {@link PixelYear PixelYears}.
 * @param pixels The pixels.
 * @returns The PixelYears.
 */
function groupPixelsByYear(pixels: Pixel[]): PixelYear[] {
	return Object.entries(
		groupBy(pixels, (pixel) => pixel.dateString.substring(0, 4))
	).map(([year, pixels]) => {
		return {
			year: parseInt(year),
			months: groupPixelsByMonth(pixels),
		};
	});
}

/**
 * Groups an array of pixels into an array of {@link PixelMonth PixelMonths}.
 * @param pixels The pixels.
 * @returns The PixelMonths.
 */
function groupPixelsByMonth(pixels: Pixel[]): PixelMonth[] {
	return Object.entries(
		groupBy(pixels, (pixel) => pixel.dateString.substring(5, 7))
	)
		.map(([month, pixels]) => {
			return { month: parseInt(month), pixels };
		})
		.sort((a, b) => a.month - b.month);
}

/**
 * Converts an array of pixels and a date range into an array of
 * {@link PixelYear PixelYears}, and adds empty pixels to fill the range as
 * needed.
 * @param pixels The pixels.
 * @param startDateString The first date in the range.
 * @param endDateString The last date in the range.
 * @returns The PixelYears.
 */
export function pixelsToPixelYear(
	pixels: Pixel[],
	startDateString: DateString,
	endDateString: DateString
) {
	return groupPixelsByYear(
		getDateStringRange(startDateString, endDateString).map(
			(date) =>
				pixels.find((pixel) => pixel.dateString === date) ?? {
					dateString: date,
					value: null,
				}
		)
	);
}
