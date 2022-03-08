import { PixelMonth, PixelSelector } from '../../types/pixels';
import { MONTH_NAMES } from '../../utils/dates';
import { CalendarWeek } from './CalendarWeek';
import { chunk } from 'lodash';

export function CalendarMonth(props: {
	pixelMonth: PixelMonth;
	selectedPixel: string | null;
	setSelectedPixel: PixelSelector;
}) {
	const pixels = props.pixelMonth.pixels;

	const startDayOfWeek = new Date(pixels[0].dateString).getUTCDay();
	const endDayOfWeek = new Date(
		pixels[pixels.length - 1].dateString
	).getUTCDay();

	const pixelsPadded = [
		...Array<null>(startDayOfWeek).fill(null),
		...pixels,
		...Array<null>(6 - endDayOfWeek).fill(null),
	];

	return (
		<li className="mb-4 leading-[0]">
			<h3 className="my-2 font-display text-xl font-semibold">
				{MONTH_NAMES[props.pixelMonth.month - 1] ?? 'Invalid month'}
			</h3>
			<ul className="m-auto max-w-[22rem] select-none">
				{chunk(pixelsPadded, 7).map((week, index) => {
					return (
						<CalendarWeek
							key={index}
							pixels={week}
							selectedPixel={props.selectedPixel}
							setSelectedPixel={props.setSelectedPixel}
						/>
					);
				})}
			</ul>
		</li>
	);
}
