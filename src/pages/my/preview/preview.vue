<template>
	<div class="preview">
		<!--头部背景图片-->
		<div id="" class="header_picture" >
			<img class="imageB1" :src="(userInfo.headPortrait?userInfo.headPortrait:imge)" />
			<div class="btnBox  flex justify-space-between">
				<img src="../../../assets/icon_zuola@3x.png" alt class="houtui" @click="goBack" />
				<img src="../../../assets/12@3x.png" alt class="qianjin" @click="goNavAdd" />
			</div>
		</div>
		<div class="headerBox flex">
			<!--照片-->
			<img :src="(userInfo.headPortrait?userInfo.headPortrait:imge)" alt class="photo" />
			<div class="userBox">
				<div id="" class="flex align-items-center">
					<!--昵称-->
					<span class="nickname">{{userInfo.username}}</span>
					<!--是否是会员-->
					<div id="" class="iconsize">
						<img v-show="userInfo.whetherVip==0" src="../../../images/my/vip@3xv.png" class="vip" />
						<img v-show="userInfo.whetherVip==1" src="../../../assets/vip@3x.png" class="vip" />
						<img v-show="userInfo.whetherAutonym==0" src="../../../../static/img/shiming2.png" class="shiming" />
						<img v-show="userInfo.whetherAutonym==1" src="../../../assets/shiming@2x.png" class="shiming" />

					</div>
				</div>
				<div id="" class="peason">
						{{userInfo.age}}岁 <span>|</span> {{userInfo.height}}厘米 <span>|</span>	{{userInfo.educationalStatus|educationalStatusFilters}}
				</div>
			</div>
		</div>

		<!--	<div class="headerBox">-->
		<!--照片-->
		<!--<img src="../../../assets/zp_byz@3x.png" alt class="photo" />-->
		<!--昵称-->
		<!--<div class="nickname">{{userInfo.username}}</div>-->
		<!--	</div>-->
		<!--<img v-show="userInfo.whetherAutonym==0" src="../../../../static/img/shiming2.png" class="shiming" />
		<img v-show="userInfo.whetherAutonym==1" src="../../../assets/shiming@2x.png" class="shiming" />
		<img v-show="userInfo.whetherVip==0" src="../../../images/my/vip@3xv.png" class="vip" />
		<img v-show="userInfo.whetherVip==1" src="../../../assets/vip@3x.png" class="vip" />-->
		<!--个人信息-->
		<!--<div class="peason">
			{{userInfo.educationalStatus|educationalStatusFilters}}
		</div>-->
		<!--靓照展示-->
		<div class="liangzhao">
			<img src="../../../../static/img/tx_wodetouxiang@2x.png" />
			<img src="../../../../static/img/tx_wodetouxiang@2x.png" />
			<img src="../../../../static/img/tx_wodetouxiang@2x.png" />
			<img src="../../../../static/img/tx_wodetouxiang@2x.png" />
			<img src="../../../../static/img/tx_wodetouxiang@2x.png" />
		</div>
		<!--自我介绍-->
		<div class="introduce">
			<div class="ziwojieshao">
				<b>自我介绍</b>
			</div>
			<div class="jieshao">
				{{userInfo.selfIntroduction}}
			</div>
		</div>
		<!---->
		<div id="lianxi">
			<div class="method">联系方式</div>
			<div class="detail_method">
				<div class="detail_1">QQ:</div>
				<div class="detail_2">
					{{userInfo.qq?userInfo.qq:'暂无数据'}}
				</div>
			</div>
			<div class="detail_method">
				<div class="detail_1">微信：</div>
				<div class="detail_2">
					{{userInfo.wechat?userInfo.wechat:'暂无数据'}}
				</div>
			</div>
			<div class="detail_method">
				<div class="detail_1">邮箱：</div>
				<div class="detail_2">
					{{userInfo.email?userInfo.email:'暂无数据'}}
				</div>
			</div>
			<div class="detail_foot">在权限设置中可选择对联系方式公开或隐藏</div>
		</div>
		<!--个人资料-->
		<div class="pearson">
			<div class="method">个人资料</div>

			<div class="ID">
				<div class="ID_detail1">ID:</div>
				<div class="ID_detail2">{{userInfo.uid}}</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">性别：</div>
				<div class="ID_detail2">{{Number(userInfo.sex)|sex}}</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">工作地区:</div>
				<div class="ID_detail2">{{userInfo.placeOfWork}}</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">年龄:</div>
				<div class="ID_detail2">{{userInfo.age}} 岁</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">身高:</div>
				<div class="ID_detail2">{{userInfo.height}} 厘米</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">体重:</div>
				<div class="ID_detail2">{{userInfo.weight}}公斤</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">血型:</div>
				<div class="ID_detail2">{{userInfo.bloodType|bloodTypeFilter}}</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">生肖:</div>
				<div class="ID_detail2">{{userInfo.zodiac}}</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">学历:</div>
				<div class="ID_detail2">{{userInfo.educationalStatus|educationalStatusFilters}}</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">所在行业:</div>
				<div class="ID_detail2">{{userInfo.vocationalType|industryFilter}}</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">职业:</div>
				<div class="ID_detail2">
					{{userInfo.vocationalType|vocationalTypeFilter}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">民族:</div>
				<div class="ID_detail2">
				{{userInfo.nation|nationFilter}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">月薪:</div>
				<div class="ID_detail2">
					{{userInfo.userBase?Number(userInfo.userBase.monthlyPay):'无'|monthpay}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">住房:</div>
				<div class="ID_detail2">
					{{userInfo.userBase?userInfo.userBase.housingConditions:'无'|housing}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">购车:</div>
				<div class="ID_detail2">
					{{userInfo.userBase?userInfo.userBase.whetherBuyCars:'无'|car}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">宗教:</div>
				<div class="ID_detail2">
					{{userInfo.userBase?Number(userInfo.userBase.religion):'无'|religion}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">征婚状态:</div>
				<div class="ID_detail2">
					{{Number(userInfo.loveStatus)|loveStatus}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">婚姻状况:</div>
				<div class="ID_detail2">
					{{userInfo.maritalStatus|maritalStatusFilter}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">有无子女:</div>
				<div class="ID_detail2">
					{{userInfo.userBase?userInfo.userBase.withoutChildren:'无'|withoutChildren}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">户口地区:</div>
				<div class="ID_detail2">
					{{userInfo.userBase?userInfo.userBase.censusRegister:'无'}}
				</div>
			</div>
		</div>
		<!--择偶要求-->
		<div class="spouse">
			<div class="method">择偶要求</div>
			<div class="ID">
				<div class="ID_detail1">年龄:</div>
				<div class="ID_detail2">
					{{userInfo.userBase?userInfo.userBase.ages:'无'}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">身高:</div>
				<div class="ID_detail2">
					{{userInfo.userBase?userInfo.userBase.rheight:'无'}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">学历:</div>
				<div class="ID_detail2">
					{{userInfo.userBase?userInfo.userBase.reducationalStatus:'无'|educationalStatusFilters}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">婚姻状况:</div>
				<div class="ID_detail2">
					{{userInfo.userBase?userInfo.userBase.rmaritalStatus:'无'|maritalStatusFilter}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">工作地区:</div>
				<div class="ID_detail2">
					{{userInfo.userBase?userInfo.userBase.area:'无'}}
				</div>
			</div>
		</div>
		<!--个人生活-->
		<div class="spouse" >
			<div class="method">个人生活</div>
			<div class="ID">
				<div class="ID_detail1">父母情况:</div>
				<div class="ID_detail2">
					{{userInfo.userExtend?Number(userInfo.userExtend.familyStatus):'无'|familyStatus}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">家中排行:</div>
				<div class="ID_detail2">
					{{userInfo.userExtend?Number(userInfo.userExtend.rankingInHome):'无'|rankingInHome}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">生活作息:</div>
				<div class="ID_detail2">
					{{userInfo.userExtend?userInfo.userExtend.dailyRoutine:'无'|dailyRoutine}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">是否吸烟:</div>
				<div class="ID_detail2">
					{{userInfo.userExtend?userInfo.userExtend.whetherSmoking:'无'|whetherSmoking}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">是否喝酒:</div>
				<div class="ID_detail2">
					{{userInfo.userExtend?userInfo.userExtend.whetherDrink:'无'|whetherDrink}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">家务:</div>
				<div class="ID_detail2">
					{{userInfo.userExtend?userInfo.userExtend.householdDuties:'无'|householdDuties}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">厨艺:</div>
				<div class="ID_detail2">
					{{userInfo.userExtend?userInfo.userExtend.cookingSkill:'无'|cookingSkill}}
				</div>
			</div>
		</div>
		<!--爱情规划-->
		<div class="spouse" >
			<div class="method">爱情规划</div>
			<div class="ID">
				<div class="ID_detail1">想何时结婚:</div>
				<div class="ID_detail2">
					{{userInfo.userExtend?userInfo.userExtend.marry:'无'|marry}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">是否愿与父母同住:</div>
				<div class="ID_detail2">
					{{userInfo.userExtend?Number(userInfo.userExtend.liveWithParents):'无'|liveWithParents}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">是否想要小孩:</div>
				<div class="ID_detail2">
					{{userInfo.userExtend?userInfo.userExtend.wantChildren:'无'|wantChildren}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">你喜欢怎样的约会:</div>
				<div class="ID_detail2">
					{{userInfo.userExtend?userInfo.userExtend.appointment:'无'|appointment}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">期待怎样的婚礼:</div>
				<div class="ID_detail2">
					{{userInfo.userExtend?userInfo.userExtend.wedding:'无'|wedding}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">你需要另一半看中:</div>
				<div class="ID_detail2">
				<!--	{{userInfo.userExtend?userInfo.userEmonthlyPayxtend.appreciate:'无'|appreciate}}-->
				</div>
			</div>
		</div>
		<!--生活方式-->
		<div class="spouse" >
			<div class="method">生活方式</div>
			<div class="ID">
				<div class="ID_detail1">兴趣爱好:</div>
				<div class="ID_detail2">
					{{userInfo.userExtend?userInfo.userExtend.hobbiesAndInterests:'无'}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">饮食习惯:</div>
				<div class="ID_detail2">
					{{userInfo.userExtend?userInfo.userExtend.dietaryHabit:'无'}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">喜欢的音乐:</div>
				<div class="ID_detail2">
					{{userInfo.userExtend?userInfo.userExtend.music:'无'}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">喜欢的运动:</div>
				<div class="ID_detail2">
					{{userInfo.userExtend?userInfo.userExtend.sport:'无'}}
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">喜欢的电影:</div>
				<div class="ID_detail2">
					{{userInfo.userExtend?userInfo.userExtend.movie:'无'}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import qs from 'qs'
	import personal from '@/components/search/components/personal'
	export default {
		name: 'Preview',
		data() {
			return {
				userInfo: new Object,
				imge:require('../../../../static/img/noVipHead.png')
			}
		},
		components:{
			personal
		},
		mounted() {},
		created() {
			this.getUserInfo();
		},
//		点击跳转到修改页面
		methods: {
			goNavAdd() {
			 this.$router.push({
			 path:	'/modify_data',
			 query:{
			 	userInfo:JSON.stringify(this.userInfo)
			 	}
			 })
			},
			goBack() {
				this.$router.go(-1);
			},
			//获取用户信息
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
						if(resdata.code == 200) {
//							if(resdata.data.headPortrait){
//								resdata.data.headPortrait=this.resourcesApi+resdata.data.headPortrait
//							}
                              resdata.data.nation=Number(resdata.data.nation)
							this.userInfo = resdata.data;
							console.log(this.userInfo)
						}
					})
					.catch((error) => {})
			},

		}
	}
</script>

<style scoped="scoped" lang="scss">
	@import "../../../styles/mycomstyle.css";
	.header_picture {
		height: 110px;
		width: 100%;
		background-color: rgba(71,63,58,0.5);
		z-index: -7px;
position: relative;
		.imageB1 {
			width: 100%;
			height: 110px;
			filter: blur(2px);
			z-index: -111;
      position: absolute;
		}
		.btnBox {
			position: absolute;
			top: 20px;
			left: 26.5px;
			right: 26.5px;
			.houtui {
				width: 10px;
				height: 18px;
			}
			.qianjin {
				width: 19.5px;
				height: 19.5px;
			}
		}
	}

	.headerBox {
		position: absolute;
		left: 26.5px;
		right: 26.5px;
		margin-top: -50px;
		height: 300px;
		z-index: 12!important;
		box-sizing: border-box;
		.photo {
			width: 80.5px;
			height: 80.5px;
			margin-right: 12px;
			border-radius: 4px;

		}
		.userBox {
			width: 200px;
			height: 100px;
			font-size: 15.5px;
			color: white;
			overflow: hidden;
			.nickname {
				height: 20px;
				overflow: hidden;
				max-width: 120px;
			}
			.iconsize {
				margin-top: 5px;
				.vip {
					margin-left: 5px;
					width: 27.5px;
					height: 16.5px;
				}
				.shiming {
					width: 27.5px;
					height: 16.5px;
				}
			}
			.peason {
				/*width: 130px;*/
				height: 20px;
				font-size: 13.5px;
				letter-spacing: 1px;
				overflow: hidden;
				span{
					margin: 4px 0;
					/*height: 5px;*/
					display: inline-block;
					color: #f0f0f0;
				}
			}
		}
	}

	.liangzhao {
		margin-top: 46px;
		display: flex;
		overflow: hidden;
		margin-left: 20px;
		img {
			width: 58px;
			height: 58px;
			margin-left: 7.5px;
			border-radius: 3px;
		}
	}

	.introduce {
		background: #fff;
		/*	height: 145px;*/
		width: 94.67%;
		margin: 0 auto;
		margin-top: 12px;
		border-radius: 4px;
		padding-bottom: 10px;
		.ziwojieshao {
			width: 88%;
			border-bottom: 0.5px solid #eaeaea;
			margin: 0 auto;
			height: 40px;
			line-height: 40px;
			color: #313131;
			font-size: 15px;
			padding-left: 5px;
		}
		.jieshao {
			padding: 5px 20px 0 20px;
			letter-spacing: 2px;
			line-height: 20px;
			color: #848383;
		}
	}

	#lianxi {
		width: 94.67%;
		height: 189.5px;
		background: #fff;
		margin: 10px auto 0;
		border-radius: 4px;
		/*position: relative;*/
	}

	.method {
		height: 40px;
		border-bottom: 0.5px solid #eaeaea;
		width: 88%;
		margin: 0 auto;
		padding-left: 5.5px;
		padding-top: 10.5px;
		box-sizing: border-box;
		font-size: 14.5px;
		color: #313131;
		font-weight: bold;
		letter-spacing: 1px;
	}

	.detail_method {
		width: 88%;
		margin: 15.5px auto 0;
		display: flex;
		justify-content: space-between;
	}

	.detail_1 {
		margin-left: 6px;
		font-size: 14px;
		color: #2e2e2e;
	}

	.detail_2 {
		margin-right: 30px;
		font-size: 14px;
		color: #8e8e8e;
		width: 140.5px;
	}

	.detail_foot {
		/*	width: 77.6%;*/
		margin: 18.5px 20px 0;
		font-size: 14px;
		color: #a0a0a0;
	}

	.pearson {
		width: 94.67%;
		height: 655.5px;
		background: #fff;
		margin: 12.5px auto 0;
		border-radius: 4px;
	}

	.ID {
		display: flex;
		width: 88%;
		height: 30px;
		margin: 0 auto;
		justify-content: space-between;
	}

	.ID_detail1 {
		margin: 15px 0 0 6.5px;
		font-size: 14px;
		color: #2e2e2e;
	}

	.ID_detail2 {
		margin: 15px 37.5px 0 0;
		color: #8e8e8e;
		font-size: 14px;
		width: 125.5px;
	}

	.spouse {
		width: 94.67%;
		background: #fff;
		margin: 12.5px auto 0;
		border-radius: 4px;
		padding-bottom: 15px;
	}
	.padding_bottom10{
		padding-bottom: 10px;
	}
	/*头部*/
</style>
