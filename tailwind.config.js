/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Assets/**/*",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        TrivvyaBlue: "#32c4cd",
        chipBlue: "#328fa8",
      },
    },
  },
  plugins: [daisyui],
};
