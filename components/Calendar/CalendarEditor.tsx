import { Pixel, PixelSelector, PixelValue } from '../../types/pixels';
import { usePixels } from '../../utils/hooks/pixels';
import { PIXEL_COLORS } from '../../utils/pixels';
import { BsX, BsXOctagonFill } from 'react-icons/bs';

export function CalendarEditor(props: {
	selectedPixel: Pixel;
	setSelectedPixel: PixelSelector;
}) {
	const { updatePixel } = usePixels();

	const options: (PixelValue | null)[] = [null, 1, 2, 3, 4, 5];

	return (
		<div className="absolute top-1/2 left-1/2 z-40 -translate-x-1/2 -translate-y-1/2 rounded-md bg-neutral-100 px-6 py-4 text-center">
			<h2 className="mb-4 font-display text-2xl font-extrabold">
				{new Date(
					`${props.selectedPixel.dateString}T00:00:00`
				).toLocaleDateString(undefined, {
					month: 'long',
					day: 'numeric',
					year: 'numeric',
				})}
			</h2>
			<button
				className="absolute right-1 top-1"
				onClick={() => props.setSelectedPixel(null)}
			>
				<BsX className="h-6 w-6" />
			</button>
			<ul className="flex border border-neutral-600 shadow">
				{options.map((option) => (
					<li key={option ?? 'null'}>
						<button
							className={`flex h-11 w-11 items-center justify-center transition duration-75 hover:brightness-110 ${
								PIXEL_COLORS[option ?? 'null']
							} ${
								props.selectedPixel.value === option
									? 'border-b-2 border-neutral-900'
									: ''
							}`}
							onClick={() => {
								updatePixel(props.selectedPixel.dateString, option);
								props.setSelectedPixel(null);
							}}
						>
							{option ?? (
								<BsXOctagonFill className="h-5 w-5 fill-neutral-900" />
							)}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
