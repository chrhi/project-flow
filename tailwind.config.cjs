/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        abdullahGray: "bg-[#F8F9FA]",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes:{
        blob:{
          "0%":{
            transform:" translate(0px , 0px) scale(1)"
          },
          "33%":{
            transform:" translate(30px , -50px) scale(1.1)"
          },
          "66%":{
            transform:" translate(-20px , 20px) scale(0.9)"
          },
          "100%":{
            transform:" translate(0px , 0px) translate(0px , 0px) scale(1)"
          },
        }
      },
      animation:{
        Blob: "blob 7s infinite"
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
