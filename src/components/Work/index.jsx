import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProjectList } from '../../data/projects';

function Work() {
	const allProjects = getProjectList();
	const [showAll, setShowAll] = useState(false);
	const projects = showAll ? allProjects : allProjects.slice(0, 3);
	const hasMore = allProjects.length > 3;

	return (
		<section
			id="work"
			className="px-6 md:px-16 py-24 border-b border-black/5 dark:border-white/5"
		>
			<div className="flex items-end justify-between mb-16">
				<h2 className="text-4xl md:text-5xl font-heading text-black dark:text-white">
					Projects
				</h2>
				<span className="text-zinc-500 dark:text-zinc-600 font-mono hidden md:inline-block">
					(2020 - 2026)
				</span>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
				{projects.map((project, index) => (
					<Link
						key={index}
						to={`/project/${project.slug}`}
						className="project-card group cursor-pointer"
					>
						<div className="w-full aspect-video bg-zinc-200 dark:bg-zinc-900 border border-black/10 dark:border-white/10 mb-6 overflow-hidden relative">
							<div
								className="project-img absolute inset-0 bg-cover bg-top transition-all duration-700 ease-out"
								style={{
									backgroundImage: `url(${project.image})`,
								}}
							></div>
						</div>
						<div className="flex flex-col gap-4">
							<div>
								<h3 className="text-2xl font-heading text-black dark:text-white mb-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
									{project.title}
								</h3>
								<p className="text-zinc-600 dark:text-zinc-400">
									{project.description}
								</p>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tags.map((tag, tagIndex) => (
									<span
										key={tagIndex}
										className="px-3 py-1 border border-black/10 dark:border-white/10 rounded-full text-xs text-zinc-600 dark:text-zinc-400 font-mono"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					</Link>
				))}
			</div>

			{hasMore && !showAll && (
				<div className="mt-20 border-t border-black/5 dark:border-white/5 pt-8 text-center md:text-left">
					<button
						onClick={() => setShowAll(true)}
						className="inline-block text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white px-8 py-4 transition-all uppercase tracking-wider text-sm"
					>
						Show More
					</button>
				</div>
			)}
		</section>
	);
}

export default Work;
