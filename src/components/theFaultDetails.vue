<template>
  <div>
    <van-nav-bar
      title="故障详情"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <van-cell-group>
          <van-cell class="fSize" title="单车编号:" :value="info.bicycleNum" />
          <van-cell class="fSize" title="状态" :value="info.disposeState" />
          <van-cell class="fSize" title="上传时间:" :value="info.publishTime" />
          <van-cell class="fSize" title="处理时间:" :value="info.disposeTime" />
          <van-cell class="fSize" title="类型:" :value="info.faultType" />
          <p style="text-align: center;margin-top: 10%;">备注</p>
          <van-field
              v-model="info.remark"
              type="textarea"
              disabled=""
              rows="1"
              autosize
              style="    border: 1px solid #13131338;"
            />
        </van-cell-group>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
  mounted() {
      console.log(this.$route)
			console.log(this.$route.query.bicycleNum)
				this.$http.get("bikes/succeed?id="+this.$route.query.bicycleNum).then(res =>{
						console.log(res)
						if(res.error_code == 200){
							this.$notify(res.meg);
							
							var dateee = new Date(res.data.publishTime).toJSON();
							res.data.publishTime = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
							var dateee = new Date(res.data.disposeTime).toJSON();
							res.data.disposeTime = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
							
							
							this.info = res.data;
						}else{
							this.$notify(res.meg);
						}
				});
			
    },
    mounted() {
      console.log(this.$route)
    },
    methods:{
      onClickLeft() {
        this.$router.push('/historyFault');
      },
    },
    data(){
      return {
        info: {
          "bicycleNum": "",
          "disposeState": "",
          "publishTime": "",
          "disposeTime": "" ,
          "faultType": "",
          "remark": "",
        }
      }
    }
  }
</script>

<style scoped>
  .van-nav-bar__title {
    font-weight: bold;
    font-size: 20px;
  }

  .fSize .van-cell__title{

  }
</style>
