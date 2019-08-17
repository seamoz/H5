<template>
  <div>
    <van-nav-bar
      left-arrow
      left-text="返回"
      title="磐石单车"
      right-text="消息"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <van-row>
      <van-col span="2"></van-col>
      <van-col span="20">
        <div style="margin-top: 20px; border-bottom: 1px solid black; padding-bottom: 5px; margin-bottom: 20px;">
          <span style="font-weight: bold; font-size: 22px;">我的行程</span>
          <span style="margin-left: calc(100% - 116.06px - 110px);"><span style="color: red;">{{ route || '857.6' }}</span>里程(公里)</span>
        </div>

        <van-row style="    border: 1px solid black;
    height: 35px;
    line-height: 35px; position: relative;" v-for="item,index in arr" :key="index">
          <van-col span="11">{{ item.time }}</van-col>
          <van-col span="7">{{ item.f }}分钟</van-col>
          <van-col span="6">
            <span>{{ item.money || "" }}元</span>
            <img style="    position: relative;
    top: 4px; right: -15px;" height="20" src="../../static/right.png" @click="query">
          </van-col>
        </van-row>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        route: '',
        arr: [
          {'time':'2019/8/12 8:0:0','f':'35','money':'6'},
          {'time':'2019/8/12 8:0:0','f':'35','money':'6'},
          {'time':'2019/8/12 8:0:0','f':'35','money':'6'},
          {'time':'2019/8/12 8:0:0','f':'35','money':'6'},
          {'time':'2019/8/12 8:0:0','f':'35','money':'6'},
          {'time':'2019/8/12 8:0:0','f':'35','money':'6'},
          {'time':'2019/8/12 8:0:0','f':'35','money':'6'},
          {'time':'2019/8/12 8:0:0','f':'35','money':'6'},
          {'time':'2019/8/12 8:0:0','f':'35','money':'6'},
        ]
      }
    },
    methods:{
      onClickLeft(){
        this.$notify("我点你妈妈皮，滚");
        this.$router.go(-1);
      },
      onClickRight() {
        this.$notify("笑笑乐");
      },
      query() {
        this.$router.push('/myJourney');
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
