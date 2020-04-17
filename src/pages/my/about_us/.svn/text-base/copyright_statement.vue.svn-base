<template>
	<!-- 头部导航 -->
	<div>
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"> </header-fixed-top>
		<div class="txt">
		<div class="txts">
		<div class="txts1">
			
           
                                本站的商标和版权已作注册和登记，商标和版权归深圳市一线空间电子商务有限公司所有，未经本站同意，任何单位或个人不得模仿、拷贝本站(版式、风格、文字和图片等)，如有发现，我们将追究其法律责任。

本站的部分图片或文字资料来源于网络，版权归原作者所有,如有侵权,请联系本站,本站24时内作出处理!
                            
                            
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
				title: "版权声明",
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
	.txts{
		width: 90%;
		margin: 0 auto;
	}
	.txts1{
		font-size: 13px;
		color: #666666;
	}
</style>