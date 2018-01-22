<template>
  <div class="project">
    <section class="section-1">
      <div class="container clearfix">
        <h3>Project List</h3>
        <div class="animated-box">
          <svg width="200" height="200">
            <polygon :points="points"></polygon>
            <circle cx="100" cy="100" r="90"></circle>
          </svg>
          <div class="range-btn">
              <label>Sides: {{ sides }}</label>
              <input type="range" min="3" max="500" v-model.number="sides">
              <label>Minimum Radius: {{ minRadius }}%</label>
              <input type="range" min="0" max="90" v-model.number="minRadius">
              <label>Update Interval: {{ updateInterval }} milliseconds</label>
              <input type="range" min="10" max="2000" v-model.number="updateInterval">
          </div>
        </div>
      </div>
    </section>
    <section class="about-section-2">
      <div class="container">
        <div style="height:500px;"></div>
      </div>
    </section>
  </div>
</template>
  
<!-- Array.apply(null, { length: 81 }) :生成一个长度为81的数组，没赋值，所以都是undefined -->
<!-- map: 用于使用指定函数处理数组中的每个元素(或对象的每个属性)，并将处理结果封装为新的数组返回 -->

<script>
  export default {
    name: 'Project',
    data () {
      var defaultSides = 10
      var stats = Array.apply(null, { length: defaultSides }).map(function () { return 100 })
      return {
        stats: stats,
        points: generatePoints(stats),
        sides: defaultSides,  //边
        minRadius: 50,
        interval: null,
        updateInterval: 500
      }
    },
    watch: {
      sides: function (newSides, oldSides) {
        var sidesDifference = newSides - oldSides
        if (sidesDifference > 0) {
          for (var i = 1; i <= sidesDifference; i++) {
            this.stats.push(this.newRandomValue())
            // push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
          }
        } else {
          var absoluteSidesDifference = Math.abs(sidesDifference)
          // abs() 方法可返回数的绝对值
          for (var i = 1; i <= absoluteSidesDifference; i++) {
            this.stats.shift()
            // shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
          }
        }
      },
      stats: function (newStats) {
        TweenLite.to(
          this.$data, 
          this.updateInterval / 1000, 
          { points: generatePoints(newStats) }
        )
        // 将实例名为 "clip_mc" 的 MovieClip 透明度降到 50% (0.5) ，并将它 x 轴位置移动到 120 ，
        // 将音量将到 0，缓动总共用时 1.5 秒，代码如下：

        // import gs.TweenLite;
        // TweenLite.to(clip_mc, 1.5, {alpha:0.5, x:120, volume:0});
      },
      updateInterval: function () {
        this.resetInterval()
      }
    },
    mounted: function () {
      this.resetInterval()
    },
    methods: {
      randomizeStats: function () {
        var vm = this
        this.stats = this.stats.map(function () {
          return vm.newRandomValue()
        })
      },
      newRandomValue: function () {
        return Math.ceil(this.minRadius + Math.random() * (100 - this.minRadius))
      },
      resetInterval: function () {
        var vm = this
        clearInterval(this.interval)
        this.randomizeStats()
        this.interval = setInterval(function () { 
          vm.randomizeStats()
        }, this.updateInterval)
      }
    }
  }

  function valueToPoint (value, index, total) {
    var x     = 0
    var y     = -value * 0.9
    var angle = Math.PI * 2 / total * index
    var cos   = Math.cos(angle)
    var sin   = Math.sin(angle)
    var tx    = x * cos - y * sin + 100
    var ty    = x * sin + y * cos + 100
    return { x: tx, y: ty }
  }

  function generatePoints (stats) { //生成 点
    var total = stats.length
    return stats.map(function (stat, index) {
      var point = valueToPoint(stat, index, total)
      return point.x + ',' + point.y
    }).join(' ')
  }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../public/css/partCom.css';
  @import '../public/css/project.css';
</style>
      