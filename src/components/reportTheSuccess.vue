<template>
  <div>
    <van-nav-bar
      title="上报成功"
    />

    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <van-cell-group>
          <van-cell class="fSize" title="单车编号:" :value="info.bicycleNum" />
          <van-cell class="fSize" title="状态" :value="info.disposeState" />
          <van-cell class="fSize" title="上传时间:" :value="info.publishTime" />
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

        <div style="    margin-bottom: 80px;">

        </div>

        <van-button style="    border-radius: 6px;
    display: block;
    width: 60%;
    margin: 0 auto;" type="primary" @click="submit">完成</van-button>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    methods:{
      submit(){
        this.$router.go(-1);
      }
    },
    mounted() {
      this.$http.get("/bikes/succeed?id="+this.$route.query.info).then(res =>{
					console.log(res)
					if(res.error_code == 200){
						this.$notify(res.meg);
						
						var dateee = new Date(res.data.publishTime).toJSON();
						res.data.publishTime = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
						
						this.info = res.data;
					}else{
						this.$notify(res.meg);
					}
				});
    },
    data(){
      return {
         info: {
          "bicycleNum": "",
          "disposeState": "",
          "publishTime": "",
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
</style>
