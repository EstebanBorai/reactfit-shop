const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack').DefinePlugin;
const HotModuleReplacementPlugin = require('webpack')
  .HotModuleReplacementPlugin;

module.exports = (env, args) => ({
  entry: {
    client: './client/index.tsx',
    server: './server/index.js'
  },
  output: {
    filename: '[name]/index.js',
    path: path.resolve(__dirname, 'bundle')
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
    port: 8080,
    historyApiFallback: true
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),
    new DefinePlugin({
      API_URL:
        args.mode === 'development'
          ? JSON.stringify('http://localhost:9090/api')
          : ''
    })
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      assets: path.resolve(__dirname, 'client/assets'),
      components: path.resolve(__dirname, 'client/components'),
      helpers: path.resolve(__dirname, 'client/helpers'),
      pages: path.resolve(__dirname, 'client/pages'),
      reducers: path.resolve(__dirname, 'client/reducers')
    } 
  }
});
