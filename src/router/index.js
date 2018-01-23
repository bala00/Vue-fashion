import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/about'
import Project from '@/components/project'
import Blog from '@/components/blog'
import Shop from '@/components/shop'
import Music from '@/components/music'
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
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/project',
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
      meta: {auth: true}
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
