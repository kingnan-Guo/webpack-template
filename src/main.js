import  "./index.less";
console.log(" --  mian ---");
import { createApp } from "vue";
import router from "./router"
import store from "./store";
import App from "./App.vue"
import {customIcc} from "custom-icc";
import customIce from "custom-ice";
// new Vue({
//     render: h => h(App)
// }).$mount("#app");

console.log("customIcc =", customIcc);
console.log( "customIce =", customIce);
// console.log("createApp", createApp);
const app = createApp(App);
app.use(store).use(router)


app.use(customIcc).use(customIce);



// // // app.use(router);
app.mount("#app");

// console.log("===== mian 2====");