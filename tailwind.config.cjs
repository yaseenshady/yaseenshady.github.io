/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/index.html', './app/src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#ffd60a',
        surface: '#050505',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 0 0 1px rgba(255,255,255,0.08), 0 24px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.12)',
        glow:  '0 0 60px rgba(255,214,10,0.25), 0 0 120px rgba(255,214,10,0.12)',
      },
    },
  },
  plugins: [],
}
