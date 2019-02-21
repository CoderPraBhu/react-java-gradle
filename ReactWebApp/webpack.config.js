const path = require('path');

module.exports = {
  mode: 'development',	
  entry: {
//	    index: './src/main/webapp/js/index.js',
		webapp: './src/main/webapp/js/ReactWebApp.js'	
  },
  output: {
    path: path.resolve(__dirname, './build/js'),
    filename: '[name].min.js'
  },
  module: {
	    rules: [
    	  { test: /\.css$/, use: 'css-loader' },
    	  {  test: /\.m?js$/,
	          exclude: /(node_modules|bower_components)/,
	          use: {
	            loader: 'babel-loader'
	          }
    	  }
	    ]
	  }
};