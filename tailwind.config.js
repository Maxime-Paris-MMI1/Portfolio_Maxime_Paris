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
        }
       
    },
    

  },
  plugins: [],
}
