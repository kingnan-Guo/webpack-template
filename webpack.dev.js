const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { library } = require('webpack')
module.exports =   {
    mode: "development",
    devtool: "source-map",
    output:{
        path: path.resolve(__dirname, "development-all-dist"),
        // filename: "main.js"
        filename:"script/[name]-[hash:5].js",


    },
    plugins: [
        new CleanWebpackPlugin(), //在 开发环境中 和生产环境中
    ],
    // module: {
    //     // noParse: /lodash/,// 不去解析 不做抽象语法树分析，把 lodash 直接引用过来
    // }
}