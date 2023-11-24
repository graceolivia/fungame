const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
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
};
