# webpack-template
关于 webpack 的一些配置总结



.babelrc babel 预设
.browserslistrc 兼容浏览器 



tree shaking
写 import obj form  || import * as obj form

package.json  中配置  "sideEffects": false  全局代码无副作用 ， tree shaking 会执行的大胆一些
"sideEffects": ["!src/common.js"] 只有  common 无副作用
--legacy-peer-deps