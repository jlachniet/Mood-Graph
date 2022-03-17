module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx,css}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				display: ['Inter', 'sans-serif'],
			},
			spacing: {
				navbarheight: 'calc(2.75rem + 1px)',
				screenheightminusnavbar: 'calc(100vh - 2.75rem - 1px)',
				screenheightminusdoublenavbar: 'calc(100vh - 5.5rem - 2px)',
			},
			scale: {
				101: '1.01',
			},
			lineHeight: {
				0: '0',
			},
			brightness: {
				115: '1.15',
				120: '1.2',
			},
			transitionProperty: {
				filter: 'filter',
				width: 'width',
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
