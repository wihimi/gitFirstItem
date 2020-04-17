<template>
	<div id="page">
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title"></header-fixed-top>

		<div class="paddIngTopTitle2"> </div>
		<!--<div class="paddIngTopTitle">fdsjfjj1</div>-->
		<div class="headerBox ">
			<img class="headerIMg" src="../../images/register/header.png" />
		</div>
		<div class="userInfo">
			<div class="user_com">
				<div class="left">
					<img src="../../images/register/userHead.png" style="width: 16.5px;height: 16.5px;" />
				</div>
				<div class="right">
					<input class="inputNotsty" type="text" name="" id="" ref="Id" v-on:keyup="inputRef" value="" placeholder="请输入手机号/邮箱/ID" />
				</div>
			</div>
			<div class="user_com">
				<div class="left">
					<img src="../../images/register/passWord.png" style="margin-left: 5px;" />
				</div>
				<div class="right">
					<input class="inputNotsty" type="" name="" id="" value="" ref="pwd" v-on:keyup="inputPWD" placeholder="请输入密码" />

				</div>
			</div>

		</div>
		<div class="forgetPassBox">
			<div class="forgetItem flex-justify-content">

				<div id="" @click="toOneClickLogin">
					一键登录
				</div>
				<div class="" @click="getPassWord">
					忘记密码
				</div>
			</div>
		</div>
		<div class="loginBtn" @click="nowLogin">
			立即登陆
		</div>
		<div class="otherWayLogin flex-justify-content">
			<div class="flex flex1 flex-direction-column ">
				<img class="imgQQ" src="../../images/register/qqlogin.png" />
				<span id="">QQ登录</span>
			</div>
			<div id="" class="flex flex1 flex-direction-column ">
				<img class="imgWx" src="../../images/register/wxlogin.png" />
				<span id="">微信登录</span>
			</div>
		</div>

		<div class="loading" v-show="showLoading">
			<van-loading class="vanLoading" type="spinner" size="24px"></van-loading>
		</div>
	</div>
</template>

<script>
	import HeaderFixedTop from '../../components/HeaderTop/HeaderFixedTop'
	import axios from 'axios'
	import qs from 'qs'
	import Vue from 'vue';
	import { Loading } from 'vant';
	import {login} from '../../request/api'
	export default {
		name: "Login",
		components: {
			HeaderFixedTop,

		},

		data() {
			return {
				showBackIcon: 'false',
				title: '会员登录',
				token: "",
				title: '会员登录',
				accoutNum: '',
				passwordAll: '',
				showLoading: false
			}
		},

		mounted() {
		},
		created() {

		},
		methods: {
			//获取用户框输入的内容
			inputRef() {
				//通过ref获取input框输入的内容
				this.accoutNum = this.$refs.Id.value

			},
			//获取密码
			inputPWD() {
				this.passwordAll = this.$refs.pwd.value
			},
			goBack() {
				this.$router.go(-1);
			},
			toOneClickLogin() {
				this.$router.push('/OneClickLogin')
			},
			getPassWord() {
				this.$router.push('/Backup')
			},
			//立即登录
//			nowLogin() {
//				var requestData = {
//					loginType: 0, //loginType,
//					password: this.passwordAll,
//					phone: this.accoutNum,
//				};
//				login(requestData).then((res) => {
//						console.log(res)
//					}),
//					() => {}
//			},
						nowLogin() {
							if(this.accoutNum.length == 0) {
								this.$toast('手机号/邮箱/ID不能为空');
								return;
							}
							if(this.passwordAll.length == 0) {
								this.$toast('密码不能为空');
								return;
							}
							var loginType = 3;
							//手机号登录
							if((/^1[3456789]\d{9}$/.test(this.accoutNum))) {
								loginType = 1;
								console.log(loginType);
							}
							//邮箱登录
							else if((/^[A-Za-z\d]+[A-Za-z\d\-_\.]*@([A-Za-z\d]+[A-Za-z\d\-]*\.)+[A-Za-z]{2,4}$/.test(this.accoutNum))) {
								loginType = 2;
								console.log(loginType);
								//用户ID
							} else {
								loginType = 3;
								console.log(loginType);
							}
							//return
							var requestUrl = this.apiUrl + 'user/login';
							var requestData = {
								loginType, //loginType,
								password: this.passwordAll,
								phone: this.accoutNum,
							};
							this.showLoading = true;
							axios.post(requestUrl,
									qs.stringify(requestData), {
										headers: {
											'Content-Type': 'application/x-www-form-urlencoded'
										}
									},
								).then(res => {
									console.log(res);
									if(res.data.code == 200) {
										//如果已实名认证返回首页
										if(res.data.data.whetherActivation == 1) {

											this.$router.push({
												path: '/index'
											});
										} else {
											//如果未填写跳转到完善信息							 this.$router.push('/activationAccout')

											this.$router.push({
												path: '/perfectInfo'
											});
										};
										this.$store.commit('set_vip',res.data.data.whetherVip);
										localStorage.setItem("uid", res.data.data.uid);
											localStorage.setItem("phone", res.data.data.phone);
											localStorage.setItem("token", res.data.data.token)
									} else {
										this.$toast(res.data.msg)
									}
									this.showLoading = false;

								})
								.catch((error) => {
									this.showLoading = false;
								})

							//this.$router.push('/activationAccout')
						},

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
			margin: 60px auto;
		}
	}
	/*其他方式登录*/

	.otherWayLogin {
		margin-top: 40px;
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
			letter-spacing: 3px;
		}
	}
	/*登录按钮*/

	.loginBtn {
		margin: 40px 20px;
		background-color: #FF8737;
		flex: 1;
		height: 55px;
		line-height: 55px;
		color: white;
		text-align: center;
		font-size: 18px;
		border-radius: 5px;
		/*box-shadow: 0 0 4px 2px #FF8737;*/
		letter-spacing: 3px;
	}
	/*忘记密码*/

	.forgetPassBox {
		width: 100%;
		font-size: 14px;
		letter-spacing: 2px;
		.forgetItem {
			margin: 20px 20px;
			color: #515151;
		}
	}
	/*登录密码与账号*/

	.userInfo {
		width: 100%;
		.user_com {
			margin: 0 20px;
			border-bottom: 1px solid #D2D2D2;
			padding: 10px 20px;
			height: 40px;
			line-height: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			.left {
				flex: 0.15;
				img {
					width: 8px;
					height: 16px;
					display: block;
					margin: auto 0;
				}
			}
			.right {
				flex: 0.85;
				input {
					width: 100%;
					flex: 1;
					background: none;
					border: none;
					outline: none;
					/*	color: #C1C1C1;*/
					height: 100%;
					font-size: 16px;
					height: 30px;
					line-height: 30px;
					letter-spacing: 2px;
					display: block;
				}
			}
		}
	}
</style>
