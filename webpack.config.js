const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //定义入口文件
    entry : path.resolve(__dirname, 'src/index.jsx'),
    //定义出口文件
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: "bundle.js?[hash:8]"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
            ]
    },
    //添加插件
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'index.tpl.html'),
            filename: 'index.html'
        })
    ],
    devServer: {
        historyApiFallback: true,
        inline: true,
        contentBase: path.resolve(__dirname, 'dist/'),
        port: 8091
    }
}