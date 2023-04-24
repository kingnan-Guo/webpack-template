/*!
 * 
 *             hash:ec2c60891f0afd772d7a,
 *             chunkhash:[],
 *             name:lodashTest,
 *             author: kingnan,
 *             corporation: heartControl
 *
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lodashTest.js":
/*!***************************!*\
  !*** ./src/lodashTest.js ***!
  \***************************/
/***/ (function(module, exports) {

import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.promise.js";
console.log("loadsh =", _.drop([1, 2, 3, 6], 2));

/***/ }),

/***/ "?5894":
/*!**********************!*\
  !*** dll lodashTest ***!
  \**********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__;

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("?5894");
/******/ 	
/******/ })()
;
//# sourceMappingURL=lodashTest-ec2c6.js.map