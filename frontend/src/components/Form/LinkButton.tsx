import { TailwindBackground, TailwindText } from '../../types/styles';
import { mergeElementProps } from '../../utils/components';
import Link from 'next/link';

export function LinkButton(
	props: JSX.IntrinsicElements['a'] & {
		href: string;
		background: TailwindBackground;
		color: TailwindText;
	}
) {
	return (
		<Link href={props.href}>
			{mergeElementProps(
				<a className="inline-block rounded px-2 py-1 font-display font-semibold shadow hover:brightness-110" />,
				{
					...props,
					className: `${props.background} ${props.color}`,
				}
			)}
		</Link>
	);
}
