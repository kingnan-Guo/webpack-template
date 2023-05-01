const path = require("path");
const CopyPlugin = require("copy-webpack-plugin"); // 处理静态资源
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清除 dist 目录
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 处理模板页面
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { VueLoaderPlugin } = require("vue-loader")
// const VueLoaderPlugin = require("vue-loader/lib/plugin");

const pathResolve = _path => path.resolve(__dirname, _path)
module.exports = {
    devServer: {
        open: true,
        port: 9060,
        proxy: {},
    },
    plugins:[]
}