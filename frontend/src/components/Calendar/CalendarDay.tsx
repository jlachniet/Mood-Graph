import { Pixel, PixelSelector } from '../../types/pixels';
import { mergeElementProps } from '../../utils/components';
import { PIXEL_COLORS } from '../../utils/pixels';
import { getCurrentDateString } from '../../utils/time';

export function CalendarDay(props: {
	pixel: Pixel;
	setSelectedPixel: PixelSelector;
}) {
	return mergeElementProps(
		<li className="relative inline-block w-[calc(100%/7)] pb-[calc(100%/7)] transition-filter duration-75 hover:brightness-110">
			<button
				className="absolute top-0 left-0 inline-block h-full w-full cursor-pointer dark:font-semibold"
				onClick={() => props.setSelectedPixel(props.pixel)}
			>
				{mergeElementProps(
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						{parseInt(props.pixel.dateString.substring(8, 10))}
					</div>,
					{
						className:
							getCurrentDateString() === props.pixel.dateString
								? 'font-bold'
								: '',
					}
				)}
			</button>
		</li>,
		{
			className: `${PIXEL_COLORS[props.pixel.value ?? 'null']} ${
				getCurrentDateString() === props.pixel.dateString &&
				props.pixel.value === null
					? 'brightness-115 shadow-inner hover:brightness-120'
					: ''
			}`,
		}
	);
}
