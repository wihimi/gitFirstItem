<template>
	<div id="page">
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title"></header-fixed-top>
		<div class="paddIngTopTitle"></div>
		<div class="userInfoInput">
			<div class="user_com">
				<div class="left">我的昵称</div>
				<div class="right flex justify-center align-center">
					<input class="inputNotsty" :class="myNikeName?'actionTitle':''" v-model="myNikeName" type="" placeholder="请输入昵称" name="" id="" value="" />
				</div>
			</div>

			<span class="titleTips" id="">
				昵称不雅，无意义或者电话、QQ、微信的，将会被删除
			</span>

			<div class="user_com">
				<div class="left">我的身高</div>
				<div class="right flex justify-center align-center" @click="selectHeight">
					<div :class="myHeight?'actionTitle':''">{{myHeight?myHeight:'请选择'}}</div>
					<img src="../../images/jiantou3@3x.png" />
				</div>
			</div>
			<div class="user_com">
				<div class="left">我的体重</div>
				<div class="right flex justify-center align-center" @click="selectWeight">
					<div :class="myWeight?'actionTitle':''">{{myWeight?myWeight:'请选择'}}</div>
					<img src="../../images/jiantou3@3x.png" />
				</div>
			</div>
			<div class="user_com">
				<div class="left">我的血型</div>
				<div class="right flex justify-center align-center" @click="selectBlood">
					<div :class="mybloodType?'actionTitle':''">{{mybloodType?mybloodType:'请选择'}}</div>
					<img src="../../images/jiantou3@3x.png" />
				</div>
			</div>
			<div class="user_com">
				<div class="left">教育程度</div>
				<div class="right flex justify-center align-center" @click="selectEduction">
					<div :class="myEducation?'actionTitle':''">{{myEducation?myEducation:'请选择'}}</div>
					<img src="../../images/jiantou3@3x.png" />
				</div>
			</div>

			<div class="user_com">
				<div class="left">我的月薪</div>
				<div class="right flex justify-center align-center" @click="selectYxin">
					<div :class="yueXMoney?'actionTitle':''">{{yueXMoney?yueXMoney:'请选择'}}</div>
					<img src="../../images/jiantou3@3x.png" />
				</div>
			</div>

			<div class="user_com">
				<div class="left">我的手机</div>
				<div class="right flex justify-center align-center">
					<input class="inputNotsty" maxlength="11" :class="myPhone?'actionTitle':''" v-model="myPhone" type="" placeholder="请输入手机号" name="" id="" value="" />

				</div>
			</div>

			<div class="user_com">
				<div class="left">验证码</div>
				<div class="right flex justify-center align-center">
					<div v-if="show" class="VerificationCode" @click="getCode">
						获取短信
					</div>
					<!--<input  v-if="!show" class="inputNotsty" :placeholder="count+'s后重新发送'" v-model="sendCode" />-->
					<div v-if="!show" class="VerificationCode">{{count}} s</div>
				</div>
			</div>
			<div class="user_com">
				<div class="left">验证码</div>
				<div class="right flex justify-center align-center">
					<input class="inputNotsty" maxlength="6" :class="sendCode?'actionTitle':''" placeholder="请输验证码" v-model="sendCode" />
				</div>
			</div>

			<div class="user_com">
				<div class="left">输入密码</div>
				<div class="right flex justify-center align-center">
					<input class="inputNotsty" :class="passWord1?'actionTitle':''" v-model="passWord1" type="" placeholder="请输入密码" name="" id="" />
				</div>
			</div>
			<div class="user_com">
				<div class="left">确认密码</div>
				<div class="right flex justify-center align-center">
					<input class="inputNotsty" :class="passWord2?'actionTitle':''" v-model="passWord2" type="" placeholder="请再次输入密码" name="" id="" />
				</div>
			</div>
			<div class="agreeClause">
				<div class="agreeBox" :class="flagAgree?'agreeBox_Action':''" @click="flagAgree=!flagAgree">
				</div>
				<!--				<img v-if="flagAgree" @click="flagAgree=false" src="../../images/register/checked.png" />-->
				<!--				<img v-if="!flagAgree" @click="flagAgree=true" src="../../images/register/noChecked.png" />-->
				<div class="">
					同意
					<span class="clauseOne" @click="registration">一线姻缘注册条款</span>和<span class="clauseOne" @click="membership">一线姻缘会员标准</span></div>
			</div>
		</div>

		<div class="loginBtn" @click="btnSubmit">激活账号</div>
		<!--月薪-->
		<van-popup v-model="showYxin" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="actionsYxin" @cancel="cancelCheckYxin" @confirm="onConfirmCheckYxin" />
		</van-popup>
		<!--教育-->
		<van-popup v-model="showEducation" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="educationArr" @cancel="cancelCheckEducation" @confirm="onConfirmCheckEducation" />
		</van-popup>
		<!--血型-->
		<van-popup v-model="showBlood" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="bloodTypeArr" @cancel="cancelChecBlood" @confirm="onConfirmCheckBlood" />
		</van-popup>
		<!--身高-->
		<van-popup v-model="showMyHeight" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="myHeightArr" @cancel="showMyHeight=false" @confirm="onConfirmMyHeight" />
		</van-popup>
		<!--体重-->
		<van-popup v-model="showMyWeight" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="myWeightArr" @cancel="showMyWeight=false" @confirm="onConfirmMyWeight" />
		</van-popup>
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
	export default {
		name: "FreeRegister",
		components: {
			HeaderFixedTop,

		},

		data() {
			return {
				showLoading: false,
				show: true,
				count: '',
				timer: null,
				showBackIcon: 'false',
				title: '激活账号',
				myNikeName: '',
				passWord1: '',
				passWord2: '',
				myPhone: '',
				flagAgree: false,
				showYxin: false,
				actionsYxin: ['保密', '6000元以下', '6000-12000元', '12000-20000元', '20000元以上'],
				yueXMoney: '',
				showBlood: false,
				bloodTypeArr: ['O型', 'A型', 'B型', 'AB型', '其他', '不清楚'],
				mybloodType: '',
				showEducation: false,
				educationArr: ['无', '初中', '中专/职校/技校', '高中', '大专', '本科', '双学士', '硕士', '博士', '博士后'],
				myEducation: '',
				sendCode: '',
				uid: '',
				showMyHeight: false,
				myHeightArr: [],
				myHeight: '',
				showMyWeight: false,
				myWeightArr: [],
				myWeight: ''
			}
		},
		mounted() {

		},
		created(option) {
			if(this.$store.state.list) {
				var temp = JSON.parse(this.$store.state.list);
				this.myNikeName = temp.username;
				this.myHeight = temp.height;
				this.myWeight = temp.weight;
				this.mybloodType = temp.bloodType;
				this.myEducation = temp.educationalStatus;
				this.yueXMoney = temp.monthlyPay;
				this.myPhone = temp.phone;
				this.sendCode = temp.code;
				this.passWord1 = temp.password;
				this.passWord2 = temp.cPassword;
				this.flagAgree = temp.flagAgree
				console.log(this.passWord2);

			}
			console.log(this.$route.query.uid);
			this.uid = this.$route.query.uid;

		},
		methods: {
			//体重范围
			getWeightRange() {
				var span = 5;
				var tempItem = '';
				var temp = [];
				for(var i = 40; i < 100; i += span) {
					tempItem = i;
					temp.push(tempItem);
				}
				this.myWeightArr = temp
			},
			//年龄范围
			getAgesRange() {
				var span = 10;
				var tempItem = '';
				var temp = [];
				for(var i = 5; i < 80; i += span) {
					tempItem = i + '—' + (i + span);
					temp.push(tempItem);
				}
				this.otherAgeArr = temp;
			},
			//身高范围
			getHeightRange() {

				var span = 10;
				var tempItem = '';
				var temp = [];
				for(var i = 140; i < 260; i += span) {
					tempItem = i;
					temp.push(tempItem);
				}
				this.myHeightArr = temp;

			},

			//选择教育
			selectEduction() {
				this.showEducation = true;
			},

			cancelCheckEducation() {
				this.showEducation = false;
			},
			onConfirmCheckEducation(e) {
				this.myEducation = e;
				this.showEducation = false;
			},
			//选择血型
			selectBlood() {
				this.showBlood = true;
			},
			cancelChecBlood() {
				this.showBlood = false;
			},
			onConfirmCheckBlood(e) {
				this.mybloodType = e;
				this.showBlood = false;
			},
			//身高
			selectHeight() {
				this.showMyHeight = true;
				this.getHeightRange();
			},
			onConfirmMyHeight(e) {
				this.myHeight = e;
				this.showMyHeight = false;
			},
			//体重
			selectWeight() {
				this.showMyWeight = true;
				this.getWeightRange();
			},
			onConfirmMyWeight(e) {
				this.myWeight = e;
				this.showMyWeight = false;
			},
			//选择月薪
			selectYxin() {
				this.showYxin = true
			},
			cancelCheckYxin() {
				this.showYxin = false;
			},
			onConfirmCheckYxin(e) {
				this.yueXMoney = e;
				this.showYxin = false;
			},
			registration() {
				this.$router.push({
					path: '/registration_terms'
				})
						var requestDataTemp = {
								//					email: '',
								uid: this.uid, //this.myPhone,
								username: this.myNikeName,
								height: this.myHeight,
								weight: this.myWeight,
								bloodType: this.mybloodType,
								educationalStatus: this.myEducation,
								monthlyPay: this.yueXMoney,
								phone: this.myPhone,
								password: this.passWord1,
								cPassword: this.passWord2,
								code: this.sendCode,
								flagAgree: this.flagAgree

							};
							this.$store.commit('set_list', JSON.stringify(requestDataTemp));

			},
			membership() {
				this.$router.push({
					path: '/vip'
				})
					var requestDataTemp = {
								//					email: '',
								uid: this.uid, //this.myPhone,
								username: this.myNikeName,
								height: this.myHeight,
								weight: this.myWeight,
								bloodType: this.mybloodType,
								educationalStatus: this.myEducation,
								monthlyPay: this.yueXMoney,
								phone: this.myPhone,
								password: this.passWord1,
								cPassword: this.passWord2,
								code: this.sendCode,
								flagAgree: this.flagAgree

							};
							this.$store.commit('set_list', JSON.stringify(requestDataTemp));

			},
			getCode() {
				//				if(!(/^1[3456789]\d{9}$/.test(this.myPhone))) {
				//					this.$toast('电话号码不正确，请重新输入');
				//					return;
				//				}
				const TIME_COUNT = 60;
				if(!this.timer) {
					this.count = TIME_COUNT;
					this.show = false;
					this.timer = setInterval(() => {
						if(this.count > 0 && this.count <= TIME_COUNT) {
							this.count--;
						} else {
							this.show = true;
							clearInterval(this.timer);
							this.timer = null;
						}
					}, 1000)
				}
				var requestUrl = this.apiUrl + '/user/sendPhoneCode';
				var requestData = {
					//					email: '',
					phone: this.myPhone,
					type: 1,

				};
				this.showLoading = true;
				axios.post(requestUrl,
						qs.stringify(requestData), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded'
							}
						},
					).then((res) => {
						var resdata = res.data;
						if(resdata.code == 200) {
							console.log(res)
							this.$toast(resdata.msg)
						} else {
							this.$toast(resdata.msg)
						}
						this.showLoading = false;
					})
					.catch((error) => {
						this.showLoading = false
					})
			},
			goBack() {
				this.$router.go(-1);
			},
			//激活账号
			btnSubmit() {
				var requestDataTemp = {
								//					email: '',
								uid: this.uid, //this.myPhone,
								username: this.myNikeName,
								height: this.myHeight,
								weight: this.myWeight,
								bloodType: this.mybloodType,
								educationalStatus: this.myEducation,
								monthlyPay: this.yueXMoney,
								phone: this.myPhone,
								password: this.passWord1,
								cPassword: this.passWord2,
								code: this.sendCode,
								flagAgree: this.flagAgree

							};
							this.$store.commit('set_list', JSON.stringify(requestDataTemp));
//				  delItem(id) {
// this.$store.dispatch('del_item',id)
//}

				if(this.myNikeName.length == 0) {
					this.$toast('请输入您的昵称');
					return;
				}
				if(this.myHeight.length == 0) {
					this.$toast('请选择您的身高');
					return;
				}
				if(this.myWeight.length == 0) {
					this.$toast('请选择您的体重');
					return;
				}
				if(this.mybloodType.length == 0) {
					this.$toast('请选择您的血型');
					return;
				}
				if(this.myEducation.length == 0) {
					this.$toast('请选择您的教育');
					return;
				}
				if(this.yueXMoney.length == 0) {
					this.$toast('请选择您的月薪');
					return;
				}
				//				if(!(/^1[3456789]\d{9}$/.test(this.myPhone))) {
				//					this.$toast('请输入您的手机号码');
				//					return;
				//				}
				if(this.sendCode.length == 0) {
					this.$toast('请输入验证码');
					return;
				}
				if(this.passWord1.length == 0) {
					this.$toast('密码不能为空');
					return;
				}
				if(this.passWord2.length == 0) {
					this.$toast('确认密码不能为空');
					return;
				}
				if(this.passWord1 != this.passWord2) {
					this.$toast('两次密码不一致');
					return;
				}
				if(!this.flagAgree) {
					this.$toast('您还没有同意条款哦');
					return;
				}
				var requestUrl = this.apiUrl + 'user/newActivateAccount';
				var requestData = {
					//					email: '',
					uid: this.uid, //this.myPhone,
					username: this.myNikeName,
					height: this.myHeight,
					weight: this.myWeight,
					bloodType: this.bloodTypeArr.indexOf(this.mybloodType) + 1,
					educationalStatus: this.educationArr.indexOf(this.myEducation),
					monthlyPay: this.actionsYxin.indexOf(this.yueXMoney) + 1,
					phone: this.myPhone,
					password: this.passWord1,
					cPassword: this.passWord2,
					code: this.sendCode,

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
							this.$toast(res.data.msg)
							localStorage.setItem('uid', res.data.data.uid)
							localStorage.setItem('token', res.data.data.token)
							localStorage.setItem('phone', res.data.data.phone)
							this.$router.push('/perfectInfo')
						
						} else {
							this.$toast(res.data.msg)
						}
						this.showLoading = false;
					
					})
					.catch((error) => {
						this.showLoading = false
					})
			},

		}

	}
</script>
<!--<styly src="../../styles/mycomstyle.css" scoped> </styly>-->
<style scoped lang="scss">
	@import "../../styles/mycomstyle.css";
	* {
		padding: 0;
		margin: 0;
	}
	
	.actionTitle {
		color: #3A3A3A;
	}
	/*表格样式*/
	
	.userInfoInput {
		width: 100%;
		.agreeClause {
			display: flex;
			align-items: center;
			font-size: 14px;
			margin: 10px 20px;
			.agreeBox {
				width: 15px;
				height: 15px;
				border-radius: 3px;
				border: 2px solid #BBBBBB;
				margin-right: 5px;
			}
			.agreeBox_Action {
				border: 2px solid #FF8737;
				background: url("../../images/register/icon-test.png") no-repeat 0 0;
				background-size: 15px 15px;
				background-position: center;
			}
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
		.titleTips {
			/*温馨提醒*/
			margin: 10px 20px;
			font-size: 13px;
			color: #AAAAAA;
			display: inline-block;
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
	
	.loginBtn {
		margin: 30px 20px 40px 20px;
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
</style>