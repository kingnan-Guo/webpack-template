"use strict";

var b = "bb";
console.log(b);
var bb = function bb() {
  console.log("asd");
};
function Method() {
  var _this = this;
  var c = function c() {
    console.log(_this);
  };
}