const HtmlWebpackPlugin = require('html-webpack-plugin')
// 模块联邦
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: './src/index.js',
    output: {
        clean: true,
        filename: "scripts/[name].[chunkhash:5].js",
    },
    module: {
        rules: []
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new ModuleFederationPlugin({
            // 模块联邦的名字
            name: 'home',
            filename: 'home-entry.js',
            exposes:{
                './now': './src/now.js'
            },
            remotes: {
                // key: 自定义远程暴露的联邦名
                // 比如为 abc， 则之后引用该联邦的模块则使用 import "abc/模块名"
                // value: 模块联邦名@模块联邦访问地址
                // 远程访问时，将从下面的地址加载
                active: 'active@http://localhost:8011/active-entry.js',
            },
        })
    ],
    devServer: {
        open: true,
        port: 8010,
    },

}