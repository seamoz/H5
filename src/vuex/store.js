import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
	id : sessionStorage.id || "",
	phone : sessionStorage.phone || "",
  scan: '',
}
const mutations={
	changePhone (state,phone) {
		state.phone = phone;
		//存入本地session缓存中
		sessionStorage.phone = phone;
	},
	changeId (state,id) {
		state.id = id;
		//存入本地session缓存中
		sessionStorage.id = id;
	},
  changeScan(state,scan){
    state.scan = scan;
  },
	clearToken () {
		state.phone = "";
		state.id = "";
		sessionStorage.phone = "";
		sessionStorage.id = "";
	}
}

export default new Vuex.Store({
	state,
	mutations
});
