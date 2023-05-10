/**
 * 对 asyncQueue 的理解 不参与打包
 */

// let AsyncQueue = require('webpack/lib/util/AsyncQueue')

let AsyncQueue = require('./asyncQueue.handle.demo')
console.log("AsyncQueue =", AsyncQueue);
let queue = new AsyncQueue({
    name: 'schularor',
    // 处理函数
    processor: function (item, callback) {
        // console.log("item ==", item);
        item.deal = item.key + "--- handle"
        setTimeout(() => {
            callback(null, item)
        }, 1000)
    },
    // 并发数
    parallelism:2,
    getKey: item => item.key
})

queue.add({key: 'task1'}, function(err, result) {
    console.log('task1 =', result);
})

queue.add({key: 'task2'}, function(err, result) {
    console.log('task2 =', result);
})

queue.add({key: 'task3'}, function(err, result) {
    console.log('task3 =', result);
})

// 源码如果有两个或两个以上的  同名的 任务 那么会一起执行
queue.add({key: 'task1'}, function(err, result) {
    console.log('task1 -2 =', result);
})