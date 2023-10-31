/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: ['12px', '12px'],
      sm: ['14px', '14px'],
      base: ['16px', '16px'],
      lg: ['18px', '18px'],
      xl: ['20px', '20px'],
    },

    fontFamily: {
      regular: ['Poppins_400Regular'],
      medium: ['Poppins_500Medium'],
      semibold: ['Poppins_600SemiBold'],
      bold: ['Poppins_700Bold'],
    },

    extend: {

      backgroundImage: {
        'landing-image': "url('/public/images/main-image.png')"
      },

      fontSize: {
        'xxs': ['10px', '10px'],
        '2xl': ['24px', '24px'],
        '3xl': ['30px', '30px'],
        '4xl': ['36px', '36px'],
        '5xl': ['48px', '48px']
      },

      colors: {
        'brand-navy': '#2F3253',
        'brand-navy-soft': '#585B75',
        'brand-orange': '#E9764C',
        'brand-yellow': '#FFB66C',
        'brand-yellow-soft': '#FFC486',
        'gray-soft': '#FEFFFE',
        'gray-background': '#F1F3F6',
      },

      boxShadow: {
        'brand' : '0 2px 2px #A7ACB9'
      },
    }
  },
  plugins: [],
}

