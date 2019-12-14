import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'
import router from "./router";
import Header from "./components/Header/Header.vue";
Vue.config.productionTip = false
Vue.component("Header",Header)
new Vue({
  render: h => h(App),
  router, // 所有组件都能看到 $router和$route  <router-link> 和 <router-view/>
}).$mount('#app')
