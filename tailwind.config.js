/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-bg": "#121212",
        "primary-surface": "#1E1E1E",
        "secondary-surface": "#2B2B2B",
        "accent": "#FF8400",
        "primary-text": "#E1E1E1",
        "secondary-text": "#8C8C8C",
      },
    },
  },
  plugins: [],
}
