'use client';

import React from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from '@/components/project';

export default function Projects() {
	const { ref, inView } = useInView({
		threshold: 0.5,
	});
	const { setActiveSection } = useActiveSectionContext();

	useEffect(() => {
		if (inView) {
			setActiveSection('Projects');
		}
	}, [inView, setActiveSection]);
	return (
		<section ref={ref} id="projects" className="scroll-m-28">
			<SectionHeading>My projects</SectionHeading>
			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
