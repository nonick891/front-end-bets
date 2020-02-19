const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'public')
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.(scss|css)$/,
				use: ["vue-style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							esModule: false,
						},
					},
				],
			},
			{
				enforce: 'pre',
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		alias: {
			vue$: "vue/dist/vue.esm.js"
		},
		extensions: ["*", ".js", ".vue", ".json"]
	},
	plugins: [new VueLoaderPlugin(), new VuetifyLoaderPlugin()],
};