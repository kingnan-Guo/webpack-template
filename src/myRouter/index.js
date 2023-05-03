import { h, getCurrentInstance, unref, ref, defineAsyncComponent } from 'vue'
let Vue;
class VueRouter{
    constructor(options){
        console.log("options", options);
        this.mode = options.mode || 'hash'; //模式
        this.routes = options.routes
        this.current =  ref('/')
        // let init = '/'
        
        // Vue.u(this, 'current', init)
        // Reflect.get(this, 'current', init)
        this.init();//监听路由变化

        // this.push()
    }
    install(vue) {
        Vue = vue
        const router = vue.router || this 

        vue.config.globalProperties.$router = router
        Object.defineProperty(vue.config.globalProperties, '$route', {
            enumerable: true,
            get: () => {
                // console.log("this.current=", router.current);
                return unref(router.current)
            },
            // get: () => router
        })




        Vue.mixin({
            // 混入的生命周期 会比组件内部的生命周期前面发生
            beforeCreate () {
                
                if (!this.$parent) {
                    console.log('beforeCreate ===',this)
                    // console.log("this.$options.router");
                    // Vue.prototype.$router = Vue.router
                    console.log("Vue.config.globalProperties =", Vue.config.globalProperties.$route);
                }

                console.log( "Vue ==", Vue);
            },
            addEvent(){
                console.log("addEvent")
            }
        })
        console.log("-- VueRouter ---", Vue);
        Vue.component("router-link", {
            props: {
                to:{
                    type: String,
                    require: true
                }
            },
            data:function(){
                return {count:0}
            },
            render(_ctx, _cache){
                console.log("_ctx, _cache =", _ctx, _cache);
                return h('a', {
                    href:'#'+ this.to
                }, _ctx.to)
            },
            // setup() {
            //     return () => h("h2", null, "Hello World")
            // }
            // template: '<a>router-link</a>'
        })
        Vue.component("router-view", {
            setup(){

                
            },
            render(){ //render 中的数据必须为 响应式

                console.log("router-view this.$route ==", this.$route);
                let current = this.$router.current.value
                let routes = this.$router.routes
                console.log("routers ==", routes, 'current ==', current);
                let com = routes.find(item => {
                    return current === item.path
                })
                
                if(com){
                    console.log("com ==",defineAsyncComponent(com.component) );
                    // console.log("Vue.config.globalProperties =", Vue.config.globalProperties.$route);
                    // return h('div', 'router-view')
                    return h(defineAsyncComponent(com.component))
                }

            }
            // 根据 current 渲染不同的页面 找到对应的模块
            // template: '<div>router-view</div>'
        })
    }
    init(){
        let _that = this;
        console.log("this.current ==", this.current);
        if (this.mode === 'hash') {
            // 首次加载
            window.addEventListener("load", () => {
                _that.current.value  = location.hash.slice(1)
                console.log("this.current =", _that.current);
            })

            window.addEventListener("hashchange", () => {
                _that.current.value = location.hash.slice(1)
                console.log("this.current =", _that.current); 
            })
        }
    }
}
// VueRouter.install = function (_vue) {
//     Vue = _vue
//     console.log("-- VueRouter ---", Vue);
//     Vue.component("router-link", {
//         props: {
//             to:{
//                 type: String,
//                 require: true
//             }
//         },
//         data:function(){
// 			return {count:0}
//         },
//         render(_ctx, _cache){
//             console.log("_ctx, _cache =", _ctx, _cache);
//             // return h('a', {
//             //     href:'#'+ this.to
//             // }, 'router-link')
//         },
//         // setup() {
//         //     return () => h("h2", null, "Hello World")
//         // }
//         // template: '<a>router-link</a>'
//     })
//     Vue.component("router-view", {
//         // render(h){
//         //     return h('div', 'router-view')
//         // }
//         template: '<div>router-view</div>'
//     })
// }




export default VueRouter