

const QUEUED_STATE = 0
const POROSSING_STATE = 1
const DONE_STATE = 3

class AsynQueueEntry{
    constructor(item, callBack){
        this.item = item
        this.callBack = callBack

        this.state = QUEUED_STATE;
        this.error =undefined;
        this.result = undefined
        this.callBacks = []
    }


}

module.exports = AsynQueueEntry