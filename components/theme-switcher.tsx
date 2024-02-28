'use client';

import React, { use, useEffect } from 'react';
import { BsMoon, BsSun, BsSunFill } from 'react-icons/bs';

type Theme = 'light' | 'dark';

export default function ThemeSwitcher() {
	const [theme, setTheme] = React.useState<Theme>('light');

	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
			window.localStorage.setItem('theme', 'dark');
			document.documentElement.classList.add('dark');
		} else {
			setTheme('light');
			window.localStorage.setItem('theme', 'light');
			document.documentElement.classList.remove('dark');
		}
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme') as Theme | null;
		if (localTheme) {
			setTheme(localTheme);
			document.documentElement.classList.add(localTheme);
		} else if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			setTheme('dark');
			document.documentElement.classList.add('dark');
		} else {
			setTheme('light');
		}
	}, [theme]);

	return (
		<button
			className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-xl shadow-black/20 rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:shadow-lg dark:shadow-white/20 "
			onClick={toggleTheme}
		>
			{theme === 'light' ? <BsSunFill /> : <BsMoon />}
		</button>
	);
}
