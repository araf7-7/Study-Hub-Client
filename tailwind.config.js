/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily :{
      abc: ["PT Serif", "serif"],
      bcd: ["Fira Sans" ,"serif"]
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "dracula"],
  },
}

