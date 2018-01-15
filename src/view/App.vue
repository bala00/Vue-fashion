<!-- test demo 备份文件 -->
<template>
        <div id="app">
          
          <ComHeader msgForm="im header" v-on:childTellMe="listenToMyBoy"></ComHeader>
          <p>child tells me : {{childWords}}</p>
          <h1>{{title}}</h1>  <!-- {{ }}  ==> v-text="" -->
          <input v-model="newItem" v-on:keyup.enter="addNew">
          <ul>
            <!-- v-bind:class渲染class的时候必须是对象，如果要渲染两个或者多个class，可以采用数组的形式，如：v-bind:class="[liclass1, liclass2]" -->
            <li v-for="item in items" v-bind:class="{finished:item.isFinished}" v-on:click="toggleFinish(item)">{{item.label}}</li>
          </ul>
        </div>
      </template>
      
      <script>
        import Store from './store'
        import ComHeader from './components/comHeader'
      //export会自动在项目中生成一个 new Vue() 的参数    
      //export 当做 new Vue()的参数和属性即可
      export default {  //export也是es6的语法  ==>  module.export = {} ; default 默认值，可以不用关心
        data () {   //  ==> data:function(){}
          return {
            title:"this is a todo list",
            items: Store.fetch(),
            newItem: '',
            childWords: ''
          }
        },
        components: { ComHeader },
        watch:{
          items:{
            handler:function(items){
              Store.save(items)
            },
            deep: true
          }
        },
        methods:{
          toggleFinish:function(item){
            item.isFinished = !item.isFinished;
          },
          addNew:function(){
            this.items.push({
              label:this.newItem,
              isFinished:false
            });
            this.newItem = ''
          },
          listenToMyBoy:function(msg){
            console.log(msg);
            this.childWords = msg
          }
        }
      }
      </script>
      
      <style>
        .finished{
          text-decoration: underline
        }
      #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
      }
      </style>
      