<template>
  <div>
    <van-nav-bar left-arrow left-text="返回" @click-left="onClickLeft" />

    <img style="display: block; margin: 0 auto;" src="../../static/detain.png" alt="">
    <div style="text-align: center;margin: 20px 0;">
      押金： {{ money || 0.00 }}￥
    </div>

    <van-button type="info" style="display: block; margin: 50px auto; width: 200px; border-radius: 6px;" @click="refund">申请退还押金</van-button>
	<van-button type="primary" style="display: block; margin: -17px auto; width: 200px; border-radius: 5px;" @click="handIn">交押金</van-button>
  </div>
</template>

<script>
	//需要导入vuex的数据管理
	import store from '@/vuex/store'
  export default {
	  
	mounted(){
		
		var _this = this;
		
		this.$http.get("/inquiryAmount?userId="+store.state.id)
		.then(res =>{
			console.log(res);
			debugger
			if(res.error_code == 200){
				this.$notify(res.meg);
				_this.money = res.data.money;
			}else{
				this.$notify(res.meg);
			}
		});
		
	},
	  
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
      handIn() {
        this.$http.post("/payDeposit?userId="+store.state.id)
        .then(res =>{
        	console.log(res);
        	debugger
        	if(res.error_code == 200){
        		this.$notify(res.meg);
        		
        	}else{
        		this.$notify(res.meg);
        	}
					
					this.$router.push({path:'/my',query:{}});
        });
      },
	  refund() {
	   this.$http.post("/deposit-refund?userId="+store.state.id)
	   .then(res =>{
	   	console.log(res);
	   	debugger
	   	if(res.error_code == 200){
	   		this.$notify(res.meg);
	   		
	   	}else{
	   		this.$notify(res.meg);
	   	}
			this.$router.push({path:'/my',query:{}});
	   });
	  }
    },
    data() {
      return {
        money: '',
      }
    },
  }
</script>

<style>
</style>
