<!-- test demo -->
<template>
    <div class="hello">
        <h1>{{msg}}</h1>
        <h2>{{ msgForm }}</h2>
        <button v-on:click="onClickMe">open mouse</button>
    </div>
</template>

<script>
    export default {  //该写法是vue.js中推荐的写法
        data () {   // ==> function data () { return {} }
            return {
                msg: 'Welcome to Your Vue.js aa'
            }
        },
        props: ['msgForm'],
        methods: {
            onClickMe :function(){
                // console.log(this.msgForm)   //从父级组件传过来的参数用this.xx就可以获取到
                this.$emit('childTellMe', this.msg);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
      