module.exports = class fileListPlugin{
    constructor(fileInfo){
        
        this.filename = fileInfo.filename
        
    }


    apply(compiler){

        console.log("this.filename =", this.filename);
        // 在每一个好 webpack 方法中 只运行 一次
        // 在这里 注册编译器的 各种事件  干预 webpack 编译过程 
        console.log("插件 runner");
        //beforeRun run emit
        compiler.hooks.emit.tapAsync('fileListPlugin emit-tap',  async(compilation, callback) => {
            // console.log("compilation ==", compilation);
            // console.log("fileListPlugin emit ing compilation =",compilation.assets );
            // var str = "fileList 1 2 3 "
            var fileList = []
            for (const key in compilation.assets) {
                var content  = `[${key}]  
size: ${compilation.assets[key].size()/1000}KB`

                    fileList.push(content)
                
            }
            var str = fileList.join("\n\n")
            // 生成 fileList文件
            compilation.assets['files/'+this.filename] = {
                source(){
                    return str
                },
                size(){
                    return str.length
                }
            }

            callback()
        })


    }
}