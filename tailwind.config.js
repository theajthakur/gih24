/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DC6ABA",
        // primary: "#1baae4",
        slate: "#e6f1ff",
        lightest_slate: "#e6f1ff",
        lightest_navy: "#DBCAD6",
        off_white: "#e6f1ff",
        light_navy: "#112240",
      },
      fontFamily: {
        mono: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
      },
      screens: {
        sb: "1320px",
      },
    },
  },
  plugins: [],
};
