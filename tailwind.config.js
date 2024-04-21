/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DC6ABA",
        primaryLight: "#480b30",
        slate: "#495670",
        lightest_slate: "#a8b2d1",
        navy: "#0a192f",
        lightest_navy: "#DBCAD6",
        off_white: "#e6f1ff",
        light_navy: "#112240",
      },
      fontFamily: {
        mono: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
