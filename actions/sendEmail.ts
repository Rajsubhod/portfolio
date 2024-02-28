'use server';

import { Resend } from 'resend';
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

type dataType = {
	values: {
		senderEmail: string;
		message: string;
	};
};

export const sendEmail = async (formData: dataType) => {
	const { senderEmail: email, message } = formData.values;

	const { error } = await resend.emails.send({
		from: 'www.rejeo.wiki <onboarding@resend.dev>',
		to: ['rajdeepmukherjee721@gmail.com'],
		subject: 'Hello, World!',
		// text: message,
		react: React.createElement(ContactFormEmail, {
			message,
			senderMail: email,
		}),
		reply_to: email,
	});

	if (error) {
		return Promise.reject(error.message);
	}

	return 'Email sent successfully';
};
