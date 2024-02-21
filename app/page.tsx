import About from '@/components/about';
import Intro from '@/components/intro';
import Projects from '@/components/project-list';
import SectionDivider from '@/components/section-divider';

export default function Home() {
	return (
		<main className="flex flex-col items-center px-4 ml-18">
			<Intro />
			<SectionDivider />
			<About />
			<Projects />
		</main>
	);
}
