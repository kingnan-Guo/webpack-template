import  "./index.less";
console.log(" --  mian ---");
// import { createApp } from "vue";

import * as vue from "vue";
console.log(vue);
const { createApp } = vue
// import router from "./router"
import router from "./router/myIndex"


import store from "./store";
import App from "./App.vue"
import {customIcc} from "custom-icc";
import customIce from "custom-ice";
// new Vue({
//     render: h => h(App)
// }).$mount("#app");

// console.log("customIcc =", customIcc);
// console.log( "customIce =", customIce);

// setTimeout(() => {
//     console.log("store ==",store)
// }, 10000);
// console.log("createApp", createApp);


const app = createApp(App);
// app.router = router
app.use(store).use(router)


app.use(customIcc).use(customIce);
// // // app.use(router);
app.mount("#app");

// console.log("===== mian 2====");

// console.log("app ==", app)

// console.log("main vue", vue);
app.config.globalProperties.$user = {
    name: 'kingnan',

}

console.log("app ==", app)
