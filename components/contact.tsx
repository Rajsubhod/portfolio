'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Rings } from 'react-loader-spinner';

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
			<Formik
				initialValues={{ senderEmail: '', message: '' }}
				validationSchema={yup.object({
					senderEmail: yup
						.string()
						.email('Please enter a valid email')
						.required('Please enter your email'),
					message: yup
						.string()
						.required('Message cannot be empty')
						.max(255, 'Message cannot be more than 255 characters'),
				})}
				onSubmit={(values, actions) => {
					setTimeout(() => {
						sendEmail({ values });
						actions.setSubmitting(false);
						actions.resetForm();
					}, 1500);
				}}
			>
				{(formik) => (
					<form className="mt-10 flex flex-col" onSubmit={formik.handleSubmit}>
						<input
							className="h-14 px-4 rounded-lg borderBlack  "
							type="email"
							placeholder="Your Email"
							disabled={formik.isSubmitting}
							// required
							maxLength={50}
							{...formik.getFieldProps('senderEmail')}
						/>
						{formik.touched.senderEmail && formik.errors.senderEmail ? (
							<div className="text-red-600 font-medium">
								{formik.errors.senderEmail}
							</div>
						) : null}
						<textarea
							className="h-52 my-3 rounded-lg borderBlack p-4 resize-none"
							placeholder="Your Message"
							maxLength={255}
							disabled={formik.isSubmitting}
							{...formik.getFieldProps('message')}
						/>
						{formik.touched.message && formik.errors.message ? (
							<div className="text-red-600 font-medium">
								{formik.errors.message}
							</div>
						) : null}

						<div className="flex justify-left items-center gap-2">
							<button
								className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:bg-gray-950 active:scale-105"
								type="submit"
								disabled={formik.isSubmitting}
							>
								Submit{' '}
								<FaPaperPlane className="text-xs opacity-70 transition-all group-hover: translate-x-1 group-hover:-translate-y-1 " />{' '}
							</button>
							{formik.isSubmitting && (
								<Rings color="black" radius={5} ariaLabel="submitting" />
							)}
						</div>
					</form>
				)}
			</Formik>
		</motion.section>
	);
}
