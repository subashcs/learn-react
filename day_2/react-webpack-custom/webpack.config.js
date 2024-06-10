const path = require('path');

module.exports = {
  mode: 'development', // Set to 'production' for optimized production build
  entry: './src/index.js', // Entry point for Webpack
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), // Output directory for the bundled file
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Rule for handling JavaScript and JSX files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  devServer: {
    static:{
        directory: path.join(__dirname, 'public'), // Serve content from the public directory
    }, 
    port: 3000, // Port for the development server (default: 8080)
    hot: true, // Enable hot module replacement for development
  },
};
