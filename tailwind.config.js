module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        // Ici vos couleurs exportées de Figma
      },
      "fontFamily": {
        "ubuntu": "Ubuntu",
        "unbounded": "Unbounded",
        // Ici vos familles de polices exportées de Figma
        // Ne pas oublier de les charger dans '/index.html' !
      },
      
        "fontSize": {
         "2xs": "0.625rem",
         "xs": "0.75rem",
         "sm": "0.875rem",
         "base": "1.125rem",
         "lg": "1.25rem",
         "xl": "1.5625rem"
        },
        "borderRadius": {
         "none": "0",
         "xs": "0.3125rem",
         "sm": "2.0625rem",
         "default": "2.375rem"
        },

        keyframes: {
          BackInRight: {
            '0%, 100%': { transform: 'translate(100px)'},
            '100%': { transform: 'translate(0px)'},
          },
          Depart:{
            '0%':{
              transform: 'translateY(50px)',
              opacity: '0%'
            },

            '100%':{
              transform: 'translateY(0px)',
              opacity: '100%'
            }
          },
       
    },
    

  },
  
  screens: {
    'xxxs': '0px',
    // => @media (min-width: 0px) { ... }

    'xxs': '430px',
    // => @media (min-width: 430px) { ... }

    'xs': '640px',
    // => @media (min-width: 640px) { ... }

    'xfoo': '774px',
    // => @media (min-width: 750px) { ... }

    'foo': '950px',
    // => @media (min-width: 950px) { ... }

    'sm': '1000px',
    // => @media (min-width: 1000px) { ... }

    'md': '1240px',
    // => @media (min-width: 768px) { ... }

    'lg': '1495px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  
  plugins: [],
}}
