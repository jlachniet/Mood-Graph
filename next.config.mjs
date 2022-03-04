import withPWA from 'next-pwa';

export default withPWA({
	reactStrictMode: true,
	eslint: {
		dirs: ['components', 'pages', 'types', 'utils'],
	},
	pwa: {
		dest: 'public',
	},
});
