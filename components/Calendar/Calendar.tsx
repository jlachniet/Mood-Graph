import { Pixel, PixelSelector } from '../../types/pixels';
import { ClientUserSettings } from '../../types/settings';
import { pixelsToPixelYear } from '../../utils/pixels';
import { CalendarYear } from './CalendarYear';

export function Calendar(props: {
	pixels: Pixel[];
	settings: ClientUserSettings;
	setSelectedPixel: PixelSelector;
}) {
	const pixelYears = pixelsToPixelYear(
		props.pixels,
		props.settings.startDate,
		props.settings.endDate
	);

	return (
		<ul className="max-h-full overflow-auto">
			{pixelYears.map((pixelYear) => (
				<CalendarYear
					key={pixelYear.year}
					pixelYear={pixelYear}
					setSelectedPixel={props.setSelectedPixel}
				/>
			))}
		</ul>
	);
}
