<template>
  <div id="body">
    <div style="height: 10%;">
      <van-nav-bar
        left-arrow
        left-text="返回"
        @click-left="onClickLeft"
      />
    </div>

    <div class="pad" style="font-size: 30px;
    font-weight: bold;
    color: #000000cf;    margin-bottom: 18%;">
      <p>请设置密码</p>
    </div>

    <div class="pad" style="margin-bottom: 10%;">
      <van-cell-group>
        <van-field label="请输入密码" v-model="password" type="password" placeholder="请输入密码" right-icon="" />
      </van-cell-group>
    </div>

    <div>
      <van-button type="info" id="setting" @click="setting">确认设置</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      onClickLeft() {
        this.$router.push("/verify");
      },
      setting(){
        if(this.password.length == 0){
          this.$notify("请输入密码");
          return;
        }
        this.$toast("注册成功");
        this.$router.push("/");
      }
    },
    data(){
      return {
        password: '',
      }
    }
  }
</script>

<style scoped>
  #body {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  #setting{
    display: block;
    border-radius: 9px;
    width: 60%;
    margin: 0 auto;
  }
  .pad{
    padding: 0 6%;
    width: 100%;
  }

  * {
    padding-left:0;
  }
</style>
