/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontSize: {
      16: "16px",
      18: "18px",
      20: "20px",
      24: "24px",
      28: "28px",
      32: "32px",
      38: "38px",
      40: "40px",
      48: "48px",
      80: "80px",
    },
    colors: {
      primary: "#FFFFFF", // white
      "light-violet": "#524462",
      violet: "#32273F",
      dark: "#1B1B1B",
      grey: "#D9D9D9",
      html: "#D2FF85",
      css: "#927DE3",
      js: "#FFD885",
    },
    fontFamily: {
      montserrat: "Montserrat, sans-serif",
      sora: "Sora, sans-serif",
    },
    container: {
      center: true,
    },

    extend: {
      backgroundImage: {
        "iconOne-mobile": "url('../assets/icon1-mobile.png')",
        "iconOne-desktop": "url('../assets/icon1-desktop.png')",
        "iconTwo-mobile": "url('../assets/icon2-mobile.png')",
        "iconTwo-desktop": "url('../assets/icon2-desktop.png')",
      },
      keyframes: {
        scrolling: {
          "0%": {
            transform: "translateX(0px)",
          },
          "100%": {
            transform: "translateX(-119%)",
          },
          // menuDown: {
          //   "0%": {
          //     height: "2vh",
          //   },
          //   "100%": {
          //     height: "100vh",
          //   },
          // },
        },
      },
      animation: {
        scrolling: "scrolling 10s linear infinite",
        // menuDown: "menuDown 100s linear forwards",
      },
    },
  },
  plugins: [],
};
