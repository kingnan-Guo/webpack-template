// 导出当前目录下的所有文件

const context = require.context("./", true, /\.js$/);
for (const key of context.keys()) {
    if (key !== "./index.js") {
        let filename = key.substr(2);
        console.log("filename 1", filename);
        filename = filename.substr(0, filename.length - 3);
        console.log("filename 2", filename);
        console.log("context(key) =", context(key));
        exports[filename] = context(key);
    }
}