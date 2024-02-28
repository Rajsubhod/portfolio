'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
	intial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};

export default function Skills() {
	const { ref } = useSectionInView({ sectionName: 'Skills', threshold: 0.5 });
	return (
		<section
			ref={ref}
			id="skills"
			className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-48 relative"
		>
			<SectionHeading>My Skills</SectionHeading>

			<div className=" ml-1 sm:m-0 w-[110%] sm:w-[55rem] h-[23rem] sm:h-[15rem] bg-gray-200 -z-10 mt-12 rounded-lg sm:rounded-full blur-2xl absolute  top-0 -left-4 dark:bg-gray-800 "></div>
			<ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
				{skillsData.map((skill, index) => (
					<motion.li
						className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 "
						key={index}
						variants={fadeInAnimationVariants}
						initial="intial"
						whileInView="animate"
						viewport={{
							once: true,
						}}
						custom={index}
					>
						{skill}
					</motion.li>
				))}
			</ul>
		</section>
	);
}
