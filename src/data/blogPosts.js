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
	{
		slug: "building-bugshield",
		date: "2026 / 08 / 08",
		title: "Building BugShield, and going all in",
		category: "Project",
		content: [
			{
				type: "paragraph",
				text: "I've spent a lot of my career working with WordPress.",
			},
			{
				type: "paragraph",
				text: "Day jobs, freelance work, client sites, and the occasional late-night message because someone's checkout has suddenly stopped working.",
			},
			{
				type: "heading",
				text: "The same problem, over and over",
			},
			{
				type: "paragraph",
				text: "And after doing it for years, I kept seeing the same problem.",
			},
			{
				type: "paragraph",
				text: "Something breaks. The site owner panics. They start emailing developers or trying to find a freelancer who can look at it. Passwords end up being sent over email or WhatsApp, and once the problem is fixed, that's usually the end of it until something else goes wrong.",
			},
			{
				type: "paragraph",
				segments: [
					{
						type: "text",
						text: "That's basically where ",
					},
					{
						type: "link",
						text: "BugShield",
						url: "https://bugshield.co.uk",
					},
					{
						type: "text",
						text: " came from.",
					},
				],
			},
			{
				type: "heading",
				text: "Making WordPress help less painful",
			},
			{
				type: "paragraph",
				text: "I built BugShield to make getting help with WordPress a lot less painful. If something is broken, you tell us what's wrong, pay a fixed price and a developer takes care of it. You can chat directly with them while they work on the issue and keep track of everything from your dashboard.",
			},
			{
				type: "paragraph",
				text: "For people who don't want to wait until something breaks, there are maintenance plans too. We can monitor the site, take off-site backups and handle fixes as they come up.",
			},
			{
				type: "heading",
				text: "A platform, not a contact form",
			},
			{
				type: "paragraph",
				text: "But I didn't want BugShield to just be another WordPress agency website with a contact form on the front.",
			},
			{
				type: "paragraph",
				text: "I wanted to actually build a platform around the service.",
			},
			{
				type: "paragraph",
				segments: [
					{
						type: "text",
						text: "Every site has its own workspace. Fixes can be requested and tracked through the dashboard, there's a chat for each job, and credentials can be stored in an encrypted ",
					},
					{
						type: "link",
						text: "Password Vault",
						url: "https://bugshield.co.uk/security",
					},
					{
						type: "text",
						text: " instead of being passed around in emails.",
					},
				],
			},
			{
				type: "paragraph",
				segments: [
					{
						type: "text",
						text: "There's also ",
					},
					{
						type: "link",
						text: "24/7 uptime and performance monitoring",
						url: "https://bugshield.co.uk/monitoring",
					},
					{
						type: "text",
						text: ", ",
					},
					{
						type: "link",
						text: "off-site cloud backups",
						url: "https://bugshield.co.uk/backups",
					},
					{
						type: "text",
						text: ", activity logs and multi-site management for people looking after several WordPress sites.",
					},
				],
			},
			{
				type: "heading",
				text: "Plans and pricing",
			},
			{
				type: "paragraph",
				text: "One-off fixes start at £49.99.",
			},
			{
				type: "paragraph",
				segments: [
					{
						type: "link",
						text: "Shield Light",
						url: "https://bugshield.co.uk/shield-light",
					},
					{
						type: "text",
						text: " is £99/month and includes two fixes each month, weekly backups and monitoring. ",
					},
					{
						type: "link",
						text: "Shield Pro",
						url: "https://bugshield.co.uk/shield-pro",
					},
					{
						type: "text",
						text: " is £199/month and includes unlimited fixes, daily backups, malware prevention and priority response times.",
					},
				],
			},
			{
				type: "heading",
				text: "Bigger than I expected",
			},
			{
				type: "paragraph",
				text: "Building all of this has been a much bigger project than I originally expected.",
			},
			{
				type: "paragraph",
				text: "The actual WordPress fixes are the familiar part. The challenge has been everything around them: payments, subscriptions, developer workflows, secure credential access, audit logs, monitoring infrastructure, backups, the WordPress plugin, notifications and building a dashboard that doesn't require someone to be technical to understand it.",
			},
			{
				type: "heading",
				text: "Outside the app",
			},
			{
				type: "paragraph",
				text: "I've spent a huge amount of time building out the BugShield website too, including guides, solutions to common WordPress problems, case studies and documentation. A lot of it isn't particularly exciting work, but it's the stuff that turns an idea into an actual business.",
			},
			{
				type: "heading",
				text: "Going all in",
			},
			{
				type: "paragraph",
				text: "I'm proud of the client work I've done over the years, but BugShield feels different because it's mine.",
			},
			{
				type: "paragraph",
				text: "It's something I want to keep building for the long term, and it's where I'm putting most of my time and energy now.",
			},
			{
				type: "paragraph",
				text: "Less jumping between random freelance jobs. More improving BugShield, adding features, making the platform better and hopefully building something WordPress site owners genuinely find useful.",
			},
			{
				type: "paragraph",
				segments: [
					{
						type: "text",
						text: "If you run a WordPress site and you're fed up with having to hunt around for someone every time something goes wrong, have a look at ",
					},
					{
						type: "link",
						text: "BugShield",
						url: "https://bugshield.co.uk",
					},
					{
						type: "text",
						text: ".",
					},
				],
			},
			{
				type: "paragraph",
				text: "This is the project I'm all in on.",
			},
		],
	},
];

export const getPostBySlug = (slug) => {
	return blogPosts.find((post) => post.slug === slug);
};
