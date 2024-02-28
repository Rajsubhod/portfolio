'use server';

import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
	email: z
		.string({
			required_error: 'Please enter your email',
			invalid_type_error: 'Please enter a valid email',
		})
		.trim()
		.email(),
	message: z
		.string({
			required_error: 'Message cannot be empty',
		})
		.max(255, {
			message: 'Message cannot be more than 255 characters',
		}),
});

export const sendEmail = async (formData: FormData) => {
	const { email, message } = {
		email: formData.get('senderEmail'),
		message: formData.get('message'),
	};

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

	const validatedFields = schema.safeParse({ email, message });

	if (!validatedFields.success) {
		console.log(validatedFields.error.flatten().fieldErrors);
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		};
	}

	const { data, error } = await resend.emails.send({
		from: 'rejeo.wiki <onboarding@resend.dev>',
		to: ['rajdeepmukherjee2002@gmail.com'],
		subject: 'Hello, World!',
		text: message,
		reply_to: email,
	});

	if (error) {
		return {
			errors: error.message,
		};
	}
};

// export default async () => {
// 	const { data, error } = await resend.emails.send({
// 		from: 'Acme <onboarding@resend.dev>',
// 		to: ['delivered@resend.dev'],
// 		subject: 'Hello, World!',
// 		react: EmailTemplate({ firstName: 'John' }),
// 	});

// 	if (error) {
// 		return res.status(400).json(error);
// 	}

// 	res.status(200).json(data);
// };
