var path = require('path');


module.exports = {
	entry: "./app/assets/scripts/script.js",
		output: {
			path: path.resolve(__dirname,"./app/temp/scripts"),
			filename: "script.js"
				},
	module: {
		loaders: [
			{
				loader:'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}