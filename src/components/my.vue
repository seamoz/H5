<template>
  <div id="body">
    <van-nav-bar
      right-text="消息"
      @click-right="onClickRight"
      style="position: fixed; width: 100%;"
    />
    <div style="height: 46px;"></div>

    <van-row>
      <van-col span="1"></van-col>
      <van-col span="22">
        <div @click="userinfo">
          <van-row>
            <van-col span="6"><img height="60" src="../../static/user.png" alt=""></van-col>
            <van-col span="15" style="    line-height: 32px;">
              <div><span style="font-weight: bold;
    font-size: 20px;">{{ username || '该用户昵称获取失败' }}</span></div>
              <div style="    color: #0000007a;"><span>磐石账号：</span>{{ id || 'xxxxxx' }}</div>
            </van-col>
            <van-col span="3" style="    height: 64px;">
              <div style="height: 12px;"></div>
              <img height="40" src="../../static/right.png" alt="">
              <div style="height: 12px;"></div>
            </van-col>
          </van-row>
        </div>
        <div class="bbb" style="height: 20px;"></div>

        <div @click="toMoney">
          <van-row>
            <van-col span="6">
              <img height="50" src="../../static/wallet.png" alt="">
            </van-col>
            <van-col span="13" style="line-height: 54px; text-align: left;">
              我的钱包
            </van-col>
            <van-col span="5" style="line-height: 54px; text-align: left;">
              {{ money || '0.00元' }}
            </van-col>
          </van-row>
        </div>
        <div class="bbb" style="height: 20px;"></div>

        <div @click="toCoupon">
          <van-row style="border-bottom: 1px solid #00000036;">
            <van-col span="6">
              <img height="50" src="../../static/coupon.png" alt="">
            </van-col>
            <van-col span="13" style="line-height: 54px; text-align: left;">
              我的卡券
            </van-col>
            <van-col span="5"></van-col>
          </van-row>
        </div>

        <div @click="toJourney">
          <van-row>
            <van-col span="6">
              <img height="45" src="../../static/journey.png" alt="">
            </van-col>
            <van-col span="11" style="line-height: 54px; text-align: left;">
              我的行程
            </van-col>
            <van-col span="7" style="line-height: 54px; text-align: left;">共{{ m || '0.00'}}公里</van-col>
          </van-row>
        </div>
        <div class="bbb" style="height: 20px;"></div>

        <div @click="toSetting">
          <van-row style="border-bottom: 1px solid #00000036;">
            <van-col span="6"><img height="50" src="../../static/setting.png" alt=""></van-col>
            <van-col span="15" style="line-height: 54px; text-align: left;">设置</van-col>
            <van-col span="3">
              <div style="height: 8px;"></div>
              <img height="40" src="../../static/right.png" alt="">
            </van-col>
          </van-row>
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
  //需要导入vuex的数据管理
  import store from '@/vuex/store'

  export default {
    methods:{
      onClickRight() {
        this.$notify("消息");
      },
      userinfo(){
        this.$notify("个人信息");
        this.$router.push({path:'/myInfo'});
      },
      toMoney(){
        this.$notify("你没有设置支付密码");
        this.$router.push({path:'/settingPayPassword'});
      },
      toCoupon() {
        this.$notify("我的卡券");
      },
      toJourney(){
        this.$notify("我的行程");
        this.$router.push({path:'/route'});
      },
      toSetting(){
        this.$notify("设置");
      }
    },
    data(){
      return {
        username: '',
        id: store.state.id,
        money: '',
        m: ''
      }
    }
  }
</script>

<style scoped>
  #body{

  }

  .bbb {
    border-top: 1px solid #00000036;
    border-bottom: 1px solid #00000036;
  }
</style>
