const path = require('path');

module.exports = {
  entry: './src/main/frontend/scripts/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/resources/scripts/',
    path: path.resolve(__dirname, './src/main/xar-resources/resources/scripts/')
  },
   module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       }
     ]
   }
};
