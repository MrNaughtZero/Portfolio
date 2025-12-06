import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

function ProjectHeader({ projectTitle = 'Project' }) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const { isDark, toggleTheme } = useTheme();

	const closeMenu = () => {
		setIsMobileMenuOpen(false);
		document.body.style.overflow = 'auto';
	};

	const openMenu = () => {
		setIsMobileMenuOpen(true);
		document.body.style.overflow = 'hidden';
	};

	return (
		<>
			<header className="lg:max-w-[300px] lg:w-[300px] w-full lg:h-screen sticky top-0 lg:fixed lg:top-0 lg:left-0 bg-background dark:bg-[#0a0a0a] border-b lg:border-b-0 lg:border-r border-black/10 dark:border-white/10 flex flex-col justify-between p-8 z-40 lg:z-40">
				<div className="flex items-start justify-between">
					<div>
						<Link
							to="/"
							className="block font-heading font-bold text-2xl tracking-tight text-black dark:text-white mb-1"
						>
							NEIL MCNAUGHT
						</Link>
						<span className="hidden lg:block text-zinc-600 dark:text-zinc-500 text-sm font-mono">
							neilmcnaught.dev
						</span>
					</div>
					<button
						onClick={toggleTheme}
						className="hidden lg:flex p-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors ml-4"
						aria-label="Toggle theme"
					>
						{isDark ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-5 h-5 text-black dark:text-white scale-90"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-5 h-5 text-black dark:text-white scale-90"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
								/>
							</svg>
						)}
					</button>
				</div>

				<nav className="hidden lg:flex flex-col space-y-6">
					<Link
						to="/"
						className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors text-lg hover-line w-max flex items-center gap-2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-4 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
							/>
						</svg>
						Back to Home
					</Link>
					<div className="h-px w-8 bg-black/10 dark:bg-white/10 my-2"></div>
					<p className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-2">
						On This Page
					</p>
					<a
						href="#overview"
						className="text-black dark:text-white transition-colors text-sm hover-line w-max"
					>
						Overview
					</a>
					<a
						href="#process"
						className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors text-sm hover-line w-max"
					>
						Technical Process
					</a>
					<a
						href="#results"
						className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors text-sm hover-line w-max"
					>
						Results
					</a>
				</nav>

				<div className="lg:hidden absolute top-8 right-8 flex items-center gap-4 z-50">
					<button
						onClick={toggleTheme}
						className="p-2 rounded-full border border-black/10 dark:border-white/10"
						aria-label="Toggle theme"
					>
						{isDark ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-5 h-5 text-black dark:text-white scale-90"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-5 h-5 text-black dark:text-white scale-90"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
								/>
							</svg>
						)}
					</button>
					<button
						onClick={openMenu}
						className="text-black dark:text-white"
						aria-label="Open menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 9h16.5m-16.5 6.75h16.5"
							/>
						</svg>
					</button>
				</div>

				<div className="hidden lg:flex flex-col gap-4">
					<div className="h-px w-12 bg-black/10 dark:bg-white/10"></div>
					<p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2">
						Project Archive 01
					</p>
				</div>
			</header>

			{isMobileMenuOpen && (
				<div className="fixed inset-0 bg-background-lighter dark:bg-[#0a0a0a] z-50 flex flex-col justify-center items-center space-y-8">
					<button
						onClick={closeMenu}
						className="absolute top-8 right-8 text-black dark:text-white"
						aria-label="Close menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-8 h-8"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
					<Link
						to="/"
						onClick={closeMenu}
						className="text-3xl font-heading text-black dark:text-white"
					>
						Intro
					</Link>
					<a
						href="/#work"
						onClick={closeMenu}
						className="text-3xl font-heading text-black dark:text-white"
					>
						Work
					</a>
					<a
						href="/#stack"
						onClick={closeMenu}
						className="text-3xl font-heading text-black dark:text-white"
					>
						Stack
					</a>
					<a
						href="/#writing"
						onClick={closeMenu}
						className="text-3xl font-heading text-black dark:text-white"
					>
						Writing
					</a>
					<a
						href="/#feedback"
						onClick={closeMenu}
						className="text-3xl font-heading text-black dark:text-white"
					>
						Feedback
					</a>
					<a
						href="/#contact"
						onClick={closeMenu}
						className="text-3xl font-heading text-black dark:text-white"
					>
						Contact
					</a>
				</div>
			)}
		</>
	);
}

export default ProjectHeader;
