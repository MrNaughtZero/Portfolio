import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Work from '../../components/Work';
import TechStack from '../../components/TechStack';
import Writing from '../../components/Writing';
import Feedback from '../../components/Feedback';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import NoiseBackground from '../../components/NoiseBackground';

function Home() {
	return (
		<div className="flex flex-col lg:flex-row min-h-screen bg-background dark:bg-[#0a0a0a]">
			<NoiseBackground />

			<Header />

			<main className="lg:flex-1 lg:ml-[300px] w-full relative bg-background-lighter dark:bg-[#0f0f0f]">
				<Hero />
				<Work />
				<TechStack />
				<Writing />
				<Feedback />
				<Contact />
				<Footer />
			</main>
		</div>
	);
}

export default Home;
