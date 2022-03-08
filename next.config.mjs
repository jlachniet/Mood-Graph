import withPWA from 'next-pwa';

export default withPWA({
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	pwa: {
		dest: 'public',
	},
	eslint: {
		dirs: ['components', 'pages', 'types', 'utils'],
	},
});
