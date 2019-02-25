const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'automatically sets process.env.NODE_ENV === development using DefinePlugin',
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './build'
	}
});