/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // that is actual animation
      animation: {
        fade: "fade 3s ease-in-out infinite",
        circleUp: "circleUp 4s ease-in-out infinite",
        circleDown: "circleDown 4s ease-in-out infinite",
        upDown: "upDown 5s ease-in-out infinite",
        downUp: "downUp 5s ease-in-out infinite",
        slideRight: "slideRight 0.9s ease-in-out",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        circleUp: {
          "0%, 100%": {
            transform: "rotate(20deg)",
          },
          "50%": {
            transform: "rotate(0)",
          },
        },
        circleDown: {
          "0%, 100%": {
            transform: "rotate(-20deg)",
          },
          "50%": {
            transform: "rotate(0)",
          },
        },
        upDown: {
          "0%, 100%": {
            transform: "translateY(-20px)",
          },
          "50%": {
            transform: "translateY(0px)",
          },
        },
        downUp: {
          "0%, 100%": {
            transform: "translateY(20px)",
          },
          "50%": {
            transform: "translateY(0px)",
          },
        },
        fade: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        shrink: {
          "0%, 100%": { transform: "scale(1.12)" },
          "50%": { transform: "scale(1)" },
        },
        slideRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#1B4E6B",
        secondary: "#FFDE59",
        button: "#5EACDD",
        border: "rgba(255, 255, 255, 0.16)",
        gray: "#90A3BF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xsm: "430px", // Tablet Minimum Size
        xxsm: "200px", // Mobile Minimum Size
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
};
