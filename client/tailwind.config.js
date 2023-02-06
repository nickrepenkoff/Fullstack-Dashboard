const plugin = require('tailwindcss/plugin')
/** @type {import("tailwindcss").Config} */

module.exports = {
	content: [
		'./pages/**/*.{js, ts, jsx, tsx}',
		'./app/components/**/*.{js, ts, jsx, tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: { primary: '#5F3DF7', black: '#222' },
			transitionTimingFunction: {
				DEFAULT: 'ease',
			},
			transitionDuration: {
				DEFAULT: '250ms',
			},
		},
	},
	plugins: [
		require('tailwindcss-global-dark'),
		plugin(({ addUtilities, addComponents }) => {
			addComponents({
				'.shadow-icon': {
					borderRadius: '50%',
					padding: '0.6rem',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: '2rem',
					transition: 'box-shadow .4s ease-in-out',
					boxShadow: '0 4px 10px rgba(45, 8, 125, .2)',
					color: '#353538',
					backgroundColor: 'white',

					'&:hover': {
						boxShadow: '0 4px 16px rgba(45, 8, 125, .3)',
					},
				},
			}),
				addUtilities({
					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					},
					'.flex-center-center': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					},
				})
		}),
	],
}
