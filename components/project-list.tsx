'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from '@/components/project';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
	const { ref } = useSectionInView({ sectionName: 'Projects', threshold: 0.5 });

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
