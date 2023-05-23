// import { createStore } from "vuex";
import { createStore } from "@/myVueX/index.js";

const store = {
    // 存放数据 数据响应式
    state: {
        count: 1,
        age: 18,
    },
    // 修改数据 同步
    mutations: {
        // increment (state, value) {
        //     // 变更状态
        //     state.count = value.data
        //     console.log("increment", state, value);
        // },
        addAge(state, data){
            state.age += data
        }
    },
    // 异步 数据
    actions: {
        asyncAge(context, data){
            setTimeout(() => {
                context.commit('addAge', data)
            }, 1000)
        }
    },
    // vue3.2 版本 相当于计算属性 
    getters: {
        changeAge(state) {
            // 没有缓存机制
            console.log('没有缓存机制');
            return state.age + state.count
        }
    },
    module:{
    }
}


const moduleB = {
    state: () => ({}),
    mutations: { },
    actions: {}
  }
export default createStore({
    modules:{
        spaceA:store,
        spaceB: moduleB
    }
})
