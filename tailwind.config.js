/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';
import { b } from 'vitest/dist/chunks/suite.CcK46U-P.js';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontSize: {
				h1: ['var(--font-size-h1)', 'var(--line-height-h1)'],
				h2: ['var(--font-size-h2)', 'var(--line-height-h2)'],
				h3: ['var(--font-size-h3)', 'var(--line-height-h3)'],
				h4: ['var(--font-size-h4)', 'var(--line-height-h4)'],
				h5: ['var(--font-size-h5)', 'var(--line-height-h5)'],
				h6: ['var(--font-size-h6)', 'var(--line-height-h6)'],
				tiny: ['var(--font-size-tiny)', 'var(--line-height-tiny)'],
				body1: ['var(--font-size-body1)', 'var(--line-height-body1)'],
				body2: ['var(--font-size-body2)', 'var(--line-height-body2)'],
				body3: ['var(--font-size-body3)', 'var(--line-height-body3)']
			},
			fontFamily: {
				sans: ['var(--font-sans)', ...fontFamily.sans],
				looped: ['var(--font-looped)', ...fontFamily.sans]
			},
			textColor: {
				primary: {
					default: 'var(--color-primary)'
				},
				secondary: {
					default: 'var(--color-secondary)'
				},
				tertiary: {
					default: 'var(--color-tertiary)'
				},
				quaternary: {
					default: 'var(--color-quaternary)'
				}
			},
			colors: {
				primary: {
					dark: 'var(--color-primary-dark)',
					default: 'var(--color-primary-default)',
					light: 'var(--color-primary-light)',
					background: 'var(--color-primary-background)'
				},
				secondary: {
					dark: 'var(--color-secondary-dark)',
					default: 'var(--color-secondary-default)',
					light: 'var(--color-secondary-light)',
					background: 'var(--color-secondary-background)'
				},
			}
		}
	},
	plugins: []
};
