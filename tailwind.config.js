/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#33c55e",
        secondary: "#f4a825",
        "background-light": "#F8FAFC",
        "background-dark": "#0F172A",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [],
};
