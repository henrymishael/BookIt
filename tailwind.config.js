/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-background": "#E1FEEA",
        "brand-accent": "#04A936",
        "brand-button": "#4CFB80",
        "brand-border": "#808080/20",
      },
    },
  },
  plugins: [],
};
