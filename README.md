# webpack-template
关于 webpack 的一些配置总结
webpack-vue

# webpack-vue
webpack 创建 vue 运行环境 serve 可运行，  使用 lib 打包 并引入到项目中 




----

使用  npm run lib 对custom-icc 进行打包

npm i custom-icc 后 在mian 中进行

import {customIcc} from "custom-icc";
app.use(customIcc);

打好的包 要先初始化
npm init -y
npm publish  上传至 npm 中发包