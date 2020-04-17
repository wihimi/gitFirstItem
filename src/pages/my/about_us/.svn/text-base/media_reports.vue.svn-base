<template>
	<!-- 头部导航 -->
	<div>
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"> </header-fixed-top>
		<!--内容-->
		<div class="box">
			<div class="boxs">
				<div class="boxs_txt" @click="media_reports_details">
					<div class="boxs_txt1">
						相亲网站找对象靠谱吗？一线姻缘牵动彼此，助你成功！
					</div>
					<div class="boxs_txt2">
						2019-10-15
					</div>
				</div>
			</div>
			<div class="boxs">
				<div class="boxs_txt">
					<div class="boxs_txt1">
						相亲网站找对象靠谱吗？一线姻缘牵动彼此，助你成功！
					</div>
					<div class="boxs_txt2">
						2019-10-15
					</div>
				</div>
			</div>
			<div class="boxs">
				<div class="boxs_txt">
					<div class="boxs_txt1">
						相亲网站找对象靠谱吗？一线姻缘牵动彼此，助你成功！
					</div>
					<div class="boxs_txt2">
						2019-10-15
					</div>
				</div>
			</div>
			<div class="boxs">
				<div class="boxs_txt">
					<div class="boxs_txt1">
						相亲网站找对象靠谱吗？一线姻缘牵动彼此，助你成功！
					</div>
					<div class="boxs_txt2">
						2019-10-15
					</div>
				</div>
			</div>
			<div class="boxs">
				<div class="boxs_txt">
					<div class="boxs_txt1">
						做真实靠谱的婚恋网站，一线姻缘做行业带头标杆
					</div>
					<div class="boxs_txt2">
						2019-10-15
					</div>
				</div>
			</div>
			<div class="boxs">
				<div class="boxs_txt">
					<div class="boxs_txt1">

						正规婚恋网站— 一线姻缘，只为单身人士找对象服务，非诚勿 扰！做安全可靠的婚恋网站，一线姻缘启动多项安全措施

					</div>
					<div class="boxs_txt2">
						2019-10-15
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
				title: "媒体报道",
				rightTitle: ''
			}
		},
		components: {
			HeaderFixedTop,
		},

		methods: {
			media_reports_details(){
				this.$router.push("/media_reports_details");
			},
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
		background: #fff;
		margin-top: 44px;
	}
	
	.boxs {
		width: 100%;
		border-top: 1px solid #F1F1F1;
	}
	
	.boxs_txt {
		width: 95%;
		margin: 0 auto;
	}
	
	.boxs_txt1 {
		font-size: 12px;
		color: #222222;
		margin-top: 5px;
	}
	
	.boxs_txt2 {
		font-size: 10px;
		color: #999999;
		margin-top: 5px;
		padding-bottom: 5px;
	}
</style>