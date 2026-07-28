export const blogPosts = [
	{
		slug: "hey-im-neil",
		date: "2025 / 12 / 06",
		title: "Hey, I'm Neil!",
		category: "Introduction",
		content: [
			{
				type: "paragraph",
				text: "Hey, I'm Neil! I'm a full-stack web developer based in the UK. I've been a techie pretty much my whole life, and a web dev for the last six years. I became a developer by accident. It was never the plan and was simply something I enjoyed doing. Before I knew it, people were paying me to do something I would have happily done for free.",
			},
			{
				type: "paragraph",
				text: 'When I first started learning, I remember thinking, "Wow, this is cool." I used to spend ages trying to remember basic HTML syntax. Eventually I realised that I did not need to memorise everything. I just needed to understand how things work and how to reach the result I wanted. Now I like to think I am pretty good at that.',
			},
			{
				type: "paragraph",
				segments: [
					{
						type: "text",
						text: "Most of my time these days is spent working with WordPress - by day for a global company, by night for a business in the UK. Whenever I have free time, I work on my own projects. Some are public, others are still under wraps. I’m always looking for ways to build something new or improve on what’s out there, but coming up with a truly original idea isn’t easy. On this site, you’ll find a mix: original concepts, reworks of existing tools, and the occasional project that didn’t go as planned. That’s just part of how I work. I’m always experimenting and seeing what sticks.",
					},
				],
			},
			{
				type: "paragraph",
				text: "When I am not working, which is not very often, you will usually find me watching football or enjoying a pint somewhere. With how my mind works, relaxing is rare. I am almost always looking for the next idea to dive into.",
			},
			{
				type: "paragraph",
				text: "So that is me in a nutshell. Feel free to explore the rest of this site to see what I have been working on, and if you have a project in mind or just want to chat, do not hesitate to get in touch.",
			},
		],
	},
	{
		slug: "rebuilding-million-pound-ecommerce-store",
		date: "2026 / 02 / 04",
		title: "Rebuilding a million-pound eCommerce store from the ground up",
		category: "Project",
		content: [
			{
				type: "paragraph",
				text: "Rebuilding a million-pound eCommerce store from the ground up sounds crazy, right? I agree. Sometimes I look back and wonder how I ever managed to self-teach myself enough to handle projects this big and this complex on my own. It is something I am genuinely proud of, and sometimes I still cannot believe I can do it. My work with Smart UK is definitely one of those projects.",
			},
			{
				type: "paragraph",
				text: "Smart UK approached me last year to create an automated system that could sync products from a CSV directly into WooCommerce. It sounds simple when I say it like that, but the CSV contained more than forty thousand products. Once I completed that job, the team at Smart UK were so impressed with the results that they asked me to completely rebuild the entire site from scratch.",
			},
			{
				type: "paragraph",
				text: "Why did this one-million-pound eCommerce store need rebuilding? The honest answer is that it was in a pretty bad state. It was full of spaghetti code, had over eighty plugins installed, and the site speed was extremely slow. This affected not only customers, but also the staff using the admin area. Editing a single product in the back end could take anywhere from thirty to sixty seconds to load. Staff members were even losing sales because they could not load customer orders while on the phone.",
			},
			{
				type: "paragraph",
				text: "The plan was simple. Rebuild everything from the ground up, create a bespoke theme, cut down on plugin usage, and put a clear plan in place to stop it getting back into the mess it was in. This is not unusual. There are so many WordPress sites that end up with a huge amount of unnecessary plugins, and before you know it you have more than fifty installed and no idea what half of them are even doing.",
			},
			{
				type: "paragraph",
				text: "The end result was a super fast website. The staff can now access the admin panel at lightning speed, and sales have increased as a result.",
			},
		],
	},
];

export const getPostBySlug = (slug) => {
	return blogPosts.find((post) => post.slug === slug);
};
