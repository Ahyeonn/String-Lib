const path = require('path');

module.exports = {
  entry: './typescript/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
		library: 'stringlib',
		libraryTarget: 'umd',
		globalObject: 'this',
  },
  mode: 'production',
};