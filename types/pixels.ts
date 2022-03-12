import { DateString } from './dates';

/**
 * A pixel, e.g. a date and a value associated with it.
 */
export interface Pixel {
	/**
	 * The date of the pixel.
	 */
	dateString: DateString;
	/**
	 * The value of the pixel.
	 */
	value: PixelValue | null;
}

/**
 * A pixel value.
 */
export type PixelValue = 1 | 2 | 3 | 4 | 5;

/**
 * A year of pixel months.
 */
export interface PixelYear {
	/**
	 * The year of the pixel year.
	 */
	year: number;
	/**
	 * The months of the pixel year.
	 */
	months: PixelMonth[];
}

/**
 * A month of pixels.
 */
export interface PixelMonth {
	/**
	 * The month of the pixel month.
	 */
	month: number;
	/**
	 * The pixels of the pixel month.
	 */
	pixels: Pixel[];
}

/**
 * A function that selects a pixel.
 */
export type PixelSelector = (
	/**
	 * The pixel to select, or null to clear the selection.
	 */
	date: Pixel | null
) => void;

/**
 * A function that updates a pixel.
 */
export type PixelUpdater = (
	/**
	 * The date of the pixel to update.
	 */
	date: DateString,
	/**
	 * The value to update the pixel to.
	 */
	value: PixelValue | null
) => void;

/**
 * The state of the pixel uploader.
 */
export type PixelUploaderState =
	/**
	 * The default state, no upload in progress.
	 */
	| 'default'
	/**
	 * The user has uploaded data, but hasn't confirmed that they want to
	 * override their existing data.
	 */
	| 'confirming'
	/**
	 * The user has confirmed that they want to override their existing data and
	 * the data is being imported.
	 */
	| 'importing'
	/**
	 * Data was successfully imported.
	 */
	| 'success'
	/**
	 * An error occurred while importing data.
	 */
	| 'error';
