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
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: pathResolve("./public/index.html"),
            title: "vue3.0 index",
            filename: "index.html",
        }),
        new CopyPlugin({
            // patterns: [{
            //     from: path.resolve(__dirname, "public"),
            //     to: "./"
            // }]
            patterns: [{
                from: path.resolve(__dirname, "public/static"),
                to: "./static"
            }]
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkhash:5].css'
        }),
        new VueLoaderPlugin(),
        // new VueLoaderPlugin(),
    ],
    module: {
        rules: [ {
                // 各种图片、字体文件，均交给 url-loader 处理
                test: /\.(png)|(gif)|(jpg)|(svg)|(bmp)|(eot)|(woff)|(ttf)$/i,
                use: [
                  {
                    loader: "url-loader",
                    options: {
                      limit: 1024,
                      name: "static/[name].[hash:5].[ext]",
                      esModule: false,
                    },
                  },
                ],
            }, {
                test: /\.vue$/i,
                use:"vue-loader"
            }, {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }, {
                test: /\.less$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader", 'postcss-loader']
            }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }]
    },
    stats: {
        colors: true, // 打包时使用不同的颜色区分信息
        modules: false, // 打包时不显示具体模块信息
        entrypoints: false, // 打包时不显示入口模块信息
        children: false, // 打包时不显示子模块信息
    },
}