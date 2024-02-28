'use client';

import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

type Theme = 'light' | 'dark';
type ThemeContextType = {
	theme: Theme;
	toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
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
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = React.useContext(ThemeContext);
	if (context === null) {
		toast.error('Somthing Went Wrong! Please try again later.');
		throw new Error('useTheme must be used within a ThemeContextProvider');
	}

	return context;
}
