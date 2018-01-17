<template>
    <div class="main">
        <section class="home-section-1">
          <!-- <img :src="homeSectionBG"> -->
          <div class="box">
            <h1>{{sectionTitle}}</h1>
            <p>This is the only WordPress theme you will ever want to use.</p>
            <div class="btn-box">
              <a class="btn-white" href="#">DOWNLOAD NOW</a>
              <a class="btn-more" href="#">READ MORE</a>
            </div>
          </div>
        </section>
        <section class="home-section-2">
          <div class="container">
            <div class="img-box">
              <img :src="fadeSrc" />
              <div class="no-mode-translate-demo-wrapper">
                <transition name="no-mode-translate-fade">
                  <button v-if="on" key="on" @click="on = false" v-model="on">
                    on
                  </button>
                  <button v-else="" key="off" @click="on = true" v-model="on">
                    off
                  </button>
                </transition>
              </div>
            </div>
            <div class="text-box">
              <div class="wrap">
                <h3>SEO Friendly</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies.</p>
                <a href="#">READ MORE</a>
            </div>
            </div>
          </div>
        </section>
      </div>
</template>

<!-- 该写法是vue.js中推荐的写法 -->
<script>
  const outInSrc = 'https://cdn.colorlib.com/shapely/wp-content/uploads/sites/12/2016/03/macbook-preview-flexible.png'

  export default {
    name: 'Home',
    data () {
      return {
        homeSectionBG: 'https://cdn.colorlib.com/shapely/wp-content/uploads/sites/12/2016/03/photo-1443527216320-7e744084f5a7-1.jpg',
        sectionTitle: 'We Change Everything WordPress',

        fadeSrc: outInSrc,
        on: true
      }
    },
    watch: {
      // 如果 `on` 发生改变，这个函数就会运行
      on: function (e) {
        if (e) {
          this.fadeSrc = outInSrc
        } else {
          this.fadeSrc = '/static/img/macbook-preview-flexible.584dce2.png'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../public/css/home.css';
</style>
