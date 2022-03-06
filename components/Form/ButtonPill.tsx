import { TailwindBackground } from '../../types/styles';

export function ButtonPill(
	props: JSX.IntrinsicElements['button'] & {
		color: TailwindBackground;
	}
) {
	return (
		<button
			{...props}
			className={`mx-2 my-1 whitespace-nowrap rounded-full px-4 py-3 font-display font-extrabold uppercase text-white shadow transition duration-75 hover:brightness-110 ${
				props.color
			} ${props.className ?? ''}`}
		/>
	);
}
