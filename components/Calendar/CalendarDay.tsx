import { Pixel, PixelSelector } from '../../types/pixels';
import { getCurrentDateString } from '../../utils/dates';
import { PIXEL_COLORS } from '../../utils/pixels';
import { CalendarEditor } from './CalendarEditor';

export function CalendarDay(props: {
	pixel: Pixel;
	selectedPixel: string | null;
	setSelectedPixel: PixelSelector;
}) {
	return (
		<li className="relative inline-block w-[calc(100%/7)] pb-[calc(100%/7)]">
			<button
				className={`${PIXEL_COLORS[props.pixel.value ?? 'null']} ${
					getCurrentDateString() === props.pixel.dateString
						? 'border brightness-[1.15] underline'
						: ''
				} absolute left-0 top-0 h-full w-full cursor-pointer transition-all duration-75 hover:brightness-110`}
				onClick={(event) => {
					event.stopPropagation();
					props.setSelectedPixel(props.pixel.dateString);
				}}
			>
				<div
					className={`absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 ${
						getCurrentDateString() === props.pixel.dateString
							? 'underline underline-offset-2 decoration-neutral-600'
							: ''
					}`}
				>
					{parseInt(props.pixel.dateString.substring(8, 10))}
				</div>
			</button>
			{props.pixel.dateString === props.selectedPixel && (
				<CalendarEditor
					pixel={props.pixel}
					setSelectedPixel={props.setSelectedPixel}
				/>
			)}
		</li>
	);
}
