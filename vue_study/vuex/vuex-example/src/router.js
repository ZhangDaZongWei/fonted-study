import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import vuex from './views/vuex'
import vueRouter from './views/vueRouter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: vuex
    },
    {
      path: '/vueRouter',
      name: 'vueRouter',
      component: vueRouter
    }
  ]
})
