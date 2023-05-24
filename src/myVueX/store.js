import { reactive } from "vue";
import { foreach } from "./util";

export let storeKey = 'store'
export class Store{
    constructor(options){
        // this.ages = 100
        console.log('options ==', options);

        // state 响应式
        this.vm = reactive(options.state)
        // this.state = options.modules

        // getters 计算属性 {属性 值}
        let getters = options.getters //
        this.getters = {}
        foreach(getters, (key, value) => {
            
            Object.defineProperty(this.getters, key,{
                get: () => {
                    console.log('defineProperty =',key, value);
                    return value(this.state)
                }
            })
        })

        // 订阅发布
        let mutations = options.mutations
        this.mutations = {}
        foreach(mutations, (key, value) => {
            this.mutations[key] = (data) => {
                value(this.state, data)
            }
        })
        // Object.keys(getters).forEach(item => {
        //     Object.defineProperties(getters, item,{
        //         get: (params) => {
        //             return getters[item]
        //         }
        //     })
        // })
        let actions = options.actions
        this.actions = {}
        foreach(actions, (key, value) => {
            this.actions[key] = (data) => {
                value(this, data)
            }
        })

    }

    get state (){
        return this.vm
    }
    // install(vue) {
    //     Vue = vue
    //     const Store = vue.Store || this 
    //     console.log(Store)
    //     vue.config.globalProperties.$Store = Store
    //     Object.defineProperty(vue.config.globalProperties, '$Store', {
    //         enumerable: true,
    //         get: () => {
    //             // console.log("this.current=", router.current);
    //             // return unref(router.current)
    //         },
    //     })
    //     console.log("vue==", vue);
    //     // Vue.mixin({
    //     //     // 混入的生命周期 会比组件内部的生命周期前面发生
    //     //     beforeCreate () {
    //     //         console.log( "Vue ==", Vue);
    //     //     },
    //     // })

    // }
    install(app, key) {
        // Vue = vue
        const Store =  this 
        app.config.globalProperties.$store = Store
        

        // Object.defineProperty(app.config.globalProperties, '$store', {
        //     enumerable: true,
        //     get: () => {
        //         // console.log("this.current=", router.current);
        //         // return unref(router.current)
        //         return Store
        //     },
        // })

        console.log('vuex ==app == ===', app);
        /**
         * 给调用组件添加一个sotre 实例
         * 
         * 注入到 app  provide
         * 
         * provide('名称'， '属性值')
         * inject 在子组件里 
         * 同过 inject('名称') 拿到数据
         * 
         * 全局提供数据
         */
        app.provide(key ? key : storeKey, Store)

    }


    commit = (key, data) => {
        this.mutations[key](data)
    }

    dispatch = (key, data) => {
        this.actions[key](data)
    }


}