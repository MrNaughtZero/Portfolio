function ProjectContent({ challenge, solution, techStack }) {
	return (
		<section
			id="process"
			className="px-6 md:px-16 py-24 border-b border-black/5 dark:border-white/5"
		>
			<div className="grid md:grid-cols-12 gap-12">
				<div className="md:col-span-7 space-y-12">
					<div>
						<h2 className="text-3xl font-heading text-black dark:text-white mb-6">
							The Challenge
						</h2>
						<p className="text-zinc-700 dark:text-zinc-400 leading-relaxed text-lg">
							{challenge}
						</p>
					</div>

					<div>
						<h2 className="text-3xl font-heading text-black dark:text-white mb-6">
							The Solution
						</h2>
						<ul className="space-y-4">
							{solution.map((point, index) => (
								<li
									key={index}
									className="text-zinc-700 dark:text-zinc-400 leading-relaxed text-lg flex items-start gap-3"
								>
									<span className="text-black dark:text-white">
										•
									</span>
									<span>{point}</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="md:col-span-4 md:col-start-9">
					<div
						className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-8 sticky top-8 outline-none focus:outline-none"
						tabIndex="-1"
					>
						<h3 className="font-heading text-xl text-black dark:text-white mb-6">
							Technologies
						</h3>
						<ul className="space-y-4">
							{techStack.map((tech, index) => (
								<li
									key={index}
									className="flex items-center justify-between text-zinc-600 dark:text-zinc-400 text-sm border-b border-black/10 dark:border-white/10 pb-2"
								>
									<span>{tech.label}</span>
									<span className="text-black dark:text-white font-mono">
										{tech.value}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProjectContent;
