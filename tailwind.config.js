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
      boxShadow: {
        'rimac-shadow': '0px 1px 32px 0px rgba(174, 172, 243, 0.35)',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
