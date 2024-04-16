/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kindly: {
          offWhite: '#F4F4F9',
          teal: '#227C9D',
          tealHover: '#1C6F87',
          royalBlue: '#0f47b9',
          blue: '#1964de',
          lightBlue: '#00a6ff'
        },
    },
  },
},
  plugins: [],
}

