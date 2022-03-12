import { PixelSelector, PixelYear } from '../../types/pixels';
import { CalendarMonth } from './CalendarMonth';

export function CalendarYear(props: {
	pixelYear: PixelYear;
	setSelectedPixel: PixelSelector;
}) {
	return (
		<li>
			<h2 className="mb-1 font-display text-3xl font-extrabold">
				{props.pixelYear.year}
			</h2>
			<ul>
				{props.pixelYear.months.map((pixelMonth) => (
					<CalendarMonth
						key={pixelMonth.month}
						pixelMonth={pixelMonth}
						setSelectedPixel={props.setSelectedPixel}
					/>
				))}
			</ul>
		</li>
	);
}
