<template>
	<transition name='fade'>
		<keep-alive>
			<div class="aaa">
	<input @change="fileChange($event)" type="file" id="upload_file" accept="image/*" style="display: none" />
					
				<!--头部-->
				<div class="topHeadBg">
					<img class="bj_img" :src="headPortrait==null?imge:headPortrait" />
					<div id="">
						<img class="headImage" @click="goNavAdd" :src="headPortrait==null?imge:headPortrait" />

					</div>
					<div class="jubao" v-show="showJuB">
						<div @click="stop">查看大图</div>
						<div style="border: none;" @click="upHead">更改头像</div>
					</div>
					<div class="box" @click="stops" v-show="show">
						<img class="boxs" @click="stops" :src="headPortrait==null?imge:headPortrait" />
					</div>
					<div class="headTop_right  flex-direction-column">
						<div class="flex-justify-content ">
							<div id="" class=" flex-direction-column ">
								<div id="" class="flex">
									<div class="nikeName">{{nikeNameT}}</div>
									<div class="named_tu">
										<img v-show="whetherVip==0" src="../../images/my/vip@3xv.png" />
										<img v-show="whetherVip==1" src="../../../static/img/vip@2x.png" alt="">
									</div>
									<div class="named_tu">
										<img v-show="whetherAutonym==0" src="../../../static/img/shiming2.png" />
										<img v-show="whetherAutonym==1" src="../../../static/img/shiming.png" alt="">
									</div>
									<!--<div class="huiyuan">VIP</div>-->
									<!--<div class="shimin">实名</div>-->
								</div>
								<div id="" class="idNum">
									ID: {{idNumT}}
								</div>
							</div>
							<div id="" class="flex top_right" @click="setting ">
								<img src="../../images/my/icon_settings@3x.png" />
								<span id="">设置</span>
							</div>
						</div>
						<div class="flex editBox">

							<div id="" class="mr20 align-center" @click="preview

">
								<img class="img1" src="../../images/my/icon_yulan@3x.png" />
								<span id="">预览资料</span>
							</div>
							<div id="" @click="modify_data

">
								<img class="img2" src="../../images/my/icon_bianji@3x.png" />
								<span id="">编辑资料</span>
							</div>
						</div>
					</div>

				</div>
				<router-link to='/MyCardBag' id="" class="newTips_box">
					<p class="newTips">
						优惠券：还剩<span class="textColor">{{d}}</span>天<span class="textColor">{{h}}</span>小时<span class="textColor">{{m}}</span>分<span class="textColor">{{s}}</span>秒。
					</p>
					<p class="newTips">
						今日特价：<span class="textColor">5</span>折特惠，还剩<span class="textColor">10</span>时<span class="textColor">10</span>分<span class="textColor">10</span>秒。
					</p>
				</router-link>
				<!--中间-->
				<div id="" class="icon_box">
					<div id="" class="single_icon_box" @click="toShiMrz">
						<img src="../../images/my/icon_smrz.png" />
						<span id="">实名认证</span>
						<span id="" class="span-tag">1</span>

					</div>
					<div id="" class="single_icon_box" @click="toShenjhy">
						<img src="../../images/my/icon_sjhy.png" />
						<span id="">升级会员</span>
						<img class="huo" src="../../images/my/icon_huo.png" />
					</div>
					<router-link to='/photoalbum' id="" class="single_icon_box">
						<img src="../../images/my/icon_wdxc.png" />
						<span id="">我的照片</span>
						<span id="" class="span-tag">1</span>
					</router-link>
					<div id="" class="single_icon_box" @click="toCarBag">
						<img src="../../images/my/icon_wdkb.png" />
						<span id="">我的卡包</span>
						<span id="" class="span-tag">1</span>
					</div>

					<div id="" class="single_icon_box" @click="priority">
						<img src="../../images/my/icon_pmyx.png" />
						<span id="">排名优先</span>
					</div>
					<div id="" class="single_icon_box" @click="read_my">
						<img src="../../images/my/icon_kgwd.png" />
						<span id="">看过我的</span>
					</div>
					<div id="" class="single_icon_box" @click="tofocus">
						<img src="../../images/my/icon_gzwd.png" />
						<span id="">关注我的</span>
					</div>
					<div id="" class="single_icon_box" @click="my_gift">
						<img src="../../images/my/icon_wdlw.png" />
						<span id="">我的礼物</span>
					</div>

				</div>
				<!--下边-->
				<div class="bottom_box">
					<div class="bottom_box_item" @click="toMytiezi">
						<div class="left_box flex">
							<div id="">我的帖子</div>
							<div id="" class="span-tag">14</div>
						</div>
						<div class="right_box">
							<img src="../../images/youjiantou.png" />
						</div>
					</div>
					<div class="bottom_box_item" @click="online_remind">
						<div class="left_box flex">
							<div id="">上线提醒</div>
							<!--<div id="" class="span-tag" >14</div>-->
						</div>
						<div class="right_box">
							<img src="../../images/youjiantou.png" />
						</div>
					</div>
					<div class="bottom_box_item" @click="seeking">
						<div class="left_box flex">
							<div id="">征婚必看</div>
							<!--<div id="" class="span-tag">14</div>-->
						</div>
						<div class="right_box">
							<img src="../../images/youjiantou.png" />
						</div>
					</div>

					<div class="bottom_box_item" @click="tozuzhi">
						<div class="left_box flex">
							<div id="">阻止名单</div>
							<!--<div id="" class="span-tag">14</div>-->
						</div>
						<div class="right_box">
							<img src="../../images/youjiantou.png" />
						</div>
					</div>

					<div class="bottom_box_item" @click="inform">
						<div class="left_box flex">
							<div id="">举报记录</div>
							<!--				<div id="" class="span-tag">14</div>
-->
							<div class="roun_tag"></div>
						</div>
						<div class="right_box">
							<img src="../../images/youjiantou.png" />
						</div>
					</div>

					<div class="bottom_box_item" @click="evaluation">
						<div class="left_box flex">
							<div id="">有奖评价</div>
							<!--<div id="" class="span-tag">14</div>-->
						</div>
						<div class="right_box">
							<img src="../../images/youjiantou.png" />
						</div>
					</div>
					<div class="bottom_box_item" @click="recommend">
						<div class="left_box flex">
							<div id="">有奖推荐</div>
							<!--<div id="" class="span-tag">14</div>-->
						</div>
						<div class="right_box">
							<img src="../../images/youjiantou.png" />
						</div>
					</div>
					<div class="bottom_box_item" @click="feedback">
						<div class="left_box flex">
							<div id="">反馈意见</div>
							<!--<div id="" class="span-tag">14</div>-->
						</div>
						<div class="right_box">
							<img src="../../images/youjiantou.png" />
						</div>
					</div>

					<div class="bottom_box_item" @click="askforhelp">
						<div class="left_box flex">
							<div id="">寻求帮助</div>
							<!--<div id="" class="span-tag">14</div>-->
						</div>
						<div class="right_box">
							<img src="../../images/youjiantou.png" />
						</div>
					</div>
					<div class="bottom_box_item" style="margin-bottom:50px;" @click="contact">
						<div class="left_box flex">
							<div id="">联系我们</div>
							<!--<div id="" class="span-tag">14</div>-->
						</div>
						<div class="right_box">
							<img src="../../images/youjiantou.png" />
						</div>
					</div>

				</div>
			</div>
		</keep-alive>
	</transition>
</template>

<script>
	import axios from 'axios'
	import qs from 'qs'
	import Vue from 'vue';
	import { Toast } from 'vant';
	// import Mui from 'vue-awesome-mui';
	// Vue.use(Mui);
	export default {
		data() {
			return {
				nikeNameT: '用户1245',
				idNumT: '123456',
				whetherAutonym: 1,
				whetherVip: 1,
				lists: '2020-01-30 18:00:00', //倒计时结束时间
				now: '',
				time: '', //剩余多少时间
				tian: '',
				k: '',
				d: '',
				h: '',
				m: '',
				s: '',
				userInfo: new Object,
				showJuB: false,
				show: false,
				headPortrait: '',
				imge: require('../../../static/img/noVipHead.png'),
				list: ''
			}

		},
		created() {

			//			调用倒计时
			this.add()
			//				this.$store.commit('set_test', "455555");

		},
		mounted() {
			this.getUserInfo();
			console.log(this.lists);
			//    console.log(this.time);
		},
		watch: {},
		methods: {
			fileChange(event) {
				console.log('sssssssssssss');
				console.log(event);
				if(!event.target.files[0].size) return;
				else {
					let files = event.target.files;
					var fd = new FormData();
					for(const file of files) {
						fd.append('file', file);
					}
					fd.append('business', 'AVATAR');
					fd.append('type', 'IMAGE');
					var requestUrlfile = this.apiUrl + 'file/uploadFile';
					axios.post(requestUrlfile, fd, {
							headers: {
								'Content-Type': 'multipart/form-data'
							}
						}).then((res) => {
							var resdata = res.data;
							if(resdata.code == 200) {
								this.$toast('提交成功，需要后台审核才能更换哦');
							} else {
								this.$toast(resdata.msg)
							}
						})
						.catch((error) => {})
				}

			},
			//上传头像
			upHead() {
				document.getElementById('upload_file').click();
			},
			//  	点我显示头像的大图
			stop() {
				this.show = !this.show;
			},
			stops() {
				this.show = !this.show;
			},
			//			倒计时
			countDown() {
				let now = new Date().getTime(); //现在时间
				//				console.log(now)
				let end = new Date(this.lists).getTime(); //获取结束时间
				//				console.log(end)
				let sub = end - now //结束时间减去现在时间
				//				console.log(sub)

				if(sub > 0) {
					let d = Math.floor(sub / 1000 / 60 / 60 / 24); //获取天数
					let h = Math.floor(sub / 1000 / 60 / 60 % 24); //获取小时数
					let m = Math.floor(sub / 1000 / 60 % 60); //获取分钟数
					let s = Math.floor(sub / 1000 % 60); //获取秒数
					h = h > 9 ? h : '0' + h;
					m = m > 9 ? m : '0' + m;
					s = s > 9 ? s : '0' + s;
					let time = '还剩' + d + '天' + h + '时' + m + '分' + s + '秒'
					this.d = d;
					this.h = h;
					this.m = m;
					this.s = s;
					this.time = time;
					//					console.log(time)
				} else {
					clearInterval(this.k)
					Toast('下班了');
				}
			},
			add() {
				this.k = setInterval(this.countDown, 1000)
			},

			contact() {
				this.$router.push({
					path: '/contactUs'
				})
			},
			feedback() {
				this.$router.push({
					path: '/feedback'
				})
			},
			askforhelp() {
				this.$router.push({
					path: '/askforhelp'
				})
			},
			goNavAdd() {
				this.showJuB = !this.showJuB;
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
							this.userInfo = resdata.data;
							this.nikeNameT = resdata.data.username;
							this.idNumT = resdata.data.uid;
							this.whetherAutonym = resdata.data.whetherAutonym;
							this.whetherVip = resdata.data.whetherVip;
							this.headPortrait = resdata.data.headPortrait;
							this.remindId = resdata.data.remindId;
							this.list = resdata.data;

							console.log(res)
							//           console.log(this.headPortrait)

							//个人简介是否通过审核
							var a = res.data.data.selfIntroduction
							var vip = res.data.data.whetherVip
							//          console.log(a)
							//           console.log(vip)
							//vuex存数据
							this.$store.commit('set_test', a);
							this.$store.commit('set_vip', vip);
						}
					})
					.catch((error) => {})
			},

			recommend() {
				this.$router.push({
					path: '/recommend'
				})
			},
			my_gift() {
				this.$router.push({
					path: '/my_gift'
				})
			},
			online_remind() {
				this.$router.push({
					path: '/online_remind',
					query: {
						remindId: this.remindId
					}
				})
			},
			setting() {
				this.$router.push({
					path: '/setting'
				})
			},
			toShiMrz() {
				this.$router.push({
					path: '/realNameAuthentication'
				})
			},
			toShenjhy() {
				this.$router.push({
					path: '/MemberUpgrade'
				})
			},
			toCarBag() {
				this.$router.push({
					path: '/MyCardBag'
				})
			},
			read_my() {
				this.$router.push({
					path: '/read_my'
				})
			},
			priority() {
				this.$router.push({
					path: '/priority'
				})
			},
			seeking() {
				this.$router.push({
					path: '/seeking'
				})
			},
			inform() {
				this.$router.push({
					path: '/inform'
				})
			},

			tozuzhi() {
				this.$router.push('/prevent')
			},
			tofocus() {
				this.$router.push('/focus')
			},

			toMytiezi() {
				this.$router.push('/myPost')
			},
			preview() {
				this.$router.push('/preview')

			},
			evaluation() {
				this.$router.push('/evaluation')
			},
			modify_data() {
				//    	console.log(this.list)
				//      this.$router.push('/modify_data')
				this.$router.push({
					path: '/modify_data',
					query: {
						userInfo: JSON.stringify(this.list)
					}
				})
			}

		}

	}
	// mui.init({
	//   keyEventBind: {
	//     backbutton: true //关闭back按键监听
	//   }
	// });
	// //首页返回键处理
	// //处理逻辑：1秒内，连续两次按返回键，则退出应用；
	// var first = null;
	// mui.back = function() {
	//   //首次按键，提示 再按一次退出应用
	//   if (!first) {
	//     first = new Date().getTime(); //记录第一次按下回退键的时间
	//     if(window.history.length==1){
	//       mui.toast("再按一次退出应用"); //给出提示
	//     }
	//
	//     history.go(-1); //回退到上一页面
	//     setTimeout(function() {
	//       //1s中后清除
	//       first = null;
	//     }, 1000);
	//   } else {
	//     if (new Date().getTime() - first < 1000) {
	//       //如果两次按下的时间小于1s，
	//       plus.runtime.quit(); //那么就退出app
	//     }
	//   }
	// };
</script>

<style scoped src="../../styles/mycomstyle.css"></style>
<style scoped lang="scss">
	/*@import "../../styles/mycomstyle.css";*/
	/*.aaa{
    width: 750px;
    background-image: url(../../images/my/zu7.png);
  }*/
	
	.topHeadBg {
		width: 100%;
		height: 70px;
		background-color: rgba(71, 63, 58, 0.5);
		display: flex;
		.bj_img {
			position: absolute;
			width: 72%;
			left: 42px;
			max-height: 70px;
			filter: blur(4px);
			z-index: -1;
		}
		.headImage {
			width: 80px;
			height: 80px;
			margin: 20px 10px 10px 26px;
		}
		.headTop_right {
			width: 90%;
			margin: 20px 10px 0 0px;
			color: white;
			/*.headTop_right_title*/
			.nikeName {
				font-size: 15px;
			}
			.named_tu>img {
				width: 27.5px;
				height: 16.5px;
				margin-top: 2px;
				margin-left: 5px;
			}
			.huiyuan {
				/*backr
        #FFA574;*/
				background-color: #FFA574;
				font-size: 7px;
				width: 26px;
				text-align: center;
				border-radius: 40%;
				height: 16px;
				line-height: 16px;
				margin-top: 3px;
			}
			.shimin {
				background-color: #4AC1FF;
				font-size: 7px;
				width: 27px;
				text-align: center;
				border-radius: 2px;
				height: 17px;
				line-height: 17px;
				margin-top: 3px;
				margin-left: 3px;
			}
			.idNum {
				margin-top: 0.02rem;
				font-size: 13px;
				color: #E3E3E3;
			}
			.top_right {
				margin-top: 2px;
				img {
					width: 20px;
					height: 20px;
				}
				span {
					margin-left: 3px;
					margin-top: -3px;
					font-size: 15px;
				}
			}
			.editBox {
				margin-top: 18px;
				color: #FF712B;
				font-size: 14.5px;
				.img1 {
					width: 14px;
					height: 14px;
					margin-top: 5px;
					margin-right: -5px;
					margin-bottom: -1px;
				}
				.img2 {
					height: 14px;
					margin-top: 5px;
					margin-right: -5px;
					margin-bottom: -1px;
				}
			}
		}
	}
	
	.newTips_box {
		display: block;
		width: 70%;
		text-align: center;
		margin: 40px auto 14px auto;
		box-sizing: border-box;
		background-color: #C3C5C7;
		border-radius: 10px;
		padding: 5px 0;
		.newTips {
			color: #666666;
			font-size: 11px;
			line-height: 18px;
			/*padding: 5px 5px;*/
			text-align: center;
			border-radius: 5px;
			.textColor {
				color: #E87082;
			}
		}
	}
	
	.icon_box {
		width: 96%;
		background-color: white;
		border-radius: 5px;
		margin: auto;
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
		padding: 10px 0 13px 0;
		.single_icon_box {
			width: 25%;
			text-align: center;
			position: relative;
			padding: 6px 0;
			img {
				width: 38px;
				height: 38px;
				display: block;
				margin: auto;
			}
			span {
				color: #AAAAAA;
				font-size: 14px;
			}
			.span-tag {
				position: absolute;
				top: 0;
				right: 8px;
				padding: 2px 6px;
				background-color: #FF4330;
				color: white !important;
				border-radius: 50%;
				font-size: 10px !important;
			}
			.huo {
				position: absolute;
				top: 0;
				right: 11px;
				width: 18px;
				height: 18px;
				border-radius: 50%;
			}
		}
	}
	
	.bottom_box {
		width: 96%;
		border-radius: 5px;
		margin: auto;
		margin-top: 20px;
		text-align: center;
		.bottom_box_item {
			display: flex;
			justify-content: space-between;
			height: 50px;
			line-height: 50px;
			border-radius: 4px;
			padding: 0 20px;
			box-shadow: 0px 1px 0px 0px rgba(10, 10, 10, 0.1);
			background-color: white;
			margin-bottom: 7.5px;
			.left_box {
				/*flex: 1;*/
				color: #353535;
				font-size: 15px;
				.span-tag {
					margin-top: 10px;
					padding: 0px 5px;
					margin-left: 5px;
					height: 18px;
					line-height: 18px;
					background-color: #FF4330;
					color: white !important;
					border-radius: 45%;
					font-size: 10px !important;
				}
				.roun_tag {
					width: 7px;
					height: 7px;
					border-radius: 50%;
					background-color: #FF4330;
					margin-top: 11px;
				}
			}
			.right_box {
				margin-top: 2px;
				width: 20px;
				height: 20px;
				/*display: block;
        margin: auto;*/
			}
		}
	}
	
	.jubao {
		position: absolute;
		left: 30%;
		top: 8%;
		width: 100px;
		background: #a1a1a1;
		border-radius: 8px;
		z-index: 20;
		div {
			// width: 40px;
			height: 30px;
			border-bottom: 1px solid #ccc;
			color: #fff;
			text-align: center;
			line-height: 30px;
		}
	}
	
	.box {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 999;
		background-color: rgba(0, 0, 0, 0.5);
	}
	
	.boxs {
		/*margin-left: 50%;
		margin-top: 50%;*/
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}
</style>