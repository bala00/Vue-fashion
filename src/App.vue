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
                <router-link v-if="isLogin" to="/user">
                  <img width="40" height="40" src="/src/public/image/user_login.png" />
                </router-link>
                <router-link v-else to="/login">
                  <img width="40" height="40" src="/src/public/image/user_nologin.png" />
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

    <!-- 返回顶部 -->
    <a id="back-top" @click='goToTop' v-show='isBackTopShow'><i class="iconfont icon-top"></i></a>
  </div>
</template>

<script>
  import Bus from '../lib/state.js'

  var stop = false;
  var timer = null;

  export default {
    data () {
      return {
        logo: 'Fashion',
        isLogin: false,
        navLists: [
          { name: 'HOME', url: '/' },
          { name: 'PROJECT', url: '/project' },
          { name: 'BLOG', url: '/blog' },
          { name: 'MUSIC', url: '/music' },
          { name: 'ACTIVITY', url: '/activity' },
          { name: 'SHOP', url: '/shop' }
        ],

        isBackTopShow: false,

        footerText: 'vue demo with webpack name Fashion'
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.isLogin = window.sessionStorage.getItem('isLogin');
        window.addEventListener('scroll', this.showIcon);  //滚动事件监听  
      })
    },
    created() {
      Bus.$on('isLoginEvent', target => {   
          if(target == 1){
            this.isLogin = true
          }
      });  
    },
    methods: {
      goToTop: function () {

        clearInterval(timer);

        timer = setInterval(function(){
          var nowHeight = document.documentElement.scrollTop || document.body.scrollTop;  // 得到当前高度 
          var speed = (0 - nowHeight) / 7;
          speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
          // ceil() 方法可对一个数进行上舍入。
          // floor() 方法可对一个数进行下舍入。
          if(nowHeight == 0){
            clearInterval(timer)
          }
          document.documentElement.scrollTop = nowHeight + speed;
          document.body.scrollTop = nowHeight + speed;
          stop = false;

        },30)
      },
      showIcon: function () {

        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;  
        var viewHeight = document.documentElement.clientHeight;

        if (scrollTop > viewHeight) {
          this.isBackTopShow = true   //赋值是为了按钮的v-show='isBackTopShow'  
        } else {  
          this.isBackTopShow = false
        }

        if (stop) { //STOP  
          clearInterval(timer);
        }  
        stop = true;
      }
    }
  }
</script>

<style>
  @import '/public/css/common.css';
</style>