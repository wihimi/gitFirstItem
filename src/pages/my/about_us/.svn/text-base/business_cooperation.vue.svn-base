<template>
	<!-- 头部导航 -->
	<div>
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"> </header-fixed-top>
		<div class="txt">
			<div class="txts">
				<div class="txts1">
					“一线姻缘”自上线以来，发展迅速，不断得到广大会员的支持和认可，在用户和同行中拥有良好的口碑和信誉。 为了把“一线姻缘”进一步做强做大，同时，也为了和社会实现更多的共赢，我们希望能和有共同发展目标的朋友加强合作，如果你有合作意向和好的方案，请你跟我们联系!
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
				title: "商务合作",
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