<template>
  <div>
    <van-nav-bar
      left-text="二维码/条码"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="scan">
      <div id="bcid">
        <div style="height:40%"></div>
        <p class="tip">...载入中...</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  let scan = null

  export default {
    data(){
      return {
        that: {},
      }
    },
    mounted(){
      this.startRecognize();
    },
    methods:{
      ...mapMutations([
        'changeScan'
      ]),
      onClickLeft() {
        this.$router.push('/fault');
      },
      // 创建扫描控件
      startRecognize () {
        let that = this;
        if (!window.plus) return
        scan = new plus.barcode.Barcode('bcid')
        scan.onmarked = onmarked
        that.startScan();

        function onmarked (type, result, file) {
          switch (type) {
            case plus.barcode.QR:
              type = 'QR'
              break
            case plus.barcode.EAN13:
              type = 'EAN13'
              break
            case plus.barcode.EAN8:
              type = 'EAN8'
              break
            default:
              type = '其它' + type
              break
          }
          result = result.replace(/\n/g, '');
          that.changeScan(result);
          that.closeScan();
          that.onClickLeft();
        }
      },
      startScan () {
        if (!window.plus) return
        scan.start()
      },
      cancelScan () {
        if (!window.plus) return
        scan.cancel()
      },
      closeScan () {
        if (!window.plus) return
        scan.close()
      },
    }
  }
</script>

<style scoped>
  .scan {
    height: 100%;
  }

  #bcid {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    text-align: center;
    color: #fff;
    background: #00000094;
  }
</style>
