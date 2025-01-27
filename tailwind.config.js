/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // standardGreen: "#ff6701",
        standardGreen: "#1f8d1b",
        primary: "#2AA126",
        primaryLight: "#9bdf99de",
        lightGray: "#F7F8F8",
        para: "#7E7E7E",
        heading: "#777777",
        darkGray: "#DDDDDD",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
};
