import { useParams, Link } from 'react-router-dom';
import BlogHeader from '../../components/BlogHeader';
import Footer from '../../components/Footer';
import { getPostBySlug } from '../../data/blogPosts';

function renderSegments(segments) {
	return segments.map((segment, segIndex) => {
		if (segment.type === 'link') {
			return (
				<a
					key={segIndex}
					href={segment.url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-600 dark:text-blue-400 hover:underline"
				>
					{segment.text}
				</a>
			);
		}
		if (segment.type === 'bold') {
			return (
				<strong
					key={segIndex}
					className="font-medium text-black dark:text-white"
				>
					{segment.text}
				</strong>
			);
		}
		if (segment.type === 'em') {
			return <em key={segIndex}>{segment.text}</em>;
		}
		return <span key={segIndex}>{segment.text}</span>;
	});
}

function BlogPost() {
	const { slug } = useParams();
	const post = getPostBySlug(slug);

	if (!post) {
		return (
			<div className="flex items-center justify-center min-h-screen bg-background dark:bg-[#0a0a0a]">
				<p className="text-black dark:text-white">Post not found</p>
			</div>
		);
	}

	return (
		<div className="flex flex-col lg:flex-row min-h-screen bg-background dark:bg-[#0a0a0a]">
			<BlogHeader />

			<main className="lg:flex-1 lg:ml-[300px] w-full relative bg-background-lighter dark:bg-[#0f0f0f] flex flex-col min-h-screen">
				<section className="px-6 md:px-16 pt-12 pb-8 border-b border-black/5 dark:border-white/5">
					<div className="max-w-4xl">
						<Link
							to="/blog"
							className="text-zinc-600 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors text-sm font-mono mb-8 inline-block flex items-center gap-2"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-4 h-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
								/>
							</svg>
							Back to Blog
						</Link>
						<div className="flex flex-col gap-4 mb-6">
							<span className="text-xs font-mono uppercase tracking-wider text-zinc-600 dark:text-zinc-400 border border-black/10 dark:border-white/10 rounded-full px-3 py-1 w-max">
								{post.category}
							</span>
							<span className="font-mono text-zinc-500 dark:text-zinc-600 text-sm">
								{post.date}
							</span>
						</div>
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-medium leading-tight text-black dark:text-white mb-8">
							{post.title}
						</h1>
					</div>
				</section>

				<section className="px-6 md:px-16 py-12 flex-grow">
					<article className="max-w-3xl">
						{post.content.map((block, index) => {
							if (block.type === 'heading') {
								return (
									<h2
										key={index}
										className="text-3xl font-heading text-black dark:text-white mb-6 mt-12"
									>
										{block.text}
									</h2>
								);
							}
							if (block.type === 'callout') {
								return (
									<aside
										key={index}
										className="border border-black/15 dark:border-white/15 bg-black/[0.03] dark:bg-white/[0.03] px-6 py-6 mb-12"
									>
										{block.paragraphs.map((paragraph, pIndex) => (
											<p
												key={pIndex}
												className={`text-zinc-800 dark:text-zinc-300 leading-relaxed text-lg ${
													pIndex ===
													block.paragraphs.length - 1
														? 'mb-0'
														: 'mb-4'
												}`}
											>
												{paragraph.segments
													? renderSegments(
															paragraph.segments
														)
													: paragraph.text}
											</p>
										))}
									</aside>
								);
							}
							if (block.type === 'blockquote') {
								return (
									<blockquote
										key={index}
										className="border-l-2 border-black/20 dark:border-white/20 pl-6 my-8 text-xl font-heading text-black dark:text-white"
									>
										{block.text}
									</blockquote>
								);
							}
							if (block.type === 'disclaimer') {
								return (
									<p
										key={index}
										className="text-zinc-500 dark:text-zinc-500 leading-relaxed text-sm italic mt-12 mb-6 border-t border-black/10 dark:border-white/10 pt-8"
									>
										{block.text}
									</p>
								);
							}
							if (block.type === 'paragraph') {
								if (block.segments) {
									return (
										<p
											key={index}
											className="text-zinc-700 dark:text-zinc-400 leading-relaxed text-lg mb-6"
										>
											{renderSegments(block.segments)}
										</p>
									);
								}
								return (
									<p
										key={index}
										className="text-zinc-700 dark:text-zinc-400 leading-relaxed text-lg mb-6"
									>
										{block.text}
									</p>
								);
							}
							return null;
						})}
					</article>
				</section>

				<section className="px-6 md:px-16 py-12 border-t border-black/10 dark:border-white/10">
					<div className="max-w-4xl">
						<Link
							to="/blog"
							className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors text-sm font-mono"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-4 h-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
								/>
							</svg>
							View All Posts
						</Link>
					</div>
				</section>

				<Footer />
			</main>
		</div>
	);
}

export default BlogPost;
