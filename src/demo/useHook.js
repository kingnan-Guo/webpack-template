let {SyncHook} = require("./tapable")
// let SyncHook = require("../../node_modules/tapable/lib/SyncHook")
console.log("SyncHook", SyncHook);

let hook = new SyncHook(['arg'])

hook.tap("click1", function(arg) {
    console.log("arg1 =", arg);
})

hook.tap("click2", function(arg) {
    console.log("arg2 =", arg);
})

hook.call('yuyuyu')