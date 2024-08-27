/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customYellow: '#F9C06A', 
        cokelat: '#603809'
      },
      fontFamily: {
        'clicker': ['"Clicker Script"', 'cursive'],
        'playfair': ['"Playfair Display"', 'serif'],
        'comforter': ['Comforter', 'cursive'],
      },
      backgroundImage: {
        'heroBackgorund' : "url('/css/assets/icon/hero.png')",
      }
    },
  },
  plugins: [],
}

