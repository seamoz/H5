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
        <div style="border: 1px solid #0000002b; padding-bottom: 15px;">
          <van-cell-group>
            <van-cell title="单车编号:" :value="bicycleNum" />
            <van-cell title="开始时间:" :value="startTime" />
            <van-cell title="起始地点:" :value="initialAddress" />
            <van-cell title="骑行时间:" :value="useTime" />
          </van-cell-group>

          <p style="margin: 10px 0; padding: 0 10px;"><van-button size="large" type="info" style="display: block;
    margin: 0 auto; border-radius: 8px;">计费方式</van-button></p>

          <div style="padding: 0 10px;">
            <van-button type="primary" style="width: 88px; border-radius: 8px; ">关锁</van-button>
            <div style="display: inline-block; width: calc(100% - 186px);"></div>
            <van-button type="primary" style="width: 88px; border-radius: 8px; ">上报故障</van-button>
          </div>

        </div>
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
        bicycleNum: '1',
        startTime: '2',
        initialAddress: '3',
        useTime: '4',
      }
    },
    methods:{
      onClickRight() {
        this.$toast('按钮');
      },
    }
  }
</script>

<style scoped>
  .van-nav-bar__title {
    font-weight: bold;
    font-size: 20px;
  }
</style>
