/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "md-dark": "0 4px 6px -1px rgba(250, 250, 249, 0.2), 0 4px 6px -2px rgba(250, 250, 249, 0.2)",
      },
    },
  },
  plugins: [],
};
