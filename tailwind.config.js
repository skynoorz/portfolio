/** @type {import('tailwindcss').Config} */
export default {
  // Light/dark is driven by a `.light` class on <html> (see ThemeProvider).
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Themed tokens — defined as RGB channel triplets in index.css so the
        // `/opacity` modifier keeps working across light and dark themes.
        background: 'rgb(var(--c-bg) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        'surface-light': 'rgb(var(--c-surface-light) / <alpha-value>)',
        foreground: 'rgb(var(--c-fg) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        glass: 'rgb(var(--c-glass) / <alpha-value>)',
        primary: {
          DEFAULT: '#2563EB',
          light: '#3b82f6',
          dark: '#1d4ed8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(37, 99, 235, 0.45)',
        soft: '0 10px 40px -15px rgba(0, 0, 0, 0.6)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
