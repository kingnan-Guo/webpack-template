class AsyncQueue{
    constructor(options){
        this._name = options.name
        // 处理函数
        this._processor = options.processor
        // 并发数
        this._parallelism = options.parallelism
        this._getKey = options.getKey
    }
}