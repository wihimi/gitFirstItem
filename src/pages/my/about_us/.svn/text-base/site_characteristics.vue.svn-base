<template>
	<!-- 头部导航 -->
	<div>
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"> </header-fixed-top>
		<div class="txt">
			<div class="txts">
				<div class="txt2_1">
					1.管理严格、重视婚恋安全
				</div>
				<div class="txt2_2">

					资料审核严格、重视安全防范，有奖鼓励用户举报、重拳打击骗子婚托。

				</div>
				<div class="txt2_1">

					2.没有机器人、没有系统发信

				</div>
				<div class="txt2_2">

					不会用机器人和系统发信诱导用户消费，你收到的每封信都来自对方发送。

				</div>
				<div class="txt2_1">

					3.看信免费、可查看联系方式

				</div>
				<div class="txt2_2">

					普通会员每天都有一定的免费看信量，VIP会员还可不限量查看联系方式。

				</div>
				<div class="txt2_1">

					4.收费便宜、可赚积分消费

				</div>
				<div class="txt2_2">

					设有“一次少量付费便可终身享用”的终身VIP服务，还可赚积分抵扣消费。

				</div>

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
				title: "网站特色",
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
	.txt {
		width: 100%;
		margin-top: 50px;
	}
	
	.txts {
		width: 90%;
		margin: 0 auto;
	}
	
	.txt1 {
		line-height: 20px;
		font-size: 13px;
		color: #666666;
	}
	
	.txt2_1 {
		margin-top: 20px;
		font-size: 13px;
		color: #333333;
		font-weight: 600;
	}
	
	.txt2_2 {
		color: #666666;
		font-size: 13px;
		line-height: 20px;
		margin-top: 1px;
	}
</style>