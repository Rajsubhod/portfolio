import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Image, { StaticImageData } from 'next/image';

export default function Projects() {
	return (
		<section>
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

type ProjectType = {
	title: string;
	description: string;
	tags: string[];
	imageUrl: string | StaticImageData;
};

export const Project = ({
	title,
	description,
	tags,
	imageUrl,
}: ProjectType) => {
	return (
		<section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8">
			<h3 className="text-2xl font-semibold">{title}</h3>
			<p className="mt-2 leading-relaxed text-gray-700">{description}</p>
			<ul>
				{tags.map((tag, index) => (
					<li key={index}>{tag}</li>
				))}
			</ul>

			<Image src={imageUrl} quality={95} alt="Project I worked on" />
		</section>
	);
};
