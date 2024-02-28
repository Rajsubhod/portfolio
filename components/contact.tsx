'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {
	const { ref } = useSectionInView({ threshold: 0.5, sectionName: 'Contact' });

	return (
		<motion.section
			ref={ref}
			id="contact"
			className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center "
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}
		>
			<SectionHeading>Contact Me</SectionHeading>
			<p className="text-gray-700">
				Please contact me directly at{' '}
				<a className="underline" href="mailto:rajdeepmukherjee2002@gmail.com">
					rajdeepmukherjee2002@gmail.com
				</a>{' '}
				or through this form
			</p>
			<form className="mt-10 flex flex-col" action={sendEmail}>
				<input
					className="h-14 px-4 rounded-lg borderBlack  "
					name="senderEmail"
					type="email"
					placeholder="Your Email"
					// required
					maxLength={50}
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4 resize-none"
					name="message"
					placeholder="Your Message"
					maxLength={255}
				/>
				<button
					className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:scale-110 
                    focus:scale-110 hover:bg-gray-950 focus:bg-gray-950 active:scale-105"
					type="submit"
				>
					Submit{' '}
					<FaPaperPlane className="text-xs opacity-70 transition-all group-hover: translate-x-1 group-hover:-translate-y-1 " />{' '}
				</button>
			</form>
		</motion.section>
	);
}
