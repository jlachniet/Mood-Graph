import Link from 'next/link';

export function NavbarLink(props: { text: string; href: string }) {
	return (
		<li className="w-full px-4 py-2 sm:static sm:ml-4 sm:inline-block sm:w-auto sm:bg-inherit sm:p-0">
			<Link href={props.href}>
				<a>{props.text}</a>
			</Link>
		</li>
	);
}
