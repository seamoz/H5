<template>
	<div class="body">

    <van-row>
      <van-col span="1"></van-col>
      <van-col span="22">
        <div class="top">
        	<img id="bicycle" height="95" src="../../static/bicycle.png" />
        </div>

        <van-cell-group>
        	<van-field v-if="option" v-model="userInfo.username" clearable label="用户名：" placeholder="请填写账号，邮箱，手机号" @click-right-icon="$toast('question')" />
          <van-field v-if="!option" v-model="phoneInfo.phone" clearable label="手机号：" placeholder="请填写手机号" @click-right-icon="$toast('question')" />

        	<van-field v-if="option" v-model="userInfo.password" type="password" label="密码：" placeholder="请输入密码">
        		<van-button slot="button" size="small" type="primary" @click="forget">忘记密码</van-button>
        	</van-field>

          <van-field v-if="!option" v-model="phoneInfo.verify" type="text" label="验证码：" placeholder="请输入密码">
          	<van-button slot="button" :[disabled]="true" size="small" type="primary" @click="getCode">{{verifyMsg || '获得验证码'}}</van-button>
          </van-field>
        </van-cell-group>

        <div v-if="option" class="p-16" style="position: relative;">
        	<span class="sms" @click="option=!option" style="color: #3399CC;">用短信验证码登录</span>
        	<span id="register" @click="phoneRegister" style="position: absolute; right: 0; color: #3399CC;">注册</span>
        </div>

        <div v-if="!option" class="p-16">
        	<span class="sms" @click="option=!option" style="color: #3399CC;">密码登录</span>
        </div>

        <div class="p-16" style="    margin-top: 51%;">
          <van-button style="border-radius: 6px;" type="info" size="large" @click="login">登录</van-button>
        </div>

        <div id="foot">
          <span style="background-color: white; padding: 0 15px;    position: absolute;
    top: -12px;
    left: calc(50% - (110px / 2));">
            第三方登录
          </span>
          <div>
            <img height="50" src="../../static/wechat.png" />
            <img style="    position: absolute;
    right: 0;" height="50" src="../../static/QQ.png" />
          </div>
        </div>
      </van-col>
      <van-col span="1"></van-col>
    </van-row>
	</div>
</template>

<script>

	export default {
		data(){
			return {
				userInfo:{
					username: '',
					password: ''
				},
        phoneInfo:{
          phone: '',
          verify: '',
        },
        option: true,
        show: false,
        disabled: '',
        verifyMsg: '',
			}
		},
    methods:{
      phoneRegister(){
        this.$router.push('/phoneRegister');
      },
      forget(){
        confirm("忘记密码");
        /*




        ？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？
        这里暂时留空




        */
      },
      getCode(){
        if(this.phoneInfo.phone.length == 0){
          this.$notify("请输入手机号码");
          return;
        }

        /*
            这里写发送请求
            这里写发送请求
            这里写发送请求
        */
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
      },
      login(){
        if(this.option){
          if(this.userInfo.username == '' || this.userInfo.password == ''){
            this.$notify('用户名或密码未输入');
            return;
          }

          this.$toast.loading({
            duration: 0,
            forbidClick: true, // 禁用背景点击
            loadingType: 'spinner',
          });

          setTimeout(()=>{//这个定时器要删除，此处是为了效果
            this.$toast.clear();
          },'1000');

          this.$router.push('/index');

          /*
            这里写登录请求

            =============================================================

            清除加载框 this.$toast.clear();
          */
        }else{
          if(this.phoneInfo.phone == '' || this.phoneInfo.verify == ''){
            this.$notify('手机号码或验证码未输入');
            return;
          }

          this.$toast.loading({
            duration: 0,
            forbidClick: true, // 禁用背景点击
            loadingType: 'spinner',
          });

          setTimeout(()=>{//这个定时器要删除，此处是为了效果
            this.$toast.clear();
          },'1000');
          confirm("手机号登录");

          this.$router.push('/index');
        }
      }
    }
	}
</script>

<style scoped>

  #bicycle {
    margin: 0 auto;
    display: block;
    position: absolute;
    left: calc(50% - (95px / 2));
    top: calc(70% - (95px /2));
  }

  .top {
    height: 150px;
    position: relative;
  }

  .p-16 {
    padding: 10px 16px;
  }

  #foot {
    border-top: 1px solid #0000002b;
    position: relative;
    width: 60%;
    display: block;
    margin: 0 auto;
    margin-top: 25px;
    padding: 15px 0;
  }
</style>
