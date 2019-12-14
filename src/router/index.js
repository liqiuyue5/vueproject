import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
// import routes from "./routes";
import Msite from "../pages/Msite/Msite.vue";
import Order from "../pages/Order/Order.vue";
import Profile from "../pages/Profile/Profile.vue";
import Search from "../pages/Search/Search.vue";
import Login from "../pages/Login/Login.vue";

Vue.use(VueRouter)
export default new VueRouter({

  mode: 'history', // 路由路径没有#
  routes:[
    {
      path:"/msite",
      component:Msite,
      meta: {
        isShowFooter: true
      }
    },
    {
      path:"/order",
      component:Order,
      meta: {
        isShowFooter: true
      }
    },
    {
      path:"/profile",
      component:Profile,
      meta: {
        isShowFooter: true
      }
    },
    {
      path:"/search",
      component:Search,
      meta: {
        isShowFooter: true
      }
    },
    {
      path:"/login",
      component:Login
    },
    {
      path:"/",
      redirect:"/msite"
    }
  ],

  // 项目中所有路由
})