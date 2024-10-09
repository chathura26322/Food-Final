/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      width: {
        custom: "max(40%, 280px)", // Custom utility for width
      },
      margin: {
        "custom-left": "max(5vw,25px",
      },
    },
  },
  plugins: [],
};
