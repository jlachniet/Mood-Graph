module.exports = {
	content: [
		'./pages/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
		'./utils/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#8c55ff',
				'primary-light': '#9c61fa',
				'primary-dark': '#5e33b8',
				'purple-black': '#221b26',
			},
			fontFamily: {
				display: ['Inter', 'sans-serif'],
			},
		},
	},
};
