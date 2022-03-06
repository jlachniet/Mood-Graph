import { Pixel, PixelSelector, PixelUpdater } from '../../../types/pixels';
import { PixelsMenuDay } from './PixelsMenuDay';
import { PixelsMenuSpacer } from './PixelsMenuSpacer';

export function PixelsMenuWeek(props: {
	pixels: (Pixel | null)[];
	selectedPixel: string | null;
	setSelectedPixel: PixelSelector;
	updatePixel: PixelUpdater;
}) {
	return (
		<li>
			<ul>
				{props.pixels.map((pixel, index) =>
					pixel ? (
						<PixelsMenuDay
							key={pixel.dateString}
							pixel={pixel}
							selectedPixel={props.selectedPixel}
							setSelectedPixel={props.setSelectedPixel}
							updatePixel={props.updatePixel}
						/>
					) : (
						<PixelsMenuSpacer key={index} />
					)
				)}
			</ul>
		</li>
	);
}
