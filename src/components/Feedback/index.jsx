import { useState } from 'react';
import { testimonials } from '../../data/testimonials';

function Feedback() {
	const [showAll, setShowAll] = useState(false);

	const displayedTestimonials = showAll
		? testimonials
		: testimonials.slice(0, 4);

	return (
		<section
			id="feedback"
			className="px-6 md:px-16 py-24 border-b border-black/5 dark:border-white/5 bg-background-light dark:bg-[#0d0d0d]"
		>
			<div className="mb-16">
				<h2 className="text-4xl md:text-5xl font-heading text-black dark:text-white mb-4">
					Client Feedback
				</h2>
				<div className="h-px w-full bg-gradient-to-r from-black/20 dark:from-white/20 to-transparent"></div>
			</div>

			<div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
				{displayedTestimonials.map((testimonial, index) => {
					const isSecondHalf = index >= 4 && !showAll;
					return (
						<div
							key={index}
							className={`break-inside-avoid p-6 border border-black/10 dark:border-white/10 bg-zinc-100/50 dark:bg-zinc-900/30 hover:border-black/30 dark:hover:border-white/30 transition-all group ${
								isSecondHalf
									? 'backdrop-blur-sm opacity-60'
									: ''
							}`}
						>
							<div className="mb-4">
								<svg
									className="w-6 h-6 text-zinc-500 dark:text-zinc-600 group-hover:text-black dark:group-hover:text-white transition-colors"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										d="M14.017 21L14.017 18C14.017 16.096 14.758 13.387 16.222 10.991C17.031 9.667 18.489 8.237 19.893 7.434L21.196 10.045C20.379 10.494 19.308 11.212 19.031 11.859C18.668 12.706 18.795 13.472 19.296 13.982C19.699 14.392 20.284 14.657 20.819 14.657C21.666 14.657 22.431 14.208 22.826 13.508C23.057 13.1 23.134 12.651 23.134 12.03C23.134 10.748 22.578 9.466 21.586 8.247C20.356 6.737 18.505 5.427 16.005 4.892L15.326 2C19.203 2.727 22.12 4.872 23.913 7.332C25.153 9.033 26 11.187 26 13.602C26 18.117 22.809 21 19.547 21C17.796 21 16.125 20.211 14.017 18V21ZM2.017 21L2.017 18C2.017 16.096 2.758 13.387 4.222 10.991C5.031 9.667 6.489 8.237 7.893 7.434L9.196 10.045C8.379 10.494 7.308 11.212 7.031 11.859C6.668 12.706 6.795 13.472 7.296 13.982C7.699 14.392 8.284 14.657 8.819 14.657C9.666 14.657 10.431 14.208 10.826 13.508C11.057 13.1 11.134 12.651 11.134 12.03C11.134 10.748 10.578 9.466 9.586 8.247C8.356 6.737 6.505 5.427 4.005 4.892L3.326 2C7.203 2.727 10.12 4.872 11.913 7.332C13.153 9.033 14 11.187 14 13.602C14 18.117 10.809 21 7.547 21C5.796 21 4.125 20.211 2.017 18V21Z"
										transform="translate(-2 -2)"
									/>
								</svg>
							</div>
							<p className="text-zinc-800 dark:text-zinc-300 text-base leading-relaxed font-heading">
								{testimonial.quote}
							</p>
						</div>
					);
				})}
			</div>

			{!showAll && (
				<div className="mt-12 text-center">
					<button
						onClick={() => setShowAll(true)}
						className="inline-block text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white border border-black/10 dark:border-white/10 hover:border-black dark:hover:border-white px-8 py-4 transition-all uppercase tracking-wider text-sm font-mono"
					>
						Show More
					</button>
				</div>
			)}
		</section>
	);
}

export default Feedback;
