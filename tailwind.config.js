/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Space Grotesk', 'sans-serif'],
				mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
			},
			colors: {
				background: {
					DEFAULT: '#e8e8e8',
					light: '#ededed',
					lighter: '#f0f0f0',
					dark: '#0a0a0a',
					'dark-light': '#0d0d0d',
					'dark-lighter': '#0f0f0f',
				},
			},
			backgroundImage: {
				'grid-pattern': `
          linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
			},
			backgroundSize: {
				grid: '40px 40px',
			},
		},
	},
	plugins: [],
};
