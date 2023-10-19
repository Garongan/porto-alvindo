/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "lg-dark": "0 10px 15px -3px rgba(248, 250, 252, 0.5), 0 4px 6px -2px rgba(248, 250, 252, 0.5)",
        "lg": "0 10px 15px -3px rgba(2, 6, 23, 0.5), 0 4px 6px -2px rgba(2, 6, 23, 0.5)",
      },
    },
  },
  plugins: [],
};
