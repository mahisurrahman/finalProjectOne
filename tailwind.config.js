/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "inter-font": "'Inter', sans-serif",
      "cinzel-font": "'Cinzel', serif",
      "raleway-font": "'Raleway', sans-serif",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

