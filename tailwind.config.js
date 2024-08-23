/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito-sans': ['"Nunito Sans"', 'sans-serif'],
      },
      container: {
        center: true, // Centre le conteneur horizontalement
        padding: {
          DEFAULT: '1rem', // Par défaut, 1rem de padding à gauche et à droite
          sm: '2rem', // Pour les écrans petits et au-dessus
          md: '4rem', // Pour les écrans moyens et au-dessus
          lg: '6rem', // Pour les écrans larges et au-dessus
          xl: '8rem', // Pour les très grands écrans
        }
      },
      boxShadow: {
        'custom-light': '0 1px 3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
