// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import axios from 'axios'

import Bus from '../lib/state.js'

// import '../lib/state.js'

// import Vuex from 'vuex'
// Vue.use(Vuex)

Vue.prototype.$ajax = axios

// import Vue from 'vue'  //vue从node_modules中取该框架中有关Vue的东西
// import App from './App' //注册一个组件 ./App.vue  //import为es6中的语法
// import App from './App'  ==>  var App = require('./App');

Vue.config.productionTip = false

// components: { App }   //注册一个App作为组件  必须注册组件，index.html中才能使用<app></app>这个标签
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// 全局导航钩子
router.beforeEach((to, from, next) => {
  // 判断该路由是否需要登录权限
  if (to.meta.requireAuth) {
      // if(window.sessionStorage.getItem('isLogin')) {  
      if(global.isLogin) {  
          next();
      }
      else { 
          next({
              path: '/login',
              query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
      }
  }
  else {
      next();
  }
})