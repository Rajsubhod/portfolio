import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import portfolioImg from '@/public/portfolio.png';
import todoNoterImg from '@/public/todoNoter.png';

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const;

export const experiencesData = [
	{
		title: 'Enrolled in University',
		location: 'Kolkata, India',
		description:
			'I am currently enrolled in a university in India. Pursuing a degree in Computer Science and Engineering. I am in my final year.',
		icon: React.createElement(LuGraduationCap),
		date: '2021 - present',
	},
] as const;

export const projectsData = [
	{
		title: 'Todo Noter',
		description:
			'Todo Noter is a simple todo app with a note-taking feature. It is built with React & Vite and styled with Tailwind CSS & Shadcn and host on Vercel.',
		tags: ['React', 'Tailwind', 'TypeScript', 'Vite.js', 'Shadcn'],
		imageUrl: todoNoterImg,
	},
	{
		title: 'My Portfolio',
		description:
			'I worked on this portfolio to showcase my skills and projects. It is built with Next.js & Tailwind CSS and host on Vercel.',
		tags: [
			'React',
			'Next.js',
			'Tailwind',
			'TypeScript',
			'Framer Motion',
			'Resend',
			'formik',
			'yup',
		],
		imageUrl: portfolioImg,
	},
];

export const skillsData = [
	'Java',
	'Spring',
	'OOPs',
	'Spring Boot',
	'JWT',
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'Git',
	'Tailwind',
	'MongoDB',
	'Redux',
	'MySQL',
	'Python',
] as const;
