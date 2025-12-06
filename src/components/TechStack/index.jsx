function TechStack() {
	return (
		<section
			id="stack"
			className="px-6 md:px-16 py-24 border-b border-black/5 dark:border-white/5 bg-background-light dark:bg-[#0d0d0d]"
		>
			<div className="grid md:grid-cols-2 gap-16">
				<div>
					<h2 className="text-4xl font-heading text-black dark:text-white mb-8">
						Tech Stack
					</h2>
					<p className="text-zinc-700 dark:text-zinc-400 leading-relaxed mb-8">
						Primarily focused on WordPress development with custom
						themes, plugins, and WooCommerce solutions. I also work
						with React for building modern SPAs and various backend
						frameworks when needed. Currently exploring
						opportunities to build the next impactful SaaS product.
					</p>
					<div className="flex flex-wrap gap-4">
						<div className="w-2 h-2 bg-black dark:bg-white rounded-full mt-1.5"></div>
						<p className="text-zinc-600 dark:text-zinc-500 text-sm font-mono flex-1">
							Current Focus: WordPress, WooCommerce, React SPAs.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-y-8 gap-x-4">
					<div className="border-l border-black/10 dark:border-white/10 pl-6">
						<span className="text-xs text-zinc-600 dark:text-zinc-500 font-mono uppercase block mb-2">
							Frontend
						</span>
						<ul className="space-y-2 text-zinc-800 dark:text-zinc-300">
							<li>HTML</li>
							<li>JavaScript</li>
							<li>React</li>
							<li>Tailwind CSS</li>
							<li>SCSS</li>
							<li>Bootstrap</li>
						</ul>
					</div>
					<div className="border-l border-black/10 dark:border-white/10 pl-6">
						<span className="text-xs text-zinc-600 dark:text-zinc-500 font-mono uppercase block mb-2">
							Backend
						</span>
						<ul className="space-y-2 text-zinc-800 dark:text-zinc-300">
							<li>Node</li>
							<li>Express</li>
							<li>Python</li>
							<li>Flask</li>
							<li>FastAPI</li>
							<li>Django</li>
							<li>PHP</li>
						</ul>
					</div>
					<div className="border-l border-black/10 dark:border-white/10 pl-6">
						<span className="text-xs text-zinc-600 dark:text-zinc-500 font-mono uppercase block mb-2">
							WordPress
						</span>
						<ul className="space-y-2 text-zinc-800 dark:text-zinc-300">
							<li>WordPress</li>
							<li>WooCommerce</li>
							<li>ACF</li>
						</ul>
					</div>
					<div className="border-l border-black/10 dark:border-white/10 pl-6">
						<span className="text-xs text-zinc-600 dark:text-zinc-500 font-mono uppercase block mb-2">
							Databases & Tools
						</span>
						<ul className="space-y-2 text-zinc-800 dark:text-zinc-300">
							<li>MongoDB</li>
							<li>MySQL</li>
							<li>Git</li>
							<li>Linux</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TechStack;
