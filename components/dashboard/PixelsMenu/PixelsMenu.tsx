import { PixelSelector, PixelUpdater, PixelYear } from '../../../types/pixels';
import { PixelsMenuYear } from './PixelsMenuYear';
import { useEffect, useRef } from 'react';

export function PixelsMenu(props: {
	pixels: PixelYear[];
	selectedPixel: string | null;
	setSelectedPixel: PixelSelector;
	updatePixel: PixelUpdater;
}) {
	const bottomRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		bottomRef.current?.scrollIntoView();
	}, []);

	return (
		<>
			<ul>
				{props.pixels.map((pixelYear) => {
					return (
						<PixelsMenuYear
							key={pixelYear.year}
							pixelYear={pixelYear}
							selectedPixel={props.selectedPixel}
							setSelectedPixel={props.setSelectedPixel}
							updatePixel={props.updatePixel}
						/>
					);
				})}
			</ul>
			<div ref={bottomRef} />
		</>
	);
}
