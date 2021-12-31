const path = require("path");

module.exports = {
  entry: {
      main:'./src/js/index.js',
      // vendor: './src/js/vendor.js'
    },
	module:{
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      }
    ],
  },
}