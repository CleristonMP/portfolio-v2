/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // Values live exclusively in src/styles/tokens.css; alpha modifiers remain supported.
      colors: {
        surface: 'rgb(var(--color-background) / <alpha-value>)',
        surfaceLow: 'rgb(var(--color-surface-low) / <alpha-value>)',
        surfaceHigh: 'rgb(var(--color-surface-highest) / <alpha-value>)',
        cyan: 'rgb(var(--color-primary) / <alpha-value>)',
        violet: 'rgb(var(--color-secondary) / <alpha-value>)',
        ink: 'rgb(var(--color-text-primary) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        primaryContainer: 'rgb(var(--color-primary-container) / <alpha-value>)',
        surfaceContainer: 'rgb(var(--color-surface-container) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        label: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
};
