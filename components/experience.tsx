'use client';

import React, { useContext } from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { experiencesData } from '@/lib/data';

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@/context/theme-context';

export default function Experience() {
	const { ref } = useSectionInView({
		threshold: 0.8,
		sectionName: 'Experience',
	});

	const { ref: timeLineRef, inView } = useInView({
		triggerOnce: true,
	});

	const { theme } = useTheme();
	return (
		<div ref={timeLineRef}>
			<section
				ref={ref}
				id="experience"
				className="scroll-mt-28 mb-28 sm:mb-40"
			>
				<SectionHeading>Experience</SectionHeading>
				<VerticalTimeline lineColor="" animate={true}>
					{experiencesData.map((item, index) => (
						<React.Fragment key={index}>
							<VerticalTimelineElement
								visible={inView}
								contentStyle={{
									background:
										theme === 'light' ? '#f3f4f6' : 'rgba(255,255,255,0.05)',
									boxShadow: 'none',
									border: '1px solid rgba(0, 0, 0, 0.05)',
									textAlign: 'left',
									padding: '1.3rem 2rem',
								}}
								contentArrowStyle={{
									borderRight:
										theme === 'light'
											? '0.4rem solid #9ca3af'
											: '0.4rem solid rgba(255,255,255,0.5)',
								}}
								date={item.date}
								icon={item.icon}
								iconStyle={{
									background:
										theme === 'light' ? 'white' : 'rgba(255,255,255,0.15)',
									fontSize: '1.5rem',
									boxShadow:
										theme === 'light'
											? '0 0 0 4px #fff, 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)'
											: '0 0 0 4px rgba(255,255,255,0.15), 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)',
									transition: 'all 0.3s ease-in-out',
								}}
							>
								<h3 className="font-semibold capitalize">{item.title}</h3>
								<p className="font-normal !mt-0">{item.location}</p>
								<p className="!mt-1 !font-normal text-gray-700 dark:text-gray-500">
									{item.description}
								</p>
							</VerticalTimelineElement>
						</React.Fragment>
					))}
				</VerticalTimeline>
			</section>
		</div>
	);
}
