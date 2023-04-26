/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/a.js":
/*!************************!*\
  !*** ./src/utils/a.js ***!
  \************************/
/***/ ((module) => {


module.exports = "a";


/***/ }),

/***/ "./src/utils/b.js":
/*!************************!*\
  !*** ./src/utils/b.js ***!
  \************************/
/***/ ((module) => {


module.exports = "b";


/***/ }),

/***/ "./src/utils/cf.js":
/*!*************************!*\
  !*** ./src/utils/cf.js ***!
  \*************************/
/***/ ((module) => {

module.exports = function c(params) {
    console.log(params);
    return 'cf'
}



/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// 导出当前目录下的所有文件

const context = __webpack_require__("./src/utils sync recursive \\.js$");
for (const key of context.keys()) {
    if (key !== "./index.js") {
        let filename = key.substr(2);
        console.log("filename 1", filename);
        filename = filename.substr(0, filename.length - 3);
        console.log("filename 2", filename);
        console.log("context(key) =", context(key));
        exports[filename] = context(key);
    }
}

/***/ }),

/***/ "./src/utils sync recursive \\.js$":
/*!*******************************!*\
  !*** ./src/utils/ sync \.js$ ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./a.js": "./src/utils/a.js",
	"./b.js": "./src/utils/b.js",
	"./cf.js": "./src/utils/cf.js",
	"./index.js": "./src/utils/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/utils sync recursive \\.js$";

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// const context = require.context("./utils", true, /\.js$/);

// console.log(context('./a.js'));
// console.log(context.keys());


const util = __webpack_require__(/*! ./utils */ "./src/utils/index.js");
console.log(util)
console.log('cf ==', util.cf('asd'));

})();

/******/ })()
;
//# sourceMappingURL=main.js.map