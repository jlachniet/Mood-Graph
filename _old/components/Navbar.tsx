import { NavbarLink } from './NavbarLink';
import { getAuth } from 'firebase/auth';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsList } from 'react-icons/bs';

export function Navbar() {
	const [user] = useAuthState(getAuth());
	const [showingHamburgerMenu, setShowingHamburgerMenu] = useState(false);

	return (
		<nav className="px-4 py-2 text-right">
			<ul>
				<li className="float-left inline-block">
					<Link href="/">
						<a className="flex items-center">
							<Image
								src="/icons/cropped/icon-20w.svg"
								width={20}
								height={17.5}
								alt=""
							/>
							<div className="ml-2 font-bold">Home</div>
						</a>
					</Link>
				</li>
				<button
					onClick={() => {
						setShowingHamburgerMenu(!showingHamburgerMenu);
					}}
				>
					<BsList
						className="inline-block sm:hidden"
						color="#eee"
						width="48rem"
						size={20}
						strokeWidth={1.25}
					/>
				</button>
				<div
					className={
						(showingHamburgerMenu ? '' : 'relative hidden ') +
						'absolute left-0 top-10 w-full z-20 bg-purple-900 py-1 text-left sm:relative sm:top-0 sm:inline-block sm:w-auto sm:bg-inherit sm:py-0'
					}
				>
					{user ? (
						<>
							<NavbarLink text="Dashboard" href="/dashboard" />
							<NavbarLink text="Graph" href="/graph" />
							<NavbarLink text="Sign Out" href="/sign-out" />
						</>
					) : (
						<NavbarLink text="Login" href="/login" />
					)}
				</div>
			</ul>
		</nav>
	);
}
