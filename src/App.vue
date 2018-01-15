<!-- test demo -->
<template>
  <div id="app">
    <header>
      <nav>
        <div class="row">
            <a class="logo">{{logo}}</a>
            <ul>
              <li v-for="item in navLists"><router-link :to="item.url">{{ item.name }}</router-link></li>
              <li class="user-head">
                <router-link to="/login">
                  <img width="40" height="40" src="/src/public/image/user-nologin.png" />
                </router-link>
              </li>
              <!-- <li class="ft"><router-link to="/login">登录</router-link><router-link to="/register">注册</router-link></li> -->
            </ul>
        </div>
      </nav>
    </header>
    
    <router-view></router-view>

    <footer>
      <div class="text">{{footerText}}</div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      logo:"Fashion",
      // isLogin: false,
      navLists: [
        { name: 'HOME', url: '/' },
        { name: 'ABOUT', url: '/about' },
        { name: 'PROJECT', url: '/project' },
        { name: 'BLOG', url: '/blog' },
        { name: 'SHOP', url: '/shop' }
      ],

      footerText:'vue demo with webpack name Fashion'
    }
  }
}
</script>

<style>
  @import '/public/css/common.css';
</style>
