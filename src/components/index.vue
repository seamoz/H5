<template>
	<div>
		<van-nav-bar title="磐石单车" right-text="消息" @click-right="onClickRight" style="position: fixed; width: 100%;" />
		<div style="height: 46px;"></div>
		<van-row style="position: fixed; width: 100%; z-index: 9999;">
			<van-col span="1"></van-col>
			<van-col span="22">
				<van-dropdown-menu>
					<van-dropdown-item v-model="value1" :options="option1" @change="changeAddress(value1)"/>
				</van-dropdown-menu>
			</van-col>
			<van-col span="1"></van-col>
		</van-row>
		<div style="height: 50px;"></div>

		<div id="subscribe" class="subscribeClas">
			提示：你已经预定了一辆&nbsp;<span @click="toUnLock" style="color: #1989fa;">解锁</span>
		</div>
		<div style="height: 41px;"></div>

		<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
			<van-cell v-for="item,index in list" :key="index">
				<van-row>
					<van-col span="5">
						<img height="50" v-if="item.bicycleState==0" src="../../static/bicycle0.png" alt="">
						<img height="50" v-if="item.bicycleState==1" src="../../static/bicycle1.png" alt="">
						<img height="50" v-if="item.bicycleState==2" src="../../static/bicycle.png" alt="">
						<img height="50" v-if="item.bicycleState==3" src="../../static/bicycle3.png" alt="">
					</van-col>
					<van-col span="5" class="l50">
						{{ getState(item.bicycleState) }}
					</van-col>
					<van-col span="6" class="l50">
						编号：{{ item.bicycleNum }}
					</van-col>
					<van-col span="8">
						<van-button :[attr(item.bicycleState,1)]="true" @click="unlock(item)" class="bu" square type="primary">解锁</van-button>
						&nbsp;
						<van-button id="subscribeBtn" :[attr(item.bicycleState,2)]="true" @click="reserve(item)" class="bu" square type="primary">预定</van-button>
					</van-col>
				</van-row>
			</van-cell>
		</van-list>

		<van-tabbar v-model="active" route>
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
	import $ from 'jquery'

	export default {
		mounted() {
			if(store.id != ''){
				this.userId = store.id;
			}
			this.init();
			this.$notify("info");
		},
		data() {
			return {
				value1: 'A',
				option1: [{
						text: 'A',
						value: 'A'
					},
					{
						text: 'B',
						value: 'B'
					},
					{
						text: 'C',
						value: 'C'
					},
					{
						text: 'D',
						value: 'D'
					},
					{
						text: 'E',
						value: 'E'
					},
					{
						text: 'F',
						value: 'F'
					},
				],
				list: [],
				loading: false,
				finished: false,
				active: '',
				subscribe: 0,		//预约的单车编号
				userId: 1,
				info: {

				}
			}
		},
		methods: {
			init() {
				this.$http.post("/bikes/init?userId="+this.userId).then(res => {
					this.value1 = res.data.address;
					this.changeAddress(res.data.address);
					if (res.data.bicycleNum != 0) {
						this.subscribe = res.data;
						$("#subscribe").show();
					}
				});
			},
			changeAddress(address){
				this.$http.post("/bikes/address?bicycleSite="+address).then(res => {
					this.list = res.data;
				});
			},
			toUnLock() {
				this.unlock(this.subscribe);
			},
			unlock(t) {
				this.$http.post("/bikes/unlock?userId="+this.userId+"&bicycleNum="+t.bicycleNum).then(res => {
					if(res.meg == '解锁成功'){
						$("#subscribe").hide();
					}
					this.$dialog.alert({
						message: res.meg
					})
					this.init()
				});
			},
			reserve(t) {			//预定
				this.$http.post("/bikes/subscribe?userId="+this.userId+"&bicycleNum="+t.bicycleNum).then(res => {
						this.$dialog.alert({
							message: res.meg
						})
						this.init()
				});
			},
			onClickRight() {
				this.$toast('按钮');
			},
			attr(t, t1) {
				if (t1 == 1) {
					if (t == 3) {
						return 'disabled';
					}
					if (t == 2) {
						return 'disabled';
					}
				} else {
					if (t == 1) {
						return 'disabled';
					}
					if (t == 2) {
						return 'disabled';
					}
					if (t == 3) {
						return 'disabled';
					}
				}
				return 'xxx'
			},
			disabled(t) {
				confirm(t)
			},
			getState(t) {
				if (t == 0) {
					return "(正常)";
				}
				if (t == 1) {
					return "(已预定)";
				}
				if (t == 2) {
					return "(使用中)";
				}
				if (t == 3) {
					return "(故障车)";
				}
			},
			onLoad() {
				// 异步更新数据
				/* setTimeout(() => {
				  for (let i = 0; i < 10; i++) {
				    if(this.list[i]=null)
				    this.list.push(this.list.length + 1);
				  }
				  // 加载状态结束
				  this.loading = false;

				  // 数据全部加载完成
				  if (this.list.length >= 40) {
				    this.finished = true;
				  }
				}, 500); */
			}
		},
	}
</script>

<style scoped>
	.subscribeClas {
		padding: 10px 16px;
		position: fixed;
		width: 100%;
		z-index: 999;
		background-color: white;
		display: none;
	}

	.van-nav-bar__title {
		font-weight: bold;
		font-size: 20px;
	}

	.bu {
		width: 45px;
		height: 50px;
		padding: 0 0;
		border-radius: 6px;
	}

	.l50 {
		line-height: 50px;
	}
</style>
