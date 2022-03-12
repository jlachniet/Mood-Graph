/* eslint-disable tailwindcss/classnames-order */
import { PixelMonth, PixelSelector } from '../../types/pixels';
import { MONTH_NAMES } from '../../utils/dates';
import { CalendarDay } from './CalendarDay';
import { CalendarDaySpacer } from './CalendarDaySpacer';
import { chunk } from 'lodash';

export function CalendarMonth(props: {
	pixelMonth: PixelMonth;
	setSelectedPixel: PixelSelector;
}) {
	const pixels = props.pixelMonth.pixels;

	const startDayOfWeek = new Date(pixels[0].dateString).getUTCDay();
	const endDayOfWeek = new Date(
		pixels[pixels.length - 1].dateString
	).getUTCDay();

	const formattedPixels = chunk(
		[
			...Array<null>(startDayOfWeek).fill(null),
			...pixels,
			...Array<null>(6 - endDayOfWeek).fill(null),
		],
		7
	);

	return (
		<li className="max-w-sm mx-auto">
			<h3 className="mb-2 font-display text-xl font-semibold">
				{MONTH_NAMES[props.pixelMonth.month - 1]}
			</h3>
			<ul className="leading-0">
				{formattedPixels.map((pixelWeek, index) => (
					<li key={index}>
						<ul>
							{pixelWeek.map((pixelOrNull, index) =>
								pixelOrNull ? (
									<CalendarDay
										key={index}
										pixel={pixelOrNull}
										setSelectedPixel={props.setSelectedPixel}
									/>
								) : (
									<CalendarDaySpacer key={index} />
								)
							)}
						</ul>
					</li>
				))}
			</ul>
		</li>
	);
}
