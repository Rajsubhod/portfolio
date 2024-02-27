import { links } from './data';

export type SectionName = (typeof links)[number]['name'];

export type ActiveSectionContextType = {
	activeSection: SectionName;
	setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
	timeofLastClick: number;
	setTimeofLastClick: React.Dispatch<React.SetStateAction<number>>;
};
