/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  important: "#root",
  corePlugins: {
    preflight: false
  },
  theme: {},
  plugins: [require("tailwindcss-animate")]
}
