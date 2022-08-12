/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'login-sm': "url('/src/assets/login-sm-copy.png')",
      },
      boxShadow: {
        'leever-shadow': '0 10px 20px #0000004a',
      },
    },
  },
  plugins: [],
};
