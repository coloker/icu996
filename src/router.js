import Vue from 'vue'
import Router from 'vue-router'
// import zh_CN from './views/zh_CN.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/zh_CN',
      name: 'zh_CN',
      component: () => import('./views/Zh_CN.vue')
    },
    {
      path: '/en_US',
      name: 'en_US',
      component: () => import('./views/En_US.vue')
    },
    {
      path: '/ja_JP',
      name: 'ja_JP',
      component: () => import('./views/Ja_JP.vue')
    },
    {
      path: '/*',
      redirect : 'zh_CN'
    }
  ],
  base : '/icu'
})
