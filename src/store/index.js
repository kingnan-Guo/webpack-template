import { createStore } from "vuex";

const store = {
    state: {
        count: 1,
        todos: [
            { id: 1, text: 'text', done: true },
            { id: 2, text: 'text', done: false }
        ]
    },
    mutations: {
        increment (state, value) {
            // 变更状态
            state.count = value.data
            console.log("increment", state, value);
        },
        incTest(state, value){
            console.log("incTest", state, value);
        }
    },
    actions: {
        incrementT (context, value) {
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, 1000)
            }).then(() => {
                context.commit('incTest', value)
            })
        },
        incrementIfOddOnRootSum ({ state, commit, rootState }) {
            console.log("incrementIfOddOnRootSum",  state, commit, rootState);
        }
    },
    getters: {
        doneTodos (state) {
            return state.todos.filter(todo => todo.done)
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
        a:store,
        b: moduleB
    }
})
