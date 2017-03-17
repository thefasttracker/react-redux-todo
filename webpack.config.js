var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/js/foundation.min.js',
		'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root: __dirname,
		modulesDirectories: [
			'node_modules',
			'./app/components',
			'./app/api'
		],
		alias: {
			applicationStyles: 'app/styles/app.scss',
			actions: 'app/actions/actions.jsx',
			reducers: 'app/reducers/reducers.jsx'
		},
		extensions: ['','.js','.jsx']
	},
	module: {
		loaders:[
			{
				loader: ['babel-loader'],
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
			    query: {
			        presets: [ 'react', 'es2015', 'stage-0']
			    }
			}
		]
	},
	devtool: 'eval-source-map'
}; 
