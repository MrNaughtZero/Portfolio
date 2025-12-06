function ProjectOverview({ project }) {
	const { title, description, client, role, year, demoUrl } = project;

	return (
		<section
			id="overview"
			className="px-6 md:px-16 pt-12 pb-20 border-b border-black/5 dark:border-white/5"
		>
			<div className="max-w-4xl">
				<h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-medium leading-tight text-black dark:text-white mb-8">
					{title.split('\n').map((line, index) => (
						<span key={index}>
							{line}
							{index < title.split('\n').length - 1 && <br />}
						</span>
					))}
				</h1>
				<p className="text-xl text-zinc-700 dark:text-zinc-400 leading-relaxed max-w-2xl">
					{description}
				</p>
			</div>

			<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-black/10 dark:border-white/10">
				<div>
					<span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider block mb-2">
						Client
					</span>
					<p className="text-black dark:text-white font-medium">
						{client}
					</p>
				</div>
				<div>
					<span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider block mb-2">
						Role
					</span>
					<p className="text-black dark:text-white font-medium">
						{role}
					</p>
				</div>
				<div>
					<span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider block mb-2">
						Year
					</span>
					<p className="text-black dark:text-white font-medium">
						{year}
					</p>
				</div>
				<div>
					<span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider block mb-2">
						Live Demo
					</span>
					{demoUrl ? (
						<a
							href={demoUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-black dark:text-white font-medium border-b border-black/30 dark:border-white/30 hover:border-black dark:hover:border-white transition-all"
						>
							View Site ↗
						</a>
					) : (
						<p className="text-zinc-600 dark:text-zinc-400 font-medium">
							N/A
						</p>
					)}
				</div>
			</div>
		</section>
	);
}

export default ProjectOverview;
