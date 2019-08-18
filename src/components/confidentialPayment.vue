<template>
  <div>
    <van-nav-bar left-arrow left-text="返回" @click-left="onClickLeft" />

    <img style="display: block; margin: 0 auto;" src="../../static/exempt.png" alt="">
    <div style="text-align: center;margin: 20px 0;">
      您好, {{ username || '请完善个人资料' }}
    </div>

    <van-cell-group>
      <van-field label="请输入密码" type="password" v-model="password" placeholder="请输入密码" />
    </van-cell-group>

    <van-button type="info" style="display: block; margin: 50px auto; width: 200px; border-radius: 6px;" @click="submit">确认</van-button>
  </div>
</template>

<script>
	//需要导入vuex的数据管理
	import store from '@/vuex/store'
  export default {
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
      submit() {
        if(this.password.length==0){
          this.$notify("请确认输入信息");
          return;
        }
		
		this.$http.post("/confidential-payment",{
			userId:store.state.id,
			password: this.password,
		})
		.then(res =>{
			console.log(res);
			debugger
			if(res.error_code == 200){
				this.$notify(res.meg);
				
				this.$router.push({path:'/my',query:{}});
				
			}else{
				this.$notify(res.meg);
			}
		});
      }
    },
    data() {
      return {
        username: '',
        password: '',
      }
    },
  }
</script>

<style>
</style>
