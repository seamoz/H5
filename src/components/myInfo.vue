<template>
  <div>
    <van-nav-bar
      title="个人信息"
      left-arrow
      @click-left="onClickLeft"
    />

    <van-row>
      <van-col span="1"></van-col>
      <van-col span="22" id="h">
        <van-row>
          <van-col span="6">
            头像
          </van-col>
          <van-col span="18" style="padding-left: calc(100% - 25% - 80px - 7px);">
            <img style="    border: 1px solid black;
    border-radius: 46px;" height="40" v-show="info.head_photo==0" src="../../static/user.png" alt="">
            <img height="40" src="../../static/right.png" alt="">
          </van-col>
        </van-row>

        <van-row>
          <van-col span="6">
            名字
          </van-col>
          <van-col span="18">
            <span class="fff">{{ info.name }}</span>
            <img height="40" src="../../static/right.png" alt="">
          </van-col>
        </van-row>

        <van-row>
          <van-col span="6">
            磐石号
          </van-col>
          <van-col span="18">
            <span>{{ info.id }}</span>
          </van-col>
        </van-row>

        <van-row>
          <van-col span="6">
            手机号
          </van-col>
          <van-col span="18">
            <span class="fff">{{ info.phone }}</span>
            <img height="40" src="../../static/right.png" alt="">
          </van-col>
        </van-row>

        <van-row>
          <van-col span="6">
            邮箱
          </van-col>
          <van-col span="18">
            <span class="fff">{{info.email || "请添加"}}</span>
            <img height="40" src="../../static/right.png" alt="">
          </van-col>
        </van-row>

        <van-row>
          <van-col span="6">
            更多
          </van-col>
          <van-col span="18">
            <img height="40" src="../../static/right.png" alt="">
          </van-col>
        </van-row>

        <van-row>
          <van-col span="6">
            我的地址
          </van-col>
          <van-col span="18">
            {{ info.address }}
          </van-col>
        </van-row>
      </van-col>
      <van-col span="1"></van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    methods:{
      onClickLeft() {
        this.$router.push('/my');
      }
    },
    data() {
      return {
        info: {
          "id": "1",
          "username": "12154545",
          "name": "吴系挂",
          "phone": 12345648797 ,
          "address": "打开拉黑",
          head_photo: '',
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

  #h div {
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid #0000000d;
  }

  #h div div+div {
    text-align: right;
    position: relative;
  }

  .fff {
    position: absolute;
    right: 40px;
  }

</style>
