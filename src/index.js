
console.log('index module main a');
var src = require("@/assets/data.png")
console.log(src);

var img = document.createElement('img')
img.src = src
document.body.appendChild(img);
module.exports = "cbcd c"