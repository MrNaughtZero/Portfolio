import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

function Writing() {
	const posts = [...blogPosts].reverse();

	return (
		<section
			id="writing"
			className="px-6 md:px-16 py-24 border-b border-black/5 dark:border-white/5"
		>
			<div className="flex items-end justify-between mb-12">
				<div>
					<h2 className="text-4xl md:text-5xl font-heading text-black dark:text-white mb-2">
						Thinking Log
					</h2>
					<p className="text-zinc-600 dark:text-zinc-500 font-mono text-sm">
						Thoughts, updates, and occasional ramblings.
					</p>
				</div>
				<Link
					to="/blog"
					className="hidden md:block text-zinc-600 dark:text-zinc-500 text-sm font-mono hover:text-black dark:hover:text-white transition-colors"
				>
					View all posts →
				</Link>
			</div>

			<div className="flex flex-col">
				{posts.map((post, index) => (
					<Link
						key={index}
						to={`/blog/${post.slug}`}
						className="blog-row group flex flex-col md:flex-row md:items-center justify-between py-8 border-t border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors -mx-6 md:-mx-8 px-6 md:px-8"
					>
						<div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16">
							<span className="font-mono text-zinc-500 dark:text-zinc-600 text-sm">
								{post.date}
							</span>
							<h3 className="text-xl md:text-2xl font-heading text-zinc-800 dark:text-zinc-300 transition-transform duration-300">
								{post.title}
							</h3>
						</div>
						<div className="mt-4 md:mt-0">
							<span className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 border border-black/10 dark:border-white/10 rounded-full px-3 py-1">
								{post.category}
							</span>
						</div>
					</Link>
				))}
			</div>

			<div className="mt-8 text-center md:hidden">
				<Link
					to="/blog"
					className="text-zinc-600 dark:text-zinc-500 text-sm font-mono hover:text-black dark:hover:text-white transition-colors"
				>
					View all posts →
				</Link>
			</div>
		</section>
	);
}

export default Writing;
