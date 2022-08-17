/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandColors: {
          strongCyan: "hsl(172, 67%, 45%)",
          veryDarkCyan: "hsl(183, 100%, 15%)",
          darkGrayishCyan: "hsl(186, 14%, 43%)",
          grayishCyan: "hsl(184, 14%, 56%)",
          lightGrayishCyan: "hsl(185, 41%, 84%)",
          veryLightGrayishCyan: "hsl(189, 41%, 88%)",
          veryLight: "hsl(189, 41%, 96%)",
          white: "hsl(0, 0%, 100%)"
        }
      }
    },
    fontFamily: {
      sans: ["Space Mono", "monospace"]
    }
  },
  plugins: [require("@tailwindcss/forms")]
}
