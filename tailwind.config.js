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
			scale: {
				101: '1.01',
			},
			spacing: {
				navbarheight: 'calc(2.75rem + 1px)',
				screenheightminusnavbar: 'calc(100vh - 2.75rem - 1px)',
				screenheightminusdoublenavbar: 'calc(100vh - 5.5rem - 2px)',
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
