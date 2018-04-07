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
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.sass$/,
          // exclude: /node_modules/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            { loader: "sass-loader" }
          ]
        }

      ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}
