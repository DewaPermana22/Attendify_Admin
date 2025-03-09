// tailwind.config.js
const flowbite = require("flowbite-react/tailwind")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    flowbite.content(),
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|chip|table|popover|user|ripple|spinner|checkbox|form|spacer|avatar).js"
],
  theme: {
    extend: {
      colors: {
        background: "#f1ebfc",
        darkBackground : "#0F0F10",
        darkCard: "#18181B",
        primary: "#FF725E",
        primaryLight700: "#0079FF",
        secondaryLight700 : "#f6169b", 
        text_gray: "#6C757D",
        text: "#252525",
        textDark : "#f5f5f5",
        primaryLight950: "#0e315d",
        hover_text: "#1eabff",
        primaryLight100: "#d6f2ff",
        primaryLight400: "#48caff",
      },
    },
  },
  darkMode: "class",
  plugins: [flowbite.plugin(),],
};