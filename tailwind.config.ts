import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				ui: {
					// Backgrounds - Lightened for better contrast
					bg: '#070707',     // Main background
					'bg-2': '#0A0A0A', // Slightly lighter
					'bg-3': '#0D0D0D', // Just a touch lighter
					
					// Text - Enhanced contrast
					tx: '#FFFFFF',     // Main text
					'tx-2': '#CCCCCC', // Secondary text (significantly lightened)
					'tx-3': '#A3A3A3', // Tertiary text (lightened more)
					'tx-h': '#E5E5E5', // Hover text (very light)
					'tx-subhead': '#F0F0F0', // Subheadings (almost white)
					
					// Borders - More visible
					br: '#2A2A2A',     // Border
					'br-h': '#363636', // Hover border
					
					// Accent
					ac: '#FFFFFF',     // Accent color
				}
			}
		}
	},

	plugins: []
} satisfies Config;