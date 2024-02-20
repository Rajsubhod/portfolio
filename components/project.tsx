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
		<section className="group bg-gray-100 hover:bg-gray-200 transition max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0">
			<div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[20rem] ">
				<h3 className="text-2xl font-semibold">{title}</h3>
				<p className="mt-2 leading-relaxed text-gray-700">{description}</p>
				<ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
					{tags.map((tag, index) => (
						<li
							className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full "
							key={index}
						>
							{tag}
						</li>
					))}
				</ul>
			</div>
			<Image
				className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
				src={imageUrl}
				quality={95}
				alt="Project I worked on"
			/>
		</section>
	);
};
