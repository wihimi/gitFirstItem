<template>
	<!-- 头部导航 -->
	<div class="">
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"> </header-fixed-top>
		<div id="" class="paddIngTopTitle2"></div>
		<div class="title_com">兴趣爱好</div>
		<div class="title_com">
			<div class="labelsBox">
				<div @click="selectLabels(index,item.name)" class="label_single" :class="item.flagCheck?'label_single_action':''" v-for="(item,index) in labelList" :key="index">
					{{item.name}}
				</div>

			</div>
		</div>
		<div class="title_com">饮食习惯</div>
		<div class="title_com">
			<div class="labelsBox">
				<div @click="selectYSLabels(index,item.name)" class="label_single" :class="item.flagCheck?'label_single_action':''" v-for="(item,index) in yslabelList" :key="index">
					{{item.name}}
				</div>

			</div>
		</div>
		<div class="title_com">喜欢的音乐</div>
		<div class="title_com">
			<div class="labelsBox">
				<div @click="selectMusic(index,item.name)" class="label_single" :class="item.flagCheck?'label_single_action':''" v-for="(item,index) in musicList" :key="index">
					{{item.name}}
				</div>

			</div>
		</div>
		<div class="title_com">喜欢的运动</div>
		<div class="title_com">
			<div class="labelsBox">
				<div @click="selectYunDLabels(index,item.name)" class="label_single" :class="item.flagCheck?'label_single_action':''" v-for="(item,index) in yunDlabelList" :key="index">
					{{item.name}}
				</div>

			</div>
		</div>
		<div class="title_com">喜欢的电影</div>
		<div class="title_com">
			<div class="labelsBox">
				<div @click="selectDianYLabels(index,item.name)" class="label_single" :class="item.flagCheck?'label_single_action':''" v-for="(item,index) in dianYlabelList" :key="index">
					{{item.name}}
				</div>

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
				title: "生活方式",
				rightTitle: '保存',
				labelList: [{
					flagCheck: false,
					name: '星座'
				}, {
					flagCheck: false,
					name: '园艺'
				}, {
					flagCheck: false,
					name: '汽车'
				}, {
					flagCheck: false,
					name: '读书'
				}, {
					flagCheck: false,
					name: '家居装饰'
				}, {
					flagCheck: false,
					name: '网游/电竞'
				}, {
					flagCheck: false,
					name: '计算机/互联网'
				}, {
					flagCheck: false,
					name: '运动'
				}, {
					flagCheck: false,
					name: '收藏'
				}, {
					flagCheck: false,
					name: '听音乐'
				}, {
					flagCheck: false,
					name: '科学'
				}, {
					flagCheck: false,
					name: '电子产品'
				}, {
					flagCheck: false,
					name: '志愿者活动'
				}, {
					flagCheck: false,
					name: '乐器/唱歌'
				}, {
					flagCheck: false,
					name: '厨艺'
				}, {
					flagCheck: false,
					name: '购物'
				}, {
					flagCheck: false,
					name: '瑜伽'
				}, {
					flagCheck: false,
					name: '美食'
				}, {
					flagCheck: false,
					name: '炒股'
				}, {
					flagCheck: false,
					name: '时尚'
				}, {
					flagCheck: false,
					name: '看电影'
				}, {
					flagCheck: false,
					name: '美术'
				}, {
					flagCheck: false,
					name: '摄影'
				}, {
					flagCheck: false,
					name: '旅游'
				}, {
					flagCheck: false,
					name: '政治'
				}, {
					flagCheck: false,
					name: '彩票'
				}, {
					flagCheck: false,
					name: '品酒'
				}, {
					flagCheck: false,
					name: '跳舞'
				}, {
					flagCheck: false,
					name: '戏剧'
				}, {
					flagCheck: false,
					name: '茶艺'
				}, {
					flagCheck: false,
					name: '功夫'
				}, {
					flagCheck: false,
					name: '读报'
				}, {
					flagCheck: false,
					name: '喝咖啡'
				}],
				yslabelList: [{
					flagCheck: false,
					name: '清淡'
				}, {
					flagCheck: false,
					name: '微辣'
				}, {
					flagCheck: false,
					name: '麻辣'
				}, {
					flagCheck: false,
					name: '略咸'
				}, {
					flagCheck: false,
					name: '越辣越好'
				}, {
					flagCheck: false,
					name: '滋补食品'
				}, {
					flagCheck: false,
					name: '健康食品'
				}, {
					flagCheck: false,
					name: '甜'
				}, {
					flagCheck: false,
					name: '酸'
				}, {
					flagCheck: false,
					name: '西餐'
				}, {
					flagCheck: false,
					name: '中餐'
				}, {
					flagCheck: false,
					name: '素食'
				}, {
					flagCheck: false,
					name: '日韩餐'
				}, {
					flagCheck: false,
					name: '零食'
				}],
				yunDlabelList: [{
					flagCheck: false,
					name: '冰球'
				}, {
					flagCheck: false,
					name: '冲浪'
				}, {
					flagCheck: false,
					name: '桌球'
				}, {
					flagCheck: false,
					name: '骑马'
				}, {
					flagCheck: false,
					name: '网球'
				}, {
					flagCheck: false,
					name: '划船'
				}, {
					flagCheck: false,
					name: '打猎'
				}, {
					flagCheck: false,
					name: '排球'
				}, {
					flagCheck: false,
					name: '保龄球'
				}, {
					flagCheck: false,
					name: '山地车'
				}, {
					flagCheck: false,
					name: '野营'
				}, {
					flagCheck: false,
					name: '滚轴'
				}, {
					flagCheck: false,
					name: '举重'
				}, {
					flagCheck: false,
					name: '划艇'
				}, {
					flagCheck: false,
					name: '滑冰'
				}],
				dianYlabelList: [{
					flagCheck: false,
					name: '爱情'
				}, {
					flagCheck: false,
					name: '悬疑'
				}, {
					flagCheck: false,
					name: '卡通'
				}, {
					flagCheck: false,
					name: '纪录'
				}, {
					flagCheck: false,
					name: '音乐歌舞'
				}, {
					flagCheck: false,
					name: '武打动作'
				}, {
					flagCheck: false,
					name: '独立电影'
				}, {
					flagCheck: false,
					name: '喜剧'
				}, {
					flagCheck: false,
					name: '科幻'
				}, {
					flagCheck: false,
					name: '警匪'
				}],
				myLabelList: [],
				myYSLabelList: [],
				myYunDLabelList: [],
				myDianYLabelList: [],
				musicList: [{
						flagCheck: false,
						name: '轻音乐'
					}, {
						flagCheck: false,
						name: '另类'
					}, {
						flagCheck: false,
						name: '电音'
					}, {
						flagCheck: false,
						name: '蓝调'
					}, {
						flagCheck: false,
						name: '国语流行'
					}, {
						flagCheck: false,
						name: '节奏布鲁斯'
					}, {
						flagCheck: false,
						name: '电影原声'
					}, {
						flagCheck: false,
						name: '民谣'
					}, {
						flagCheck: false,
						name: '说唱'
					}, {
						flagCheck: false,
						name: '硬摇滚'
					}, {
						flagCheck: false,
						name: '雷鬼'
					}, {
						flagCheck: false,
						name: '港台流行'
					}, {
						flagCheck: false,
						name: '宗教音乐'
					}, {
						flagCheck: false,
						name: '日韩流行'
					}, {
						flagCheck: false,
						name: '古典'
					}, {
						flagCheck: false,
						name: '重金属'
					}, {
						flagCheck: false,
						name: '摇滚'
					}, {
						flagCheck: false,
						name: '乡村'
					}, {
						flagCheck: false,
						name: '歌剧'
					},
					{
						flagCheck: false,
						name: '软摇滚'
					}, {
						flagCheck: false,
						name: '舞曲'
					}, {
						flagCheck: false,
						name: '爵士乐'
					}, {
						flagCheck: false,
						name: '拉丁'
					},
					{
						flagCheck: false,
						name: '欧美流行'
					},
				],
				myMusicList: [],
			}
		},
		components: {
			HeaderFixedTop,
		},

		methods: {
			//喜欢的电影
			selectDianYLabels(index, name) {
				this.dianYlabelList[index].flagCheck = !this.dianYlabelList[index].flagCheck
				var nameIndex = this.myDianYLabelList.indexOf(name);
				if(nameIndex > -1) {
					this.myDianYLabelList.splice(nameIndex, 1);
				} else {
					this.myDianYLabelList.push(name)
				}
			},

			//我喜欢的运动
			selectYunDLabels(index, name) {
				this.yunDlabelList[index].flagCheck = !this.yunDlabelList[index].flagCheck
				var nameIndex = this.myYunDLabelList.indexOf(name);
				if(nameIndex > -1) {
					this.myYunDLabelList.splice(nameIndex, 1);
				} else {
					this.myYunDLabelList.push(name)
				}
			},

			//选择兴趣爱好
			selectLabels(index, name) {
				this.labelList[index].flagCheck = !this.labelList[index].flagCheck
				var nameIndex = this.myLabelList.indexOf(name);
				if(nameIndex > -1) {
					this.myLabelList.splice(nameIndex, 1);
				} else {
					this.myLabelList.push(name)
				}
			},
			//选择饮食习惯
			selectYSLabels(index, name) {
				this.yslabelList[index].flagCheck = !this.yslabelList[index].flagCheck
				var nameIndex = this.myYSLabelList.indexOf(name);
				if(nameIndex > -1) {
					this.myYSLabelList.splice(nameIndex, 1);
				} else {
					this.myYSLabelList.push(name)
				}

			},
			//选择音乐
			selectMusic(index, name) {
				this.musicList[index].flagCheck = !this.musicList[index].flagCheck
				var nameIndex = this.myMusicList.indexOf(name);
				if(nameIndex > -1) {
					this.myMusicList.splice(nameIndex, 1);
				} else {
					this.myMusicList.push(name)
				}

			},
			basic_information() {
				this.$router.push('/basic_information')
			},
			goBack() {
				this.$router.go(-1);
			},
			goNavAdd() {
				//    this.$router.go(-1);
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
	
	.title_com {
		margin: 15px 20px 10px 20px;
			font-size: 15px;
		.labelsBox {
			width: 100%;
			flex: 1;
			display: flex;
			flex-wrap: wrap;
			.label_single {
				padding: 7px 10px;
				background-color: #E1E1E1;
				border-radius: 4px;
				font-size: 14px;
				margin: 3px;
				
				/*width: 38px;*/
				min-width: 52px;
				max-width: 160px;
				white-space: nowrap;
				overflow: hidden;
				/*min-width: 42px;
				max-width: 102px;*/
				text-align: center;
				color: #767676;
			}
			.label_single_action {
				background-color: #FB7BA0;
				color: white;
			}
		}
	}
</style>