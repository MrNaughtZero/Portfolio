function ProjectHero({ imageUrl }) {
	return (
		<div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden border-b border-black/5 dark:border-white/5">
			<div
				className="absolute inset-0 bg-cover bg-top"
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className="absolute inset-0 bg-black/10"></div>
			<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background-lighter dark:from-[#0f0f0f] to-transparent"></div>
		</div>
	);
}

export default ProjectHero;
