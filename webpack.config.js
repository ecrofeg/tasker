var webpack = require('webpack'),
	path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	watch: true,
	
	entry: [
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'webpack/hot/only-dev-server',
		'./frontend/src/index.js'
	],
	
	output: {
		path: path.join(__dirname, 'frontend/public/dist'),
		filename: 'bundle.js'
	},
	
	resolve: {
		modulesDirectories: ['node_modules', 'frontend/src'],
		extentions: ['', '.js']
	},
	
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_module/,
				loaders: ['babel?presets[]=react,presets[]=es2015']
			}	
		]
	},
	
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};