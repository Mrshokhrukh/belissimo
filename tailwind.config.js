/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    maxWidth: {
      xl: "1180px",
      xxl: "1290px",
    },
    width: {},
    borderColor: {
      lightborder: "#f4f4f4",
      orangeborder: "#ffc600",
      gray1: "#828282",
    },
    boxShadow: {
      cardshadow: `5px 2px 30px hsla(257,8%,83%,.3)`,
      toggleshadow: "0 4px 8px rgba(0,0,0,.06)",
      headShadow: `5px 0 15px rgba(0, 0, 0, .2)`,
    },
    colors: {
      white: "#ffffff",
      green: "#047857",
      graybtn: "#ebebeb",
      cartbtnred: "#ff002b",
      cardDescColor: "#828282",
      toggleColor: "#f4f4f4",
      lightgreen: "#ecfdf5",
      hoverGreen: "#04785752",
      lightgray: "#64748b",
      orange: "#ffc600",
      lightorange: "#fffbee",
      black: "#000000",
    },
  },
  plugins: [],
};
