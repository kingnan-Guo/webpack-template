const path = require('path')
module.exports =   {
    mode: "development",
    devtool: "source-map",
    output:{
        path: path.resolve(__dirname, "copy-static-file"),
        // filename: "main.js"
        filename:"script/[name]-[hash:5].js"
    },
}