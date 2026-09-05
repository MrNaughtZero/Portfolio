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
	{
		slug: "i-hacked-the-target-omni",
		date: "2026 / 09 / 05",
		title: "I hacked the Target Omni and found out how insecure it actually is",
		category: "Security",
		content: [
			{
				type: "callout",
				paragraphs: [
					{
						segments: [
							{ type: "bold", text: "I emailed Target three times." },
						],
					},
					{
						segments: [
							{ type: "text", text: "Those emails were opened " },
							{ type: "bold", text: "14 times" },
							{
								type: "text",
								text: ". Nobody replied. Nobody asked for more detail. Nobody asked how to fix it.",
							},
						],
					},
					{
						text: "I was offering them a chance to lock their own product down before I wrote about it. They had the messages. They read them. They chose not to engage.",
					},
				],
			},
			{
				type: "paragraph",
				text: "I bought a Target Omni because, on paper, it's a brilliant bit of kit.",
			},
			{
				type: "paragraph",
				text: "Four cameras around a dartboard watch where your darts land, work out the score, and send it into DartCounter. The hardware is genuinely impressive.",
			},
			{
				type: "paragraph",
				text: "The software is what got to me.",
			},
			{
				type: "paragraph",
				segments: [
					{
						type: "text",
						text: "After enough time with DartCounter, I was frustrated enough to ask a fairly reasonable question: ",
					},
					{
						type: "bold",
						text: "I've already paid for the Omni. Why can't I just build my own app and use the hardware with that instead?",
					},
				],
			},
			{
				type: "paragraph",
				text: "I wasn't looking for a vulnerability. I wasn't trying to cheat. I wanted to understand how my Omni talked to DartCounter so I could put my own interface on top of it.",
			},
			{
				type: "paragraph",
				text: "What I found went a lot further than that.",
			},
			{
				type: "paragraph",
				text: "By the end, I had effectively full access to the system running inside my Omni. I could look at the filesystem, see what was running, get at the software that operates the device, and, critically, read its source code.",
			},
			{
				type: "paragraph",
				text: "That code showed me how the Omni works. It also made something else obvious: with this level of access, messing with the scoring system, and potentially cheating, wasn't a theoretical stretch. It was sitting right there.",
			},
			{
				type: "paragraph",
				text: "I told Target. Three emails. Those emails were opened 14 times. Silence.",
			},
			{
				type: "heading",
				text: "It started because I didn't like DartCounter",
			},
			{
				type: "paragraph",
				text: "There's no hacker origin story. I just wasn't that keen on DartCounter.",
			},
			{
				type: "paragraph",
				text: "The Omni itself is a great idea. Automatic scoring on a real dartboard makes online darts much more fun. But you're stuck in Target's software ecosystem, and I wanted more control.",
			},
			{
				type: "paragraph",
				text: "I'm a developer, so the next thought was obvious: why don't I just build my own?",
			},
			{
				type: "paragraph",
				text: "I didn't need to reinvent the computer vision. The Omni had already solved the hard problem of working out where a dart landed. I just needed the result:",
			},
			{
				type: "blockquote",
				text: "Dart detected → Treble 20 → 60 points",
			},
			{
				type: "paragraph",
				text: "If I could work out how the Omni sent that information, I could feed it into my own app. So I started poking at a device I owned.",
			},
			{
				type: "heading",
				text: "The Omni is more than four cameras",
			},
			{
				type: "paragraph",
				text: "From the outside it looks simple: four cameras and a box. Underneath, it's a small computer on your network. It has an operating system, it runs software, it has services listening for connections, and it talks to other devices on the LAN.",
			},
			{
				type: "paragraph",
				text: "Once that clicked, the goal was straightforward: find out what it was running, and how everything else talked to it.",
			},
			{
				type: "paragraph",
				text: "I looked at my local network, found the Omni, and started examining the services it exposed.",
			},
			{
				type: "paragraph",
				text: "That's when my opinion of its security started to change.",
			},
			{
				type: "heading",
				text: "I got in",
			},
			{
				type: "paragraph",
				text: "I'm going to skip some details here. There's a difference between describing a security problem and publishing a walkthrough anyone with an Omni can follow.",
			},
			{
				type: "paragraph",
				text: "After looking at the services the device exposed, I found a route that gave me far more access than I expected. Not a locked-down Omni API. Not \"please send the latest score.\" System-level access to my own device.",
			},
			{
				type: "paragraph",
				text: "At that point the question stopped being \"how does DartCounter get my score?\" and became \"why can I see all of this?\"",
			},
			{
				type: "heading",
				text: "I could explore the filesystem",
			},
			{
				type: "paragraph",
				text: "Inside, the Omni stopped being a black box hanging around my dartboard. I could look at directories, config, processes, services, application files, logs, dependencies, the usual contents of a Linux box.",
			},
			{
				type: "paragraph",
				text: "As a developer, that was fascinating. As a security finding, it was worrying.",
			},
			{
				type: "paragraph",
				text: "A consumer IoT device should assume its owner is curious, and possibly hostile. If getting into one part of the system hands you the rest of it, a single weakness suddenly matters a lot more.",
			},
			{
				type: "paragraph",
				text: "And the most interesting thing on that filesystem was the Omni software itself.",
			},
			{
				type: "heading",
				text: "Then I found the source code",
			},
			{
				type: "paragraph",
				text: "This is where the original project got a lot easier.",
			},
			{
				type: "paragraph",
				text: "I'd started by trying to reverse-engineer the Omni from the outside. Now I could see how parts of it actually worked. I found the application code that runs the system: how components talk to each other, how scores are represented, which services are involved, how events move from one part of the software to another.",
			},
			{
				type: "paragraph",
				text: "I'm not publishing that source code. I'm not publishing where it lives, or the full sequence I used to get it.",
			},
			{
				type: "paragraph",
				text: "Having it just made everything clearer. Instead of guessing from network traffic, I could compare what I was seeing on the wire with what the software was actually doing. Building my own darts app suddenly looked realistic.",
			},
			{
				type: "paragraph",
				text: "Then another question came up, almost inevitably.",
			},
			{
				type: "heading",
				text: "If I control the Omni, can I control the score?",
			},
			{
				type: "paragraph",
				text: "Automatic scoring is supposed to create trust.",
			},
			{
				type: "paragraph",
				text: "If you're playing someone online and they're typing scores in by hand, they can lie. They throw 45 and enter 85. There's not much you can do about that.",
			},
			{
				type: "paragraph",
				text: "The Omni is meant to fix it. Four cameras see where the darts landed; the software does the rest. When it says someone hit a 180, you have a better reason to believe it.",
			},
			{
				type: "paragraph",
				text: "Except I'd just got extensive control over the machine that produces that trusted number. So I tested what happened if I interfered with it.",
			},
			{
				type: "paragraph",
				text: "That's where it got messy.",
			},
			{
				type: "heading",
				text: "Yes, this could be used to cheat",
			},
			{
				type: "paragraph",
				text: "Once you have enough control over the scoring system, the darts on the board and the score on the screen don't have to match.",
			},
			{
				type: "paragraph",
				segments: [
					{ type: "text", text: "Take a bad visit: " },
					{ type: "bold", text: "20 + 5 + 1 = 26" },
					{
						type: "text",
						text: ". The cameras can still read those darts correctly. But if someone can interfere with what happens ",
					},
					{ type: "em", text: "after" },
					{
						type: "text",
						text: " detection, the software can end up reporting something else entirely: ",
					},
					{ type: "bold", text: "T20 + T20 + T20 = 180" },
					{ type: "text", text: "." },
				],
			},
			{
				type: "paragraph",
				text: "You haven't fooled the cameras. That's the point. You don't have to beat the cleverest part of the product. Target may have built a very accurate vision system. You don't need to defeat that if you can compromise the computer processing the results.",
			},
			{
				type: "heading",
				text: "Cheating could be much quieter than fake 180s",
			},
			{
				type: "paragraph",
				text: "Someone throwing 26 and scoring 180 every visit wouldn't last five minutes. Their opponent would notice. Their stats would look insane.",
			},
			{
				type: "paragraph",
				text: "That's not what makes this access worrying.",
			},
			{
				type: "paragraph",
				text: "The useful version is subtle. A 45 becomes 60. A bad dart disappears from a visit. A dart that missed the double by a whisker becomes a checkout. You wouldn't need to turn yourself into Luke Littler. You'd only need a small nudge at the right moment, which is much harder for an opponent, or even an automated anti-cheat system, to spot.",
			},
			{
				type: "heading",
				text: "The bigger problem isn't cheating",
			},
			{
				type: "paragraph",
				text: "Cheating is a useful example because everyone immediately gets the consequence. It's not what bothered me most.",
			},
			{
				type: "paragraph",
				text: "The bigger issue is how much access I got.",
			},
			{
				type: "paragraph",
				text: "I started with a consumer device on my network and a simple goal: understand its protocol. I ended up with extensive access to the underlying system and the software that runs it. Those are not the same thing.",
			},
			{
				type: "paragraph",
				text: "Security should be layered. Finding one exposed service shouldn't hand you sensitive application files. Compromising an application shouldn't give you the operating system. Getting the operating system shouldn't dump secrets and other internals in your lap.",
			},
			{
				type: "paragraph",
				text: "That's defence in depth, and the idea is simple: assume one layer will fail. What stops the next one?",
			},
			{
				type: "heading",
				text: "Physical ownership changes the model",
			},
			{
				type: "paragraph",
				text: "Devices like the Omni have an awkward security problem: they live in the customer's house.",
			},
			{
				type: "paragraph",
				text: "I control the network. I physically have the device. I can watch its traffic for as long as I want, restart it, poke it thousands of times, compare what happens when I throw different darts. Nobody is rushing me.",
			},
			{
				type: "paragraph",
				text: "That's why security through obscurity is a poor bet for consumer hardware. You have to assume someone curious will eventually take it apart. The system shouldn't rely on nobody understanding how it works.",
			},
			{
				type: "heading",
				text: "I still want my own darts app",
			},
			{
				type: "paragraph",
				text: "Despite all of this, the original motivation hasn't really changed. I still think the Omni hardware is great. I still want more freedom over the software I use with it.",
			},
			{
				type: "paragraph",
				text: "The investigation taught me far more about how the Omni works than I expected, and it opened up some genuinely interesting options for my own software. It also showed why connected sporting kit needs to be treated as a security-sensitive system, especially when it's being used to verify results between people competing remotely.",
			},
			{
				type: "paragraph",
				text: "If a device is acting as the referee, compromising that device means compromising the referee.",
			},
			{
				type: "heading",
				text: "Why I'm not publishing everything",
			},
			{
				type: "paragraph",
				text: "I could make this much more technical. I could name the services, show exactly how I got in, include commands, publish chunks of source, and go into more detail on how scores could be changed.",
			},
			{
				type: "paragraph",
				text: "I'm not going to.",
			},
			{
				type: "paragraph",
				text: "There's enough here for developers and security people to understand what I found and why it matters. There isn't enough to turn this into \"how to cheat at DartCounter in five minutes.\" That distinction matters.",
			},
			{
				type: "paragraph",
				text: "Dumping proprietary source from the device onto the internet wouldn't add much either. The finding isn't the code. It's the level of access I was able to get.",
			},
			{
				type: "paragraph",
				text: "Target had the same opportunity I did: ask for the details, fix the problem, make the next person's curiosity less dangerous. They opened the emails. They didn't take it.",
			},
			{
				type: "heading",
				text: "I didn't expect to find this",
			},
			{
				type: "paragraph",
				text: "None of this started as a security audit. I wasn't sat around asking how to hack the Target Omni. I was asking whether I could make a better darts app.",
			},
			{
				type: "paragraph",
				text: "So I investigated a device I owned. That went from watching network traffic, to finding the Omni, to looking at the services it exposed, to getting in, to exploring the system, to finding the application code, to understanding scoring, and eventually to realising that my access had implications for the integrity of online games.",
			},
			{
				type: "paragraph",
				text: "That's the part of this work I like. Sometimes you don't start with a vulnerability. You start with curiosity.",
			},
			{
				type: "heading",
				text: "Final thoughts",
			},
			{
				type: "paragraph",
				text: "I still like the Target Omni. The hardware is why I started. It's a clever product, and automatic scoring makes online darts better.",
			},
			{
				type: "paragraph",
				text: "But I came away with serious questions about the security around it.",
			},
			{
				type: "paragraph",
				text: "A consumer shouldn't be able to go from \"I wonder how this talks to the app?\" to effectively full access to the system and the application source as easily as I did. And when that same device is responsible for trusted scores on an online competitive platform, the weaknesses don't stop at the dartboard.",
			},
			{
				type: "paragraph",
				text: "Once you control the machine acting as the referee, you have to start questioning whether you can trust the result.",
			},
			{
				type: "paragraph",
				text: "I just wanted to build my own darts app.",
			},
			{
				type: "paragraph",
				text: "I ended up owning the referee.",
			},
			{
				type: "paragraph",
				text: "They had three chances to talk to me about it. They opened the emails fourteen times. They never wrote back.",
			},
			{
				type: "disclaimer",
				text: "This research was performed against hardware and network infrastructure I own and control. I contacted Target three times before publishing. Those emails were opened 14 times. I received no response, and no request for further information that would have helped them secure the system. I have intentionally omitted specific exploitation steps, credentials, commands, source code and other information that could make reproduction or abuse unnecessarily easy.",
			},
		],
	},
];

export const getPostBySlug = (slug) => {
	return blogPosts.find((post) => post.slug === slug);
};
