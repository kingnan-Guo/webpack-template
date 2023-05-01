const path = require("path");
const CopyPlugin = require("copy-webpack-plugin"); // 处理静态资源
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清除 dist 目录
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 处理模板页面
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { VueLoaderPlugin } = require("vue-loader")
// const VueLoaderPlugin = require("vue-loader/lib/plugin");

const pathResolve = _path => path.resolve(__dirname, _path)
module.exports = {
    entry: "./src/main.js",
    mode: "development",
    devtool: "source-map",
    output: {
        filename: "static/js/[name].[chunkhash:5].js",
        path: pathResolve('dist')
    },
    resolve: {
        alias: {
          '@': pathResolve('./src'),
        },
    },

    devtool: "inline-source-map",
    devServer: {
        open: true,
        port: 9060,
        proxy: {},
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: pathResolve("./public/index.html"),
            title: "vue3.0 index",
            filename: "index.html",
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, "public"),
                to: "./"
            }]
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkhash:5].css'
        }),
        new VueLoaderPlugin(),
        // new VueLoaderPlugin(),
    ],
    module: {
        rules: [{
            test: /\.vue$/i,
            use:"vue-loader"
        }, {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        }, {
            test: /\.less$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader", 'postcss-loader']
        }]
    },
    stats: {
        colors: true, // 打包时使用不同的颜色区分信息
        modules: false, // 打包时不显示具体模块信息
        entrypoints: false, // 打包时不显示入口模块信息
        children: false, // 打包时不显示子模块信息
    },
}