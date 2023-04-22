
const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry:{
        main: "./src/index.js",
        a: "./src/a.js",
        fileLoad:"./src/fileLoad.js"
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
            test:/\.(png)|(gif)$/,
            use:[{
                loader: "./loaders/img-loader.js",
                options:{
                    limit: 3000,
                    filename:"img-[contenthash:5].[ext]"
                }
            }]
        },{
          test: /\.(jpeg)$/,
          use:[{
            loader: "file-loader",
            options:{
              name:"imgs/img-[name]-[contenthash:5].[ext]"// 引用图片
            }
          }]
      },{
        test: /\.(jpg)$/,
        use:[{
          loader: "url-loader",//图片转 Base64
          options:{
            // limit: false, //不限制任何大小，经过loader 就转换
            limit: 100 * 1024,// 文件不超过100 *1024 子级就转换成 base64 否则交给 fileloader 处理
            name:"imgs/img-[name]-[contenthash:5].[ext]"// 引用图片
          }
        }]
      } 
      // {
      //   test: /\.(json)$/,
      //   use:[{
      //       loader: "file-loader",
      //       options:{
      //         name:"json/[name].[ext]"
      //     }
      //   }]
      // }
    ],  //模块匹配规则
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
        new HtmlWebpackPlugin({
            template: "./public/templateTwo.html",
            filename: "fileLoadPage-[hash:5].html",
            chunks: [ 'fileLoad' ] //default 默认值: [all]
        }),

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