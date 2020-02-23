require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
	entry: {
	  bundle: ['./src/main.js'],
	  styles: ['./src/scss/styles.scss']
  },
	output: {
		path: path.resolve(__dirname, "./dist"),
    filename: '[name].js',
    chunkFilename: '[name].js',
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
				test: /\.s(c|a)ss$/,
				use: [
				  isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')({}),
                require('cssnano')({preset: 'default'})
              ],
              minimize: true
            }
          },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
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
		extensions: ["*", ".js", ".vue", ".json", ".scss"]
	},
	plugins: [
		new VueLoaderPlugin(),
    new VuetifyLoaderPlugin(),
    new webpack.ProgressPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CopyPlugin([{ from: './public' }]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css'
    })
	],
};
