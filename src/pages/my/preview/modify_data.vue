<template>
	<!-- 头部导航 -->
	<div class="box">
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"> </header-fixed-top>
		<!-- 主体内容 -->
		<div class="box_txt">
			<div class="txt" @click="basic_information">
				<div class="txt_s"> 基本资料 </div>
				<img src="../../../../static/img/icon_chela.png" alt="">
			</div>
			<div class="txt" @click="myself">
				<div class="txt_s"> 自我介绍 </div>
				<img src="../../../../static/img/icon_chela.png" alt="">
			</div>
			<div class="txt" @click="personal_life">
				<div class="txt_s"> 个人生活 </div>
				<img src="../../../../static/img/icon_chela.png" alt="">
			</div>
			<div class="txt" @click="love_plan">
				<div class="txt_s"> 爱情规划 </div>
				<img src="../../../../static/img/icon_chela.png" alt="">
			</div>
			<div class="txt" @click="way_of_life">
				<div class="txt_s"> 生活方式 </div>
				<img src="../../../../static/img/icon_chela.png" alt="">
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
				title: "修改资料",
				rightTitle: '',
				list:''
			}
		},
		components: {
			HeaderFixedTop,
		},
			created() {
			this.$route.query.userInfo;
			this.list = this.$route.query.userInfo
		
		},
			methods: {
				way_of_life() {
					this.$router.push('/way_of_life')
				},
				love_plan() {
					this.$router.push('/love_plan')
				},
				personal_life() {
					this.$router.push('/personal_life')
				},
				myself() {
					this.$router.push('/myself')
				},
//				点击到修改基本信息页面
				basic_information() {
//					this.$router.push('/basic_information') 
					 this.$router.push({
			 path:	'/basic_information',
			 query:{
			 	list:this.list
			 	}
			 })
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

<style lang="scss" scoped>
	.box {
		width: 100%;
		height: 100%;
		margin-top: 60px;
		.box_txt {
			width: 98%;
			/*border: 1px solid red;*/
			margin: 0 auto;
			/*margin-top: 60px;*/
			.txt {
				width: 100%;
				height: 50px;
				display: flex;
				line-height: 50px;
				background-color: #FFFFFF;
				border-radius: 5px;
				margin-bottom: 10px;
				.txt_s {
					font-size: 15px;
					color: #353535;
					margin-left: 10%;
				}
				img {
					width: 6.5px;
					height: 11.5px;
					margin-left: 66%;
					margin-top: 5%;
					/*display: block;*/
				}
			}
		}
	}
</style>