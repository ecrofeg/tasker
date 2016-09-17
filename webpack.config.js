const webpack = require('webpack'),
	path = require('path'),
	autoprefixer = require('autoprefixer');

module.exports = {
	devtool: 'inline-source-map',
	watch: true,
	
	entry: [
		'webpack-dev-server/client?http://127.0.0.1:8080/',
		'./frontend/src/index.js'
	],
	
	output: {
		path: path.resolve(__dirname, 'frontend/public/dist'),
		publicPath: '/dist/',
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
				exclude: /node_modules/,
				loaders: ['babel?presets[]=react,presets[]=es2015']
			},
			{
				test: /\.(styl|css)$/,
				loader: 'style!css?minimize&sourceMap!postcss!stylus?resolve url'
			},
			{
				test: /\.(scss|sass)$/,
				loader: 'style!css?minimize&sourceMap!sass'
			}
		]
	},

	postcss: function () {
		return [autoprefixer];
	},
	
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};