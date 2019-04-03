import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import('./views/List.vue')
        } 
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
