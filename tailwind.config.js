/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '300px',/** 300-639 || mobile phones || am done */
      },
      colors: {
        primary:"var(--primary)",
        
        secondary:"var(--secondary)",

        light_bg_bright:"var(--light_bg_bright)",

        light_bg_dim:"var(--light_bg_dim)",

        light_border_bright:"var(--light_border_bright)",

        light_border_dim:"var(--light_border_dim)",

        light_txt:"var(--light_txt)",

        light_txt1:"var(--light_txt1)",

        light_txt2:"var(--light_txt2)",
      },
      fontFamily: {
        clicker: [
          'Clicker Script',
        ],
        poppins: [
          'Poppins',
        ],
      },
    },
  },
  plugins: [],
}