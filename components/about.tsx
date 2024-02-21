'use client';

import React from 'react';
import SectionHeading from '@/components/section-heading';
import { motion } from 'framer-motion';

export default function About() {
	return (
		<motion.section
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-m-28"
			id="about"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
		>
			<SectionHeading>About Me</SectionHeading>
			<p>
				After graduating with a degree in{' '}
				<span className="font-medium">Accounting</span>, I decided to pursue my
				passion for programming. I enrolled in a coding bootcamp and learned{' '}
				<span className="font-medium">full-stack web development</span>.{' '}
				<span className="italic">My favorite part of programming</span> is the
				problem-solving aspect. I <span className="underline">love</span> the
				feeling of finally figuring out a solution to a problem. My core stack
				is{' '}
				<span className="font-medium">
					React, Next.js, Node.js, and MongoDB
				</span>
				. I am also familiar with TypeScript and Prisma. I am always looking to
				learn new technologies. I am currently looking for a{' '}
				<span className="font-medium">full-time position</span> as a software
				developer.
			</p>
		</motion.section>
	);
}
