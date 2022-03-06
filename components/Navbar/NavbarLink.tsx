import { RelativeUrl } from '../../types/url';
import Link from 'next/link';

export function NavbarLink(props: { text: string; href: RelativeUrl }) {
	return (
		<Link href={props.href}>
			<a className="block py-2 hover:text-blue-600 sm:py-0">{props.text}</a>
		</Link>
	);
}
