// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入 vant 的 css
import 'vant/lib/index.css';

// 导入vant组件
import { Field } from 'vant';
import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Notify } from 'vant';
import { Popup } from 'vant';
import { NavBar } from 'vant';
import { NumberKeyboard } from 'vant';
import { Toast } from 'vant';
import { Row, Col } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { List } from 'vant';

Vue.use(List);
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Row).use(Col);
Vue.prototype.$toast = Toast;
Vue.use(NumberKeyboard);
Vue.use(NavBar);
Vue.use(Popup);
Vue.prototype.$notify = Notify;
Vue.use(Cell).use(CellGroup);
Vue.use(Button);
Vue.use(Field);
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'roIrGvFEF1GM68ZMDySgRamoUbPFmOkL'
})
Vue.config.productionTip = false

// vuex
import store from './vuex/store.js'

// http
import http from './http/http.js'
Vue.prototype.$http = http;

//百度地图
import BaiduMap from 'vue-baidu-map'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
