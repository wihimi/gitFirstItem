<template>
	<div id="page">
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title"></header-fixed-top>
		<div class="paddIngTopTitle2"> </div>

		<div class="headerBox ">
			<img class="headerIMg" src="../../images/register/zhuce03.png" />
		</div>

		<div class="userInfoInput">
			<div class="user_com">
				<div class="left">我的性别</div>
				<div class="right flex justify-center align-center" @click="checkSexClick">
					<div :class="sexName?'actionTitle':''" id="">{{sexName?sexName:'请选择'}}</div>
					<img src="../../images/jiantou3@3x.png" />
				</div>
			</div>

			<div class="user_com">
				<div class="left">出生年月</div>
				<div class="right flex justify-center align-center" @click="checkBirdyClick">
					<div :class="birthDay?'actionTitle':''">{{birthDay?birthDay:'请选择'}}</div>
					<img src="../../images/jiantou3@3x.png" />
				</div>
			</div>
			<div class="user_com">
				<div class="left">工作地区</div>
				<div class="right flex justify-center align-center" @click="checkWorkArea">
					<div :class="workArea?'actionTitle':''">{{workArea?workArea:'请选择'}}</div>
					<img src="../../images/jiantou3@3x.png" />
				</div>
			</div>
			<div class="user_com">
				<div class="left">婚姻状况</div>
				<div class="right flex justify-center align-center" @click="shoumarryStaty=true">
					<div :class="marryName?'actionTitle':''">{{marryName?marryName:'请选择'}}</div>
					<img src="../../images/jiantou3@3x.png" />
				</div>
			</div>

		</div>

		<div class="loginBtn" @click="btnRegister">免费注册</div>
		<!--选择性别-->
		<!--<van-action-sheet v-model="showSexCheck" :actions="actions" @select="sexItemCheck" cancel-text="取消" @cancel="onCancelSsex" />-->

		<van-popup v-model="showSexCheck" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="actions" @cancel="cancelCheckSex" @confirm="onConfirmCheckSex" />
		</van-popup>
		<!--选择年月-->
		<van-popup v-model="showDate" position="bottom" :style="{ height: '45%' }">
			<van-datetime-picker v-model="currentDate" type="date" @cancel='cancelBirthDay' @confirm='comfirmBirthDay' :minDate="minDate" currentDate="currentDate" />
		</van-popup>
		<!--选择地址-->
		<van-popup v-model="showAddre" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="columns" @cancel="onCancelCheckArea" @confirm="onConfirmCheckArea" />
		</van-popup>
		<!--是否已婚-->
		<!--<van-action-sheet v-model="shoumarryStaty" :actions="actionsMarrys" @select="marryStute" cancel-text="取消" @cancel="shoumarryStaty=false" />-->
		<van-popup v-model="shoumarryStaty" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="actionsMarrys" @cancel="cancelCheckMerry" @confirm="onConfirmCheckMerry" />
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

	Vue.use(Loading);
	export default {
		name: "FreeRegister",
		components: {
			HeaderFixedTop,

		},

		data() {
			return {
				showLoading: false,
				showBackIcon: 'false',
				title: '免费注册',
				showSexCheck: false,
				actions: ['男', '女'],
				actionsMarrys: ['未婚', '离异', '丧偶'],
				sexName: '',
				showDate: false,
				minDate: new Date(1900, 1, 1),
				currentDate: new Date(),
				birthDay: '',
				showAddre: false,
				columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
				confirmText: '确认',
				cancelText: '取消',
				workArea: '',
				shoumarryStaty: false,
				marryName: ''

			}
		},
		mounted() {
			this.getHuji();
		},
		created() {
			if(this.$store.state.register){
				console.log('aaaaaaaaaa')
						var temp=JSON.parse(this.$store.state.register);
											console.log(temp)
						this.sexName=temp.sex;
						this.birthDay=temp.birthday;
						this.workArea=temp.placeOfWork;
						
						this.marryName=temp.maritalStatus;
						console.log(temp.marryName);
						console.log(this.marryName);
//						this.birthDay=temp.birthDay;
			}
			else{
					console.log('bbbbbbbbbbb')
			}
//			console.log(this.$store.state.register);
//			var temp=JSON.parse(this.$store.state.register);
//			console.log(temp.birthday)
//			
			

		},
		methods: {
			getHuji() {
				var requestUrl = this.apiUrl + 'user/getAreaList';
				var requestData = {
					pid: 0,
					//					arid: 1
				};
				axios.post(requestUrl,
						qs.stringify(requestData), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded',
								'token': 'jBRsp64qnxvm+TXlEJZMQZ6+ezZaRCAX22lBSyOZPpQ='
							}
						},
					).then(res => {
						var tempArea = res.data.data;
						var tempArr = [];
						for(var i = 0; i < tempArea.length; i++) {
							tempArr.push(tempArea[i].areaName)

						}
						this.columns = tempArr

					})
					.catch((error) => {})

				//this.$router.push('/activationAccout')
			},
			//提交注册
			btnRegister() {
				
				if(this.sexName.length == 0) {
					this.$toast('请选择性别');
					return
				}
				if(this.birthDay.length == 0) {
					this.$toast('请选择出生年月');
					return
				}

				if(this.workArea.length == 0) {
					this.$toast('请选择工作地区');
					return
				}

				if(this.marryName.length == 0) {
					this.$toast('请选择婚姻状态');
					return
				}

				var requestUrl = this.apiUrl + 'user/newRegister';
				var requestData = {
					birthday: this.birthDay, //this.birthDay,
					maritalStatus: this.actionsMarrys.indexOf(this.marryName) + 1,
					placeOfWork: this.workArea,
					registerSource: 1,
					sex: this.actions.indexOf(this.sexName),

				};
					var requestDataLocal = {
					birthday: this.birthDay, //this.birthDay,
					maritalStatus: this.marryName,
					placeOfWork: this.workArea,
					registerSource: 1,
					sex: this.sexName,

				};
				this.$store.commit('set_rigister',JSON.stringify(requestDataLocal) );    
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
							//							 this.$router.push('/activationAccout')
							console.log(this.$route.query.uid);
							this.$router.push({
								path: '/activationAccout',
								query: {
									uid: res.data.data
								}
							});
							this.$store.commit('set_uid', res.data.data);
						}
						this.showLoading = false
					})
					.catch((error) => {
						this.showLoading = false
					})

				//this.$router.push('/activationAccout')
			},
			goBack() {
				this.$router.go(-1);
			},
			toOneClickLogin() {
				this.$router.push('/OneClickLogin')
			},
			cancelCheckSex() {
				this.showSexCheck = false
			},
			//关闭选择性别的列表
			onCancelSsex() {
				this.showSexCheck = false;
			},
			//打开选择性别的列表
			checkSexClick() {
				this.showSexCheck = true;
			},
			//选择性别男或是女
			sexItemCheck(e) {
				this.sexName = e.name;
				this.showSexCheck = false;

			},

			//打开选择生日的弹框
			checkBirdyClick() {
				this.showDate = true;
			},

			//选择生日
			comfirmBirthDay(value) {
				const d = new Date(value)
				console.log(d);
				const resDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + (d.getDate())　;
				console.log(resDate);
				this.birthDay = resDate;
				this.showDate = false;
			},
			//取消选择出生日期
			cancelBirthDay() {
				this.showDate = false;
			},
			//选择地址
			onConfirmCheckArea(e) {
				this.workArea = e;
				this.showAddre = false;
			},
			//取消选择的地址
			onCancelCheckArea() {
				this.showAddre = false;
			},
			//去选择地址
			checkWorkArea() {
				this.showAddre = true;
			},
			//选择婚否

			onConfirmCheckMerry(e, index) {
				this.marryName = e;
				this.shoumarryStaty = false;

			},
			cancelCheckMerry() {
				this.shoumarryStaty = false
			},
			onConfirmCheckSex(e) {
				this.sexName = e;
				this.showSexCheck = false;
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

	.actionTitle {
		color: #3A3A3A;
	}

	.headerBox {
		width: 100%;
		.headerIMg {
			display: block;
			width: 75px;
			height: 75px;
			border-radius: 50%;
			overflow: hidden;
			margin: 60px auto 40px auto;
		}
	}
	/*表格样式*/

	.userInfoInput {
		width: 100%;
		.user_com {
			margin: 0 20px;
			border-bottom: 0.5px solid #D2D2D2;
			height: 50px;
			line-height: 50px;
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
			}
		}
	}
	/*登录按钮*/

	.loginBtn {
		margin: 60px 20px 40px 20px;
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
