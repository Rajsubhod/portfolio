import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: "Rajdeep's | Portfolio",
	description:
		'Rajdeep is a Full Stack Developer and a Cyber Security Enthusiast.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="!scroll-smooth">
			<body
				className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
			>
				<div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
				<div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[60rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem]sm:left-[-38rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

				<ActiveSectionContextProvider>
					<Header />
					{children}
					<Footer />
				</ActiveSectionContextProvider>
			</body>
		</html>
	);
}
