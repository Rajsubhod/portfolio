'use client';

import React, { useState } from 'react';
import type { SectionName, ActiveSectionContextType } from '@/lib/types';

export const ActiveSectionContext =
	React.createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [activeSection, setActiveSection] = useState<SectionName>('Home');
	const [timeofLastClick, setTimeofLastClick] = useState<number>(0);

	return (
		<ActiveSectionContext.Provider
			value={{
				activeSection,
				setActiveSection,
				timeofLastClick,
				setTimeofLastClick,
			}}
		>
			{children}
		</ActiveSectionContext.Provider>
	);
}

export function useActiveSectionContext() {
	const context = React.useContext(ActiveSectionContext);
	if (context === null) {
		throw new Error(
			'useActiveSectionContext must be used within a ActiveSectionContextProvider'
		);
	}
	return context;
}
