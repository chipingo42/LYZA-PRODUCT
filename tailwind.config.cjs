/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-20": "#FFFFFF",
        "primary-50": "#060000",
        "primary-150": "#000000",
        "primary-100": "#A4A4A4",
        "primary-300": "#4F4F4F",
        "primary-400": "#707070",
        "primary-500": "#585858",
        "primary-600": "#131313",
        "primary-700": "#181818",
        "primary-800": "#EEF7F8",
        "primary-900": "#666666",

        "secondary-50": "#A8A8A8",
        "secondary-100": "#DFDFDF",
        "secondary-400": "#202A36",
        "secondary-500": "#A6D5DF",
        "secondary-600": "orange",
        "secondary-700": "#D8ECF1",
        "secondary-800": "#FFE1E0",
        "secondary-900": "#FF6B66",
      },
      fontSize: {
        "xs": "18px",
        "sm": "20px",
        "md": "24px",
        "lg": "48px",
        "xl": "75px",
      },
      fontFamily: {
        Recursive: ['Recursive', 'sans-serif'],
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
      borderColor: {
        "gray": "#B0B0B08A"
      },
      boxShadowColor: {
        "gray": "10px 10px 11px 2px rgba(117, 117, 117, 0.3)"
      }
    },
  },
  plugins: [],
}