<template>
	<!-- 头部导航 -->
	<div>
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"> </header-fixed-top>
		<!--//头部轮播图-->
		<div class="the_head">
			<!--<img src="../../../static/img/4@3x.png" />-->
			<swiper :options="swiperOption" class="swiper-wrap swiperBox" ref="mySwiper " v-if="banner.length!=0">
				<!--<swiper-slide class="swiper-slide_item">
					<img class="imgBox" src="../../images/my/bnr_sjhy.png" alt="" />
				</swiper-slide>-->
				<swiper-slide class="swiper-slide_item" v-for="(item,index) in banner" :key='index'>
					<img class="imgBox" :src="item.image" />
				</swiper-slide>
			</swiper>
			<div class="quan">{{imgIndex+1}}/{{banner.length}}</div>
		</div>

		<!--会员信息-->
		<div class="messages">
			<div class="content-box">
				<!-- 用户头像 -->
				<div class="content-t">
					<img src="../../../static/img/tx_wodetouxiang@2x.png" alt="">
				</div>
				<!-- 右字 -->
				<div class="content-txt">
					<!-- 用户名称 -->
					<div class="named">
						<div class="named_mc">
							春田花花菜
						</div>
						<div class="named_tu">
							<img src="../../../static/img/vip@2x.png" alt="">
						</div>
						<div class="named_tu">
							<img src="../../../static/img/shiming.png" alt="">
						</div>

					</div>
					<!-- 已读信息的显示 -->
					<!--<div class="named_yd">已读</div>-->

					<!-- 用户的基本信息 -->
					<div class="basic">
						<div class="basic_txt">
							<div>30岁</div>
							<div class="basic_x">|</div>
							<div class="basic_cm"> 福州市</div>
							<div class="basic_x">|</div>
							<div class="basic_cm">2016年08月注册</div>
						</div>
					</div>

				</div>

			</div>
			<!--我们结婚了-->
			<div class="married">
				<div class="married_sj">
					<span class="married_sj1">2018年06月06日  </span>
					<span class="married_sj2">Ta宣布：</span>
					<span class="married_sj3">我们结婚了</span>
				</div>
			</div>
			<!--留下我的祝福-->
			<div class="blessing">

				<div class="blessing1">
					<div class="blessing_1">4</div>
					<div class="blessing_2">祝福</div>
				</div>
				<div class="blessing2">
					<div></div>
				</div>

				<div class="blessing3">
					<div class="blessing_3">4444</div>
					<div class="blessing_4">访问</div>
				</div>
				<div class="blessing4" @click="click_my">
					<div class="blessing5">
						留下我的祝福
					</div>
				</div>

			</div>

		</div>
		<!--我们的爱情故事-->
		<div class="love_story">
			我们的爱情故事 <span style="color:#F54663 ;">(3)</span>
		</div>
		<!--故事1-->
		<div class="love_storys">
			<div class="love" @click="success_stories">
				<div class="love_txt">
					找到真爱找到真爱找到真爱找到真爱找到真爱找到真爱找到真爱找到真爱
				</div>
				<div class="love_tus">
					<div style="font-size:10px;color:#999999;margin-right:10px;">
						2019-04-15 14:00
					</div>
					<div class="love_tu">
						<img src="../../../static/img/icon_chela.png" />
					</div>

				</div>
			</div>
			<div class="love">
				<div class="love_txt">
					找到真爱找到真爱找到真爱找到真爱找到真爱找到真爱找到真爱找到真爱
				</div>
				<div class="love_tus">
					<div style="font-size:10px;color:#999999;margin-right:10px;">
						2019-04-15 14:00
					</div>
					<div class="love_tu">
						<img src="../../../static/img/icon_chela.png" />
					</div>

				</div>
			</div>
		</div>
		<!--祝福留言(4)-->
		<div class="love_story">
			祝福留言 <span style="color:#F54663 ;">(4)</span>
		</div>
		<div class="message">
			<div class="messages">
				<div class="messages_tu">
					<img src="../../../static/img/2399@3x(4).png" />
				</div>
				<div class="messages_txt">
					<div class="messages_txts">
						<div style="font-size:11px;color:#F54663;">
							缘来似你啊 25岁 广东省深圳市
						</div>
						<div style="font-size:10px;color:#999999;">
							昨天20：23
						</div>
					</div>
					<div style="font-size:13px;color:#333333;margin-top: 5px;">
						祝福你们啊，幸福久久
					</div>
				</div>
			</div>
			<div class="messages">
				<div class="messages_tu">
					<img src="../../../static/img/2399@3x(4).png" />
				</div>
				<div class="messages_txt">
					<div class="messages_txts">
						<div style="font-size:11px;color:#F54663;">
							缘来似你啊 25岁 广东省深圳市
						</div>
						<div style="font-size:10px;color:#999999;">
							昨天20：23
						</div>
					</div>
					<div style="font-size:13px;color:#333333;margin-top: 5px;">
						祝福你们啊，幸福久久
					</div>
				</div>
			</div>
		</div>
		<!--输入框-->
		<div class="message_input" v-show="show">
			<div class="message_inputs">

				<div class="message_input1">
					<input placeholder="请输入你想祝福的话" />
				</div>
				<div class="message_input2">
					发表
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import HeaderFixedTop from '../HeaderTop/HeaderFixedTop'
	//const that = this;
	export default {
		data() {
			const that = this;
			return {
				show: false,
				showBackIcon: "true",
				title: "幸福空间",
				rightTitle: '',
				banner: [{
						image: 'http://www.divcss5.com/ibeifeng/336-280.jpg'
					},
					{
						image: 'http://www.divcss5.com/ibeifeng/336-280.jpg'
					},
				],
				imgIndex: 1,
				swiperOption: {
					notNextTick: true,
					loop: true,
					initialSlide: 0,
					autoplay: {
						delay: 2000,
						stopOnLastSlide: false,
						disableOnInteraction: false
					},
					speed: 500,
					direction: "horizontal",
					grabCursor: true,
					on: {
						slideChangeTransitionStart: function() {
							that.imgIndex = this.realIndex;
							//							console.log(that.imgIndex)			
						},
					},
					pagination: {
						el: ".swiper-pagination",
						clickable: true,
						type: "bullets"
					}
				},
			}
		},
		components: {
			HeaderFixedTop,
		},
		methods: {
			success_stories() {
				this.$router.push("/success_stories");
			},
			click_my() {
				this.show = !this.show
			},
			goBack() {
//				this.$router.go(-1);
				this.$router.push({
					path:"/found",
					query:{currentSort:4}					
					});
			},
			goNavAdd() {
//				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="scss" scoped>
	/*//头部轮播图*/
	
	.the_head {
		width: 100%;
		/*width: 375px;*/
		height: 250px;
		margin-top: 45px;
		position: relative;
		img {
			width: 100%;
			height: 100%;
		}
	}
	
	.the_head /deep/ .swiper-pagination {
		background-color: pink;
		text-align: right;
	}
	/* 消息列表 */
	
	.messages {
		width: 100%;
		background: #fff;
	}
	
	.content-box {
		width: 93%;
		height: 63px;
		margin: 0 auto;
		position: relative;
		display: flex;
		border-radius: 5px;
		border-bottom: 1px solid #DDDDDD;
	}
	/* 用户头像 */
	
	.content-t>img {
		width: 44px;
		height: 44px;
		/*margin-left: 15px;*/
		margin-top: 10px;
	}
	/* 消息列表 */
	
	.content-txt {
		width: 73%;
		height: 36px;
		display: flex;
		justify-content: space-between;
		margin-left: 6px;
		flex-wrap: wrap;
	}
	
	.named {
		display: flex;
		margin-top: 10px;
	}
	
	.named_mc {
		font-size: 15.5px;
		color: #F54663;
	}
	
	.named_tu>img {
		width: 27.5px;
		height: 16.5px;
		margin-top: 2px;
		margin-left: 5px;
	}
	
	.named_yd {
		margin-top: 15.5px;
		color: #c2c2c2;
	}
	/* 用户的基本信息 */
	
	.basic {
		width: 100%;
		margin-left: 1%;
		margin-top: 5px;
		display: flex;
		justify-content: space-between;
	}
	
	.basic_txt {
		display: flex;
		color: #7f7f7f;
		font-size: 13.97px;
	}
	
	.basic_x {
		margin-left: 4px;
	}
	
	.basic_cm {
		margin-left: 4px;
	}
	
	.time_t {
		display: flex;
	}
	
	.time_t>div {
		margin-left: 6px;
		font-size: 12.86px;
		color: #c2c2c2;
	}
	/*我们结婚了*/
	
	.married {
		width: 100%;
		margin-top: 8px;
		.married_sj {
			width: 100%;
			height: 20px;
			line-height: 20px;
			font-size: 12px;
			/*border: 1px solid red;*/
			.married_sj1 {
				margin-left: 15.5px;
				color: #555555;
			}
			.married_sj2 {
				color: #555555;
			}
			.married_sj3 {
				color: #F54663;
				font-weight: 600;
			}
		}
	}
	/*留下我的祝福*/
	
	.blessing {
		width: 93%;
		height: 63px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		text-align: center;
		.blessing1 {
			/*border: 1px solid red;*/
			width: 100px;
			.blessing_1 {
				font-size: 20px;
				color: #FF7C91;
				font-weight: 600;
				margin-top: 10px;
			}
			.blessing_2 {
				font-size: 10px;
				color: #777777;
				margin-top: 4px;
			}
		}
		.blessing2 {
			/*border: 1px solid red;*/
			width: 20px;
			div {
				width: 2px;
				height: 10px;
				margin-top: 44px;
				background: #DDDDDD;
			}
		}
		.blessing3 {
			/*border: 1px solid red;*/
			width: 100px;
			.blessing_3 {
				font-size: 20px;
				color: #FF7C91;
				font-weight: 600;
				margin-top: 10px;
				margin-right: 27px;
			}
			.blessing_4 {
				font-size: 10px;
				color: #777777;
				margin-top: 4px;
				margin-right: 27px;
			}
		}
		.blessing4 {
			/*border: 1px solid red;*/
			width: 84px;
			.blessing5 {
				width: 84px;
				height: 24.5px;
				line-height: 24.5px;
				border-radius: 5px;
				font-size: 11px;
				background: #FF773B;
				color: #FFFFFF;
				margin-top: 22px;
			}
		}
	}
	/*爱情故事*/
	
	.love_story {
		width: 93%;
		margin: 0 auto;
		margin-top: 15px;
		height: 20px;
		font-size: 15px;
		color: #444446;
	}
	/*故事*/
	
	.love_storys {
		width: 100%;
		/*height: 131px;*/
		background: #fff;
		margin-top: 5px;
		.love {
			width: 93%;
			height: 42.5px;
			line-height: 42.5px;
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #DDDDDD;
			margin: 0 auto;
		}
	}
	
	.love_txt {
		width: 200px;
		font-size: 13px;
		color: #666666;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.love_tus {
		display: flex;
		.love_tu {
			img {
				width: 6.5px;
				height: 11.5px;
			}
		}
	}
	/*祝福留言*/
	
	.message {
		width: 100%;
		background: #FFFFFF;
		margin-top: 5px;
		.messages {
			width: 93%;
			height: 62.5px;
			margin: 0 auto;
			display: flex;
			border-bottom: 1px solid #DDDDDD;
			.messages_tu {
				width: 37.5px;
				height: 37.5px;
				margin-top: 12.5px;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.messages_txt {
				width: 87%;
				margin-left: 5px;
				margin-top: 15px;
				.messages_txts {
					display: flex;
					justify-content: space-between;
				}
			}
		}
	}
	/*输入框*/
	
	.message_input {
		width: 100%;
		height: 44px;
		background: #fff;
		position: fixed;
		bottom: 0;
		.message_inputs {
			width: 93%;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			.message_input1 {
				margin-top: 10px;
				input {
					width: 275px;
					height: 24px;
					background: #F1F1F1;
					border-radius: 20px;
					border: none;
					font-size: 10px;
					color: #999999;
					text-indent: 10px;
				}
			}
			.message_input2 {
				width: 62px;
				height: 22.5px;
				text-align: center;
				line-height: 22.5px;
				border-radius: 5px;
				background: #F54663;
				color: #fff;
				font-size: 11px;
				margin-top: 10px;
			}
		}
	}
	
	.swiper-slide_item {
		width: 375px;
		height: 250px;
	}
	
	.quan {
		z-index: 20;
		width: 38.5px;
		height: 16px;
		position: absolute;
		right: 5px;
		bottom: 5px;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.3);
		border-radius: 50px;
		text-align: center;
	}
</style>