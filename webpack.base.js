
const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    entry:{
        main: "./src/index.js",
        a: "./src/a.js",
    },
    output: {
        filename: "scripts/[name].[chunkhash:5].js"
    },
    // resolve:{
    //     modules:["./src"],
    //     // extensions: ["./js", ".json", ".css", ".vue", ".jsx"], //引入的模块不需要写后缀
    //     extensions: ['.js', '.ts', '.json', '.less', '.css'],
    //     alias: {
    //         "@": path.resolve(__dirname, "src"),
    //         "_": __dirname
    //     }
    // },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.resolve(__dirname, "src"),
        }
    },
    module:{
        rules: [{
            test: /\.css$/,
            use:["./loaders/load-style.js"]
        },{
            test:/\.(png)|(jpg)|(gif)$/,
            use:[{
                loader: "./loaders/img-loader.js",
                options:{
                    limit: 3000,
                    filename:"img-[contenthas:5].[ext]"
                }
            }]
        }],  //模块匹配规则
        // noPars:哪些模块不要解析
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/template.html",
            filename: "a-[hash:5].html",
            // filename: "index-[hash:5].html",
            // filename: "index.html",
            chunks: [ 'a' ] //default 默认值: [all]
        }),
        new HtmlWebpackPlugin({
            template: "./public/template.html",
            // filename: "main-[hash:5].html",
            // filename: "main.html",
            // filename: "index-[hash:5].html",
            filename: "index.html",
            chunks: [ 'main' ] //default 默认值: [all]
        }),
        
        // new HtmlWebpackPlugin({
        //     template: "./public/template.html",
        //     filename: "a-[hash:5].html",
        //     chunks: [ 'a' ] //default 默认值: [all]
        // }),

        new CopyPlugin({
          patterns: [
            {
              from: "./public",
              to: "./",
            },
          ],
        }),


    ],

    
    stats: {
        modules: false,
        colors: true
    }
}