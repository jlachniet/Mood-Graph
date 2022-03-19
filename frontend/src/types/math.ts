/**
 * An option for how the graph should average pixels.
 */
export interface MovingAverageOption {
	/**
	 * The title of the option.
	 */
	title: string;
	/**
	 * The window size of the moving average.
	 */
	windowSize: number;
}
