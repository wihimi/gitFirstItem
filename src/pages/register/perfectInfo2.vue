<template>
	<div id="page">
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title"></header-fixed-top>
		<div class="paddIngTopTitle"></div>

		<div class="userInfoInput">
			<div class="user_com">
				<div class="left">年齡</div>
				<div class="right flex justify-center align-center">
					<div id=""></div>
					<img src="../../images/jiantou3@3x.png" />
				</div>
			</div>
			<div class="user_com">
				<div class="left">身高</div>
				<div class="right flex justify-center align-center">
					<div id=""></div>
					<img src="../../images/jiantou3@3x.png" />
				</div>
			</div>
			<div class="user_com">
				<div class="left">学历</div>
				<div class="right flex justify-center align-center">
					<div id=""></div>
					<img src="../../images/jiantou3@3x.png" />
				</div>
			</div>
			<div class="user_com">
				<div class="left">婚姻状况</div>
				<div class="right flex justify-center align-center">
					<div id=""></div>
					<img src="../../images/jiantou3@3x.png" />
				</div>
			</div>

			<div class="user_com">
				<div class="left">所在地区</div>
				<div class="right flex justify-center align-center">
					<div id=""></div>
					<img src="../../images/jiantou3@3x.png" />
				</div>
			</div>
			<div class="selfIntroduction">
				<div class="selfIn">自我介绍</div>

				<div class="flex optionsType">
					<div id="" :class="introdType==1?'introdAction':'introdDefualt'" @click="introdType=1">自己写</div>
					<div id="" :class="introdType==2?'introdAction':'introdDefualt'" @click="introdType=2">帮你写</div>
				</div>
			</div>
			<div id="" v-show="introdType==1">
				<div class="user_com">
					<div class="left">我的性格特点是</div>
					<div class="right flex justify-center align-center">
						<input class="inputNotsty" v-model="myPhone" type="" placeholder="请输入手机号" name="" id="" value="" />

					</div>
				</div>
				<div class="user_com">
					<div class="left">业余时间我喜欢</div>
					<div class="right flex justify-center align-center">
						<input class="inputNotsty" v-model="myPhone" type="" placeholder="请输入手机号" name="" id="" value="" />

					</div>
				</div>

				<div class="user_com">
					<div class="left">我憧憬的生活是</div>
					<div class="right flex justify-center align-center">
						<input class="inputNotsty" v-model="myPhone" type="" placeholder="请输入手机号" name="" id="" value="" />

					</div>
				</div>
				<div class="user_com">
					<div class="left">我希望我的爱人</div>
					<div class="right flex justify-center align-center">
						<input class="inputNotsty" v-model="myPhone" type="" placeholder="请输入手机号" name="" id="" value="" />

					</div>
				</div>
			</div>
<div id="" v-show="introdType==2">
				<div class="user_com">
					<div class="left">我的性格特点是14245</div>
					<div class="right flex justify-center align-center">
						<input class="inputNotsty" v-model="myPhone" type="" placeholder="请输入手机号" name="" id="" value="" />

					</div>
				</div>
				<div class="user_com">
					<div class="left">业余时间我喜欢</div>
					<div class="right flex justify-center align-center">
						<input class="inputNotsty" v-model="myPhone" type="" placeholder="请输入手机号" name="" id="" value="" />

					</div>
				</div>

				<div class="user_com">
					<div class="left">我憧憬的生活是</div>
					<div class="right flex justify-center align-center">
						<input class="inputNotsty" v-model="myPhone" type="" placeholder="请输入手机号" name="" id="" value="" />

					</div>
				</div>
				<div class="user_com">
					<div class="left">我希望我的爱人</div>
					<div class="right flex justify-center align-center">
						<input class="inputNotsty" v-model="myPhone" type="" placeholder="请输入手机号" name="" id="" value="" />

					</div>
				</div>
			</div>
		</div>
		<div class="submitMyIntrod">点击生成自我介绍</div>

	</div>
</template>

<script>
	import HeaderFixedTop from '../../components/HeaderTop/HeaderFixedTop'

	export default {
		name: "PerfectInfo2",
		components: {
			HeaderFixedTop,

		},

		data() {
			return {
				showBackIcon: 'false',
				title: '完善资料',
				introdType: 1,
				myNikeName: '',
				passWord1: '',
				passWord2: '',
				myPhone: '',
				flagAgree: false,
				countdown: 60
			}
		},
		mounted() {

		},
		created() {

		},
		methods: {
			goBack() {
				this.$router.go(-1);
			},

			settime(obj) {
				if(this.countdown == 0) {
					this.countdown = 60;
					return;
				} else {
					this.countdown--;
					console.log(this.countdown)
				};
				setTimeout(function() {
					settime(obj)
				}, 1000)
			},
			getCode() {

				//				var number = 60;
				//				var countdown = function() {
				//					if(number == 0) {
				////						number = 60;
				////						return;
				//					} else {
				//						number--;
				//					}
				//					setTimeout(countdown, 1000);
				//				}
				//				setTimeout(countdown, 1000);
				//				console.log(number)
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
	/*表格样式*/
	
	.userInfoInput {
		width: 100%;
		.agreeClause {
			display: flex;
			align-items: center;
			font-size: 14px;
			margin: 10px 20px;
			.clauseOne {
				color: #FF8737;
			}
			img {
				display: inline;
				width: 30px;
				height: 30px;
				margin-top: 2px;
				margin-left: -10px;
			}
		}
		.title_Tips {
			margin: 10px 20px;
			display: inline-block;
		}
		.selfIntroduction {
			font-weight: 600;
			margin: 30px 20px;
			border-bottom: 0.5px solid #D2D2D2;
			.selfIn {
				margin: 30px 0px 10px 0px;
			}
			.optionsType {
				.introdAction {
					color: #F54663;
					font-size: 14px;
					padding: 10px 10px 10px 10px;
					/*padding-bottom: 10px;*/
					border-bottom: 2px solid #F54663;
					margin-right: 20px;
				}
				.introdDefualt {
					color: #949494;
					padding: 10px 10px 10px 10px;
					font-size: 14px;
					margin-right: 20px;
				}
			}
		}
		.user_com {
			margin: 0 20px;
			border-bottom: 0.5px solid #D2D2D2;
			height: 40px;
			line-height: 40px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left {
				color: #3A3A3A;
				font-size: 16px;
			}
			.right {
				color: #999999;
				font-size: 15px;
				img {
							width: 6.5px;
         height: 11.5px;
					margin-left: 8px;
				}
				.inputNotsty {
					flex: 1;
					background: none;
					border: none;
					outline: none;
					text-align: right;
					margin-right: 10px;
				}
				.VerificationCode {
					width: 90px;
					height: 31px;
					border: 0.5px solid #FF8737;
					border-radius: 5px;
					color: #FF8737;
					line-height: 31px;
					text-align: center;
				}
			}
		}
	}
	/*登录按钮*/
	
	.submitMyIntrod {
		margin: 30px auto;
		background-color: #FF5773;
		flex: 1;
		width: 133px;
		height: 34px;
		line-height: 34px;
		color: white;
		text-align: center;
		font-size: 14px;
		border-radius: 5px;
		letter-spacing: 3px;
	}
</style>