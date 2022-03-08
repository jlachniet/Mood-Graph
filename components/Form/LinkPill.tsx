import { TailwindBackground } from '../../types/styles';

export function LinkPill(
	props: JSX.IntrinsicElements['a'] & {
		color: TailwindBackground;
	}
) {
	return (
		<a
			{...props}
			className={`mx-2 my-1 whitespace-nowrap rounded-full px-4 py-3 font-display font-extrabold uppercase text-white shadow transition duration-75 hover:brightness-110 ${
				props.color
			} ${props.className ?? ''}`}
		/>
	);
}
