const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/Aula018-webpack/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
            loader: 'ts-loader',
            options: {
                onlyCompileBundledFiles: true,
                configFile: 'tsconfig.frontend.json'
            },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
  },
  devtool: 'source-map',
};
