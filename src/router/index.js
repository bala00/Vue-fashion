import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home'
import Project from '@/components/project'
import Blog from '@/components/blog'
import Shop from '@/components/shop'
import Music from '@/components/music'
import Activity from '@/components/activity'
import Login from '@/components/login'
import Register from '@/components/register'
import User from '@/components/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/project',// alias: '/about1',  ///a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。
      name: 'Project',
      component: Project
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      meta: {
        // 添加该字段，表示进入这个路由是需要登录的
        requireAuth: true,  
      },           

    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
