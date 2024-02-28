import React from 'react';
import {
	Html,
	Body,
	Head,
	Heading,
	Hr,
	Container,
	Preview,
	Section,
	Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

export default function ContactFormEmail({
	message,
	senderMail,
}: {
	message: string;
	senderMail: string;
}) {
	return (
		<Html lang="en">
			<Head />
			<Preview>New message from your portfolio site</Preview>
			<Tailwind>
				<Body className="bg-gray-100 !text-black flex flex-col justify-left items-center">
					<Container>
						<Section className="bg-white borderBlack">
							<Heading className="leading-tight p-6">
								Hey, you've got a new message!
							</Heading>
							<Text className="p-6 pt-3">{message}</Text>
							<Hr />
							<Text className="pl-6">Sender's email is : {senderMail} </Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
