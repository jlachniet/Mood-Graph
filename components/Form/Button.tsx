import { TailwindBackground, TailwindText } from '../../types/styles';

export function Button(
	props: JSX.IntrinsicElements['button'] & {
		background: TailwindBackground;
		color: TailwindText;
	}
) {
	return (
		<button
			{...props}
			className={`rounded px-2 py-1 font-display font-semibold shadow hover:brightness-110 ${
				props.background
			} ${props.color} ${props.className ?? ''}`}
		/>
	);
}
