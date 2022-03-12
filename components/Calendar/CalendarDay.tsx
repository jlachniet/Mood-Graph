import { Pixel, PixelSelector } from '../../types/pixels';
import { PIXEL_COLORS } from '../../utils/pixels';

export function CalendarDay(props: {
	pixel: Pixel;
	setSelectedPixel: PixelSelector;
}) {
	return (
		<li
			className={`relative inline-block w-[calc(100%/7)] pb-[calc(100%/7)] transition-all duration-75 hover:brightness-110 ${
				PIXEL_COLORS[props.pixel.value ?? 'null']
			}`}
		>
			<button
				className="absolute top-0 left-0 inline-block h-full w-full cursor-pointer"
				onClick={() => props.setSelectedPixel(props.pixel.dateString)}
			>
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg">
					{parseInt(props.pixel.dateString.substring(8, 10))}
				</div>
			</button>
		</li>
	);
}
