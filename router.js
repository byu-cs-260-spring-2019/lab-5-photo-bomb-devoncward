import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/register.vue'
import MyPage from './views/MyPage.vue'
import Login from './views/Login.vue'
import About from './views/About.vue'
import Bonus from './views/Bonus.vue'

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
      path: '/mypage',
      name: 'mypage',
      component: MyPage,
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/bonus',
      name: 'bonus',
      component: Bonus
    },
  ]
})
