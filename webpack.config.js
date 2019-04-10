const path = require('path');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;
const DefinePlugin = require('webpack').DefinePlugin;

dotenv.config();

const { CLIENT_PORT, SERVER_PORT, HOST } = process.env;

const config = {
  entry: './client/index.tsx',
  output: {
    filename: '[name]/index.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]',
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'client'),
    compress: true,
    port: CLIENT_PORT,
    historyApiFallback: true,
    open: true
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new DefinePlugin({
      API_URL: JSON.stringify(`${HOST}:${SERVER_PORT}/`)
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      actions: path.resolve(__dirname, 'client/actions'),
      assets: path.resolve(__dirname, 'client/assets'),
      components: path.resolve(__dirname, 'client/components'),
      containers: path.resolve(__dirname, 'client/containers'),
      hooks: path.resolve(__dirname, 'client/hooks'),
      misc: path.resolve(__dirname, 'client/misc'),
      reducers: path.resolve(__dirname, 'client/reducers'),
      types: path.resolve(__dirname, 'client/types')
    }
  }
};

module.exports = config;
