<template>
	<div>
		<van-nav-bar
		  title="上报计费异常"
		  left-arrow
		  @click-left="onClickLeft"
		/>
		
		<div>
			<van-radio-group v-model="radio">
			  <van-radio class="cc he" name="计费异常">计费异常</van-radio>
			  <van-radio class="cc he" name="计时异常">计时异常</van-radio>
			  <van-radio class="cc he" name="位置异常">位置异常</van-radio>
			</van-radio-group>
			<van-button class="c" style="width: 60%;border-radius: 6px;" type="primary" @click="submit">确认</van-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				radio: '',
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1);
			},
			submit() {
				if(this.radio == ''){
					this.$notify('请选择');
					return;
				}
				var id = location.href;
				id = id.split("?")[1];
				id = id.split("=")[1];
				this.$axios.post("http://localhost:8085/bikes/abnormal", {
					id: id,
					abnormal: this.radio
				}).then(res => {
					console.log(res.data);
					this.$toast(res.data.meg);
					this.$router.go(-1);
				}).then(error => {
					console.log(error);
				})
			}
		},
	}
</script>

<style scoped>
	.van-nav-bar__title {
	  font-weight: bold;
	  font-size: 20px;
	}
	
	.cc {
		position: relative;
		    left: calc(50% - 20px - 28px);
	}
	
	.c {
		display: block;
		margin: 0 auto;
	}
	
	.he {
		margin: 50px 0;
	}
</style>
