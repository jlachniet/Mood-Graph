import { RelativeUrl } from '../../types/url';
import Link from 'next/link';

export function NavbarLink(props: {
	text: string;
	href: RelativeUrl;
	toggleIsExpanded: () => void;
}) {
	return (
		<Link href={props.href}>
			<a
				onClick={props.toggleIsExpanded}
				className="block py-2 font-semibold transition-transform hover:translate-x-1 hover:text-blue-600 dark:hover:text-blue-500 sm:py-0 sm:transition-none sm:hover:translate-x-0"
			>
				{props.text}
			</a>
		</Link>
	);
}
