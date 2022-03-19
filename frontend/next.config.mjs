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
		customWorkerDir: './src/worker',
		disable: process.env.NODE_ENV === 'development',
	},
	eslint: {
		dirs: ['src'],
	},
});
