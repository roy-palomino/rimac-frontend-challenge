/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          sans: ["BRSonoma", "ui-sans-serif", "system-ui"],
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
