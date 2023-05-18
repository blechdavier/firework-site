import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Yeseva One', ...defaultTheme.fontFamily.serif],
        'body': ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-bg-patterns'),],
}

