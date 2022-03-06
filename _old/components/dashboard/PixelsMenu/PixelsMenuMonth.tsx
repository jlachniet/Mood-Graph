import { PixelMonth, PixelSelector, PixelUpdater } from '../../../types/pixels';
import { MONTH_NAMES } from '../../../utils/dates';
import { PixelsMenuWeek } from './PixelsMenuWeek';
import { chunk } from 'lodash';

export function PixelsMenuMonth(props: {
	pixelMonth: PixelMonth;
	selectedPixel: string | null;
	setSelectedPixel: PixelSelector;
	updatePixel: PixelUpdater;
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
			<h3 className="mb-4 mt-2 font-display text-xl font-semibold">
				{MONTH_NAMES[props.pixelMonth.month - 1] ?? 'Invalid month'}
			</h3>
			<ul className="m-auto max-w-[22rem] select-none">
				{chunk(pixelsPadded, 7).map((week, index) => {
					return (
						<PixelsMenuWeek
							key={index}
							pixels={week}
							selectedPixel={props.selectedPixel}
							setSelectedPixel={props.setSelectedPixel}
							updatePixel={props.updatePixel}
						/>
					);
				})}
			</ul>
		</li>
	);
}
