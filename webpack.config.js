const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'bundle')
  },
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
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]',
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'client'),
    compress: true,
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  }
}
