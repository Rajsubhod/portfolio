import About from '@/components/about';
import Intro from '@/components/intro';
import Projects from '@/components/project-list';
import Skills from '@/components/skills';
import SectionDivider from '@/components/section-divider';
import Experience from '@/components/experience';
import Contact from '@/components/contact';

export default function Home() {
	return (
		<main className="flex flex-col items-center pl-6 px-4 ml-18">
			<Intro />
			<SectionDivider />
			<About />
			<Projects />
			<Skills />
			<Experience />
			<Contact />
		</main>
	);
}
