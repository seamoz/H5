<template>
  <div>
    <div style="height: 10%;">
      <van-nav-bar
        left-arrow
        left-text="返回"
        @click-left="onClickLeft"
      />
    </div>

    <div>
      <van-row>
        <van-col span="1"></van-col>
        <van-col span="22" id="content">
          <p style="padding: 0 16px;">
            <span style="font-size: 25px;
    font-weight: bold;
    color: #000000d9;">邮箱注册</span>
            <span style="color: #169BD5;
                color: rgb(22, 155, 213);
                margin-left: 5%;
                font-size: 15px;" @click="toPhoneRegister">手机号注册</span>
          </p>

          <van-cell-group>
            <van-field
              v-model="username"
              label="用户名:"
              placeholder="请输入用户名"
            />

            <van-field
              v-model="password"
              type="password"
              label="密码:"
              placeholder="请输入密码"
            />

            <van-field
              v-model="password2"
              type="password"
              label="确认密码:"
              placeholder="确认密码"
            />

            <van-field
                v-model="email"
                center
                label="邮箱:"
                placeholder="请输入邮箱"
              >
              <van-button :[disabled]="true" slot="button" size="small" type="primary" @click="getCode">{{verifyMsg || '发送验证码'}}</van-button>
             </van-field>

            <van-field
              v-model="verify"
              type="text"
              label="验证码:"
              placeholder="请输入验证码"
            />

            <van-button type="info" class="m-d" @click="register">注册</van-button>
          </van-cell-group>
        </van-col>
        <van-col span="1"></van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      register(){
        // 验证信息是否输入完全
        if(this.username.length == 0 ||
        this.password.length == 0 ||
        this.password2.length == 0 ||
        this.email.length == 0 ||
        this.verify.length == 0){
          this.$notify("请完成注册信息");
          return;
        }

        // 验证邮箱是否正确
        if(!this.emailVerify(this.email)){
          this.$notify("邮箱格式错误");
          return;
        }

        //开始发送请求 注册
        this.$http.get("/user/judgeEmailVerificationCode?userName="+this.username+"&password="+this.password+"&email="+this.email+"&verificationCode="+this.verify).then(res => {
          if (res.state) {
            this.$toast("注册成功，返回登录页面");
            this.$router.push("/");
          }
        });

      },
      onClickLeft() {
        this.$router.push("/phoneRegister");
      },
      toPhoneRegister() {
        this.$router.push("/phoneRegister");
      },
      emailVerify(t){
        let reg = "[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?";
        return new RegExp(reg,'gi').test(t);
      },
      getCode(){
        if(this.email.length == 0){
          this.$notify("请输入邮箱地址");
          return;
        }

        if(!this.emailVerify(this.email)){
          this.$notify("邮箱地址格式不正确");
          return;
        }
        /*
            这里写发送请求
            这里写发送请求
            这里写发送请求
        */

        //发送邮箱验证码
        this.$http.get("/user/verificationEmail?email=" + this.email).then(res => {
          console.log(res.msg);
          if (res.state) {
            this.disabled = 'disabled';
            let time = 60000;
            let l = setInterval(()=>{
              time-=1000;
              this.verifyMsg = time/1000;
              if(time == 0){//修改这里可以改变等待时常
                this.verifyMsg = 0;
                this.disabled = 'xxx';
                clearInterval(l);
              }
            },"1000"); 
          }
        });
      },
    },
    data(){
      return {
        username: '',
        password: '',
        password2: '',
        email: '',
        verify: '',
        disabled: '',
        verifyMsg: '',
      }
    },
  }
</script>

<style scoped>
  #content {
    margin: 5% 0;
  }

  #content * {
    line-height: 35px;
  }

  .m-d{
    margin: 0 auto;
    display: block;
    border-radius: 8px;
    width: 70%;
    margin-top: 130px;
  }
</style>
