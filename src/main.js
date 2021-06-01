import Vue from "vue";
import App from "./App.vue";
import store from './components/store/index'
import VueRouter from 'vue-router'
import router from './components/router/index'

Vue.use(VueRouter)



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

