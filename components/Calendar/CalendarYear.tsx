import { PixelSelector, PixelYear } from '../../types/pixels';
import { CalendarMonth } from './CalendarMonth';

export function CalendarYear(props: {
	pixelYear: PixelYear;
	selectedPixel: string | null;
	setSelectedPixel: PixelSelector;
}) {
	return (
		<li>
			<h2 className="my-3 font-display text-3xl font-bold">
				{props.pixelYear.year}
			</h2>
			<ul>
				{props.pixelYear.months.map((pixelMonth) => {
					return (
						<CalendarMonth
							key={pixelMonth.month}
							pixelMonth={pixelMonth}
							selectedPixel={props.selectedPixel}
							setSelectedPixel={props.setSelectedPixel}
						/>
					);
				})}
			</ul>
		</li>
	);
}
