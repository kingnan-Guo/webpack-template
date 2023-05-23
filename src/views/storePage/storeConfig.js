import { ref, computed } from "vue";

// import { useStore } from "vuex";//获取store 实例 provide inject
import { useStore } from "@/myVueX/index.js";

export default function ages(params) {
    
    // composition api
    const store = useStore()
    console.log('store =', store);

    // mutation
    function addAge() {
        store.commit('addAge', 6)
    }
    // action dispatch
    function asyncAge() {
        store.dispatch('asyncAge', 8)
    }


    return {//返回数据
        age: computed(() => {
            return store.state.spaceA.age
        }),
        changeAge: computed(() => {
            return store.getters.changeAge
        }),
        addAge,
        asyncAge,
        // changeAge: store.getters.changeAge,
    };
}

