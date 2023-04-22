const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
module.exports =   {
    mode: "development",
    devtool: "source-map",
    output:{
        path: path.resolve(__dirname, "development-dist"),
        // filename: "main.js"
        filename:"script/[name]-[hash:5].js"
    },
    plugins: [
        new CleanWebpackPlugin(), //在 开发环境中 和生产环境中
    ]
}