function Hero() {
	return (
		<section
			id="home"
			className="min-h-[80vh] flex flex-col justify-center px-6 md:px-16 py-20 border-b border-black/5 dark:border-white/5 grid-bg relative"
		>
			<div className="max-w-3xl">
				<p className="font-mono text-zinc-600 dark:text-zinc-500 mb-6 tracking-widest text-xs uppercase">
					Full Stack Developer
				</p>
				<h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium leading-tight mb-8 text-silver">
					CODE.
					<br />
					CREATE.
					<br />
					DELIVER.
				</h1>
				<p className="text-zinc-700 dark:text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl">
					Primarily a WordPress developer crafting custom themes and
					plugins. I also build React-based SPAs and full-stack
					applications when the project calls for it.
				</p>

				<div className="mt-12 flex items-center gap-6">
					<a
						href="#work"
						className="group flex items-center gap-3 text-black dark:text-white border-b border-black dark:border-white pb-1 hover:text-zinc-700 dark:hover:text-zinc-300 transition-all"
					>
						See Projects
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-4 h-4 transition-transform group-hover:translate-x-2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Hero;
