const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.html',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs'),
  },
  devServer: {
    static: {
        directory: path.join(__dirname, 'docs'), 
      },
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // Path to your source index.html
    })
  ],
};
