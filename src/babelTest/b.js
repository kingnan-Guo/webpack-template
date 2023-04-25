const b = "bb"
console.log(b);

const bb = () => {
    console.log("asd");
}


function Method() {
    var _this = this;
    var c = () => {
        console.log(_this);
    }
}

// 多出来的 对象、函数 是  API
// let const Math.pow() 这是新的 语法

// 这个是 API 默认情况下不会 更改任何api 
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