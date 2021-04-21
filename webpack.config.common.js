const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: { 
        contentBase: path.join(__dirname, "public"), 
        compress: true, 
        hot: true, 
        port: 3000 
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"],
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                use: 'file-loader?name=fonts/[name].[ext]!static'
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
}