<!-- test demo -->
<template>
    <div class="userModule">
        <router-link  to="/login">
            <img width="40" height="40" src="/src/public/image/user-nologin.png" />
        </router-link>
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
          