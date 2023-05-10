const { call } = require("file-loader")
const ArrayQueue = require("./ArrayQueue.js")
const AsynQueueEntry = require("./AsynQueueEntry.js")

const QUEUED_STATE = 0; //队列 阶段
const POROSSING_STATE = 1;//正准备执行
const DONE_STATE = 3; // 已完成


class AsyncQueue{
    constructor(options){
        this._name = options.name
        // 处理函数
        this._processor = options.processor
        // 并发数
        this._parallelism = options.parallelism
        this._getKey = options.getKey

        // ArrayQueue 模拟一个队列 提供连个方法
        this._queued = new ArrayQueue()
        // 这里 装载所有已经执行 过的任务
        this.entries = new Map()
        // 并行的任务数
        this._activeTask = 0;
        // 任务是否开启 标识
        this._willEnsureProcessing = false;
    }
    // 在添加过程中 判断是否有添加过的任务 如果有那么猜测 callback要变成数组
    add(item, callBack){
        // 获取 item内的 key 要通过key 判断是否重复
        let key = this._getKey(item)
        let entry = this.entries.get(key)
        if(entry){
            // 给 entry 设置 状态 state
            if (entry.state === DONE_STATE) {
                // callBack(entry.error, entry.result)
                // 因为是异步的 所以要等待 下一个循环
                // 如果 这里已经正常执行 完成 那么直接返回刚才 的值
                process.nextTick(callBack(entry.error, entry.result))
            } else {
                entry.callBacks.push(callBack)
            }
            return 
        }


        // newEntry 中包含 item, callBack，将参数封装为一个任务
        let newEntry = new AsynQueueEntry(item, callBack)
        // 任务入队
        this._queued.enqueue(newEntry)

        this.entries.set(key, newEntry)
        // 如果队列没有开启那么 执行开启
        if(!this._willEnsureProcessing){
            this._willEnsureProcessing = true;
            // setImmediate 立即执行函数 是宏任务， 回调函数会被放置到事件循环的check，不会阻塞主线程， 监控UI线程的调用栈，一旦调用栈为空则将handler压栈。
            setImmediate(this._ensureProcessing.bind(this))
        }
    }
    // 拿着 this._queued 里面的任务去执行
    _ensureProcessing(){
        // 当前执行的任务数 小于并发数
        while (this._activeTask < this._parallelism) {
            // 得到一个 newEntry
            let Entry = this._queued.dequeue()
            if (!Entry) {
                break
            }
            this._activeTask ++ 
            this._strateProcess(Entry)
            this.state = POROSSING_STATE
        }

        // 关闭 队列任务
        this._willEnsureProcessing = false;
    }

    // 执行函数
    _strateProcess(Entry){
        this._processor(Entry.item, (err, res) =>{
            this._handleResult(Entry, err, res)
        })
    }
    // 任务处理
    _handleResult(Entry, err, res){
        // 通过传入的 回调将数据传给用户
        const callBack = Entry.callBack;


        // 当函数执行到这里 会被标记 执行完成 DONE_STATE
        Entry.state = DONE_STATE
        Entry.error = err
        Entry.result = res;
        callBack(err, res)
        this._activeTask --


        // 判断 Entry 中 是否包含
        if (Entry.callBacks.length > 0) {
            for (const callBack of Entry.callBacks) {
                callBack(err, res)
            }
        }
        // 任务处理完成之后在此开启
        // 在这里再次判断是否开启 队列 如果队列没有开启那么 执行开启
        if(!this._willEnsureProcessing){
            this._willEnsureProcessing = true;
            // setImmediate 立即执行函数 是宏任务， 回调函数会被放置到事件循环的check，不会阻塞主线程， 监控UI线程的调用栈，一旦调用栈为空则将handler压栈。
            setImmediate(this._ensureProcessing.bind(this))
        }


    }
}
module.exports = AsyncQueue
