import { inject } from "vue";
import { storeKey, Store } from "./store";


// 创建一个 Store
// 工厂模式
export function createStore(options) {
    return new Store(options)
}

// 在你使用的组件中得到一个store
export function useStore(key = null) {
    // console.log(inject(key ? key : storeKey));
    return inject(key ? key : storeKey)
}

