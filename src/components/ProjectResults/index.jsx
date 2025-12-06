function ProjectResults({ outcomes }) {
	return (
		<section
			id="results"
			className="px-6 md:px-16 py-24 border-b border-black/5 dark:border-white/5"
		>
			<div className="max-w-4xl">
				<h2 className="text-3xl font-heading text-black dark:text-white mb-12">
					Key Outcomes
				</h2>

				<div className="flex flex-wrap gap-8">
					{outcomes.map((outcome, index) => (
						<div
							key={index}
							className="p-6 border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 break-words w-full md:w-fit md:min-w-[270px]"
						>
							<span className="text-5xl font-heading text-black dark:text-white block mb-2 break-words">
								{outcome.value}
							</span>
							<p className="text-zinc-600 dark:text-zinc-400 font-mono text-sm uppercase tracking-wider break-words">
								{outcome.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default ProjectResults;
