import { Pixel, PixelSelector, PixelUpdater } from '../../../types/pixels';
import { getCurrentDateString } from '../../../utils/dates';
import { PIXEL_COLORS } from '../../../utils/pixels';
import { PixelsMenuEditor } from './PixelsMenuEditor';

export function PixelsMenuDay(props: {
	pixel: Pixel;
	selectedPixel: string | null;
	setSelectedPixel: PixelSelector;
	updatePixel: PixelUpdater;
}) {
	return (
		<li className="relative inline-block w-[calc(100%/7)] pb-[calc(100%/7)]">
			<button
				className={`${PIXEL_COLORS[props.pixel.value ?? 'null']} ${
					getCurrentDateString() === props.pixel.dateString
						? 'border brightness-125 border-neutral-800'
						: ''
				} absolute left-0 top-0 h-full w-full cursor-pointer transition-all duration-[.1s] hover:bg-gray-300`}
				onClick={(event) => {
					event.stopPropagation();
					props.setSelectedPixel(props.pixel.dateString);
				}}
			>
				<div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
					{parseInt(props.pixel.dateString.substring(8, 10))}
				</div>
			</button>
			{props.pixel.dateString === props.selectedPixel && (
				<PixelsMenuEditor
					pixel={props.pixel}
					setSelectedPixel={props.setSelectedPixel}
					updatePixel={props.updatePixel}
				/>
			)}
		</li>
	);
}
