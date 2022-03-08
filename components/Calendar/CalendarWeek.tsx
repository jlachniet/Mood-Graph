import { Pixel, PixelSelector } from '../../types/pixels';
import { CalendarDay } from './CalendarDay';
import { CalendarSpacer } from './CalendarSpacer';

export function CalendarWeek(props: {
	pixels: (Pixel | null)[];
	selectedPixel: string | null;
	setSelectedPixel: PixelSelector;
}) {
	return (
		<li>
			<ul>
				{props.pixels.map((pixel, index) =>
					pixel ? (
						<CalendarDay
							key={pixel.dateString}
							pixel={pixel}
							selectedPixel={props.selectedPixel}
							setSelectedPixel={props.setSelectedPixel}
						/>
					) : (
						<CalendarSpacer key={index} />
					)
				)}
			</ul>
		</li>
	);
}
