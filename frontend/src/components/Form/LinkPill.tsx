import { TailwindBackground } from '../../types/styles';
import { mergeElementProps } from '../../utils/components';
import Link from 'next/link';

export function LinkPill(
	props: JSX.IntrinsicElements['a'] & {
		href: string;
		color: TailwindBackground;
	}
) {
	return (
		<Link href={props.href}>
			{mergeElementProps(
				<a className="mx-2 my-1 inline-block whitespace-nowrap rounded-full px-4 py-3 font-display font-extrabold uppercase text-white shadow transition-filter duration-75 hover:brightness-110" />,
				{
					...props,
					className: props.color,
				}
			)}
		</Link>
	);
}
