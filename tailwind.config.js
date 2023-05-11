/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      heading: ["K2D"],
      sans: ["Kanit", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        primary: "#2E2C4A",
        secondary: "#611f69",
        action: "#fde047",
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        ms: "1rem", // 16px,
        base: "1.125rem", // 18px
      },
      lineHeight: {
        3.5: "0.875rem", // 14px
        4.5: "1.125rem", // 18px
        5.5: "1.375rem", // 22px
        6.5: "1.625rem", // 26px
        7.5: "1.875rem", // 30px
        9.5: "2.375rem", // 38px
        10.5: "2.875rem", // 46px
      },
      spacing: {
        1.75: "0.3125rem", // 5px,
        3.25: "0.938rem", // 15px
        4.5: "1.125rem", // 18px
        5.5: "1.375rem", // 22px
        6.5: "1.625rem", // 26px
        8.5: "2.25rem", // 34px
        9.5: "2.375rem", // 38px
        10.5: "2.625rem", // 42px
      },
      dropShadow: {
        'sm': '3px 3px 0 #fff',
        'md': '1px 1px 0 rgb(255, 255, 255, 0.8)',
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
