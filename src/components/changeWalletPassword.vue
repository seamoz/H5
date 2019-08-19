<template>
  <div>
    <van-nav-bar left-arrow left-text="返回" @click-left="onClickLeft" />

    <img style="display: block; margin: 0 auto;" src="../../static/lock2.png" alt="">
    <div style="text-align: center; margin: 20px 0;">
      您好， {{ username || '请完善个人资料' }}
    </div>

    <van-cell-group>
      <van-field label="原支付密码" type="password" v-model="payPassword" placeholder="请输入原支付密码" />
	  <van-field label="新支付密码" type="password" v-model="alterPayPassword" placeholder="请输入新支付密码" />
      <van-field label="确认支付密码" type="password" v-model="alterPayPassword1" placeholder="请确认新支付密码" />
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
        if(this.payPassword.length==0 || this.alterPayPassword.length==0 || this.alterPayPassword1.length == 0){
          this.$notify("请确认输入信息");
          return;
        }
        if(this.alterPayPassword != this.alterPayPassword1){
          this.$notify("两次新密码不一致");
          return;
        }
		
		this.$http.post("/alterPaymentCode",{
			userId:store.state.id,
			payPassword: this.payPassword,
			alterPayPassword:this.alterPayPassword
		})
		.then(res =>{
			if(res.error_code == 200){
				this.$notify(res.meg);
			
				this.$router.push('/myWalletMain');
			}else{
				this.$notify(res.meg);
			}
		});
	 }
    },
    data() {
      return {
        username: '',
        payPassword: '',
        alterPayPassword: '',
		alterPayPassword1:''
      }
    },
  }
</script>

<style>
</style>
