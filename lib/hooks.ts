import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionName } from '@/lib/types';

export function useSectionInView({
	threshold = 0.75,
	sectionName,
}: {
	threshold?: number;
	sectionName: SectionName;
}) {
	const { ref, inView } = useInView({
		threshold,
	});
	const {
		activeSection,
		setActiveSection,
		timeofLastClick,
		setTimeofLastClick,
	} = useActiveSectionContext();

	useEffect(() => {
		if (inView && Date.now() - timeofLastClick > 1000) {
			setActiveSection(sectionName);
		}
	}, [inView, setActiveSection, timeofLastClick, sectionName]);

	return { ref };
}
