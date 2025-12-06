import { Link } from 'react-router-dom';

function ProjectNavigation({ previousProject, nextProject }) {
	return (
		<section className="flex flex-col md:flex-row">
			{previousProject ? (
				<Link
					to={`/project/${previousProject.slug}`}
					className="w-full md:w-1/2 p-12 md:p-24 border-b md:border-b-0 md:border-r border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group flex flex-col justify-between h-64 md:h-80"
				>
					<span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider group-hover:text-black dark:group-hover:text-white transition-colors">
						← Previous Project
					</span>
					<div>
						<h3 className="text-3xl md:text-4xl font-heading text-black dark:text-white mb-2">
							{previousProject.title}
						</h3>
						<p className="text-zinc-600 dark:text-zinc-400">
							{previousProject.subtitle}
						</p>
					</div>
				</Link>
			) : (
				<Link
					to="/#work"
					className="w-full md:w-1/2 p-12 md:p-24 border-b md:border-b-0 md:border-r border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group flex flex-col justify-between h-64 md:h-80"
				>
					<span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider group-hover:text-black dark:group-hover:text-white transition-colors">
						← Previous Project
					</span>
					<div>
						<h3 className="text-3xl md:text-4xl font-heading text-black dark:text-white mb-2">
							Back to Projects
						</h3>
						<p className="text-zinc-600 dark:text-zinc-400">
							View all projects
						</p>
					</div>
				</Link>
			)}

			{nextProject ? (
				<Link
					to={`/project/${nextProject.slug}`}
					className="w-full md:w-1/2 p-12 md:p-24 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group flex flex-col justify-between h-64 md:h-80 items-end text-right"
				>
					<span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider group-hover:text-black dark:group-hover:text-white transition-colors">
						Next Project →
					</span>
					<div>
						<h3 className="text-3xl md:text-4xl font-heading text-black dark:text-white mb-2">
							{nextProject.title}
						</h3>
						<p className="text-zinc-600 dark:text-zinc-400">
							{nextProject.subtitle}
						</p>
					</div>
				</Link>
			) : (
				<Link
					to="/#work"
					className="w-full md:w-1/2 p-12 md:p-24 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group flex flex-col justify-between h-64 md:h-80 items-end text-right"
				>
					<span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider group-hover:text-black dark:group-hover:text-white transition-colors">
						Next Project →
					</span>
					<div>
						<h3 className="text-3xl md:text-4xl font-heading text-black dark:text-white mb-2">
							Back to Projects
						</h3>
						<p className="text-zinc-600 dark:text-zinc-400">
							View all projects
						</p>
					</div>
				</Link>
			)}
		</section>
	);
}

export default ProjectNavigation;
