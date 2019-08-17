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
        <div style="    border-bottom: 1px solid black;
    padding: 10px 0;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;">
          订单详情
        </div>

        <div style="border: 1px solid black;">
          <van-cell-group>
            <van-cell title="单车编号:" value="瑟" />
            <van-cell title="开始时间:" value="塞" />
            <van-cell title="起始地点:" value="傲" />
            <van-cell title="结束地点:" value="慢" />
            <van-cell title="骑行时间:" value="满" />
            <van-cell title="订单金额:" value="溢" />
            <van-button type="primary" style="    border-radius: 6px;
    margin: 20px calc((100% - 160px) / 2);
    width: 160px;">联系客服</van-button>
          </van-cell-group>
        </div>
      </van-col>
      <van-col span="2"></van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    methods:{
      onClickLeft(){
        this.$notify("我点你妈妈皮，滚");
        this.$router.go(-1);
      },
      onClickRight() {
        this.$notify("笑笑乐");
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
