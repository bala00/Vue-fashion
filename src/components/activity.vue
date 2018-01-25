<template>
    <div class="about">
      <section class="section-1">
        <div class="container clearfix">
          <h3>Activity The Fashion</h3>
          <div class="animated-box">
            <transition-group name="cell" tag="div" class="sudoku-container">
              <div v-for="cell in cells" :key="cell.id" class="cell">
                {{ cell.number }}
              </div>
            </transition-group>
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
  
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js"></script> -->
  <script>
    import _ from 'lodash'
    export default {
      name: 'Activity',
      data () {
        return {
          cells: Array.apply(null, {length: 81}).map(function(_, index) {
            return {
              id: index,
              number: index % 9 + 1
            }
          })
        }
      },
      mounted: function () {
        this.$nextTick(function () {
          // Code that will run only after the
          // entire view has been rendered

          this.shuffle = setInterval(() => {
            this.cells = _.shuffle(this.cells)
          }, 3000)
        })
      },
      methods: {
        // shuffle: function () {
          // this.cells = _.shuffle(this.cells)
        // }
      },
      destroyed: function () {
        clearInterval(this.shuffle)
      }
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    @import '../public/css/partCom.css';
    @import '../public/css/activity.css';
  </style>
      