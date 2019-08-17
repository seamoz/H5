<template>
	<div>
		<van-nav-bar title="磐石单车" style="width: 100%;" />
		<baidu-map class="map" center="深圳" :zoom="zoom" @ready="handler">
			<!-- 缩放地图 -->
			<bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
			<!-- 定位 -->
			<bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
			<!-- 地形地图 -->
			<bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
		</baidu-map>
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
	//导入js

	export default {
		data() {
			return {
				center:{lng:0,lat:0},
				zoom: 14
			}
		},
		mounted() {},
		methods: {
			handler({BMap,map}) {
				//console.log(BMap)
				var ka = map;
				console.log(map)
				console.log(ka);
				this.center.lng = 114.064552
				this.center.lat = 22.548456
			}
		}
	}
</script>

<style>
	.map {
		width: 100%;
		height: 570px;
	}

	html {
		height: 100%
	}

	body {
		height: 100%;
		margin: 0px;
		padding: 0px
	}

	#container {
		height: 100%
	}
</style>
