const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'automatically sets process.env.NODE_ENV === production using DefinePlugin. Also loads TerserPlugin',
	mode: 'production'
});