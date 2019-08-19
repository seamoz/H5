<template>
  <div id="body">
    <van-nav-bar
      title="磐石单车"
      right-text="消息"
      @click-right="onClickRight"
    />

    <van-row>
      <van-col span="1"></van-col>
      <van-col span="22">
        <p style="color: red;
    padding: 10px 0;
    font-weight: bold;
    font-size: 23px;">骑行中...</p>
        <div style="border: 1px solid #0000002b; padding-bottom: 15px;" v-show="flag == true">
          <van-cell-group>
            <van-cell title="单车编号:" :value="shareBicycle.bicycleNum" />
            <van-cell title="开始时间:" :value="shareBicycle.startTime" />
            <van-cell title="起始地点:" :value="shareBicycle.initialAddress" />
            <van-cell title="骑行时间:" :value="shareBicycle.useTime" />
          </van-cell-group>

          <div style="padding: 0 10px;">
            <van-button type="primary" style="width: 88px; border-radius: 8px;" @click="shut">关锁</van-button>
            <div style="display: inline-block; width: calc(100% - 186px);"></div>
            <van-button type="primary" style="width: 88px; border-radius: 8px;" @click="faults">上报故障</van-button>
          </div>
        </div>
				<div v-show="flag == false">没有骑行</div>
      </van-col>
      <van-col span="1"></van-col>
    </van-row>

    <van-tabbar route>
      <van-tabbar-item to="/map" icon="photo-o">地图</van-tabbar-item>
      <van-tabbar-item to="/index" icon="home-o">骑车</van-tabbar-item>
      <van-tabbar-item to="/cycling" icon="search">骑行中</van-tabbar-item>
      <van-tabbar-item to="/fault" icon="friends-o">故障</van-tabbar-item>
      <van-tabbar-item to="/my" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
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
      onClickRight() {
        this.$toast('按钮');
      },
			shut() {
				this.$axios.post("http://localhost:8085/bikes/shut", {
					id: this.shareBicycle.id,
					useTime: this.shareBicycle.useTime
				}).then(res => {
					var id = this.shareBicycle.id;
					this.$router.push({path:'/rideDeduction', query:{id}});
				}).then(error => {
					console.log(error);
				})
			},
			faults() {
				var userId = this.shareBicycle.userId;
			  this.$router.push({path:'/fault', query:{userId}});
			}
    },
		mounted(){
			var userId = location.href;
			userId = userId.split("?")[1];
			userId = userId.split("=")[1]; 
			this.$axios.post("http://localhost:8085/bikes/cycling", {
				userId: userId
			}).then(res => {
				if(res.data.error_code != 500){
					this.shareBicycle = res.data.data;
				} else {
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
</style>
