/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        antonio: ["Antonio", "sans-serif"],
        "league-spartan": ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};

