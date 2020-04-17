<template>
	<!-- 头部导航 -->
	<div class="">
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"> </header-fixed-top>
	<div id="" class="paddIngTopTitle2"></div>
	<div class="userInfoInput">
			<div class="selfIntroduction">

				<div class="flex optionsType">
					<div id="" :class="introdType==1?'introdAction':'introdDefualt'" @click="introdType=1">自己写</div>
					<div id="" :class="introdType==2?'introdAction':'introdDefualt'" @click="introdType=2">帮你写</div>
				</div>
			</div>
			<div id="" v-show="introdType==1">
				<div class="introdTextarea">
					<textarea class="" v-model="inputintrod"></textarea>
				</div>

			</div>
			<div id="" v-show="introdType==2">
				<div class="user_com">
					<div class="left">我的性格特点是</div>
					<div class="right flex justify-center align-center">
						<input class="inputNotsty" :class="inputxg?'actionTitle':''" v-model="inputxg" placeholder="请输入" name="" id="" value="" />
					</div>
				</div>
				<div class="user_com">
					<div class="left">业余时间我喜欢</div>
					<div class="right flex justify-center align-center">
						<input class="inputNotsty" :class="inputwxh?'actionTitle':''" v-model="inputwxh" placeholder="请输入" name="" id="" value="" />
					</div>
				</div>
				<div class="user_com">
					<div class="left">我憧憬的生活是</div>
					<div class="right flex justify-center align-center">
						<input class="inputNotsty" :class="inputcjsh?'actionTitle':''" v-model="inputcjsh" placeholder="请输入" name="" id="" value="" />
					</div>
				</div>
				<div class="user_com">
					<div class="left">我希望我的爱人</div>
					<div class="right flex justify-center align-center">
						<input class="inputNotsty" :class="inputwdar?'actionTitle':''" v-model="inputwdar" placeholder="请输入" name="" id="" value="" />

					</div>
				</div>
				<div class="user_com">
					<div class="left">真心希望在这里遇到我的那个Ｔａ！</div>
					<!--<div class="right flex justify-center align-center">
						<input class="inputNotsty" :class="inputwdar?'actionTitle':''" v-model="inputwdar" placeholder="请输入" name="" id="" value="" />

					</div>-->
				</div>
				<div class="text-center">
					<div class="submitMyIntrod" @click="generateIntroduction">点击生成自我介绍</div>
				</div>

			</div>
			<div class="introdExplain">
				“自我介绍”是个人资料中最重要的一部分，建议您用心填写！您可以向对方介绍自己的个性特点、兴趣爱好、生活观念和择偶要求等。禁止留手机/微信/微博等联系方式，否则不会通过审核。
			</div>
		</div>
	</div>
</template>

<script>
	import HeaderFixedTop from '../../../components/HeaderTop/HeaderFixedTops'

	export default {
		data() {
			return {
				show: false,
				showBackIcon: "true",
				title: "自我介绍",
				rightTitle: '保存',
				introdType: 1,
				inputintrod: '',
				inputxg: '',
				inputwxh: '',
				inputcjsh: '',
				inputwdar: '',
			}
		},
		components: {
			HeaderFixedTop,
		},

		methods: {
			//生成自我介绍
			generateIntroduction() {
					this.introdType = 1;
					this.inputintrod = " 我的性格特点是" + this.inputxg + '。\n' + "业余时间我喜欢" + this.inputwxh + '。\n' + "我憧憬的生活是" + this.inputcjsh + '。\n' + "我希望我的爱人" + this.inputwdar + '。\n' + "真心希望在这里遇到我的那个Ｔａ！".replace(/\n/g, "<br/>")
				},
				basic_information() {
					this.$router.push('/basic_information')
			},
			goBack() {
				this.$router.go(-1);
			},
			goNavAdd() {
				console.log('xianhh')
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../styles/mycomstyle.css";
	* {
		padding: 0;
		margin: 0;
	}
	
	.actionTitle {
		color: #3A3A3A;
	}
	
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
			font-size: 15px;
			display: inline-block;
		}
		.contactInf {
			margin: 30px 20px;
			.xuanT {
				color: #BBBBBB;
				font-size: 15px;
			}
			.contact_tips {
				color: #FF7199;
				font-size: 13px;
				letter-spacing: 2px;
				margin-top: 10px;
			}
		}
		.selfIntroduction {
			font-weight: 600;
			margin: 5px 20px 8px 20px;
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
		.introdExplain {
			margin: 10px 20px;
			color: #AAAAAA;
			font-size: 12px;
		}
		.introdTextarea {
			margin: 0 20px;
			flex: 1;
			textarea {
				/*background: red;*/
				flex: 1;
				width: 90%;
				padding:5px  10px;
				margin: auto;
				display: block;
				background: none;
				border: none;
				outline: none;
				height: 120px;
				color: #848383;
				font-size: 13px;
				letter-spacing: 2px;
				line-height: 20px;
				background-color: white;
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
				font-size: 15px;
			}
			.right {
				color: #999999;
				font-size: 15px;
				img {
					width: 20px;
					height: 30px;
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
		.user_com:nth-child(5){
			border-bottom: none;
		}
			/*完善个人信息*/
	
	.submitMyIntrod {
		margin: 30px auto;
		padding: 0 20px;
		background-color: #FF5773;
		flex: 1;
		/*width: 133px;*/
		display: inline-block;
		box-sizing: content-box;
		height: 34px;
		line-height: 34px;
		color: white;
		text-align: center;
		font-size: 14px;
		border-radius: 5px;
		letter-spacing: 3px;
	}
	}
</style>