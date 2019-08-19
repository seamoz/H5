<template>
  <div>
    <van-nav-bar
      title="骑行扣费页"
      left-arrow
      @click-left="onClickLeft"
    />

    <p>起始地点：{{ shareBicycle.initialAddress }}</p>
    <p>到达地点：{{ shareBicycle.endAddress }}</p>
    <p>用时：{{ shareBicycle.useTime }}</p>
    <p>总费用：{{ shareBicycle.money }}</p>
		<p v-show="flag == false"> 异常单 </p>
    <p>
      <van-button type="primary">支付</van-button>
    </p>
    <p>
      <van-button type="primary" @click="reportAbnormalBilling">上报计费异常</van-button>
    </p>
    <p>
      <van-button type="primary">联系客服</van-button>
    </p>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        shareBicycle: [],
				flag: true
      }
    },
    methods:{
      onClickLeft() {
        this.$router.go(-1);
      },
			reportAbnormalBilling() {
				if(this.shareBicycle.bicycleState == 2){
					this.$notify('你已经上报过了!');
					return;
				}
				var id = this.shareBicycle.id;
			  this.$router.push({path:'/reportTheAbnormal', query:{id}});
			}
    },
		mounted(){
			var id = location.href;
			id = id.split("?")[1];
			id = id.split("=")[1];
			this.$axios.post("http://localhost:8085/bikes/deduction", {
				id: id
			}).then(res => {
				this.shareBicycle = res.data.data;
				if(this.shareBicycle.bicycleState == 2){
					this.flag = false;
				}
			}).then(error => {
				console.log(error);
			})
		}
  }
</script>

<style scoped>
  .van-nav-bar__title {
    font-weight: bold;
    font-size: 20px;
  }

  div p {
    margin: 35px 0;
    text-align: center;
  }
  
  button {
        width: 60%;
        border-radius: 6px;
  }
</style>
