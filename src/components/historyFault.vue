<template>
  <div>
    <van-nav-bar
      title="历史上报"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-row>
      <van-col span="1"></van-col>
      <van-col span="22">
        <van-row v-for="item,index in info" :key="index" style="    font-size: 10px;    border-bottom: 1px solid #0000002e; padding: 15px 0;">
          <van-col span="5">
            <div>
              单车编号：
            </div>
            <div>
              上报时间：
            </div>
          </van-col>
          <van-col span="11">
             <div>
               {{ item.bicycleNum }}
             </div>
             <div>
               {{ item.publishTime }}
             </div>
          </van-col>
          <van-col id="iii" span="8" style="line-height: 32px; font-size: 17px; position: relative;">
              <span style="color: #FF6600;" v-show="item.disposeState=='处理中'">处理中</span>
              <span style="color: #57EF4A;" v-show="item.disposeState=='已处理'">已处理</span>
              <img style="position: absolute;
    top: 3px;
    right: 5px;" height="25" src="../../static/right.png" alt="" @click="detail(item.bicycleNum)">
          </van-col>
        </van-row>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
		mounted() {
			this.$http.get("/bikes/history-malfunction?userId="+store.state.id).then(res =>{
					console.log(res)
					if(res.error_code == 200){
						this.$notify(res.meg);
						for (var i = 0; i < res.data.length-1; i++) {
							var datee = new Date(res.data[i].publishTime).toJSON();
							res.data[i].publishTime = new Date(+new Date(datee)+8*3600*1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
							
						}
						
					this.info = res.data;
					}else{
						this.$notify(res.meg);
					}
				});
		},  
    methods:{
      onClickLeft() {
        this.$router.push('/fault');
      },
      detail(t) {
        this.$router.push({path:'/theFaultDetails',query:{bicycleNum:t}});
      }
    },
    data(){
      return {
        info: [{
              "id":store.state.id,
              "bicycleNum": "",
              "publishTime": "",
              "disposeState": ""
            }]
      }
    },
  }
</script>

<style scoped>
  .van-nav-bar__title {
    font-weight: bold;
    font-size: 20px;
  }

  #iii span{
    position: absolute;
    right: calc(0px + 35px);
  }
</style>
