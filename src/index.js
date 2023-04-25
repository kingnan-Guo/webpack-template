

import common from "./common";
import "./assets/index.css";
console.log('index module main a');
var src = require("@/assets/data.png")
console.log(src);

var img = document.createElement('img')
img.src = src
document.body.appendChild(img);


console.log('PI ==',PI);


if(module.hot){
    console.log("kingnan = 123");
    module.hot.accept()
}

// module.exports = "cbcd cc"

// 懒加载
const btn = document.querySelector("button")
if(btn){
    btn.onclick = async function () {
        console.log("123");
        // // import  是es6 草案 ，webpack支持 , es6当前不支持 ，import 返回一个promise
        // const { chunk } = await import("loadsh");
        // const result = chunk([3, 1, 3, 8, 9], 2)
        // console.log("result =", result);

        const $ = await import("jquery");
        console.log("$ =", $);
    }
}

