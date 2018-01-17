<template>
        <div class="lg">
            <section class="lg-section-1">
                <div class="lg-rgba">
                    <form @submit.prevent="onSubmit" >
                        <div class="lg-box">
                            <input v-model="user.mobile" onkeypress="return event.keyCode>=48&&event.keyCode<=57" maxlength=11 placeholder="手机号" />
                            <input v-model="user.password" type="password" onkeypress="return event.keyCode>=48&&event.keyCode<=57" maxlength="3" placeholder="密码" />
                            <input type="submit" value="注册" />
                        </div>
                    </form>
                </div>
            </section>
        </div>
    </template>
      
    <script>
        import qs from 'qs'
        import Vue from 'vue'
        const STORAGE_KEY = 'fashion'
        export default {
            name: 'Login',
            data () {
                return {
                    user: {
                        mobile: JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || '',
                        password: ''
                    }
                }
            },
            methods: {
                // return event.keyCode>=48&&event.keyCode<=57) || (event.keyCode>=65&&event.keyCode<=90))
                onSubmit: function(event) {
                    var formData = JSON.stringify(this.user) // 表单数据

                    if(this.user.mobile == "" || this.user.mobile == null || this.user.mobile.length < 11){
                        alert('请输入11位手机号')
                        return false
                    }
                    if(this.user.password == "" || this.user.password == null || this.user.password.length < 3){
                        alert('请输入3位密码')
                        return false
                    }

                    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.user.mobile))

                    this.$ajax({
                        method: 'post',
                        url: '/api/user/addUser',
                        data: qs.stringify({
                            mobile: this.user.mobile,
                            password: this.user.password
                        })
                    }).then(function(response) {
                        // success
                        // console.log('response-->',response);
                        if(response.data.code){
                            alert(response.data.msg)
                        }else{
                            if(response.status == 200){
                                alert('注册成功！')
                            } else {
                                alert('注册失败')
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
          