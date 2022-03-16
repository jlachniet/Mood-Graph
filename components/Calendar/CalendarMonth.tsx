import { PixelMonth, PixelSelector } from '../../types/pixels';
import { MONTH_NAMES } from '../../utils/dates';
import { useWindowSize } from '../../utils/hooks/window';
import { CalendarDay } from './CalendarDay';
import { CalendarDaySpacer } from './CalendarDaySpacer';
import { chunk } from 'lodash';

export function CalendarMonth(props: {
	pixelMonth: PixelMonth;
	setSelectedPixel: PixelSelector;
}) {
	const { windowWidth } = useWindowSize();

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
		<li className="mx-auto max-w-md">
			<h3 className="font-display text-xl font-semibold">
				{MONTH_NAMES[props.pixelMonth.month - 1]}
			</h3>
			<ul className="m-2 rounded-lg bg-neutral-100 p-3 leading-0 shadow shadow-neutral-900/50">
				<li
					className="pb-2 font-display text-sm font-extrabold text-neutral-700"
					aria-hidden
				>
					{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
						<ul key={day} className="inline-block w-[calc(100%/7)]">
							{windowWidth >= 360
								? windowWidth >= 480
									? day
									: day.substring(0, 2)
								: day.substring(0, 1)}
						</ul>
					))}
				</li>
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