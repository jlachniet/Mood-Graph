import { PixelSelector, PixelUpdater, PixelYear } from '../../../types/pixels';
import { PixelsMenuMonth } from './PixelsMenuMonth';

export function PixelsMenuYear(props: {
	pixelYear: PixelYear;
	selectedPixel: string | null;
	setSelectedPixel: PixelSelector;
	updatePixel: PixelUpdater;
}) {
	return (
		<li>
			<h2 className="mb-2 font-display text-3xl font-bold">
				{props.pixelYear.year}
			</h2>
			<ul>
				{props.pixelYear.months.map((pixelMonth) => {
					return (
						<PixelsMenuMonth
							key={pixelMonth.month}
							pixelMonth={pixelMonth}
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
