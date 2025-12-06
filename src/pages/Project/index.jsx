import { useParams } from 'react-router-dom';
import ProjectHeader from '../../components/ProjectHeader';
import ProjectHero from '../../components/ProjectHero';
import ProjectOverview from '../../components/ProjectOverview';
import ProjectContent from '../../components/ProjectContent';
import ProjectGallery from '../../components/ProjectGallery';
import ProjectResults from '../../components/ProjectResults';
import ProjectNavigation from '../../components/ProjectNavigation';
import Footer from '../../components/Footer';
import NoiseBackground from '../../components/NoiseBackground';
import { getProjectBySlug } from '../../data/projects';

function Project() {
	const { slug } = useParams();
	const project = getProjectBySlug(slug);

	if (!project) {
		return (
			<div className="flex items-center justify-center min-h-screen bg-background dark:bg-[#0a0a0a]">
				<p className="text-black dark:text-white">Project not found</p>
			</div>
		);
	}

	return (
		<div className="flex flex-col lg:flex-row min-h-screen bg-background dark:bg-[#0a0a0a]">
			<NoiseBackground />

			<ProjectHeader projectTitle={project.title} />

			<main className="lg:flex-1 lg:ml-[300px] w-full relative bg-background-lighter dark:bg-[#0f0f0f]">
				<ProjectHero imageUrl={project.heroImage} />
				<ProjectOverview project={project} />
				<ProjectContent
					challenge={project.challenge}
					solution={project.solution}
					techStack={project.techStack}
				/>
				<ProjectGallery
					imageUrl={project.galleryImage}
					caption={project.galleryCaption}
				/>
				<ProjectResults outcomes={project.outcomes} />
				<ProjectNavigation
					previousProject={project.previousProject}
					nextProject={project.nextProject}
				/>
				<Footer />
			</main>
		</div>
	);
}

export default Project;
