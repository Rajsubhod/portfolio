import React from 'react';

export default function SectionHeading({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<h2 className="font-medium text-3xl capitalize mb-8 pb-1 text-center">
			{children}
		</h2>
	);
}
