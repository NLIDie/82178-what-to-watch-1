const path = require(`path`);

// Plugins
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

const ENTRY_POINTS = path.join(__dirname, `src/index.js`);

module.exports = {
  entry: ENTRY_POINTS,

  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `dist`)
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, `src/index.html`)
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, `public`),
    compress: false,
    port: 1337,
    open: true
  },

  devtool: `source-map`
};
