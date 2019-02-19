const path = require('path');

module.exports = {
  mode: 'development',	
  entry: './src/main/webapp/js/index.js',
  output: {
    path: path.resolve(__dirname, './build/js'),
    filename: 'webappbundle.js'
  }
};