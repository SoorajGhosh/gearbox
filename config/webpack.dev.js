const path = require("path");
const common = require("./webpack.common"); 
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common,{      
	mode: "development",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname,"dist/")
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/html/index.html",
		})
	],
	optimization: {
        runtimeChunk: 'single'
    },
	module:{
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/i,
				use: ['style-loader', 'css-loader',"sass-loader"],
			}
	]},
	devServer: {
		contentBase: path.resolve(__dirname,"dist/"),
		compress: false,
		hot: true,
		open: false,
		host: '0.0.0.0',
		port: 9000,
	},
});