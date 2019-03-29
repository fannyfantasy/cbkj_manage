import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login/login'

Vue.use(Router)

export default new Router({
    mode:'history',
    linkActiveClass:'linkActive',
    routes: [
    { path:'*', redirect:'/login'},
    { path: '/', redirect:'/login',},
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
