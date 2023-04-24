// function loader(source) {
//     return `new source`
// }

// loader.pitch - function (filePath) {
    
// }
// 如果 loader1 pitch1 没有返回结果 交给loader2.pitch 如果pitch 有返回值那么 传递source给 loader2 在传递给 loader1 ,如果没有值那么传递给资源


// loader 开启线程池

var cpus = require("os").cpus()
console.log("cpus =",cpus);