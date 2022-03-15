import { Pixel, PixelSelector } from '../../types/pixels';
import { getCurrentDateString } from '../../utils/dates';
import { PIXEL_COLORS } from '../../utils/pixels';

export function CalendarDay(props: {
	pixel: Pixel;
	setSelectedPixel: PixelSelector;
}) {
	return (
		<li
			className={`relative inline-block w-[calc(100%/7)] pb-[calc(100%/7)] transition duration-75 hover:brightness-110 ${
				PIXEL_COLORS[props.pixel.value ?? 'null']
			} ${
				getCurrentDateString() === props.pixel.dateString &&
				props.pixel.value === null
					? 'brightness-115 shadow-inner hover:brightness-120'
					: ''
			}`}
		>
			<button
				className="absolute top-0 left-0 inline-block h-full w-full cursor-pointer"
				onClick={() => props.setSelectedPixel(props.pixel)}
			>
				<div
					className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
						getCurrentDateString() === props.pixel.dateString ? 'font-bold' : ''
					}`}
				>
					{parseInt(props.pixel.dateString.substring(8, 10))}
				</div>
			</button>
		</li>
	);
}
