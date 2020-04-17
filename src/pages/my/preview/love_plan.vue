<template>
	<!-- 头部导航 -->
	<div class="">
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"> </header-fixed-top>
		<div id="" class="paddIngTopTitle2"></div>
		<div class="userInfoInput">
			<div class="user_com">
				<div class="left">想何时结婚</div>
				<div class="right flex justify-center align-center" @click="shows(1)">
					<div :class="myTimeMerry?'actionTitle':''">{{userExtend.marry|marry}}</div>
					<img src="../../../images/youjiantou.png" />
				</div>
			</div>
			<div class="user_com">
				<div class="left">是否愿与父母同住</div>
				<div class="right flex justify-center align-center" @click="shows(2)">
					<div :class="myLiveWithParent?'actionTitle':''">{{userExtend.liveWithParents|liveWithParents}}</div>
					<img src="../../../images/youjiantou.png" />
				</div>
			</div>
			<div class="user_com">
				<div class="left">是否想要小孩</div>
				<div class="right flex justify-center align-center" @click="shows(3)">
					<div :class="myHaveChildren?'actionTitle':''">{{userExtend.wantChildren|wantChildren}}</div>
					<img src="../../../images/youjiantou.png" />
				</div>
			</div>
			<div class="user_com">
				<div class="left">你想要怎样的约会</div>
				<div class="right flex justify-center align-center" @click="shows(4)">
					<div class="titleDefault" :class="myWhatAppiontment?'actionTitle':''">{{userExtend.appointment|appointment}}</div>
					<img src="../../../images/youjiantou.png" />
				</div>
			</div>

			<div class="user_com">
				<div class="left">期待怎样的婚礼</div>
				<div class="right flex justify-center align-center" @click="shows(5)">
					<div :class="myWhatMerry?'actionTitle':''">{{userExtend.wedding|wedding}}</div>
					<img src="../../../images/youjiantou.png" />
				</div>
			</div>

			<div class="user_com">
				<div class="left">你需要另一半看重</div>
				<div class="right flex justify-center align-center" @click="shows(6)">
					<div :class="myWhatHalfNeed?'actionTitle':''">{{userExtend.appreciate|appreciate}}</div>
					<img src="../../../images/youjiantou.png" />
				</div>
			</div>

		</div>
		<!--公共弹出框-->
		<van-popup v-model="show" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="Arr" @cancel="show=false" @confirm="onConfirmArr" />
		</van-popup>
		<div class="loading" v-show="showLoading">
			<van-loading class="vanLoading" type="spinner" size="24px"></van-loading>
		</div>
	</div>
</template>

<script>
	import HeaderFixedTop from '../../../components/HeaderTop/HeaderFixedTops'
 import axios from 'axios'
   import qs from 'qs'
	export default {
		data() {
			return {
				show: false,
				showBackIcon: "true",
				title: "爱情规划",
				rightTitle: '保存',
				myWhatHalfNeed: "",
				myWhatMerry: "",
				myWhatAppiontment: "",
				myHaveChildren: "",
				myLiveWithParent: "",
				myTimeMerry: "",
				index: "",
				Arr: [],
				showLoading: false,
				userExtend: ''
			}
		},
		components: {
			HeaderFixedTop,
		},
		created() {
			this.getUserInfo();
			//			this.$route.query.userInfo;
			//		console.log(this.$route.query.userInfo)
		},
		methods: {
			getUserInfo() {
				var requestUrl = this.apiUrl + 'user/getUserDetail';
				var requestData = {
					ruid: localStorage.getItem('uid'),
					type: 2
				};
				axios.post(requestUrl,
						qs.stringify(requestData), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded'
							}
						},
					).then((res) => {
						var resdata = res.data;
						var lists = resdata.data;
						if(resdata.code == 200) {
							this.userExtend = lists.userExtend;
							console.log(this.userExtend);
							//							this.username = lists.username;
							////		uid
						}
					})
					.catch((error) => {})
			},

			basic_information() {
				this.$router.push('/basic_information')
			},
			goBack() {
				this.$router.go(-1);
			},
			goNavAdd() {
				var requestUrl = this.apiUrl + 'user/editUserInfo';
				var requestData = {
					uid: this.$store.state.uid, //this.myPhone,
				}
				this.myTimeMerry ? requestData.marry = this.userExtend.marry : '';
				this.myLiveWithParent ? requestData.liveWithParents = this.userExtend.liveWithParents : '';

				this.myHaveChildren ? requestData.wantChildren = this.userExtend.wantChildren : '';
				this.myWhatAppiontment ? requestData.appointment = this.userExtend.appointment : '';
				this.myWhatMerry ? requestData.wedding = this.userExtend.wedding : '';
				this.myWhatHalfNeed ? requestData.appreciate = this.userExtend.appreciate : '';

				console.log(requestData);
				this.showLoading = true;

				//return;
				var token = localStorage.getItem('token');
				axios.post(requestUrl,
						qs.stringify(requestData), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded',
								'token': token
							}
						},
					).then((res) => {
						this.showLoading = false;
						console.log(res);
						var resdata = res.data;
						if(resdata.code == 200) {
							this.$router.go(-1);
							this.$toast(resdata.msg);
							//							this.$store.commit('set_token', resdata.token);
							//							this.$store.commit('set_phone', resdata.phone);
						} else {
							this.$toast(resdata.msg)
						}

					})
					.catch((error) => {
						this.showLoading = false;
					})
			},

			shows(index) {
				this.index = index
				this.show = true
				if(index == 1) {
					this.Arr = ['及时闪婚', '一年以内', '两年以内', '三年以内', '时机成熟时就结婚']
				} else if(index == 2) {
					this.Arr = ['愿意', '不愿意', '视具体情况而定']
				} else if(index == 3) {
					this.Arr = ['想', '不想', '还没想好', '视情况而定']
				} else if(index == 4) {
					this.Arr = ['一起打游戏或者一起看电影', '一起做饭', '共赴浪漫之旅', '牵手漫步在公园', '彼此相依相偎']
				} else if(index == 5) {
					this.Arr = ['顶级酒店，高朋满座', '户外婚礼，温馨浪漫', '旅游结婚，不大操大办', '中式婚礼，宴请宾客', '简单就好，无所谓']
				} else if(index == 6) {
					this.Arr = ['容貌身材', '性格，心灵', '经济实力', '教育程度']
				}
			},
			onConfirmArr(value, index) {
				if(this.index == 1) {
					this.myTimeMerry = value;
					this.userExtend.marry = index + 1
				} else if(this.index == 2) {
					this.myLiveWithParent = value;
					this.userExtend.liveWithParents = index + 1
				} else if(this.index == 3) {
					this.myHaveChildren = value;
					this.userExtend.wantChildren = index + 1
				} else if(this.index == 4) {
					this.myWhatAppiontment = value;
					this.userExtend.appointment = index + 1
				} else if(this.index == 5) {
					this.myWhatMerry = value;
					this.userExtend.wedding = index + 1
				} else if(this.index == 6) {
					this.myWhatHalfNeed = value;
					this.userExtend.appreciate = index + 1
				}
				this.show = false
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
		height: 40px;
		overflow: hidden;
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
		.introdExplain {
			margin: 0 20px;
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
				padding: 10px;
				margin: auto;
				display: block;
				background: none;
				border: none;
				outline: none;
				height: 120px;
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
				height: 40px;
				overflow: hidden;
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
			.titleDefault{
				height: 40px;
				overflow: hidden;
			}
		}
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
</style>