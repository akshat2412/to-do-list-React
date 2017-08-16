module.exports={
	entry: './src/index.js',
	output:{
		path:"public/assets",
		filename:"bundle.js",
		publicpath:"assets"
	},
	devServer:{
		inline: true,
		contentBase: './public',
		port: 3000
	},
	module:{
		loaders:[
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: ['babel'],
				query: {
					presets: ['latest','stage-0']
				}
			},
			{
			  test: /\.css$/,
			  loader: 'css-loader',
			  query: {
			    modules: true,
			    localIdentName: '[name]__[local]___[hash:base64:5]'
			  }
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: ['json-loader'],
			}
		]
	}
}
