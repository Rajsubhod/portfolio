import React from 'react';

const Footer = () => {
	return (
		<footer className="mb-10 px-4 text-center text-gray-500">
			<small className="mb-2 block text-xs">
				&copy; 2024 Rajdeep. All rights reserved.
			</small>
			<p className="text-xs">
				<span className="font-semibold">About this website:</span> built with
				Next.js, Tailwind CSS, TypeScript, Framer Motion, React-Email,
				ResendFormik, Yup and more.
			</p>
		</footer>
	);
};

export default Footer;
