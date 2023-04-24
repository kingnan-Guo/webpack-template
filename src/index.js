


import "./assets/index.css";
console.log('index module main a');
var src = require("@/assets/data.png")
console.log(src);

var img = document.createElement('img')
img.src = src
document.body.appendChild(img);
module.exports = "cbcd cc"

console.log('PI ==',PI);


if(module.hot){
    console.log("kingnan = 123");
    module.hot.accept()
}