var loaderUtil = require("loader-utils")
function loader(sourceCode) {
    // 将图片处理为 base64
    // console.log(sourceCode)
    // console.log("sourceCode.byteLength", sourceCode.byteLength);
    // console.log("loaderUtil", loaderUtil);
    // var {limit=1000, fileName = "[contenthash].[ext]"} = loaderUtil.getOptions(this)
    var limit=1000, fileName = "imgs/[contenthash].[ext]"
    // console.log("sourceCode.byteLength ==", sourceCode.byteLength);
    var content
    if (sourceCode.byteLength >= limit) {
        content = getFilePath.call(this, sourceCode, fileName)
        // console.log('content ==', content)
    } else{
        content = getBase64(sourceCode)
    }

    return `module.exports = \`${content}\``
}
// 该 loader 要处理的是原始数据
loader.raw = true;


module.exports = loader

function getBase64(buffer) {
    return "data:image/png;base64,"+buffer.toString("base64")
}


function getFilePath(buffer, fileName) {
    // 按照规则生辰名字
    var fileName = loaderUtil.interpolateName(this, fileName, {
        content:buffer
    })
    console.log('fileName ==',fileName);
    // 往 最终的bounlde 加入资源
    this.emitFile(fileName, buffer)
    return fileName
}
