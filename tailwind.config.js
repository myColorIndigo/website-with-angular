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
