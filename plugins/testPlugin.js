module.exports = class testPlugin{
    apply(compiler){
        // 在每一个好 webpack 方法中 只运行 一次
        // 在这里注册事件 ，一些钩子
        console.log("插件 runner");
        // tap 同步 参数
        compiler.hooks.done.tap('done-tap', function (compilation) {
            // console.log("compilation ==", compilation);
            console.log("is done");
        })
        // tapAsync 异步 需要传输 回调
        compiler.hooks.done.tapAsync('done-tapAsync',  function(compilation, cb) {
            // console.log("compilation ==", compilation);
            cb()
            console.log("tapAsync is done");
        })
        // tapPromise 异步 返回 promise
        compiler.hooks.done.tapPromise('done-tapPromise', async function(compilation) {
            // console.log("compilation ==", compilation);
            console.log("tapPromise is done");

        })

        //beforeRun run emit
        compiler.hooks.emit.tap('emit-tap', function (compilation) {
            // console.log("compilation ==", compilation);
            console.log("emit ing");
        })


    }
}