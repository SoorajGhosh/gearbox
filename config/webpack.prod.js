const path = require("path");
const common = require("./webpack.common");
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common,{ 
	mode: "production",
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname,"dist"),
		assetModuleFilename: 'images/[name].[hash][ext][query]'
	},
	optimization: {
		minimizer: ['...' , new CssMinimizerPlugin()],
	  },
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css"
		}),
		new HtmlWebpackPlugin({
			template: "./src/html/index.html",
			minify: {
				removeAttributeQuotes: true,
				collapseInlineTagWhitespace: true,
				removeComments: true,
			}
		})
	],
	module:{
		rules: [
		  {
			test: /\.css$/i,
			use: [MiniCssExtractPlugin.loader, 'css-loader'],
		  },
		  {
			test: /\.scss$/i,
			use: [MiniCssExtractPlugin.loader, 'css-loader',"sass-loader"],
		  },
	]},
});