import { RelativeUrl } from '../../types/url';
import Head from 'next/head';
import { WebApplication, WithContext } from 'schema-dts';

export function Metadata(props: { title: string; url: RelativeUrl }) {
	return (
		<Head>
			<title>{props.title}</title>

			<meta
				name="description"
				content="A simple way to track your mental health."
			/>
			<meta name="author" content="Julian Lachniet" />
			<meta name="color-scheme" content="dark" />
			<meta name="theme-color" content="#262626" />

			<meta property="og:title" content={props.title} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`https://moodgraph.app${props.url}`} />
			<meta
				property="og:image"
				content="https://moodgraph.app/favicons/icon-512x512.png"
			/>
			<meta
				property="og:image:alt"
				content="The Mood Graph logo, a purple-blue heart."
			/>
			<meta
				property="og:description"
				content="A simple way to track your mental health."
			/>
			<meta property="og:site_name" content="Mood Graph" />

			<link rel="icon" href="/icons/icon-32x32.png" sizes="32x32" />
			<link rel="icon" href="/icons/icon-192x192.png" sizes="192x192" />
			<link rel="icon" href="/icons/icon-16x16.png" sizes="16x16" />
			<link
				rel="apple-touch-icon"
				href="/apple-touch-icon.png"
				sizes="180x180"
			/>
			<link
				rel="mask-icon"
				href="/icons/safari-pinned-tab.svg"
				color="#8b5cf6"
			/>

			<link rel="canonical" href={`https://moodgraph.app${props.url}`} />
			<link rel="manifest" href="/site.webmanifest" />

			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(getStructuredData(props.url)),
				}}
			></script>
		</Head>
	);
}

function getStructuredData(url: RelativeUrl): WithContext<WebApplication> {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebApplication',
		alternateName: 'Graph',
		description: 'A simple way to track your mental health.',
		image: {
			'@type': 'ImageObject',
			contentUrl: 'https://moodgraph.app/icons/icon-192x192.png',
			description: 'The Mood Graph logo, a purple-blue heart.',
		},
		name: 'Mood Graph',
		url: `https://moodgraph.app${url}`,
		author: {
			'@type': 'Person',
			name: 'Julian Lachniet',
		},
		inLanguage: 'en-US',
		offers: {
			'@type': 'Offer',
			price: 0,
			priceCurrency: 'USD',
		},
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: 5,
			reviewCount: 1,
		},
		applicationCategory: 'HealthApplication',
		operatingSystem: 'Web',
	};
}
