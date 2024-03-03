'use client';

import React from 'react';
import SectionHeading from '@/components/section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
	const { ref } = useSectionInView({ sectionName: 'About', threshold: 0.75 });

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-m-28"
			id="about"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
		>
			<SectionHeading>About Me</SectionHeading>
			<p>
				I'm currently pursuing a degree in{' '}
				<span className="font-medium">Computer Science & Engineering.</span>
				<br /> I want to pursue my passion for programming following the path of
				a <span className="font-medium">full-stack web developer</span>.{' '}
				<span className="italic">My favorite part of programming</span> is the
				problem-solving aspect. I <span className="underline">love</span> the
				feeling of finally figuring out/debugging a solution to a problem. My
				core stack is{' '}
				<span className="font-medium">
					React, Next.js, Spring boot, and MySQL
				</span>
				. I am also familiar with TypeScript, MongoDB. I am always looking to
				learn new technologies. I am currently looking for a{' '}
				<span className="font-medium">full/part-time position</span> as a
				software developer.
			</p>
		</motion.section>
	);
}
