'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Rajdeep from '@/public/Rajdeep.jpeg';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
	const { ref } = useSectionInView({ sectionName: 'Home', threshold: 0.5 });

	const { setActiveSection, setTimeofLastClick } = useActiveSectionContext();
	return (
		<section
			ref={ref}
			className="mb-28 max-w-[42rem] text-center sm:mb-0 select-none scroll-m-[100rem]"
			id="home"
		>
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: 'tween', duration: 0.2 }}
					>
						<Image
							src={Rajdeep}
							alt="Rajdeep"
							height={192}
							width={192}
							quality="95"
							priority={true}
							className="h-24 w-24 object-cover rounded-full border-[0.35rem] border-white shadow-xl "
							draggable={false}
						/>
					</motion.div>
					<motion.span
						className="absolute bottom-0 right-0 text-2xl"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: 'spring',
							stiffness: 125,
							delay: 0.1,
							duration: 0.7,
						}}
					>
						👋
					</motion.span>
				</div>
			</div>
			<motion.h1
				className="mb-10 mt-4 px-4 text-xl font-medium  sm:text-2xl "
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span className="font-bold">Hi, I'm Rajdeep.</span> I'm a{' '}
				<span>
					{' '}
					Full Stack Developer with a passion for React and Springboot.{' '}
				</span>{' '}
				<span>Currently exploring the field of AI and ML</span>
			</motion.h1>
			<motion.div
				className="flex gap-2 items-center justify-center flex-col sm:flex-row px-4 text-lg font-medium w-full"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
			>
				<Link
					href="#contact"
					className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
					sm:hover:scale-110 hover:bg-gray-950 	sm:hover:translate-x-[-1rem] active:scale-90 sm:active:scale-105 
					sm:active:translate-x-[-0.5rem]
					transition group"
					draggable={false}
					onClick={(e) => {
						setActiveSection('Contact');
						setTimeofLastClick(Date.now());
					}}
				>
					Contact me Here{' '}
					<BsArrowRight
						className="opacity-70 group-hover:translate-x-1 group-active:translate-x-0
					group-hover:opacity-100
					transition"
					/>
				</Link>

				<a
					className="bg-white text-black px-[1.50rem] py-3 flex items-center gap-2 rounded-full sm:hover:scale-110 hover:bg-gray-300	sm:hover:translate-x-[1rem] active:scale-90 sm:active:scale-105 sm:active:translate-x-[0.5rem] transition group cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/30 "
					href="/My Resume.pdf"
					download={true}
					draggable={false}
				>
					Download Resume{' '}
					<HiDownload
						className="opacity-70 group-hover:translate-x-1 group-active:translate-x-0
					group-hover:opacity-100
					transition"
					/>
				</a>
				<div className="flex justify-center items-center gap-3">
					<a
						className="bg-white ml-6 p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition 
						hover:bg-gray-300 cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/30 "
						href="https://linkedin.com/in/rajdeép-mukherjee/"
						target="_blank"
					>
						<BsLinkedin />
					</a>

					<a
						className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition  hover:bg-gray-300 cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/30 "
						href="https://github.com/Rajsubhod"
						target="_blank"
					>
						<FaGithubSquare />
					</a>
				</div>
			</motion.div>
		</section>
	);
}
