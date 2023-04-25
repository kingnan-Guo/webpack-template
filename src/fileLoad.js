// var dataJson = require("./assets/data.json")

// console.log(dataJson);

// var src = require("./assets/webpack.jpeg").default
import src from "./assets/explame.jpeg";
console.log(src);

var img = document.createElement('img')
img.src = src
document.body.appendChild(img);

import src_jpg from "./assets/explame.jpg";
console.log(src_jpg);


var img_jpg = document.createElement('img')
img_jpg.src = src_jpg
document.body.appendChild(img_jpg);

module.exports = "dataJson"