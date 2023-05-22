/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/headlessui/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
      },
      colors: {
        primary: {
          50: "#fbf5f5",
          100: "#f7e9e9",
          200: "#f0d8d8",
          300: "#e5bcbc",
          400: "#d59494",
          500: "#c27171",
          600: "#ac5656",
          700: "#904545",
          800: "#804040",
          900: "#653737",
        },
        secondary: {
          50: "#fbf5f5",
          100: "#f7e9e9",
          200: "#f0d8d8",
          300: "#e5bcbc",
          400: "#d59494",
          500: "#c27171",
          600: "#ac5656",
          700: "#904545",
          800: "#804040",
          900: "#653737",
        },
        white: {
          DEFAULT: "#ffffff",
          50: "#ffffff",
          100: "#efefef",
          200: "#dcdcdc",
          300: "#bdbdbd",
          400: "#989898",
          500: "#7c7c7c",
          600: "#656565",
          700: "#525252",
          800: "#464646",
          900: "#3d3d3d",
        },
        template: {
          50: "dfsdasdsa",
          100: "5dsasddasdas",
          200: "sdasdasd",
          300: "dasdsdas",
          400: "dsadssaddas",
          500: "dasddas",
          600: "dasdasdas",
          700: "dsdsadasd",
          800: "dssdsads",
          900: "sddsadsaa",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
