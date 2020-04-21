// postcss.config.js
const purgecss =
  process.env.NODE_ENV === 'production'
    ? require('@fullhuman/postcss-purgecss')({
        // Specify the paths to all of the template files in your project
        content: [
          './client/**/*.html',
          './client/**/*.vue',
          './client/**/*.jsx',
          './client/**/*.js'
        ],

        // content: [
        //   paths.appHtml,
        //   ...glob.sync(path.join(paths.appSrc, '/**/*.{js,jsx}'), {
        //     nodir: true
        //   })
        // ],

        // Include any special characters you're using in this regular expression
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      })
    : false;

module.exports = {
  ident: 'postcss',
  plugins: [require('tailwindcss'), require('autoprefixer'), purgecss]
  // plugins: [require('tailwindcss'), require('autoprefixer')]
};
