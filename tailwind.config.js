// tailwind.config.js

const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    fontFamily: {
      display: ['Oswald'],
      body: ['Roboto', 'sans-serif']
    },
    extend: {
      gridTemplateColumns: {
        posts: 'repeat(auto-fit, minmax(300px, 1fr))'
      }
    },
    container: {
      center: true,
      padding: '1rem'
    }
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant('required', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`required${separator}${className}`)}:required`;
        });
      });
    }),
    require('tailwindcss-elevation')(['responsive'])
  ],
  variants: {
    boxShadow: ['responsive', 'hover', 'focus', 'required']
  }
};
