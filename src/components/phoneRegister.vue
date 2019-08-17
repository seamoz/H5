<template>
  <div id="body">
    <div style="height: 46px;">
      <van-nav-bar
        left-arrow
        left-text="返回"
        @click-left="onClickLeft"
      />
    </div>

    <div class="top">
      <p class="top1">用手机号码注册</p>
      <p class="tong">注册即代表阅读并同意<span>服务协议</span>和<span>隐私政策</span></p>
      <p style="color: #169BD5;line-height: 60px;" @click="email">邮箱注册</p>
    </div>

    <div class="foot">
      <van-cell-group>
        <van-field v-model="phone" placeholder="请输入手机号码" />
      </van-cell-group>
      <van-button type="info" size="large" @click="next_step">下一步</van-button>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  //需要导入vuex的数据管理
  import store from '@/vuex/store'

  export default {
    methods: {
      ...mapMutations([
        'changePhone'
      ]),
      onClickLeft() {
        this.$router.push("/");
      },
      next_step(){
        this.changePhone(this.phone);
        confirm("验证手机号码是否重复");
        this.$router.push('/verify');
      },
      email(){
        this.$router.push('/emailRegister');
      }
    },
    data(){
      return {
        phone: store.state.phone
      }
    }
  }
</script>

<style scoped>
  .foot {
    padding: 0 3%;
  }

  .foot div {
    margin-bottom: 10%;
  }

  #body {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .top p {
    margin: 0;
    padding: 0;
    line-height: 35px;
  }

  .top {
    margin: 10% 15px;
  }

  .tong span {
    color: #0066CC;
  }

  .top1 {
    font-weight: bold;
    font-size: 25px;
    color: #000000cc;
  }
</style>
