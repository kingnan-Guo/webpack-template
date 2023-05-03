<template>
  <div id="app">
    <div class="a"><span>comPage</span></div>
    <div class="b">123</div>
  </div>
</template>

<script>
import { ref, computed, watch, getCurrentInstance, onMounted } from "vue";
export default {
    name:"comPage",
    setup(prpos, { next }) {
      console.log("prpos ==", prpos, "next ==", next)
      // console.log("app setup ===", this.$route, this.$user);
    },
    beforeCreate(){
      console.log("app beforeCreate ", this.$route, "this =", this);
      console.log("app setup ===", this.$route, this.$user);
    },
}
</script>