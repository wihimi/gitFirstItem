<template>
	<div class="page">
		<div class="top_Back_nav">
			<div class="top_Back_left" @click="goBack">
				<img src="../../../images/fanhui.png" />
			</div>
			<div class="top_Back_center">
				<div class="top_Back_item" v-for="(item,index) in navItemList" :key="index">
					<div class="defualtTitle" @click="clickNav(index)">
						<span id="" :class="index==currentIndex?'navActive':''">
						{{item}}
					</span></div>
				</div>
			</div>
			<div class="top_Back_right"></div>
		</div>
		<div id="" class="paddIngTopTitle2">

		</div>
		<div class="" v-show="currentIndex==0">
			<div class="current1_box">
				<img class="imgBox" src="../../../images/my/icon_lianaila.png" />
				<div class="flex justify-space-between box_com">
					<div id="" class="title"> 幸福状态 </div>
					<div id="" class="flex align-center " @click="fortureStetus=true">
						<div :class="myFortureStetusT?'':''">{{myFortureStetusT?myFortureStetusT:'请选择'}}</div>
						<img class="ml6" src="../../../images/youjiantou.png" />
					</div>
				</div>
				<div class="flex justify-space-between box_com">
					<div id="" class="title">空间名称</div>
					<div id="" class="flex align-center ">
						<input class="inputNotsty title2 text-right" type="" placeholder="春田菜菜花的恩爱空间" name="" id="" value="" />
						<img class="ml6" src="../../../images/youjiantou.png" />
					</div>
				</div>
				<div class="fixed" id="">
					<div class="fixeds">
						修改
					</div>
					<!--<img class="btnClick" src="../../../images/my/btn_xiugai.png" />-->
				</div>
			</div>

		</div>
		<div class="" v-show="currentIndex==1">
			<div class="current1_box mt10">
				<div class="flex  box_com">
					<div class="defualtSty" :class="selectTypr==1?'actionType':''" @click="selectTypr=1">自己写 </div>
					<div class="defualtSty" :class="selectTypr==2?'actionType':''" @click="selectTypr=2">帮你写</div>
				</div>
				<div class="" v-show="selectTypr==1">
					<div class="zijixie_pannel">
						<div class="zijixie_biaoti">
							<input placeholder="输入故事标题" class="inputNotsty inputTitle wd100" v-model="inputTitle" />
						</div>
						<div class="zijixie_biaoti zijixie_neirong">
							<textarea class="inputNotsty wd100 " placeholder="输入正文内容" v-model="zjxContent"></textarea>
							<div class="text-right limitTitle">{{zjxContentCountMax}}</div>
						</div>
						<div class="fixed">
							<div class="fixeds" style=" letter-spacing:3px;">
								上传成功故事
							</div>
						</div>
						<!--<img class="zijixie_btn" src="../../../images/my/btn_sccggs.png" />-->
					</div>

				</div>
				<div class="" v-show="selectTypr==2">
					<div class="box_com"><input type="" class="inputNotsty " placeholder="春田花花菜的成功故事"  id="" v-model="inputTitle" /> </div>
					<div class="box_com1">
						<div> 我于2018年 6月1日注册一线姻缘，我是:</div>
						<div class="huiyuan_box1 flex">
							<div class="defualt_com" :class="vipType==1?'action_sty':''" @click="vipType=1">
								VIP会员
							</div>
							<div class="defualt_com" :class="vipType==2?'action_sty':''" @click="vipType=2">
								普通会员
							</div>
						</div>
						<div> 对方是：</div>
						<div class="huiyuan_box1 flex">
							<div class="defualt_com" :class="vipTypeOther==1?'action_sty':''" @click="vipTypeOther=1">
								VIP会员
							</div>
							<div class="defualt_com" :class="vipTypeOther==2?'action_sty':''" @click="vipTypeOther=2">
								普通会员
							</div>
						</div>
						<div> 我们认识时间大概是：</div>
						<div class="flex mt10 justify-space-between"  @click="checkBirdyClick">
							<div class="defualtSty" :class="birthDay?'actionTitle':''">{{birthDay?birthDay:'请选择时间（年/月）'}}</div>
							<img src="../../../images/youjiantou.png" />
							<!--<input class="inputNotsty" type="" placeholder="请选择时间（年/月）" name="" id="" value="" />
							<img src="../../../images/youjiantou.png" />-->
						</div>
						<div class="mt10"> 我们认识（/月）：</div>
						<div class="flex mt10 justify-space-between">
							<input class="inputNotsty" type="number" placeholder="请输入时间（多少月）" v-model="toMateTime"/>
							<!--<img src="../../../images/youjiantou.png" />-->
						</div>
						<div class="mt10"> 后相爱了!</div>
						<div class="mt10"> 我们的成功经验是（多选）</div>
						<div class="defualt_com2" @click="selectOfsuseed(index,item.name)" :class="item.flagCheck?'action_sty1':''" v-for="(item,index) in experienceLisy" :key="index">{{item.name}}</div>
						<div class="mt10"> 补充</div>
						<div class="inputBox"> <input type="" class="inputNotsty" placeholder="请输入补充文字" v-model="supplement"/></div>
						<div class="mt10"> 最后,感谢一线姻缘，祝福大家！</div>
						<div class="btncomfirm" @click="toComeHisty">点击生成成功故事</div>
					</div>
				</div>

			</div>

		</div>
		<div class="" v-show="currentIndex==2">
			
		<!--图片展示-->
		<div class="tupian">
			<div class="img">
				<img v-for="item in arr" :src="item.src" alt="" />
				<img src="../../../assets/dianjitianjia@3x.png" class="tianjia" @click="dianji" />
			</div>
		</div>
		
			<!--点击显示与隐藏模态框-->
			
		<div v-show="state">
			<!--模态框-->
			<div class="mubu" v-show="state" @click="quxiao">

			</div>
			<div class="zhaopian" v-show="state">
				<div class="shenhe">
					以下照片不会通过审核
				</div>
				<div class="zpfangzhi">
					<div class="zpleixing" v-for="item in list">
						<img :src="item.src" alt="" />
						<div class="zpmiaoshu">非头部</div>
					</div>
				</div>
				<div class="paizhao" @click="paizhao">
					拍照
				</div>
				<div class="bendi" @click="bendi">
					本地相册
				</div>
			</div>
			<div class="quxiao" v-show="state" @click="quxiao">
				取消
			</div>
		</div>
		
		</div>
			<!--选择年月-->
		<van-popup v-model="showDate" position="bottom" :style="{ height: '45%' }">
			<van-datetime-picker v-model="currentDate" type="date" @cancel='cancelBirthDay' @confirm='comfirmBirthDay' :minDate="minDate" currentDate="currentDate" />
		</van-popup>
			<van-popup v-model="fortureStetus" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="myFortureStetus" @cancel="fortureStetus=false" @confirm="onConfirmMyFortureStetus" />
		</van-popup>
		<!--底部渐变-->
<!--<div class="fixedBottom"></div>-->
	</div>
</template>

<script>
	export default {
		name: "MyPost",
		data() {
			return {
				arr: [{
						src: require('../../../assets/wdxc_zp1@3x.png')
					},
					{
						src: require('../../../assets/wdxc_zp2@3x.png')
					},
					{
						src: require('../../../assets/wdxc_zp3@3x.png')
					},
					{
						src: require('../../../assets/wdxc_zp4@3x.png')
					},
					{
						src: require('../../../assets/wdxc_zp5@3x.png')
					},
					{
						src: require('../../../assets/wdxc_zp6@3x.png')
					},
					{
						src: require('../../../assets/wdxc_zp7@3x.png')
					},
					{
						src: require('../../../assets/wdxc_zp8@3x.png')
					},
					{
						src: require('../../../assets/wdxc_zp9@3x.png')
					},
				],
				list: [{
						src: require('../../../assets/wdxc_zp1@3x.png')
					},
					{
						src: require('../../../assets/wdxc_zp2@3x.png')
					},
					{
						src: require('../../../assets/wdxc_zp3@3x.png')
					},
					{
						src: require('../../../assets/wdxc_zp4@3x.png')
					},
					{
						src: require('../../../assets/wdxc_zp5@3x.png')
					},
					{
						src: require('../../../assets/wdxc_zp6@3x.png')
					},
				],
				state: false,
				navItemList: ['恩爱空间', '成功故事', '恩爱照片'],
				currentIndex: 0,
				selectTypr: 1,
				vipType: 1,
				vipTypeOther: 1,
				experienceLisy: [{
					flagCheck: false,
					name: '心态、努力、坚持很重要'
				}, {
					flagCheck: false,
					name: '升级VIP对找对象帮助很大'
				}, {
					flagCheck: false,
					name: '要多在线、多登陆、多发信、勤回信'
				}, {
					flagCheck: false,
					name: '认真发好每一封信、认真对待每一封来信'
				}, {
					flagCheck: false,
					name: '学习防骗常识、学会分辨骗子、找准目标'
				}, {
					flagCheck: false,
					name: '面对现实、理性择偶、循序渐进、讲究方法'
				}],

				myExperienceLisy: [],
				zjxContent: '',
				zjxContentCount: 150,
				inputTitle:'',
				showDate: false,
				minDate: new Date(1900, 1, 1),
				currentDate: new Date(),
				birthDay: '',
				toMateTime:'',
				supplement:'',
				aa:'',
				fortureStetus:false,
				myFortureStetus:['恋爱啦','结婚啦'],
				myFortureStetusT:''
			}

		},
				mounted() {
			// 扩展API加载完毕后调用onPlusReady回调函数
			document.addEventListener("plusready", onPlusReady, false);
			// 扩展API加载完毕，现在可以正常调用扩展API
			function onPlusReady() {
				console.log("plusready");
			}
		},
		methods: {
						quxiao() {
				this.state = false
			},
			fanhui() {
				this.$router.go(-1);
			},
			myphoto() {
				this.currentSort = 1
			},
			Prettypictures() {
				this.currentSort = 2
			},
			paizhao() {
				var cmr = plus.camera.getCamera();
				var res = cmr.supportedImageResolutions[0];
				var fmt = cmr.supportedImageFormats[0];
				console.log("Resolution: " + res + ", Format: " + fmt);
				cmr.captureImage(function(path) {
						alert("Capture image success: " + path);
					},
					function(error) {
						alert("Capture image failed: " + error.message);
					}, {
						resolution: res,
						format: fmt
					}
				);

			},
			bendi() {
				//     		console.log('相册')
			},
			dianji() {
				this.state = !this.state
				console.log(111)
			},
			//生成故事
			toComeHisty(){
				this.selectTypr=1;
				var  tempVipType= this.vipType==1?"VIp会员":"普通会员",
				tempVipTypeOther=this.vipTypeOther==1?"VIp会员":"普通会员";

				var tempconTant="我于2019年6月1日注册一线姻缘。我是:"+tempVipType+'，对方是：'
				+tempVipTypeOther+'我们认识时间大概是'+this.birthDay+',我们认识'+this.toMateTime+'个月'+'后相爱了,'+'我们的成功经验是'+
				this.myExperienceLisy.join(',')+'补充'+this.supplement+'。最后感谢一线姻缘，祝福大家！';
				this.zjxContent=tempconTant;
			},
				//打开选择生日的弹框
			checkBirdyClick() {
				this.showDate = true;
			},
			onConfirmMyFortureStetus(e) {
				this.myFortureStetusT = e;
				this.fortureStetus = false;
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
			//返回上一页面
			goBack() {
				this.$router.go(-1);
			},
			clickNav(index) {
				this.currentIndex = index;
			},
			//选择成功秘诀
			selectOfsuseed(index, name) {
				this.experienceLisy[index].flagCheck = !this.experienceLisy[index].flagCheck
				var nameIndex = this.myExperienceLisy.indexOf(name);
				if(nameIndex > -1) {
					this.myExperienceLisy.splice(nameIndex, 1);
				} else {
					this.myExperienceLisy.push(name)
				}
			},
		},
		watch: {

			zjxContent() {
				if(this.zjxContent.length > this.zjxContentCount) {
					this.zjxContent = String(this.zjxContent).slice(0, this.zjxContentCount);
				}
			}
		},

		computed: {
			//显示是否选择的分类
			zjxContentCountMax() {
				var nowLength = 0;
				if(this.zjxContent.length) {
					nowLength = this.zjxContentCount - this.zjxContent.length
				}
				return this.zjxContent.length ? nowLength : this.zjxContentCount
			},

		}

	}
</script>


<style scoped lang="scss">
	@import "../../../styles/mycomstyle.css";
	.page{
		pointer-events: auto;
	}
	.inputNotsty {
		background: none;
		border: none;
		outline: none;
	}
	.defualtSty{
		color: #C1C0C0;
	}
		.actionTitle {
		color: #3A3A3A;
	}
	.top_Back_nav {
		width: 100%;
		height: 44px;
		line-height: 44px;
		background-color: #FFFFFF;
		display: flex;
		position: fixed;
		left: 0;
		top: 0;
		.top_Back_left {
			box-sizing: border-box;
			width: 45px;
			line-height: 30px;
			img {
				margin-left: 27px;
				/*width: 30px;
			height: 30px;*/
				/*margin-top: 14px;*/
			}
		}
		.top_Back_center {
			display: flex;
			align-content: center;
			flex: 1;
			justify-content: space-around;
			text-align: center;
			font-size: 14px;
			color: #949494;
			padding: 0 5px;
			.top_Back_item {
				display: inline;
				flex: 1;
				.defualtTitle {
					display: inherit;
				}
			}
			.navActive {
				color: #F54663;
				padding-bottom: 12px;
				border-bottom: 1px solid #F54663;
			}
		}
		.top_Back_right {
			width: 45px;
		}
	}

	.current1_box {
		/*margin-top: 75px;*/
			font-size: 15px;
		.imgBox {
			display: block;
			margin: 42px auto 75px auto;
		}
		.box_com {
			margin: 0 28px 10px 28px;
			padding: 10px 0;
			border-bottom: 0.5px solid #D2D2D2;
			input{
				width: 100%;
			}
			.title {
				color: #3A3A3A;
				font-size: 15px;
			}
			.title2 {
				color: #2E2E2E;
				font-size: 15px;
			}
			.defualtSty {
				text-align: center;
				width: 60px;
				color: #949494;
				font-size: 14px;
			}
			.actionType {
				color: #F54663;
				margin-bottom: -10px;
				border-bottom: 1px solid #F54663;
			}
		}
		.box_com1 {
			font-size: 14px;
			margin: 0 28px 10px 28px;
			.huiyuan_box1 {}
			.defualt_com {
				width: 102px;
				height: 29px;
				margin: 10px 10px 10px 0;
				line-height: 29px;
				background-color: #E1E1E1;
				border-radius: 4px;
				color: #3A3A3A;
				font-size: 14px;
				text-align: center;
			}
			.action_sty {
				color: #FFFFFF;
				background-color: #FB7BA0;
			}
			.defualt_com2 {
				display: inline-block;
				padding: 0 20px;
				height: 29px;
				margin: 8px 10px 0px 0;
				line-height: 29px;
				background-color: #E1E1E1;
				border-radius: 4px;
				color: #3A3A3A;
				font-size: 14px;
			}
			.action_sty1 {
				color: #FFFFFF;
				background-color: #FB7BA0;
			}
			.inputBox {
				/*margin: 0 28px 10px 28px;*/
				padding: 10px 0;
				border-bottom: 0.5px solid #D2D2D2;
			}
			.btncomfirm {
				width: 132px;
				height: 33px;
				border-radius: 4px;
				line-height: 33px;
				font-size: 14px;
				text-align: center;
				color: #FFFFFF;
				background-color: #FF5773;
				display: block;
				margin: 30px auto;
			}
		}
	}

	.mt10 {
		margin-top: 10px;
	}

	.ml6 {
		margin-left: 6px;
	}

	.zijixie_pannel {
		padding: 0px 15px;
		font-size: 15.5px;
		.zijixie_biaoti {
			width: 100%;
			margin-top: 10px;
			box-sizing: border-box;
			background-color: #FFFFFF;
			border: 0.5px solid #D9D9D9;
			padding: 10px;
		}
		.zijixie_neirong {
			height: 309px;
			textarea {
				height: 90%;
			}
			.limitTitle {
				font-size: 13.97px;
				color: #7F7F7F;
			}
		}
		.zijixie_btn {
			display: block;
			margin: 78px auto 0 auto;
		}
	}

	.fixed {
		position: fixed;
		bottom: 30px;
		left: 5%;
		/*width: 100%;*/
	}
		.fixeds{
		width: 320px;
		height:55px;
		line-height: 55px;
		text-align: center;
		background-color: #FF8737;
		border-radius:5px;
		color: #FFFFFF;
		font-size: 18px;
		 letter-spacing:10px;
	}

	.btnClick {
		display: block;
		margin: auto;
	}
	/*登录按钮*/

	.loginBtn {
		margin: 0px 20px 30px 20px;
		background-color: #FF8737;
		flex: 1;
		height: 55px;
		line-height: 55px;
		color: white;
		text-align: center;
		font-size: 18px;
		border-radius: 5px;
		box-shadow: 0 0 4px 2px #FF8737;
		letter-spacing: 3px;
	}
		.fixedBottom{
			pointer-events: none;
		  position: fixed;
  width: 100%;
  height: 50px;
  line-height: 50px;
  left: 0;
  right: 0;
  bottom: 0;
background:linear-gradient(to top,rgba(255,255,255,0.8),rgba(255,255,255,0)); ;
	}
	
	
	.header {
		margin-left: 27px;
		margin-top: 14px;
		img {
			width: 9px;
			height: 16.5px;
		}
	}
	
	.active {
		border-bottom: 2.5px solid #F54663;
	}
	
	.xiangce {
		font-size: 14px;
		color: #F54663;
		width: 56px;
		/*top: 12.5px;*/
		margin-left: 67px;
		height: 44px;
		line-height: 44px;
		/*padding-bottom: 15px;
	padding-top: 0;*/
	}
	
	.liangzhao {
		font-size: 14px;
		color: #949494;
		width: 56px;
		/*top: 12.5px;*/
		margin-left: 55px;
		height: 44px;
		line-height: 44px;
		/*	border-bottom:1px solid red;*/
		/*padding-bottom: 15px;
	padding-top: 0;*/
	}
	
	img {
		border: 0;
		vertical-align: bottom;
	}
	
	.tupian {
		height: 623px;
		background: #333333;
		border: 1px solid #333333;
		display: flex;
		flex-wrap: wrap;
		.img {
			img {
				width: 108px;
				height: 108px;
				margin: 7.5px 0 0 7.5px;
				/*border:1px dotted white;*/
			}
		}
	}
	
	.mubu {
		width: 100%;
		height: 623px;
		position: absolute;
		z-index: 100;
		background: black;
		opacity: .6;
		top: 46.5px;
	}
	
	.zhaopian {
		width: 325px;
		height: 267px;
		background: #fff;
		position: absolute;
		z-index: 101;
		bottom: 91px;
		left: 15px;
		border-radius: 6px;
		.shenhe {
			/*width: 175.5px;*/
			height: 16px;
			font-size: 17px;
			margin-top: 23px;
			margin-left: 84.5px;
			letter-spacing: 1px;
			color: #444446;
		}
	}
	
	.zpfangzhi {
		display: flex;
		margin-top: 21.5px;
	}
	
	.zpleixing {
		img {
			width: 47px;
			height: 47px;
			margin-left: 6px;
		}
		.zpmiaoshu {
			font-size: 12px;
			color: #9C9C9C;
			margin-left: 12.5px;
			margin-top: 6px;
		}
	}
	
	.paizhao {
		height: 60px;
		margin: 0 auto;
		margin-top: 18.5px;
		line-height: 60px;
		text-align: center;
		color: #F54663;
		font-size: 18px;
		border-top: 1px solid #E0E0E0;
		width: 325px;
	}
	
	.bendi {
		height: 60px;
		line-height: 60px;
		text-align: center;
		color: #F54663;
		font-size: 18px;
		border-top: 1px solid #E0E0E0;
		width: 325px;
		margin: 0 auto;
	}
	
	.quxiao {
		position: absolute;
		z-index: 101;
		bottom: 15px;
		background: #FFFFFF;
		width: 325px;
		height: 61px;
		text-align: center;
		line-height: 61px;
		left: 15px;
		border-radius: 6px;
		font-size: 18px;
		color: #959595;
	}
</style>
