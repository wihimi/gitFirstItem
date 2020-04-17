<template>
	<!-- 头部导航 -->
	<div class="">
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"> </header-fixed-top>
		<div id="" class="paddIngTopTitle2"></div>
			<div class="userInfoInput">
				<div class="title_Tips">个人生活</div>

				<div class="user_com">
					<div class="left">父母情况</div>
					<div class="right flex justify-center align-center" @click="shows(1)">
						<div :class="myParentSituation?'actionTitle':''">{{userExtend.familyStatus|familyStatus}}</div>
						<img src="../../../images/youjiantou.png" />
					</div>
				</div>
				<div class="user_com">
					<div class="left">家中排行</div>
					<div class="right flex justify-center align-center" @click="shows(2)">
						<div :class="myFamilyRanking?'actionTitle':''">{{userExtend.rankingInHome|rankingInHome}}</div>
						<img src="../../../images/youjiantou.png" />
					</div>
				</div>
				<div class="user_com">
					<div class="left">生活作息</div>
					<div class="right flex justify-center align-center" @click="shows(3)">
						<div :class="myDailyLifeARest?'actionTitle':''">{{userExtend.dailyRoutine|dailyRoutine}}</div>
						<img src="../../../images/youjiantou.png" />
					</div>
				</div>
				<div class="user_com">
					<div class="left">是否吸烟</div>
					<div class="right flex justify-center align-center" @click="shows(4)">
						<div :class="myWhetherSomke?'actionTitle':''">{{userExtend.whetherSmoking|whetherSmoking}}</div>
						<img src="../../../images/youjiantou.png" />
					</div>
				</div>

				<div class="user_com">
					<div class="left">是否喝酒</div>
					<div class="right flex justify-center align-center" @click="shows(5)">
						<div :class="myWhetherDring?'actionTitle':''">{{userExtend.whetherDrink|whetherDrink}}</div>
						<img src="../../../images/youjiantou.png" />
					</div>
				</div>

				<div class="user_com">
					<div class="left">家务</div>
					<div class="right flex justify-center align-center" @click="shows(6)">
						<div :class="myDoHomework?'actionTitle':''">{{userExtend.householdDuties|householdDuties}}</div>
						<img src="../../../images/youjiantou.png" />
					</div>
				</div>
				<div class="user_com">
					<div class="left">厨艺</div>
					<div class="right flex justify-center align-center" @click="shows(7)">
						<div :class="myDoFood?'actionTitle':''">{{userExtend.cookingSkill|cookingSkill}}</div>
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
				title: "个人生活",
				rightTitle: '保存',
				show:false,
				Arr:[],
				index:"",
				myParentSituation:"",
				myFamilyRanking:"",
				myDailyLifeARest:"",
				myWhetherSomke:"",
				myWhetherDring:"",
				myDoHomework:"",
				myDoFood:"",
				showLoading:false,
				userExtend:'',
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
						var lists=resdata.data;
						if(resdata.code == 200) {
							this.userExtend=lists.userExtend;
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
        //var requestUrl = this.apiUrl + 'user/getMatchingUserList';
        //var data1={
        //	uid: this.$store.state.uid,
        //	sex:"1"
        //}
        var requestData = {
          uid: this.$store.state.uid, //this.myPhone,
        }
        this.myParentSituation ? requestData.familyStatus = this.userExtend.familyStatus : '';
   this.myFamilyRanking ? requestData.rankingInHome = this.userExtend.rankingInHome : '';

        this.myDailyLifeARest ? requestData.dailyRoutine = this.userExtend.dailyRoutine : '';
   this.myWhetherSomke ? requestData.whetherSmoking = this.userExtend.whetherSmoking: '';
           this.myWhetherDring ? requestData.whetherDrink = this.userExtend.whetherDrink : '';
   this.myDoHomework ? requestData.householdDuties = 	this.userExtend.householdDuties: '';
           this.myDoFood ? requestData.cookingSkill = this.userExtend.familyStatus : '';





// requestData.type=1;

console.log(requestData);
this.showLoading=true;

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
          this.showLoading=false;
          console.log(res);
          var resdata = res.data;
          if (resdata.code == 200) {
            this.$router.go(-1);
            this.$toast(resdata.msg);
            //							this.$store.commit('set_token', resdata.token);
            //							this.$store.commit('set_phone', resdata.phone);
          } else {
            this.$toast(resdata.msg)
          }

        })
          .catch((error) => {
            this.showLoading=false;
          })
			},
			shows(index){
				console.log(index)
				this.index=index
				this.show=true
				if(index==1){
					this.Arr=['父母健在','单亲家庭' , '父亲健在', '母亲健在', '父母均离世' ]
				}else if(index==2){
					this.Arr=['独生子女','老大','老二','老三' ,'老四 ','老五' ,'其他']
				}else if(index==3){
					this.Arr=['早睡早起',  '偶尔熬夜',  '经常熬夜',  '偶尔懒散' , '没有规律']
				}else if(index==4){
					this.Arr=['不吸，很反感'  ,'不吸烟，但不反感' ,'社交时偶尔吸烟'  ,'烟不离手']
				}else if(index==5){
					this.Arr=['不喝酒' , '社交需要喝'  , '兴致时小酌',  '酒不离口 ']
				}else if(index==6){
					this.Arr=['任劳任怨'  , '希望对方承担家务',   '一起分工合作 ' , '看各自闲忙，协商分担']
				}else if(index==7){
					this.Arr=['色香味俱全',  '能做几样可口的小菜' , '不太会，但愿为心爱的人学习']
				}

			},
			onConfirmArr(value,index){
				if(this.index==1){
					this.myParentSituation=value;
					this.userExtend.familyStatus=index+1;
				}else if(this.index==2){
					this.myFamilyRanking=value;
					this.userExtend.rankingInHome=index+1;
				}else if(this.index==3){
					this.myDailyLifeARest=value;
					this.userExtend.dailyRoutine=index+1;
				}else if(this.index==4){
					this.myWhetherSomke=value;
					this.userExtend.whetherSmoking=index+1;
				}else if(this.index==5){
					this.myWhetherDring=value;
					this.userExtend.whetherDrink=index+1;
				}else if(this.index==6){
					this.myDoHomework=value;
					this.userExtend.householdDuties=index+1;
				}else if(this.index==7){
					this.myDoFood=value;
					this.userExtend.cookingSkill=index+1;
				}
				this.show=false
				console.log(value)
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