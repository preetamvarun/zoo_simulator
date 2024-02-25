/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      'sm' : '530px',
      'md' : '740px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1536px',
    },
    extend: {
      fontFamily : {
        'jungle-fever'  : ['JungleFever', 'sans']
      },
    },
  },
  plugins: [],
}
