import { Pixel, PixelSelector } from '../../types/pixels';
import { ClientUserSettings } from '../../types/settings';
import { pixelsToPixelYear } from '../../utils/pixels';
import { CalendarYear } from './CalendarYear';
import { useEffect, useRef } from 'react';

export function Calendar(props: {
	pixels: Pixel[];
	settings: ClientUserSettings;
	setSelectedPixel: PixelSelector;
}) {
	const bottomRef = useRef<HTMLLIElement>(null);

	useEffect(() => {
		bottomRef.current?.scrollIntoView();
	}, []);

	const pixelYears = pixelsToPixelYear(
		props.pixels,
		props.settings.startDate,
		props.settings.endDate
	);

	return (
		<>
			<ul className="max-h-full overflow-auto [scrollbar-gutter:stable_both-edges]">
				{pixelYears.map((pixelYear) => (
					<CalendarYear
						key={pixelYear.year}
						pixelYear={pixelYear}
						setSelectedPixel={props.setSelectedPixel}
					/>
				))}
				<li ref={bottomRef} />
			</ul>
		</>
	);
}
