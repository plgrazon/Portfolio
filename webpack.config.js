const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const entryPoint = path.resolve(__dirname, 'client/src');
const outputPoint = path.resolve(__dirname, 'client/dist');

module.exports = {
  entry: path.resolve(entryPoint, 'index.jsx'),
  output: {
    path: outputPoint,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          // Devmode:
          // {
          //   loader: 'style-loader',
          //   options: { singleton: true }
          // },
          // Production:
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              camelCase: true,
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      // All css in one file
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }]
        },
        canPrint: true
      }),
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/src/static/index.html',
      favicon: './client/src/static/favico.ico',
      filename: 'index.html',
      minify: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};
