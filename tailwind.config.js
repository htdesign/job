module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif']
      }
    },
  },
  variants: {
    fontWeight: ['hover','group-hover'],
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: false,
  },
}
