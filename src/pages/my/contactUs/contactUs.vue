<template>
	<div class="">
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title"></header-fixed-top>
		<div class="bigBox paddIngTopTitle">

				<div class="">
					网站网址： www.11yinyuan.com
				</div>
				

				<div class="">网站名称：一线姻缘</div>
				<div class="">
					备案号：粤ICP备 11024309（1/3）号
				</div>
				<div class="">
					公司名称：深圳市一线空间电子商务有限公司
				</div>
				<div class="">
					公司地址：深圳罗湖区南湖街道人民南路国际贸易中心大厦B1713房
				</div>
				<div class="">
					营业执照：914403005657423003
				</div>
				<div class="">
					客服热线：4008-599-520
				</div>

				<div class="">
					客服微信：yinyuankefu
				</div>

				<div class="">
					客服 Q Q：1610907206
				</div>
				<div class="">

					客服邮箱： 1610907206@qq.com
				</div>
		</div>
	</div>
</template>

<script>
	import HeaderFixedTop from '../../../components/HeaderTop/HeaderFixedTop'

	export default {
		name: "ContactUs",
		components: {
			HeaderFixedTop,

		},

		data() {
			return {
				showBackIcon: 'false',
				title: '联系我们',
			}
		},
		methods:{
			goBack() {
      this.$router.go(-1);
    },
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../styles/mycomstyle.css";
	.bigBox {
		
		padding: 20px 27px;
	
		div{
				margin-bottom: 20px;
				font-size: 15px;
				color:#666666;
				letter-spacing: 2px;
		}
	}
</style>