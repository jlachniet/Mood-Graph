import { NavbarLink } from './NavbarLink';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsList } from 'react-icons/bs';

export function Navbar() {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<nav className="flex items-center justify-between border-b border-neutral-300 bg-neutral-50 py-2 pl-3 pr-4 font-display shadow-sm">
			<Link href="/">
				<a className="flex items-center text-lg font-extrabold">
					<Image
						src="/icons/cropped/icon-20w.svg"
						width={20}
						height={17.5}
						alt=""
					/>
					<div className="ml-2">Mood Graph</div>
				</a>
			</Link>
			<div className="flex">
				<button
					onClick={() => setIsExpanded(!isExpanded)}
					className="inline-block sm:hidden"
				>
					<BsList className="h-5 w-5 fill-neutral-700 transition duration-75 hover:brightness-50" />
				</button>
				<div className={isExpanded ? 'block' : 'hidden sm:block'}>
					<div className="absolute left-0 top-[calc(2.75rem+1px)] w-full border-b border-neutral-300 bg-neutral-50 px-4 py-2 shadow-sm sm:relative sm:top-0 sm:flex sm:space-x-4 sm:border-none sm:p-0 sm:shadow-none">
						<NavbarLink text="Dashboard" href="/dashboard" />
						<NavbarLink text="Graph" href="/graph" />
						<NavbarLink text="Sign Out" href="/sign-out" />
					</div>
				</div>
			</div>
		</nav>
	);
}
