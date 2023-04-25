import common from "./common";

console.log("a js ddc");

new Promise(resolve =>{
    resolve()
})

console.log("Array.of(3, 4, 5) =", Array.of(3, 4, 5));


class Preson{
    constructor(){

    }
    eat(){

    }
}



async function rest(params) {
    await setTimeout(() => {
        console.log("10");
    }, 10)
    console.log("20");
}
rest()


// 运行在 node 中的 函数
function testProcess(callback) {
    console.log("process =", process);
    process.nextTick(callback);
}
testProcess(() => {
    console.log("asds");
})


class testClass {
    a= 1;
    constructor(){
        this.b = 5
    }
}



function Print() {
    console.log(" this.loginID", this.loginID);
}

const objTest = {
    loginID: "asd"
}
//objTest::Print() == Print().call(objTest)
objTest::Print()

module.exports = "a.js"

