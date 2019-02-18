import path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

export default {
  entry: {
    'gridify': path.join(__dirname, 'src/index.js'),
    'gridify.min': path.join(__dirname, 'src/index.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  },
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      include: /\.min\.js$/
    })]
  }
};
