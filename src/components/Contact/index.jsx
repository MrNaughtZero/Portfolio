function Contact() {
	return (
		<section
			id="contact"
			className="px-6 md:px-16 py-32 min-h-[60vh] flex flex-col justify-between"
		>
			<div>
				<h2 className="text-5xl md:text-7xl font-heading text-black dark:text-white mb-8">
					LET'S WORK <br />{' '}
					<span className="text-zinc-500 dark:text-zinc-600">
						TOGETHER.
					</span>
				</h2>
			</div>

			<div className="grid md:grid-cols-2 gap-12 mt-12">
				<div>
					<a
						href="mailto:hello@neilmcnaught.dev"
						className="text-2xl md:text-3xl text-black dark:text-white hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors border-b border-black/20 dark:border-white/20 pb-2 inline-block"
					>
						hello@neilmcnaught.dev
					</a>
				</div>
				<div className="flex flex-col gap-4">
					<p className="text-zinc-600 dark:text-zinc-500 text-sm uppercase tracking-wider font-mono">
						Socials
					</p>
					<div className="flex flex-col gap-2">
						<a
							href="https://github.com/MrNaughtZero"
							target="_blank"
							rel="noopener noreferrer"
							className="text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
						>
							GitHub ↗
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
