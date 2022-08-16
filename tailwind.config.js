/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**.{html, js}"],
  theme: {
    extend: {
      purge: { 
        enabled: true, content: [ './src/**.html' ] 
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
}
