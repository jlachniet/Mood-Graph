import {
	Pixel,
	PixelSelector,
	PixelUpdater,
	PixelValue,
} from '../../../types/pixels';
import { PIXEL_COLORS } from '../../../utils/pixels';

export function PixelsMenuEditor(props: {
	pixel: Pixel;
	setSelectedPixel: PixelSelector;
	updatePixel: PixelUpdater;
}) {
	return (
		<div className="fixed left-2/4 top-2/4 z-20 w-max translate-x-[-50%] translate-y-[-50%] cursor-auto rounded-md bg-gray-300 px-6 py-4 leading-normal text-neutral-900">
			<h2 className="select-text pb-4 font-display text-2xl font-extrabold">
				{props.pixel.dateString}
			</h2>
			<button
				className="absolute right-3 top-1"
				onClick={(event) => {
					event.stopPropagation();
					props.setSelectedPixel(null);
				}}
			>
				x
			</button>
			<ul>
				{(() => {
					const values: (PixelValue | null)[] = [null, 1, 2, 3, 4, 5];

					return values.map((value) => (
						<li className="inline-block w-10" key={String(value)}>
							<button
								className={`${PIXEL_COLORS[value ?? 'null']} ${
									value === props.pixel.value && 'border-b-2 border-black'
								} inline-block h-full w-full cursor-pointer p-2`}
								onClick={(event) => {
									event.stopPropagation();
									props.updatePixel(props.pixel.dateString, value);
									props.setSelectedPixel(null);
								}}
							>
								{value ?? '🚫'}
							</button>
						</li>
					));
				})()}
			</ul>
		</div>
	);
}
