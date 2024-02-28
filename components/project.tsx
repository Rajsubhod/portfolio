'use client';

import React, { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';

type ProjectType = {
	title: string;
	description: string;
	tags: string[];
	imageUrl: string | StaticImageData;
};

export default function Project({
	title,
	description,
	tags,
	imageUrl,
}: ProjectType) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	});

	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
	return (
		<motion.div
			className=" group mb-3 sm:mb-8 last:mb-0"
			ref={ref}
			style={{ scale: scaleProgress, opacity: opacityProgress }}
		>
			<section className=" rounded-lg bg-gray-200 hover:bg-gray-300 transition max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] select-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white ">
				<div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flec-wrap flex-col h-full sm:group-even:ml-[20rem] ">
					<h3 className="text-2xl font-semibold">{title}</h3>
					<p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
						{description}
					</p>
					<ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
						{tags.map((tag, index) => (
							<li
								className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
								key={index}
							>
								{tag}
							</li>
						))}
					</ul>
				</div>
				<Image
					className="hidden sm:block absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
					src={imageUrl}
					quality={95}
					alt="Project I worked on"
				/>
			</section>
		</motion.div>
	);
}
