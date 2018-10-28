const path = require('path')
const LIBRARY_NAME = 'your-lib-name'

module.exports = {
	entry: 'src/index.js',
	output: {
		path: path.resolve('lib'),
		filename: 'index.js',
		library: LIBRARY_NAME,
		libraryTarget: 'umd',
		umdNamedDefine: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
			},
		],
	},
	resolve: {
		modules: ['node_modules', path.resolve('./'), path.resolve('./src')],
	},
	devtool: 'source-map',
}
