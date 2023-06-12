/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,ts}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 19px 25px rgba(0,0,0,0.30)",
          "0 15px 12px rgba(0, 0, 0, 0.25)",
        ],
        "5xl": [
          "0 12px 25px rgba(0,0,0,0.10)",
          "0px 10px 12px rgba(0, 0, 0, 0.10)",
        ],
        "6xl": [
          "0 7px 10px rgba(0,0,0,0.10)",
          "0px 5px 0px rgba(0, 0, 0, 0.10)",
        ],
      },
      fontSize: {
        "10xl": "font-size: 20%; line-height: 1;",
      },
      width: {
        "15%": "15%",
      },
      margin: {
        "x-%": "3.2rem",
      },
      spacing: {
        "10%": "10%",
        "10vh": "10vh",
        "20vh": "20vh",
        "12%": "12%",
        "12vh": "12vh",
        "15vh": "15vh",
        "15%": "15%",
        "20%": "20%",
        "25%": "25%",
        "25vh": "25vh",
        "30%": "30%",
        "30vh": "30vh",
        "30.8vh": "30.8vh",
        "32vh": "32vh",
        "35vh": "35vh",
        "40vh": "40vh",
        "33%": "33%",
        "37%": "37%",
        "35%": "35%",
        "40%": "40%",
        "90%": "88%",
        "100px": "28rem",
      },
      backgroundColor: {
        "blue-transparent": "#D16121",
        "orange-navbar": "#f67227",
        "search-white": "#FDE3D4",
      },
      textColor: {
        "orange-navbar": "#f67227",
      },
      colors: {
        "orange-navbar": "#f67227",
      },
      screens: {
        adr: "320px",
      },
    },
  },
  plugins: [],
};
