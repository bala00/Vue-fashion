<template>
    <div class="about">
        <section class="section-1">
        <div class="container clearfix">
            <h3>USER</h3>
            
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
    import Bus from '../../lib/state.js'

    export default {
        name: 'User',
        data () {
            return {
                
            }
        },
        beforeCreate: function () {
            if(!window.sessionStorage.isLogin){
                global.isLogin = false;
                this.$router.push('/login')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import '../public/css/partCom.css';
    @import '../public/css/user.css';
</style>
          