const today = new Date();
const formattedDate = `${today.getFullYear()} / ${String(today.getMonth() + 1).padStart(2, '0')} / ${String(today.getDate()).padStart(2, '0')}`;

export const blogPosts = [
	{
		slug: 'hey-im-neil',
		date: formattedDate,
		title: "Hey, I'm Neil!",
		category: 'Introduction',
		content: [
			{
				type: 'paragraph',
				text: "Hey, I'm Neil! I'm a full-stack web developer based in the UK. I've been a techie pretty much my whole life, and a web dev for the last six years. I became a developer by accident. It was never the plan and was simply something I enjoyed doing. Before I knew it, people were paying me to do something I would have happily done for free.",
			},
			{
				type: 'paragraph',
				text: 'When I first started learning, I remember thinking, "Wow, this is cool." I used to spend ages trying to remember basic HTML syntax. Eventually I realised that I did not need to memorise everything. I just needed to understand how things work and how to reach the result I wanted. Now I like to think I am pretty good at that.',
			},
			{
				type: 'paragraph',
				segments: [
					{
						type: 'text',
						text: 'These days I spend most of my time working with WordPress. I am a freelance developer, and in the mornings I work with a WordPress agency in Manchester. The rest of the day is spent working on my own projects. Some of these I can share, like ',
					},
					{
						type: 'link',
						text: 'Eliment.io',
						url: 'https://eliment.io',
					},
					{
						type: 'text',
						text: ', and some I cannot talk about yet. I have been trying for years to create that perfect bit of software that nobody has built before. It is harder than it sounds, so on this site you will find a mix of unique ideas, adaptations of other projects, and a few things that simply did not go to plan. That is all part of the process. I am confident that one day I will build something that makes people say, "Wow," and hopefully makes me a bit of money as well.',
					},
				],
			},
			{
				type: 'paragraph',
				text: 'When I am not working, which is not very often, you will usually find me watching football or enjoying a pint somewhere. With how my mind works, relaxing is rare. I am almost always looking for the next idea to dive into.',
			},
			{
				type: 'paragraph',
				text: 'So that is me in a nutshell. Feel free to explore the rest of this site to see what I have been working on, and if you have a project in mind or just want to chat, do not hesitate to get in touch.',
			},
		],
	},
	{
		slug: 'rebuilding-million-pound-ecommerce-store',
		date: formattedDate,
		title: 'Rebuilding a million-pound eCommerce store from the ground up',
		category: 'Project',
		content: [
			{
				type: 'paragraph',
				text: 'Rebuilding a million-pound eCommerce store from the ground up sounds crazy, right? I agree. Sometimes I look back and wonder how I ever managed to self-teach myself enough to handle projects this big and this complex on my own. It is something I am genuinely proud of, and sometimes I still cannot believe I can do it. My work with Smart UK is definitely one of those projects.',
			},
			{
				type: 'paragraph',
				text: 'Smart UK approached me last year to create an automated system that could sync products from a CSV directly into WooCommerce. It sounds simple when I say it like that, but the CSV contained more than forty thousand products. Once I completed that job, the team at Smart UK were so impressed with the results that they asked me to completely rebuild the entire site from scratch.',
			},
			{
				type: 'paragraph',
				text: 'Why did this one-million-pound eCommerce store need rebuilding? The honest answer is that it was in a pretty bad state. It was full of spaghetti code, had over eighty plugins installed, and the site speed was extremely slow. This affected not only customers, but also the staff using the admin area. Editing a single product in the back end could take anywhere from thirty to sixty seconds to load. Staff members were even losing sales because they could not load customer orders while on the phone.',
			},
			{
				type: 'paragraph',
				text: 'The plan was simple. Rebuild everything from the ground up, create a bespoke theme, cut down on plugin usage, and put a clear plan in place to stop it getting back into the mess it was in. This is not unusual. There are so many WordPress sites that end up with a huge amount of unnecessary plugins, and before you know it you have more than fifty installed and no idea what half of them are even doing.',
			},
			{
				type: 'paragraph',
				text: 'The end result was a super fast website. The staff can now access the admin panel at lightning speed, and sales have increased as a result.',
			},
		],
	},
	// {
	// 	slug: 'building-a-component-library',
	// 	date: formattedDate,
	// 	title: 'Building a component library',
	// 	category: 'SaaS',
	// 	content: [
	// 		{
	// 			type: 'paragraph',
	// 			text: 'Building a component library is my latest idea. I work with Elementor pretty much every day, especially since I work for a WordPress agency in Manchester. Building with Elementor gives site owners the ability to change content themselves, which is a huge bonus. Elementor is also one of the biggest page builder plugins out there. It does get a bit of a bad reputation at times, but with my builds I always prove that if it is used correctly, it can be incredibly fast for both users and developers.',
	// 		},
	// 		{
	// 			type: 'paragraph',
	// 			segments: [
	// 				{
	// 					type: 'text',
	// 					text: 'There are plenty of times where I create a component and then end up needing it again in a future project. That is what pushed me to start building a component library. I wanted a place to store everything I create, along with any open source components I find along the way. At first this library was meant only for me. Then I had a thought: what if other people would actually pay for this? And that is how ',
	// 				},
	// 				{
	// 					type: 'link',
	// 					text: 'Eliment.io',
	// 					url: 'https://eliment.io',
	// 				},
	// 				{
	// 					type: 'text',
	// 					text: ' was born. It is a component library for Elementor. The MVP was built in just four weeks and launched at the beginning of December. Now the real work begins, which is manually adding all the components into the app. There are similar products out there, but like with everything I do, I have dozens of ideas that will make mine better and more feature rich.',
	// 				},
	// 			],
	// 		},
	// 		{
	// 			type: 'paragraph',
	// 			text: 'Maybe this project will make me money. Maybe I will not get a single visitor or signup. It honestly does not matter. This is something I will use myself five days a week, so it is not time wasted. In fact, I expect it to cut my development time in half.',
	// 		},
	// 	],
	// },
];

export const getPostBySlug = (slug) => {
	return blogPosts.find((post) => post.slug === slug);
};
