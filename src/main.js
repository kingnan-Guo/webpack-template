import  "./index.less";
console.log(" --  mian ---");
import { createApp } from "vue";
import router from "./router"
import store from "./store";
import App from "./App.vue"
// new Vue({
//     render: h => h(App)
// }).$mount("#app");


// console.log("createApp", createApp);
const app = createApp(App);
app.use(store).use(router)

// // // app.use(router);
app.mount("#app");

// console.log("===== mian 2====");