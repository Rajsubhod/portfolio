'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { experiencesData } from '@/lib/data';

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useInView } from 'react-intersection-observer';

export default function Experience() {
	const { ref } = useSectionInView({
		threshold: 0.8,
		sectionName: 'Experience',
	});

	const { ref: timeLineRef, inView } = useInView({
		triggerOnce: true,
	});
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
									background: '#f3f4f6',
									boxShadow: 'none',
									border: '1px solid rgba(0, 0, 0, 0.05)',
									textAlign: 'left',
									padding: '1.3rem 2rem',
								}}
								contentArrowStyle={{
									borderRight: '0.4rem solid #9ca3af',
								}}
								date={item.date}
								icon={item.icon}
								iconStyle={{
									background: 'white',
									fontSize: '1.5rem',
									boxShadow:
										'0 0 0 4px #fff, 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)',
								}}
							>
								<h3 className="font-semibold capitalize">{item.title}</h3>
								<p className="font-normal !mt-0">{item.location}</p>
								<p className="!mt-1 !font-normal text-gray-700">
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
