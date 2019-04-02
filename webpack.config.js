const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;

const config = {
  entry: './src/index.tsx',
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
    port: 8080,
    historyApiFallback: true,
    open: true
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      assets: path.resolve(__dirname, 'client/assets'),
      components: path.resolve(__dirname, 'client/components'),
      misc: path.resolve(__dirname, 'client/misc'),
      types: path.resolve(__dirname, 'client/types')
    }
  } 
};

module.exports = config;
