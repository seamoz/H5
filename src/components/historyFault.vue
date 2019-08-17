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
              "id":1,
              "bicycleNum": "12154545",
              "publishTime": "2018年8月12日 09:26:02",
              "disposeState": "处理中"
            },
            {
              "id":2,
              "bicycleNum": "12154545",
              "publishTime": "2018年8月12日 09:26:02",
              "disposeState": "已处理"
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
