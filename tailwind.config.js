/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./assets/**/*"],
  theme: {
    extend: {
      colors: {
        TrivvyaBlue: "#32c4cd",
      },
    },
  },
  plugins: [],
};
