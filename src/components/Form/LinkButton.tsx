import { TailwindBackground, TailwindText } from '../../types/styles';
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
			<a
				{...props}
				className={`inline-block rounded px-2 py-1 font-display font-semibold shadow hover:brightness-110 ${
					props.background
				} ${props.color} ${props.className ?? ''}`}
			/>
		</Link>
	);
}
