/**
 * call的 执行方法
 * 目的是为了生成 执行函数 fn
 */
class HookCodeFactory{
    constructor(){
        this._args = undefined;
        this.options = undefined
    }

    /**
     * setup的主要目的是 将注册的taps中fn 取出 放置到统一的数组中
     * @param {*} instance 
     * @param {*} options 从hook.js中 class Hook 的createcal1调用 this.compile（）的传值
     * 
     * hooks 中的 taps里面装的是[{type, name, fn}, {. .}]
     * 每注册一个 taps就有一个{type, name, fn}
     */
    setup(instance, options) {
        instance._x = options.taps.map (i => i.fn)
    }
    // 实现fn的方法
    create (options){
        let fn
        //初始化
        this.init(options)
        //会根据传入的 类型做处理
        //当前这里只有同步的
        switch (options.type){
            case 'sync':
                //this.args（）参数列表
                // 拼接实现 fn函数
                fn = new Function(this.args(), "'use strict';\n" + this.header() + this.contentWithInerceptors())
                break;

            default:
                break;
        }
        //反初始化
        this.deinit()
        return fn
    }


    init(options){
        this.options= options;
        this._args = options._args.slice();//复制一份hook 类中 _args
    
    }
    deinit(){
        this.options = undefined;
        this._args  = undefined;
    }


    args() {
        let allArgs = this._args;
        // console.log("allArgs =", allArgs);
        //将数组组合成
        //一个逗号分隔的 字符串 [args1", rargs2"] --> 'args1', 'args2'
        return allArgs.join(', ')
    }
    
    header(){
        let code = '';
        code += 'var _content; \n'
        code += 'var _x = this._x;\n'
        return code
    }


    // 这里会调用 SVncHook 的content通过 callTapsseries 创建fn的相关函
    contentWithInerceptors(){
        return this.content();
    }

    callTapsSeries(){
        let code = ''
        for (let i = this.options.taps.length - 1; i > 0; i--) {
            // 要执行第几的钩子 函数
            let content = this.callTap(i)
            // console.log("content ==", content);
            debugger
            code += content;
        }
        // console.log("callTapsSeries =", code);
        return code;
    }
    callTap(tapIndex){
        let code = "";
        code += `var _fn${tapIndex} = ${this.getTapFn(tapIndex)};\n`
        // console.log("callTap code ==", code);
        // 因为这里只有同步
        // 首先根据 tapIndex 获取 tap
        let tap = this.options.taps[tapIndex]
        // console.log("callTap code ==", code);
        // 根据tap 的类型 
        switch (tap.type) {
            case 'sync':
                // 拼接调用代码
                code += `_fn${tapIndex}(${this.args()});\n`
                break;
        
            default:
                break;
        }
        // console.log("code =", code);
        return code
    }
    getTapFn(index) {
        return `_x[${index}]`
    }

}

module.exports = HookCodeFactory







