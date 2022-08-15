/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**.{html, js}"],
  theme: {
    extend: {},
    screens: {
      'mobile': '375',
      // => @media (min-width: 640px) { ... }

      'tablet': '768px',
      // => @media (min-width: 768px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
}
