import { TailwindBackground, TailwindText } from '../../types/styles';
import { mergeElementProps } from '../../utils/components';

export function Button(
	props: JSX.IntrinsicElements['button'] & {
		background: TailwindBackground;
		color: TailwindText;
	}
) {
	return mergeElementProps(
		<button className="rounded px-2 py-1 font-display font-semibold shadow hover:brightness-110" />,
		{ ...props, className: `${props.background} ${props.color}` }
	);
}
