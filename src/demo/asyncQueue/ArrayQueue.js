/**
 * 模拟队列
 */
class ArrayQueue{
    constructor(){
        this._list = [];

    }
    // 入队的方法
    enqueue(entry) {
        this._list.push(entry)
    }
    // 出队
    dequeue(){
        return this._list.shift()
    }

}
module.exports = ArrayQueue