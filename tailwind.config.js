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
    },
    boxShadow: {
      cardshadow: `5px 2px 30px hsla(257,8%,83%,.3)`,
      toggleshadow: "0 4px 8px rgba(0,0,0,.06)",
    },
    colors: {
      white: "#ffffff",
      green: "#047857",
      graybtn: "#ebebeb",
      cartbtnred: "#ff002b",
      cardDescColor: "#828282",
      toggleColor: "#f4f4f4",
      lightgreen: "#ecfdf5",
      lightgray: "#64748b",
      orange: "#ffc600",
    },
  },
  plugins: [],
};
