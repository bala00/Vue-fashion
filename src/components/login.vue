<template>
    <div class="lg">
        <section class="lg-section-1">
            <div class="lg-rgba">
                <form @submit.prevent="onSubmit" >
                    <div class="lg-box">
                        <input id="mobile" v-model="user.mobile" @change="inputFunc" onkeypress="return event.keyCode>=48&&event.keyCode<=57" maxlength=11 placeholder="手机号" />
                        <input v-model="user.password" type="password" onkeypress="return event.keyCode>=48&&event.keyCode<=57" placeholder="密码" />
                        <input type="submit" value="登录" />
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>
  
<script>
    import qs from 'qs'
    import Bus from '../../lib/state.js'

    const STORAGE_KEY = 'fashion'

    export default {
        name: 'Login',
        data () {
            return {
                user:{
                    mobile: JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || '',
                    password: ''
                }
            }
        },
        methods: {
            inputFunc: function() {
                var regMobile = document.getElementById('mobile'),
                    mobile = regMobile.value
                if (mobile.length == 11) {
                    this.$ajax({
                        method: 'post',
                        url: '/api/user/checkUser',
                        data: qs.stringify({
                            mobile: mobile
                        })
                    }).then(function(response) {
                        // success
                        if (response.data.code) {
                            alert(response.data.msg)
                        }
                    })
                }
            },
            onSubmit: function(event) {
                // var formData = JSON.stringify(this.user) // 表单数据
                const self = this;

                if (this.user.mobile == '' || this.user.mobile == null || this.user.mobile.length < 11) {
                    alert('请输入11位手机号')
                    return false
                }
                if (this.user.password == '' || this.user.password == null || this.user.password.length < 3) {
                    alert('请输入3位密码')
                    return false
                }

                window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.user.mobile))

                this.$ajax({
                    method: 'post',
                    url: '/api/user/login',
                    data: qs.stringify({
                        mobile: this.user.mobile,
                        password: this.user.password
                    })
                }).then(function(response) {
                    // success
                    if (response.data.code) {
                        alert(response.data.msg)
                    } else {
                        if (response.status == 200) {
                            window.sessionStorage.setItem("isLogin", true);

                            alert('登录成功！');
                            // 触发组件 A 中的事件
                            Bus.$emit('isLoginEvent', 1)
                            self.$router.push('/')

                        } else {
                            alert('登录失败')
                        }
                    }
                })
            }
        }
    }
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../public/css/login.css';
</style>
      