<template>
	<!-- 头部导航 -->
	<div>
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"> </header-fixed-top>
		<!--内容-->
		<div class="box">
			<div class="boxs">
			新浪微博：http://weibo.com/yixianyinyuangw 
			</div>
			
		</div>

	</div>
</template>

<script>
	import HeaderFixedTop from '../../../components/HeaderTop/HeaderFixedTop'

	export default {
		data() {
			return {
				show: false,
				showBackIcon: "true",
				title: "官方微博",
				rightTitle: ''
			}
		},
		components: {
			HeaderFixedTop,
		},

		methods: {
			goBack() {
				this.$router.go(-1);
			},
			goNavAdd() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped>
	.box {
		width: 100%;
		margin-top: 60px;
	}
	.boxs{
		width: 90%;
		margin: 0 auto;
		font-size: 13px;
		color: #333333;
	}
</style>