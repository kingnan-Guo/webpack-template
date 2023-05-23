<template>
  <div id="app">
    <div>
      <router-link to="/home">home</router-link>
    </div>
    <div>
      <router-link to="/comPage">comPage</router-link>
    </div>
    <div>
      <router-link to="/storePage">storePage</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref, computed, watch, getCurrentInstance, onMounted } from "vue";
export default {
    name:"App",
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