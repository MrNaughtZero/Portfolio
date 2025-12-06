import { Link } from 'react-router-dom';
import BlogHeader from '../../components/BlogHeader';
import Footer from '../../components/Footer';
import { blogPosts } from '../../data/blogPosts';

function Blog() {
	return (
		<div className="flex flex-col lg:flex-row min-h-screen bg-background dark:bg-[#0a0a0a]">
			<BlogHeader />

			<main className="lg:flex-1 lg:ml-[300px] w-full relative bg-background-lighter dark:bg-[#0f0f0f] flex flex-col min-h-screen">
				<section className="px-6 md:px-16 py-12">
					<div className="max-w-4xl">
						<h1 className="text-5xl md:text-7xl font-heading text-black dark:text-white mb-4">
							Thinking Log
						</h1>
						<p className="text-zinc-600 dark:text-zinc-500 font-mono text-sm mb-8">
							Thoughts, updates, and occasional ramblings.
						</p>
						<div className="h-px w-full bg-gradient-to-r from-black/20 dark:from-white/20 to-transparent"></div>
					</div>
				</section>

				<section className="px-6 md:px-16 py-12 flex-grow">
					<div className="flex flex-col -mx-6 md:-mx-16">
						{[...blogPosts].reverse().map((post, index) => (
							<Link
								key={index}
								to={`/blog/${post.slug}`}
								className="blog-row group flex flex-col md:flex-row md:items-center justify-between py-6 border-t border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors px-6 md:px-16"
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
				</section>

				<Footer />
			</main>
		</div>
	);
}

export default Blog;
