/*!
 * 
 *             hash:8056068eefcbd96a3700,
 *             chunkhash:[],
 *             name:main,
 *             author: kingnan,
 *             corporation: heartControl
 *
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/data.png":
/*!*****************************!*\
  !*** ./src/assets/data.png ***!
  \*****************************/
/***/ (function(module) {

module.exports = `imgs/ed7d4ac448fbdaf2.png`

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

console.log('index module main a');
var src = __webpack_require__(/*! @/assets/data.png */ "./src/assets/data.png");
console.log(src);
var img = document.createElement('img');
img.src = src;
document.body.appendChild(img);
module.exports = "cbcd c";
console.log('PI ==', Math.PI);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main-80560.js.map