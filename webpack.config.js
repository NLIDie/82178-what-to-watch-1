const path = require(`path`);
// Plugins
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

const ENTRY_POINTS = path.join(__dirname, `src/index.tsx`);

module.exports = {
  entry: ENTRY_POINTS,

  output: {
    filename: `app.js`,
    path: path.join(__dirname, `dist`),
    publicPath: `/`
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`
        }
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: `style-loader`
          },
          {
            loader: `css-loader`
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: `file-loader`,
            options: {
              name: `[path][name].[ext]`
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, `src/index.html`)
    })
  ],

  devServer: {
    compress: false,
    port: 1337,
    open: true,
    historyApiFallback: true
  },

  resolve: {
    extensions: [`.js`, `.jsx`, `.ts`, `.tsx`],

    alias: {
      _Api: path.resolve(__dirname, `src/api/`),
      _Components: path.resolve(__dirname, `src/components/`),
      _Constants: path.resolve(__dirname, `src/constants/`),
      _Containers: path.resolve(__dirname, `src/containers/`),
      _Hooks: path.resolve(__dirname, `src/hooks/`),
      _Layouts: path.resolve(__dirname, `src/layouts/`),
      _Mocks: path.resolve(__dirname, `src/mocks/`),
      _Pages: path.resolve(__dirname, `src/pages/`),
      _Store: path.resolve(__dirname, `src/store/`),
      _Types: path.resolve(__dirname, `src/types/`),
      _Utils: path.resolve(__dirname, `src/utils/`)
    }
  },

  devtool: `source-map`
};
