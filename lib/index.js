import customIcc from "../src/views/custom-icc/index.vue";

const coms = [customIcc]; // 将来如果有其它组件,都可以写到这个数组里

// 批量组件注册
const install = function (Vue) {
  coms.forEach((com) => {
    Vue.component(com.name, com);
  });
};
export default install;
// export default customice;
