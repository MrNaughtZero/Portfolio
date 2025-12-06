function ProjectGallery({ imageUrl, caption = 'FIG 01. DARK MODE INTERFACE' }) {
	return (
		<section className="w-full aspect-video md:aspect-[21/9] bg-zinc-200 dark:bg-zinc-900 border-b border-black/5 dark:border-white/5 relative overflow-hidden group">
			<img
				src={imageUrl}
				alt={caption}
				className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-80 transition-opacity duration-700"
			/>
			<div className="absolute bottom-8 left-8 bg-black/80 dark:bg-white/80 backdrop-blur px-4 py-2 border border-black/10 dark:border-white/10 text-xs font-mono text-white dark:text-black">
				{caption}
			</div>
		</section>
	);
}

export default ProjectGallery;
