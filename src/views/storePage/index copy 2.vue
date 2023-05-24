<template>
    <div class="store">
        storePage

        <!-- <div class="vue2">
            <div>vue2 写法</div>
            <div>
                age : <span>{{ this.$store.state.spaceA.age }}</span>
            </div>
            <div>
                changeAge: {{ this.$store.getters.changeAge }}
            </div>
            <div>
                changeAge2: {{ this.$store.getters.changeAge }}
            </div>
        </div>
        <div>--------------------------</div>

        <div class="vue3">
            <div>vue3 写法</div>
            <div>
                age :  {{ age }}
            </div>
            <div>
                changeAge: {{ changeAge }}
            </div>

        </div> -->


        <div>--------------</div>
        <div>
            <!-- <button type="button" @click="$store.state.spaceA.age = 30">changeAge</button> -->
        </div>
        <div>
            <button type="button" @click="addAge">addAge</button>
        </div>
        <div>
            <button type="button" @click="asyncAge">asyncAge</button>
        </div>

        <div>==============================</div>
        <!-- <div>{{ this.$store }}</div> -->
        <div><span>{{ this.$store.state.spaceA }}</span></div>
        <div>{{ this.$store.getters.changeAge }}</div>
    </div>
</template>

<script >
import { ref, computed } from "vue";
// import { useStore } from "vuex"
import ages from "./storeConfig";
// function ages() {

//     // composition api
//     const store = useStore()
//     console.log('store =', store);

//     // mutation
//     function addAge() {
//         store.commit('addAge', 6)
//     }
//     // action dispatch
//     function asyncAge() {
//         store.dispatch('asyncAge', 8)
//     }


//     return {//返回数据
//         age: computed(() => {
//             return store.state.spaceA.age
//         }),
//         changeAge: computed(() => {
//             return store.getters.changeAge
//         }),
//         addAge,
//         asyncAge,
//         // changeAge: store.getters.changeAge,
//     };
// }
export default {
    name:"storePage",
    setup(prpos, { next }) {
        let {age, changeAge, addAge, asyncAge} = ages()

        return {//返回数据
            age,
            changeAge,
            addAge,
            asyncAge,
            // changeAge: store.getters.changeAge,
        };
    },
}
</script>
<style >


</style>