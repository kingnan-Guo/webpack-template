
/**
 * 当 Hook 中第一次执行 这时CALL_DELEGATE  后 返回一个 this.call(...args) 所以 这时CALL_DELEGATE == this.call(...args)
 * 当执行到 第二次执行 这时CALL_DELEGATE  后，其实执行的是 this.call(...args)()
 * 通过两部执行 实现 动态编译
 * @param  {...any} args 
 * @returns 
 */
const CALL_DELEGATE = function (...args) {
    //目的是将 注册的函数 依次拿出来执行一下
    // _createCall 返回结果 是 fn
    this.call = this._createCall('aync');
    // 执行fn
    return this.call(...args)
}

class Hook{
    constructor(args, name){
        this._args = args;
        this.name = name;

        this.taps = [];// 存储注册的  tap
        this._x = [];// 储存tap的所有回调
        this.call = CALL_DELEGATE; //
        this._call = CALL_DELEGATE;//备份一份 call   实现动态编译【懒编译】，
        this.compile = this.compile; // 创建 compile
        this.tap = this.tap;
    }
    // 用于 子类去挂载
    // 所以现在返回的 是 抽象方法
    compile(template){
        throw new Error("Abstract:should be overridden")
    }
    tap(option, fn){

        this._tap('sync', option, fn)
    }
    _tap(type, option, fn){
        if (typeof(option) === "string") {
            option = {
                name: option.trim()//去掉空格
            }
        }
        
        option = Object.assign({type, fn}, option)

        // 把注册的内容放入到 taps
        this._insert(option)
    }
    _insert(item){
        this.taps.push(item)
    }
    // 创建执行函数
    _createCall(type){
        this.compile({
            type,
            taps: this.taps,
            args: this._args
        })
    }
}

