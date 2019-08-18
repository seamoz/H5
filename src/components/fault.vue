<template>
  <div>
    <van-nav-bar
      title="磐石单车"
      right-text="历史故障"
      @click-right="onClickRight"
      style="position: fixed; width: 100%;"
    />
    <div style="height: 46px;"></div>

    <van-row>
      <van-col span="1"></van-col>
      <van-col span="22">
        <van-field
          v-model="bicycleNum"
          right-icon="scan"
          placeholder="扫描二维码或输入编码"
          @click-right-icon="scan"
          style="    border: 1px solid #00000059;"
        />

        <p style="margin: 20px 0;
    font-size: 17px;
    font-weight: bold;">请选择单车具体故障</p>

       <div>
          <div style="width: 313px; margin: 0 auto;">
            <div style="margin-bottom: 10px;" class="mm">
              <div><img @click="options('轮胎')" :class="{click_img:option=='轮胎'}" src="../../static/tyre.png" alt=""><br>轮胎</div>
              <div><img @click="options('座位')" :class="{click_img:option=='座位',m:true}" style="margin-right: 0;" src="../../static/seat.png" alt=""><br>座位</div>
              <div><img @click="options('链条')" :class="{click_img:option=='链条',m:true}" src="../../static/chain.png" alt=""><br>链条</div>
              <div><img @click="options('刹车')" :class="{click_img:option=='刹车'}" src="../../static/brake.png" alt=""><br>刹车</div>
            </div>
            <div class="mm">
              <div><img @click="options('脚踏板')" :class="{click_img:option=='脚踏板'}" src="../../static/foot.png" alt=""><br>脚踏板</div>
              <div><img @click="options('锁')" :class="{click_img:option=='锁',m:true}" style="margin-right: 0;" src="../../static/lock.png" alt=""><br>锁</div>
              <div><img @click="options('二维码')" :class="{click_img:option=='二维码',m:true}" src="../../static/code.png" alt=""><br>二维码</div>
              <div><img @click="options('其他部位')" :class="{click_img:option=='其他部位'}" src="../../static/else.png" alt=""><br>其他部位</div>
            </div>
          </div>
        </div>

        <van-field
            class="bz"
            v-model="message"
            label="备注:"
            type="textarea"
            placeholder="请输入备注"
            rows="5"
            autosize
            style="margin-top: 15px;"
          />
      </van-col>

      <van-button class="top" type="info" @click="submit">提交</van-button>
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
    data(){
      return {
        bicycleNum: '',
        message: '',
        option: '',
      }
    },
    mounted(){
      this.bicycleNum = store.state.scan;
    },
    methods:{
      onClickRight() {
        this.$router.push('/historyFault');
      },
      scan(){
        this.$router.push('/scan');
      },
      options(t){
        this.option=t;
      },
      submit(){
         var _this = this;

          this.$http.post("/bikes/malfunction",{
            userId:store.state.id,
            bicycleNum: _this.bicycleNum,
            faultType:_this.option,
            remark:_this.message
          })
          .then(res =>{

            if(res.error_code == 200){
              _this.$notify(res.meg);

              let info = res.data.id;
              _this.$router.push({path:'/reportTheSuccess',query:{info}});

            }else{
              _this.$notify(res.meg);
            }
          });
      }
    }
  }
</script>

<style scoped>
  .van-nav-bar__title {
    font-weight: bold;
    font-size: 20px;
  }

  img {
    height: 45px;
    border: 1px solid #00000069;
    border-radius: 59px;
    padding: 10px;
  }

  .m {
    margin: 0px 10px;
  }

  .bz{
    border: 1px solid #CCCCCC;
  }

  .top {
    border-radius: 6px;
    width: 200px;
    margin: 0 auto;
    display: block;
    position: relative;
    top: 30px;
  }

  .mm div {
    display: inline-block;
    text-align: center;
  }

  .click_img {
    background-color: #00000029;
  }
</style>
