/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-green" : "#5E6C5B",
        "main-cream" : "#F3EFE6",
        "main-white" : "#FDFCF7",
        "sky-blue" : "#D6E0E2",
        "midnight" : "#162A2B",
        "storm-cloud" : "#686867"
      },
      backgroundImage: (theme) => ({
        "gradient-greenwhite" : "linear-gradient(90deg, #5E6C5B 0%, #FDFCF7 100%)",
        "mobile-home": "url('./assets/mobile-photo.jpg')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      //pass images for before css
      content: {
        evolvetext: "url('.assets/En')"
      }
    },
    //breakpoint for screens
  screens: {
    xs: "480px",
    sm: "768px",
    md: "1060px"
    }
  },
  plugins: [],
}

