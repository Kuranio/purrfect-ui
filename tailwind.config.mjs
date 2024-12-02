/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "rgb(131, 255, 255)",
      secondary: "rgb(253, 128, 251)",
      white: "#f6f6f6",
      black: "#212121",
      dark: "rgb(var(--ac-dark), <alpha-value>)",
      gray: {
        100: "rgb(var(--ac-gray-100), <alpha-value>)",
        200: "rgb(var(--ac-gray-200), <alpha-value>)",
        300: "rgb(var(--ac-gray-300), <alpha-value>)",
        400: "rgb(var(--ac-gray-400), <alpha-value>)",
        500: "rgb(var(--ac-gray-500), <alpha-value>)",
      },
      neutral: {
        100: "rgb(var(--ac-color-100), <alpha-value>)",
        200: "rgb(var(--ac-color-200), <alpha-value>)",
        300: "rgb(var(--ac-color-300), <alpha-value>)",
        400: "rgb(var(--ac-color-400), <alpha-value>)",
        500: "rgb(var(--ac-color-500), <alpha-value>)",
        600: "rgb(var(--ac-color-600), <alpha-value>)",
        700: "rgb(var(--ac-color-700), <alpha-value>)",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "button-background-radial": `radial-gradient(75% 100% at 50% 0%, rgba(131, 255, 255, 0.4) 0%, rgba(131, 255, 255, 0) 75%)`,
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left linear infinite",
        "marquee-right": "marquee-right linear infinite",
      },
    },
  },
};
