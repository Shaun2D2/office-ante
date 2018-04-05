const path = require('path');

module.exports = {
    entry: './client/app.js',
    output: {
      path: path.resolve(__dirname, './public/javascripts'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
}
