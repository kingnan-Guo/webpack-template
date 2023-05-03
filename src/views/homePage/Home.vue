<template>
  <div >
    <div class="a"><span>home</span></div>
    
    <div class="b">123</div>

    <div class="">
      <button @click="setStore">setStore</button>
      <button @click="setStoreDispath">setStoreDispath</button>
      <button @click="setIncrementIfOddOnRootSum">setIncrementIfOddOnRootSum</button>

      <button @click="forFunction">forFunction</button>
    </div>


    <custom-icc></custom-icc>
    <custom-ice></custom-ice>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
    setStore(){
      // this.$store.commit('increment',{data: 10})
      this.$store.commit({
        type: 'increment',
        data: 20
      })
    },
    setStoreDispath(){
      this.$store.dispatch('incrementT', {data:'dispatch'})
    },
    setIncrementIfOddOnRootSum(){
      this.$store.dispatch('incrementIfOddOnRootSum', {data:'setIncrementIfOddOnRootSum'})
    },
    forFunction(){
      var arr = [
        function wrappedMutationHandler (payload) {
          console.log("wrappedMutationHandler payload", payload);
        }
      ]

      arr.forEach(function commitIterator (handler) {
        handler('payload')
      })

    }
  },
  watch:{
  }
}
</script>