/** @type {import('tailwindcss').Config} */

const { colours } = require("./src/enums.ts");

const safeColours = colours.flatMap((color) => [
  `bg-${color}-300`,
  `border-${color}-400`,
  `hover:bg-${color}-600`,
]);

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [...safeColours],
  theme: {
    extend: {},
  },
  plugins: [],
};
