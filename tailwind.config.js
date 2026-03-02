/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#E3CFAD",
        chocolate: "#2B1408",
        lightCream: "#F5EEE4",
      },
    },
  },
  plugins: [],
}