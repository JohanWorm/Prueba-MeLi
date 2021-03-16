const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

// const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
    context: path.resolve(__dirname, 'client/src'),
    entry: {
        app: "./index.js",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(ttf)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: '/assets/fonts',
                    outputPath: 'assets/fonts'
                }
            },
            {
                test: /\.(png)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: '/assets/images',
                    outputPath: 'assets/images'
                }
            },
            {
                test: /\.(svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: '/assets/svg',
                    outputPath: 'assets/svg'
                }
            },
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
        alias: {
            assets: path.resolve(__dirname, 'client/assets'),
            src: path.resolve(__dirname, 'client/src'),
            mockData: path.resolve(__dirname, '__mockData__')
        }
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
        filename: "meli.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "client/src"),
        port: 3001,
        historyApiFallback: true
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
        // }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new HtmlWebpackPlugin({
            template: '../assets/index.html'
        })
    ],
};