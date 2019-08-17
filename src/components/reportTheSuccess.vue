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
          <van-cell class="fSize" title="类型:" :value="info.faulType" />
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
      console.log(this.$route)
    },
    data(){
      return {
        info: {
          "bicycleNum": "12154545",
          "disposeState": "已处理",
          "publishTime": "2018年9月11日 09:26:02",
          "disposeTime": "2018年9月12日 09:26:02" ,
          "faulType": "锁",
          "remark": "锁被人恶意损坏asdassadsadsadsadasdsadsada",
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
