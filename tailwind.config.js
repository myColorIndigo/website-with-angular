/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: { 
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
     },
    extend: {
      colors: {
        'based-orange': 'rgb(224, 127, 9)',
        'dline-orange': 'rgb(200, 80, 13)',
        'lline-orange': 'rgb(255, 209, 148)',
        'special-orange': '#9a4019',
        'based-gray': 'rgb(217, 217, 217)',
        'line-gray': 'rgb(190, 190, 190)',
        'based-blue': 'rgb(59, 65, 92)',
        'light-blue': 'rgb(74, 80, 106)',
        'line-blue': 'rgb(32, 45, 100)',
        'line-light-blue': 'rgb(59, 70, 123)',
        'center-orange': '#ff9b01',
        'center-blue': '#4d526a',
      },
      backgroundImage: {
        'de_dust2': "url('app/de_dust2_logo.png')",
      },
      animation: {
        'dropdownMenuIn': 'dropdownMenuIn ease-out 0.2s',
        'dropdownMenuOut': 'dropdownMenuOut ease-out 0.2s',
      },
      keyframes: {
        dropdownMenuIn: {
          '0%': {  opacity: 0, },
          '100%': {  opacity: 100, },
        },
        dropdownMenuOut: {
          '0%': {  opacity: 100, },
          '100%': {  opacity: 0, },
        },
      },
    },
  },
  plugins: [],
}
