const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');

module.exports = {
	entry: {
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
	},
	plugins: [
		new CleanWebpackPlugin(['build']),
		new HtmlWebpackPlugin({
			title: 'Production'
			}),
		new CopyWebpackPlugin([
		      { from: './src/main/webapp/html', to: './build/html' }
		    ]),
		new HtmlWebpackRootPlugin()
	]
};
