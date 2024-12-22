import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				ui: {
					// Backgrounds - Made darker
					bg: '#030303',     // Darker main background
					'bg-2': '#0A0A0A', // Darker secondary background
					'bg-3': '#111111', // Darker tertiary background
					
					// Text - Adjusted for contrast
					tx: '#FFFFFF',     // Brighter main text for contrast
					'tx-2': '#888888',
					'tx-3': '#666666', //Darker than tx-2
					'tx-h': '#BBBBBB', // Text for hovering (balanced between tx and tx-2)
					'tx-subhead': '#E0E0E0', // slightly darker than white
					
					// Borders - Made more subtle
					br: '#1A1A1A',     // Darker border
					'br-h': '#242424', // Darker hover border
					
					// Accent - Kept the same as requested
					ac: '#FFFFFF',     // Original accent color
				}
			}
		}
	},

	plugins: []
} satisfies Config;