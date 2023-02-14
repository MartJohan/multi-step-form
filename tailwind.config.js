/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{vue,ts,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
    colors: {
      marineBlue: "rgb(2, 41, 90)",
      purplishBlue: "rgb(71, 61, 255)",
      pastelBlue: "rgb(173, 190, 255)",
      lightBlue: "rgb(191, 226, 253)",
      strawberryRed: "rgb(237, 53, 72)",
      coolGray: "rgb(150, 153, 171)",
      lightGray: "rgb(214, 217, 230)",
      magnolia: "rgb(240, 246, 255)",
      Alabaster: "rgb(250, 251, 255)",
      white: "rgb(255, 255, 255)",
      black: "rgb(0, 0, 0)",
    },
    backgroundImage: {
      bgSiderbarMobile: "url('./src/assets/images/bg-sidebar-mobile.svg')",
      bgSiderbarDesktop: "url('./src/assets/images/bg-sidebar-desktop.svg')",
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
