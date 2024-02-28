'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type dataType = {
	values: {
		senderEmail: string;
		message: string;
	};
};

export const sendEmail = async (formData: dataType) => {
	const { senderEmail: email, message } = formData.values;

	if (
		!email ||
		!message ||
		typeof email !== 'string' ||
		typeof message !== 'string'
	) {
		return {
			errors: {
				email: 'Please enter your email',
				message: 'Message cannot be empty',
			},
		};
	}

	const { data, error } = await resend.emails.send({
		from: 'www.rejeo.wiki <onboarding@resend.dev>',
		to: ['rajdeepmukherjee721@gmail.com'],
		subject: 'Hello, World!',
		text: message,
		reply_to: email,
	});

	if (error) {
		return error.message;
	}

	return 'Email sent successfully';
};
