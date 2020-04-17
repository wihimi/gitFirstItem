<template>
	<!-- 头部导航 -->
	<div>
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"> </header-fixed-top>
		<div class="txt">
			<div class="txts">

				<div class="txt1">
					“一线姻缘”是深圳市一线空间电子商务有限公司旗下的一家面向全国、服务本地的同城婚恋交友网站，主要为全国各地的单身人士提供同城本地的婚恋交友服务。创建至今，网站一直坚持“诚信至上、服务至上”的原则，讲诚信、重服务，已经帮助众多单身人士找到了真爱。
				</div>
				<div class="txt2_1"> 创办背景 </div>
				<div class="txt2_2">
					网络婚恋市场混乱，网络征婚不安全、不可靠、成功率低，网友对很多婚恋网站普遍感到失望。
				</div>
				<div class="txt2_1">
					创办初衷
				</div>
				<div class="txt2_2">
					为单身人士提供一个真实、安全、成功率高的同城婚恋交友平台。
				</div>
				<div class="txt2_1">

					网站宗旨

				</div>
				<div class="txt2_2">

					只为找对象服务

				</div>
				<div class="txt2_1">

					网站口号

				</div>
				<div class="txt2_2">

					让真心会员找到真爱

				</div>
				<div class="txt2_1">

					网站目标

				</div>
				<div class="txt2_2">

					做真实、安全、成功率高的婚恋平台。

				</div>
				<div class="txt2_1">

					网站特色

				</div>
				<div class="txt2_2">

					<div>
						管理严格、重视婚恋安全
					</div>
					<div>
						没有机器人、没有系统发信
					</div>
					<div>
						看信免费、可查看联系方式
					</div>
					<div>
						收费便宜、可赚积分消费
					</div>

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
				title: "网站简介",
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