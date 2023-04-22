const path = require('path')
module.exports =   {
    mode: "development",
    devtool: "source-map",
    // output:{
    //     path: path.resolve(__dirname, "plugin-server"),
    //     // filename: "main.js"
    //     filename:"script/[name]-[hash:5].js"
    // },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 8010,
        // open: true,
        open: ['/main.html'],
        server: 'https',
        proxy: { //代理规则
            "/api": {
                target: "http://open.duyiedu.com",
                changeOrigin: true //更改请求头中的host和origin
            }
        }
    },
    plugins: []
}