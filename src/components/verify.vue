<template>
  <div id="app">
    <div style="height: 10%;">
      <van-nav-bar
        left-arrow
        left-text="返回"
        @click-left="onClickLeft"
      />
    </div>

    <div id="info">
      <p style="font-weight: bold;
    font-size: 22px;
    color: rgba(0, 0, 0, 0.86);">输入短信验证密码</p>
      <p>已向+86 <span style="    font-size: 15px;">{{phone}}</span>发送验证码</p>
    </div>

    <div id="verifys">
      <div id="verify">
        <div v-for="item,index in verifys" :key="index">
          {{item || '&nbsp;'}}
        </div>
      </div>
      <p style="color: #169BD5;">重新发送</p>
    </div>

    <div>
      <van-number-keyboard
        :show="show"
        :maxlength="6"
        @input="onInput"
        v-model="verify"
      />
    </div>

  </div>
</template>

<script>
  //需要导入vuex的数据管理
  import store from '@/vuex/store'

  export default {
    data(){
      return {
        phone: '',
        show: true,
        verify: '',
      }
    },
    mounted() {
      this.phone = store.state.phone;
    },
    methods:{
      onClickLeft() {
        this.$router.push("/phoneRegister");
      },
      onInput(value) {
        if(this.verify.length == 5){
          confirm("注册成功");
          this.$router.push("/setPassword");
        }
      },
    },
    computed:{
      verifys(){
        let arr = new Array();
        for(let i = 0; i < 6; i++){
          let tmp = this.verify.charAt(i);
          if(tmp == undefined){
            continue;
          }
          arr.push(tmp);
        }
        return arr;
      }
    }
  }
</script>

<style scoped>
  #app {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  #info {
    padding: 0 5%;
  }

  #verifys {
    padding: 0 5%;
    margin: 15% 0;
  }

  #verify {
    height: 50px;
    line-height: 50px;
    padding: 0 5%;
  }

  #verify div {
    border-bottom: 1px solid #BBBBBB;
    display: inline-block;
    width: 35px;
    margin: 0 5px;
    text-align: center;
    height: 50px;
  }

  p {
    margin: 10px 0;
    padding: 0;
  }
</style>
