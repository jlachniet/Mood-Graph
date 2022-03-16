import Logo from '../../public/icons/icon-responsive.svg';
import { useDefaultAuthState } from '../../utils/hooks/firebase';
import { useTheme } from '../../utils/hooks/theme';
import { useWindowSize } from '../../utils/hooks/window';
import { NavbarLink } from './NavbarLink';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsBrightnessHighFill, BsList, BsMoonFill } from 'react-icons/bs';

export function Navbar() {
	const { user } = useDefaultAuthState();
	const { windowWidth } = useWindowSize();
	const [theme, setTheme] = useTheme();

	const [isExpanded, setIsExpanded] = useState(false);

	function toggleIsExpanded() {
		setIsExpanded(!isExpanded);
	}

	useEffect(() => {
		if (windowWidth >= 640) {
			setIsExpanded(false);
		}
	}, [windowWidth]);

	return (
		<nav className="sticky top-0 z-20 flex items-center justify-between border-b border-neutral-300 bg-neutral-100 py-2 pl-3 pr-4 font-display shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
			<Link href="/">
				<a className="flex items-center text-xl font-extrabold">
					<Logo
						width={20}
						height={20}
						className="transition-filter hover:hue-rotate-15"
						alt=""
					/>
					<div className="ml-3">Mood&nbsp;Graph</div>
				</a>
			</Link>
			<div className="flex">
				<button onClick={toggleIsExpanded} className="inline-block sm:hidden">
					<BsList className="h-5 w-5 fill-neutral-700 transition-filter duration-75 hover:brightness-50 dark:fill-neutral-50 dark:hover:brightness-200" />
				</button>
				<div className={isExpanded ? 'block' : 'hidden sm:block'}>
					<div className="absolute left-0 top-navbarheight w-full border-b border-neutral-300 bg-neutral-100 px-4 py-2 shadow-sm dark:border-neutral-700 dark:bg-neutral-800 sm:relative sm:top-0 sm:flex sm:space-x-4 sm:border-none sm:bg-transparent sm:p-0 sm:shadow-none">
						{user ? (
							<>
								<NavbarLink
									text="Dashboard"
									href="/dashboard"
									toggleIsExpanded={toggleIsExpanded}
								/>
								<NavbarLink
									text="Graph"
									href="/graph"
									toggleIsExpanded={toggleIsExpanded}
								/>
								<NavbarLink
									text="Sign Out"
									href="/sign-out"
									toggleIsExpanded={toggleIsExpanded}
								/>
							</>
						) : (
							<>
								<NavbarLink
									text="Login"
									href="/login"
									toggleIsExpanded={toggleIsExpanded}
								/>
							</>
						)}
					</div>
				</div>
				<button className="ml-3 border-neutral-400">
					{theme === 'dark' ? (
						<BsMoonFill
							onClick={() => setTheme('light')}
							className="h-5 w-5 fill-sky-300 p-0.5 transition-filter duration-75 hover:brightness-50"
						/>
					) : (
						<BsBrightnessHighFill
							onClick={() => setTheme('dark')}
							className="h-5 w-5 fill-yellow-500 transition-filter duration-75 hover:brightness-50"
						/>
					)}
				</button>
			</div>
		</nav>
	);
}
