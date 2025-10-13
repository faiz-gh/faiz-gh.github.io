'use client';

import './globals.css';
import { useTheme, ThemeProvider } from './components/theme/ThemeProvider';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const metadata: Metadata = {
	title: 'Faiz Ghanchi - Backend Developer',
	description:
		'Welcome to my portfolio! I am a passionate backend developer specializing in building scalable server architectures, robust APIs, and high-performance distributed systems. With expertise in cloud infrastructure and database optimization, I create efficient and reliable backend solutions.',
	keywords: [
		'Backend Developer',
		'Software Engineer',
		'System Architecture',
		'API Development',
		'Database Design',
		'Cloud Computing',
		'Microservices',
		'DevOps',
		'Faiz Ghanchi',
		'Node.js',
		'Python',
		'Java',
		'Distributed Systems',
		'System Design',
		'Backend Architecture',
	],
	authors: [{ name: 'Faiz Ghanchi' }],
	creator: 'Faiz Ghanchi',
	openGraph: {
		title: 'Faiz Ghanchi - Backend Developer Portfolio',
		description: 'Passionate backend developer crafting scalable and efficient server architectures. Explore my projects and technical expertise.',
		url: 'https://faizghanchi.com',
		siteName: 'Faiz Ghanchi - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Faiz Ghanchi - Backend Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Faiz Ghanchi - Backend Developer',
		description: 'Passionate backend developer crafting scalable and efficient server architectures. Explore my projects and technical expertise.',
		creator: '@faizgh04',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

function RootLayout({ children }: { children: React.ReactNode }) {
	const { theme } = useTheme();

	return (
		<html lang="en" className={theme} suppressHydrationWarning>
			<body>
				<div className="antialiased">{children}</div>
			</body>
		</html>
	);
}

export default function BackendDeveloperLayout({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider>
			<RootLayout>
				{children}
				<Analytics />
			</RootLayout>
		</ThemeProvider>
	);
}
