<template>
  <div class="app">
    <van-form @submit="onSubmit">
  <van-field
    v-model="loginInfo.username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="loginInfo.pwd"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>
  </div>
</template>
<script>
import { login } from "@/api/loginReq";
export default {
    data() {
    return {
      loading: false,
      loginInfo:{
          username:"",
          pwd:""
      }
    };
  },
  methods: {
    onSubmit(values) {
      this.loading = true;
      login(this.loginInfo).then((response) => {
        console.log(response);
        if(response.code===0){
            sessionStorage.setItem('token',response.data.username);
        }
        this.$router.push('/')
      });
      this.loading = false;
    },
  }
}
</script>