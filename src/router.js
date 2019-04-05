import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import("./views/Home.vue"),
      // children: [
      //   {
      //     path: 'list',
      //     name: 'list',
      //     component: () => import('./views/List.vue')
      //   } 
      // ]
    },
    {
      path: '/login',
      name: 'login',
      component: function(){
        return import('./views/Login.vue');
      }
    },
    // {
    //   path: "/text",
    //   name: "/text",
    //   component: () => import("./views/Test.vue"),
    // }
  ]
})
