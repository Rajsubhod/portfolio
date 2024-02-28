'use client';

import { useTheme } from '@/context/theme-context';
import React from 'react';
import { BsMoon, BsSunFill } from 'react-icons/bs';

export default function ThemeSwitcher() {
	const { theme, toggleTheme } = useTheme();
	return (
		<button
			className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-xl shadow-black/20 rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:shadow-lg dark:shadow-white/20 "
			onClick={toggleTheme}
		>
			{theme === 'light' ? <BsSunFill /> : <BsMoon />}
		</button>
	);
}
