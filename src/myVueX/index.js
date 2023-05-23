let Vue;
class Store{
    constructor(){

    }
    install(vue) {
        Vue = vue
        const Store = vue.Store || this 
        console.log(Store)
        vue.config.globalProperties.$Store = Store
        Object.defineProperty(vue.config.globalProperties, '$Store', {
            enumerable: true,
            get: () => {
                // console.log("this.current=", router.current);
                // return unref(router.current)
            },
        })
        console.log("vue==", vue);
        // Vue.mixin({
        //     // 混入的生命周期 会比组件内部的生命周期前面发生
        //     beforeCreate () {
        //         console.log( "Vue ==", Vue);
        //     },
        // })

    }



}

// 创建一个 Store
// 工厂模式
export function createStore(params) {
    return new Store()
}

// 在你使用的组件中得到一个store
export function useStore(params) {
    
}

