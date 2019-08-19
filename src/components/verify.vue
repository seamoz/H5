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
      <p style="color: #169BD5;" v-if="verifyCode=='重新发送'" @click="verifyCodef()">{{verifyCode}}</p>
      <p style="color: #169BD5;" v-if="verifyCode!='重新发送'" >{{verifyCode}}</p>
    </div>

    <div>
      <van-number-keyboard
        :show="show"
        :maxlength="6"`
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
        verifyCode:90
      }
    },
    mounted() {
      this.phone = store.state.phone;
      // 获得验证码
      this.$http.get("/user/sendPhoneMessage?phone=" + this.phone + "&state=0").then(res => {
        this.$toast(res.msg);
        if (res.state) {
          //设置90秒的读秒时间
          var time = 90;
          //调用读秒方法
          this.setTime(time);
        }else{
          this.$router.push("/phoneRegister");
        }
      });
    },
    methods:{
      verifyCodef(){
        var this_ = this;
        this.$http.get("/user/sendPhoneMessage?phone=" + this.phone + "&state=0").then(res => {
          if (res.state) {
            console.log(res.msg);
            //设置90秒的读秒时间
            var time = 90;
            //调用读秒方法
            this_.setTime(time);
          }
        });
      },
      setTime(time) {
        //保存当前this对象
        var this_ = this;
        if(this_.verifyCode == "重新发送"){
          this_.verifyCode = time;
        }
        //开始读秒
        setTimeout(function (){
          //console.log(time);
          this_.verifyCode = time;
          if(time == -1){
            //在给它变回来
            this_.verifyCode="重新发送";
            return;
          }
          time--;
          this_.setTime(time);
        },1000);
        
      },
      onClickLeft() {
        //console.log(this.verify);
        this.$router.push("/phoneRegister");
      },
      onInput(value) {
        console.log(value+"   "+this.verify);
        if(this.verify.length == 5){
          this.$http.get("/user/judgePhoneVerificationCode?phone=" + this.phone +"&verificationCode="+ this.verify+value).then(res => {
            this.$toast(res.msg);
            if (res.state) {
              this.$router.push("/setPassword");
            }
          });
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
