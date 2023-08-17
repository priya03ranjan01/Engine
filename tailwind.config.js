module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#cd1409',
        'yellow-0': '#ffff00',
        'yellow-4': '#ffee44',
        'buy': '#14cd09',
        'sell': 'red', 
      },
      boxShadow: {
        'shade': '0px 8px 25px 0px rgba(0, 0, 0, 0.3)',
        'lowshade': '0px 8px 25px 0px rgba(0, 0, 0, 0.25)',
        'login': '10px 10px 20px 10px rgba(0, 0, 0, 0.25)'
      },
      // fontFamily: {
      //   'poppins': ['Poppins', 'sans-serif'] 
      // },
    },
  },
  plugins: [],
}
