const Hook = require('./hook');
const HookCodeFactory = require("./HookCodeFactory")
class SyncHookCodeFactory  extends HookCodeFactory {
    content(){
        return this.callTapsSeries()
    }
}
const factory = new SyncHookCodeFactory()

function COMPILE(options) {
    // 准备工作的方法
    factory.setup(this, options)
    // 创建方法
    return factory.create(options)
}


function SyncHook(args=[], name=undefined) {
    // 实例继承 函数式继承
    let hook = new Hook(args, name);
    // 实例增强
    hook.compile = COMPILE;
    return hook;
}
// 原型设为null
SyncHook.prototype = null
module.exports = SyncHook