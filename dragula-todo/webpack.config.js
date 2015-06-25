module.exports = {
	entry: {
		app: ["./public/components/main.jsx"]
	},
	output: {
		path: process.env.NODE_ENV === 'production' ? './public/build' : './public/dev',
		publicPath: "",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'jsx-loader?insertPragma=React.DOM&harmony'
			}
		]
	},
	resolve: {
        extensions: ['', '.js', '.jsx']
    }
}