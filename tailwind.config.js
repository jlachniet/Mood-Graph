module.exports = {
	content: [
		'./pages/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
		'./utils/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				display: ['Inter', 'sans-serif'],
			},
			animation: {
				heartbeat: 'heartbeat 1s ease-in-out infinite',
			},
			keyframes: {
				heartbeat: {
					'0%': {
						transform: 'scale(1)',
					},
					'50%': {
						transform: 'scale(1.1)',
					},
					'100%': {
						transform: 'scale(1)',
					},
				},
			},
		},
	},
};
