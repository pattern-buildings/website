module.exports = {
    purge: [
      './src/**/*.html',
      './src/**/*.vue',
    ],
    theme: {
      extend: {
        screens: {
          xs: {'min': '479px'},
        },
      },
    },
    variants: {},
    plugins: [],
  }