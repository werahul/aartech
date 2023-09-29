/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      "antonio": ['Antonio', ' sans-serif'],
      'Barlow': ['Barlow', ' sans-serif']
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1500px',
      xxs: "300px",
      xss: "390px",
      xs: "400px",
      xxxl: "1561px",
      xll2: "1601px",
      xl5: "1650px",
      xll4: "1690px",
      xl6: "1700px",
      xl7: "1740px",
    },
    extend: {
      colors: {
        'foot-blue': '#0C013D',
        'nav-color': '#262626D9',
        'box-red': ' #B80001',
        'box-bg': '#F6F6F6',
        'lightBlack': '#262626 '

      },


    },
    plugins: [],
  }
}
