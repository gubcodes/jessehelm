module.exports = {
  purge: {
    enabled: false,
    content: ['index.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        firstBold: ['tuffybold', 'sans-serif'],
        firstRegular: ['tuffyregular', 'sans-serif'],
        firstBoldItalic: ['tuffybold-italic', 'sans-serif'],
        firstItalic: ['tuffyitalic', 'sans-serif'],
        second: ['shrikhandregular', 'cursive'],
        third: ['vt323regular', 'sans-serif'],
      },
      colors: {
        myBlack: '#545454'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
