import { Pixel, PixelSelector, PixelValue } from '../../types/pixels';
import { usePixels } from '../../utils/hooks/pixels';
import { PIXEL_COLORS } from '../../utils/pixels';
import { BsTrash } from 'react-icons/bs';

export function CalendarEditor(props: {
	pixel: Pixel;
	setSelectedPixel: PixelSelector;
}) {
	const { updatePixel } = usePixels();

	return (
		<div className="fixed left-2/4 top-2/4 z-30 w-max translate-x-[-50%] translate-y-[-50%] cursor-auto rounded-md bg-neutral-100 px-6 py-4 leading-normal text-neutral-900 shadow-md">
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
			<ul className="flex">
				{(() => {
					const values: (PixelValue | null)[] = [null, 1, 2, 3, 4, 5];

					return values.map((value) => (
						<li className="h-11 w-11" key={String(value)}>
							<button
								className={`${PIXEL_COLORS[value ?? 'null']} ${
									value === props.pixel.value && 'border-b-2 border-black'
								} h-full w-full cursor-pointer`}
								onClick={(event) => {
									event.stopPropagation();

									updatePixel(props.pixel.dateString, value);
									props.setSelectedPixel(null);
								}}
							>
								{value ?? <BsTrash className="inline-block h-5 w-5" />}
							</button>
						</li>
					));
				})()}
			</ul>
		</div>
	);
}
