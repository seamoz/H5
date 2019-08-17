<template>
  <div>
    <van-nav-bar left-arrow left-text="返回" @click-left="onClickLeft" />

    <img style="display: block; margin: 0 auto;" src="../../static/lock2.png" alt="">
    <div style="text-align: center; margin: 20px 0;">
      您好: {{ username || '狗比用户' }}
    </div>

    <van-cell-group>
      <van-field label="支付密码" type="password" v-model="payPassword" placeholder="请输入支付密码" />
      <van-field label="确认密码" type="password" v-model="payPassword2" placeholder="请确认支付密码" />
    </van-cell-group>

    <van-button type="primary" style="display: block; margin: 50px auto; width: 200px; border-radius: 6px;" @click="submit">确认</van-button>
  </div>
</template>

<script>
  export default {
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
      submit() {
        if(this.payPassword.length==0 || this.payPassword2.length==0){
          this.$notify("请确认输入信息");
          return;
        }
        if(this.payPassword != this.payPassword2){
          this.$notify("密码不一致");
          return;
        }
        this.$notify("成功设置支付密码");
        this.$router.push('/');
      }
    },
    data() {
      return {
        username: '',
        payPassword: '',
        payPassword2: '',
      }
    },
  }
</script>

<style>
</style>
