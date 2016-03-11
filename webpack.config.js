module.exports = {
	entry: {
		"es6Mixins": "./src/index.js",
		"example": "./example/example.js"
	},
	output: {
		path: "dist",
		filename: "[name].js",
		libraryTarget: 'umd',
		library: "[name]"
	},
	externals: {
		"@nsisodiya/es6-mixins": {
			commonjs: '@nsisodiya/es6-mixins',
			commonjs2: '@nsisodiya/es6-mixins',
			amd: 'es6Mixins',
			root: 'es6Mixins'
		}
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel",
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};