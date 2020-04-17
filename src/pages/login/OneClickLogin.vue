<template>
	<div id="page">
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title"></header-fixed-top>
		<div class="paddIngTopTitle2"></div>

		<div class="headerBox ">
			<img class="headerIMg" src="../../images/register/oneClickLogin.png" />
		</div>
		<div class="loginPhone text-center">{{phoneNum}}</div>

		<div class="loginBtn" @click="oneClickLogin">一键登录</div>
		<div class="otderWay  text-center" @click="accountAndPass">账号密码登录</div>
		<div class="otherWayLogin flex-justify-content">
			<div class="flex flex1 flex-direction-column ">
				<img class="imgQQ" src="../../images/register/qqlogin.png" />
				<span id="">QQ登录</span>
			</div>
			<div id="" class="flex flex1 flex-direction-column ">
				<img class="imgWx" src="../../images/register/wxlogin.png" />
				<span id="">	微信登录</span>
			</div>
		</div>
	</div>
</template>

<script>
	import HeaderFixedTop from '../../components/HeaderTop/HeaderFixedTop'

	export default {
		name: "Login",
		components: {
			HeaderFixedTop,

		},

		data() {
			return {
				showBackIcon: 'false',
				title: '本机一键登录',
				phone: '',
				phoneNum: ''
			}
		},
		mounted() {
			if(localStorage.getItem('phone')) {
				this.phone = localStorage.getItem('phone');
				this.phoneNum = '+86' + this.phone.substr(0, 3) + '****' + this.phone.substr(7, 12)
				console.log(this.phoneNum)
			}

		},
		created() {

		},
		methods: {
			//账号密码登陆
			accountAndPass(){
				this.$router.go(-1);
			},
			goBack() {
				this.$router.go(-1);
			},
			oneClickLogin() {
				var requestUrl = this.apiUrl + 'user/login';
				var requestData = {

				};
				this.showLoading = true;
				axios.post(requestUrl,
						qs.stringify(requestData), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded'
							}
						},
					).then((res) => {
						console.log(res)
						if(res.data.code == 200) {
//							this.$toast(res.data.msg)
//							localStorage.setItem('uid', res.data.data.uid)
//							localStorage.setItem('token', res.data.data.token)
//							localStorage.setItem('phone', res.data.data.phone)
//							this.$router.push('/perfectInfo')
						} else {
							this.$toast(res.data.msg)
						}
						this.showLoading = false
					})
					.catch((error) => {
						this.showLoading = false
					})
			}
		}

	}
</script>

<style scoped lang="scss">
	@import "../../styles/mycomstyle.css";
	* {
		padding: 0;
		margin: 0;
	}

	.headerBox {
		width: 100%;
		.headerIMg {
			display: block;
			width: 75px;
			height: 75px;
			border-radius: 50%;
			overflow: hidden;
			margin: 60px auto 20px auto;
		}
	}
	/*密码账号*/

	.otderWay {
		letter-spacing: 2px;
		color: #515151;
		font-size: 14px;
	}
	/*登录账号*/

	.loginPhone {
		color: #515151;
		font-size: 16px;
	}
	/*其他方式登录*/

	.otherWayLogin {
		letter-spacing: 2px;
		margin-top: 120px;
		.imgQQ {
			width: 20px;
			height: 24px;
			display: block;
			margin: auto;
		}
		.imgWx {
			width: 28px;
			height: 24px;
			display: block;
			margin: auto;
		}
		span {
			margin-top: 5px;
			text-align: center;
		}
	}
	/*登录按钮*/

	.loginBtn {
		letter-spacing: 2px;
		margin: 80px 20px 30px 20px;
		background-color: #FF8737;
		flex: 1;
		height: 55px;
		line-height: 55px;
		color: white;
		text-align: center;
		font-size: 18px;
		border-radius: 5px;
		/*box-shadow: 0 0 4px 2px #FF8737;*/
	}
</style>
