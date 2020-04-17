<template>
	<!-- 头部导航 -->
	<div class="box">
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"> </header-fixed-top>

		<!-- 主体内容 -->
		<div class="box_txt">
			<div class="txt" @click="site_profile">
				<div class="txt_s"> 网站简介 </div>
				<img src="../../../static/img/icon_chela.png" alt="">
			</div>
			<div class="txt" @click="site_characteristics">
				<div class="txt_s"> 网站特色 </div>
				<img src="../../../static/img/icon_chela.png" alt="">
			</div>
			<div class="txt" @click="media_reports">
				<div class="txt_s"> 媒体报道 </div>
				<img src="../../../static/img/icon_chela.png" alt="">
			</div>
			<router-link to="/weibo" class="txt">
				<div class="txt_s"> 官方微博 </div>
				<img src="../../../static/img/icon_chela.png" alt="">
			</router-link>
			<div class="txt" @click="legal_notices">
				<div class="txt_s"> 法律声明 </div>
				<img src="../../../static/img/icon_chela.png" alt="">
			</div>
			<div class="txt" @click="privacy_protection">
				<div class="txt_s"> 隐私保护 </div>
				<img src="../../../static/img/icon_chela.png" alt="">
			</div>
			<div class="txt" @click="copyright_statement">
				<div class="txt_s"> 版权声明 </div>
				<img src="../../../static/img/icon_chela.png" alt="">
			</div>
			<div class="txt" @click="registration_terms">
				<div class="txt_s"> 注册条款 </div>
				<img src="../../../static/img/icon_chela.png" alt="">
			</div>
			<div class="txt" @click="vip">
				<div class="txt_s"> 会员标准 </div>
				<img src="../../../static/img/icon_chela.png" alt="">
			</div>
			<div class="txt" @click="business_cooperation">
				<div class="txt_s"> 商务合作 </div>
				<img src="../../../static/img/icon_chela.png" alt="">
			</div>
			<div class="txt" @click="advertising_business">
				<div class="txt_s"> 广告业务 </div>
				<img src="../../../static/img/icon_chela.png" alt="">
			</div>
			<div class="txt" @click="friendship_link">
				<div class="txt_s"> 友情连接 </div>
				<img src="../../../static/img/icon_chela.png" alt="">
			</div>
			<div class="txt" @click="talented_people">
				<div class="txt_s"> 诚聘英才 </div>
				<img src="../../../static/img/icon_chela.png" alt="">
			</div>
			<router-link to="/contactUs" class="txt">
				<div class="txt_s"> 联系我们 </div>
				<img src="../../../static/img/icon_chela.png" alt="">
			</router-link>
		</div>

	</div>
</template>

<script>
	import HeaderFixedTop from '../../components/HeaderTop/HeaderFixedTop'

	export default {
		data() {
			return {
				show: false,
				showBackIcon: "true",
				title: "关于我们",
				rightTitle: ''
			}
		},
		components: {
			HeaderFixedTop,
		},

		methods: {

	talented_people() {
				this.$router.push("/talented_people");
			},
	friendship_link() {
				this.$router.push("/friendship_link");
			},
			advertising_business() {
				this.$router.push("/advertising_business");
			},
			business_cooperation() {
				this.$router.push("/business_cooperation");
			},
			vip() {
				this.$router.push("/vip");
			},
			registration_terms() {
				this.$router.push("/registration_terms");
			},
			copyright_statement() {
				this.$router.push("/copyright_statement");
			},
			privacy_protection() {
				this.$router.push("/privacy_protection");
			},
			legal_notices() {
				this.$router.push("/legal_notices");
			},
			media_reports() {
				this.$router.push("/media_reports");
			},
			site_characteristics() {
				this.$router.push("/site_characteristics");
			},
			site_profile() {
				this.$router.push("/site_profile");
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
		margin-top: 50px;
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