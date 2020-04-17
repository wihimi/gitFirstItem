<template>
	<div class="mubu">
		<div class="model">
			<div class="model_1">赠送礼物</div>
			<div class="huizong" style="display:flex;">
				<swiper :options="swiperOption" class="swiper-wrap swiperBox " ref="mySwiper ">
					<swiper-slide class="swiper-slide_item" v-for="(itemArr,indexArr) in banner" :key="indexArr">

						<div class="liwu" v-for="(item,index) in itemArr" @click="xuanzesongli(indexArr,index)" :class="{'active':selectIndex==index&&selectIndexArr==indexArr}">
							<img src="../../assets/meigui99@3x.png" />
							<div class="liwu_font">玫瑰99</div>
						</div>

					</swiper-slide>
					<div class="swiper-pagination dnot" v-for="(item,index) in banner" :key="index" slot="pagination"></div>

				</swiper>

				<!--<div class="liwu" v-for="(item,index) in list" @click="xuanzesongli(index)" :class="{'active':currentSort==index}">
					<img src="../../assets/meigui99@4x.png" />
					<div class="liwu_font">玫瑰99</div>
				</div>
				<img src="../../assets/3dian_da@3x.png" alt class="dian" />-->
				<!--赠送取消-->
				<div class="xuanze">
					<div class="xuanze_1" @click="confirmGift">确定</div>
					<div class="xuanze_2" @click="cancerGift">取消</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
		import { getGiftList } from '@/request/api'; // 导入我们的api接口
	export default {
		props: {
			selectIndexArr: {
			  default:0
      },
			selectIndex: {
        default:0
      }
		},
		data() {
			return {
				show1:true,
				banner: [],
				imgIndex: 1,
				swiperOption: {
					//是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
					notNextTick: true,
					//循环
					loop: true,
					//设定初始化时slide的索引
					initialSlide: 0,
					//自动播放
					autoplay:false,
					//滑动速度
					speed: 300,
					//滑动方向
					direction: "horizontal",
					//小手掌抓取滑动
					grabCursor: true,
					on: {
						//滑动之后回调函数
						slideChangeTransitionStart: function() {
							/* realIndex为滚动到当前的slide索引值 */
							this.imgIndex = this.realIndex - 1;
						},

					},
					//分页器设置
					pagination: {
						el: ".swiper-pagination",
						clickable: true,
						type: "bullets"
					}
				},
			}
		},
		created() {
			var arr = [1, 3, 4, 6, 7, 8, 12, 32, 12, 434, 12, 12, 4, 12, 4];
			var tempArr = [];
			for(var i = 0; i < arr.length; i += 8) {
				tempArr.push(arr.slice(i, i + 8))
			}
			this.banner = tempArr;
		},

		methods: {

			xuanzesongli(indexArr, index) {
				this.$emit('choiceThe', indexArr, index)

			},
//			请求送礼接口
			confirmGift() {
					getGiftList({
					uid: localStorage.getItem("uid"),
					ruid:'9df2b979',
//					category:1
				}).then(res => {
					console.log(res);
				})
				this.$emit('confirmGift')
			},
			cancerGift() {
				this.$emit('cancerGift')
			}
		}
	}
</script>

<style scoped lang="scss">
	.mubu {
		width: 100%;
			height: 100%;
		/*background: black;*/
		/*left: 0;*/
		/*opacity: 0.2;*/
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		bottom: 0;
		z-index: 99;
	}

	.model {
		width: 100%;
		height: 385px;
		background: #fff;
		position: fixed;
		bottom: 0;
		z-index: 100;
		.model_1 {
			width: 88%;
			height: 40px;
			margin: 0 auto;
			text-align: center;
			border-bottom: 0.5px solid #eaeaea;
			line-height: 40px;
			font-size: 15px;
			color: #313131;
			letter-spacing: 2px;
		}
	}

	.liwu {
		width: 70px;
		height: 97px;
		margin: 13.5px 1px 1px 8.5px;
		border: 1px solid #fff;
		text-align: center;
		overflow: hidden;
		img {
			width: 60px;
			height: 55px;
			margin: 10px auto 9px;
		}
		.liwu_font {
			display: inline-block;
			/*height: 13.5px;*/
			font-size: 14px;
			color: #2d2d2d;
			margin: 0 auto;
		}
	}

	.huizong {
		width: 97%;
		margin-left: 6.5px;
		flex-wrap: wrap;
		margin-top: 1.5px;
		box-sizing: border-box;
	}

	.active {
		border: 1px solid #fb7ba0;
		border-radius: 4px;
	}

	.dian {
		width: 50px;
		height: 10px;
		margin: 8.5px 0 0 165.5px;
	}

	.xuanze {
		width: 88%;
		display: flex;
		justify-content: space-between;
		margin: 20px auto;
		border-top: 0.5px solid #eaeaea;
	}

	.xuanze_1 {
		width: 44%;
		text-align: center;
		padding-top: 24.5px;
		color: #ff7e30;
		font-size: 17.5px;
	}

	.xuanze_2 {
		width: 44%;
		text-align: center;
		padding-top: 24.5px;
		font-size: 17.5px;
		color: #8c8c8c;
	}
	/*banner 轮播图*/

	.bigBox {
		background-color: white;
		width: 100%;
	}

	.mySwiperBox {
		margin: 0px 15px 0px 15px;
		box-sizing: border-box;
		/deep/ .swiper-slide {
			height: !important;
		}
	}

	.swiperBox {
		height: 260px;
		.swiper-slide_item {
			width: 100%;
			height: 240px;
			border-radius: 5px;
			overflow: hidden;
			display: flex;
			flex-wrap: wrap;
		}
		.imgBox {
			width: 100%;
			height: 240px;
		}
	}

	.huizong /deep/ .swiper-pagination-bullet {
		background: #E5E7EA!important;
	}

	.huizong /deep/ .swiper-pagination-bullet-active {
		background: #FB7BA0!important;
	}

	.dnot {
		margin-top: 10px;
		bottom: 0px;
	}

	.dialog {
		width: 100%;
		height: 92.5%;
		position: fixed;
		background-color: rgba(0, 0, 0, 0.85);
		left: 0;
		top: 0;
		z-index: 22;
		img {
			width: 308.5px;
			height: 269px;
			padding-left: 43.5px;
			padding-top: 40px;
			/*left: 43.5px;
    	top: 52px;*/
		}
	}

	.dialog_txt1 {
		color: #FFFFFF;
		font-size: 16.24px;
		position: absolute;
		left: 95px;
		top: 335px;
		letter-spacing: 2px;
		font-weight: 100;
	}

	.dialog_txts1 {
		color: #FFFFFF;
		font-size: 16.24px;
		position: absolute;
		left: 34px;
		top: 360px;
		letter-spacing: 2px;
		font-weight: 100;
	}

	.dialog_txt2 {
		text-align: center;
		color: #FED52F;
		font-size: 14px;
		position: absolute;
		left: 55.5px;
		top: 400px;
		font-weight: 100;
	}

	.dialog_txt {
		width: 210px;
		height: 48px;
		text-align: center;
		line-height: 48px;
		font-size: 19.18px;
		border: 1px solid #FF9483;
		color: #FF9483;
		position: absolute;
		left: 83px;
		top: 450px;
		border-radius: 50px;
		font-weight: 100;
		letter-spacing: 4px;
	}

	.dialog_txts {
		position: absolute;
		left: 117px;
		top: 530px;
		font-size: 19.18px;
		color: #B3B3B3;
		font-weight: 100;
		letter-spacing: 4px;
	}
</style>
