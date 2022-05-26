module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'bedroom-bg': "url('/assets/bedroom-bf.png')",
      // }
      screens: {
        'small-phone': '425px',
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
};
