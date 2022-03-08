import { PixelSelector, PixelYear } from '../../types/pixels';
import { CalendarYear } from './CalendarYear';
import { useEffect, useRef } from 'react';

export function Calendar(props: {
	pixels: PixelYear[];
	selectedPixel: string | null;
	setSelectedPixel: PixelSelector;
}) {
	const bottomRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, []);

	return (
		<>
			<ul>
				{props.pixels.map((pixelYear) => {
					return (
						<CalendarYear
							key={pixelYear.year}
							pixelYear={pixelYear}
							selectedPixel={props.selectedPixel}
							setSelectedPixel={props.setSelectedPixel}
						/>
					);
				})}
			</ul>
			<div ref={bottomRef} />
		</>
	);
}
