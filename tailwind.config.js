/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/UI/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      container: {
              center: true,
              padding: {
                DEFAULT: '1rem',
                md: '0.625rem',
              }
      },
      colors:{
        primary: {
          50:  "#F3E8F8",
          100: "#E5CDEF",
          200: "#CA9BDF",
          300: "#B069CE",
          400: "#933CB9",
          500: "#6D2C88",
          600: "#56236C",
          700: "#401A51",
          800: "#2B1136",
          900: "#15091B",
          950: "#0C050F",
          DEFAULT: "#6d2c88",
           },
           secondary: {
            50:  "#FDECF2",
            100: "#FCD5E3",
            200: "#F8AAC7",
            300: "#F580AB",
            400: "#F1558E",
            500: "#EE2C72",
            600: "#D01157",
            700: "#9C0D41",
            800: "#68082B",
            900: "#340416",
            950: "#1C020C",
            DEFAULT: '#ee2c72',
           },
           success: 'rgb(0 , 192 , 115)',
           warning: 'rgb(255 , 153 , 0)',
           error:   'rgb(255,71 , 87)',
       },
       fontFamily: {
        IranYekan: ["var(--font-IranYekan)"],
        YekanBakh: ["var(--font-YekanBakh)"],
      },
      backgroundImage: {
        'paternBg' : 'url("/Footer/footerPatern.png")',
         'categories': 'linear-gradient(rgba(109,44,136,0) 0,rgba(109,44,136,0) 47.27%,#6d2c88 100%)'
    },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    variants: {
      scrollbar: ["light"],
    },
},
  plugins: [
    nextui({
     addCommonColors: true,
     themes: {
      light: {
        screens: {
          'xs': '480px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
        },
      }
     } 
  }),
],
plugins: [
  nextui(),
  require("tailwind-scrollbar"),
  function ({ addVariant }) {
    addVariant("child", "& > *");
    addVariant("child-hover", "& > *:hover");
  },
  require('@tailwindcss/typography'),
],
};
