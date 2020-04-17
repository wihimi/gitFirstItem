<template>
	<!-- 头部导航 -->
	<div>
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"> </header-fixed-top>
		<div class="txt">
			<div class="txts">
				<div class="txts1">

					“一线姻缘”自上线以来，发展迅速，不断得到广大会员的支持和认可，在用户和同行中拥有良好的口碑和信誉。网站每天的点击率很高，在百度、谷歌、SOSO等相关搜索中拥有良好的排名，在腾讯、新浪、网易、搜狐、天涯、猫扑等知名网站、论坛和微博中具有很大的知名度，我们可以为你提供高效益的广告服务，有广告投放需要的朋友可跟我们联系！ 微 信：

				</div>
				<div class="txts2">
					微信： <span style="color: #333333;">yinyuankefu</span>

				</div>
				<div class="txts2">

					Q Q：
					<span style="color: #333333;">
                                1610907206
                            </span>

				</div>
				<div class="txts2">

					邮 箱：
					<span style="color: #333333;">
                                1610907206@qq.com
                            </span>

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
				title: "广告业务",
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
	
	.txts1 {
		font-size: 13px;
		color: #666666;
	}
	
	.txts2 {
		font-size: 13px;
		color: #666666;
		margin-top: 20px;
		font-weight: 600;
	}
</style>