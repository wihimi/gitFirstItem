<template>
	<!--轮播图-->
	<div id="" class="mySwiperBox">
		<swiper :options="swiperOption" class="swiper-wrap swiperBox" ref="mySwiper" v-if="banner.length!=0">
			<swiper-slide class="swiper-slide_item" v-for="(item,index) in banner" :key="index">
				<img class="imgBox" :src="item.image" alt="" />
			</swiper-slide>
			<div class="swiper-pagination dnot"  :class="forPage=='appIndex'?'swiper-pagin':''" v-for="(item,index) in banner" :key="index" slot="pagination"></div>

		</swiper>
	</div>
</template>

<script>
	const that = this;
	export default {
		name: "lunbotu",
		props: {
			forPage: {
				//				type:string,
				//				default:''
			},
			banner:{
				type:Array
			}

		},
		data() {
			return {
//				banner: [{
//						image: 'http://www.divcss5.com/ibeifeng/336-280.jpg'
//					},
//					{
//						image: 'http://www.divcss5.com/ibeifeng/336-280.jpg'
//					},
//				],
				imgIndex: 1,
				swiperOption: {
					//是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
					notNextTick: true,
					//循环
					loop: true,
					//设定初始化时slide的索引
					initialSlide: 0,
					//自动播放
					autoplay: {
						delay: 2000,
						stopOnLastSlide: false,
						/* 触摸滑动后是否继续轮播 */
						disableOnInteraction: false
					},
					//滑动速度
					speed: 500,
					//滑动方向
					direction: "horizontal",
					//小手掌抓取滑动
					grabCursor: true,
					on: {
						//滑动之后回调函数
						slideChangeTransitionStart: function() {
							/* realIndex为滚动到当前的slide索引值 */
							that.imgIndex = this.realIndex - 1;
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
	created(){
		console.log('al');
		console.log(this.banner)
	}
	}
</script>

<style scoped lang="scss">
	/*轮播图样式*/

	.mySwiperBox {
		margin: 0px 15px 0px 15px;
		/deep/ .swiper-slide {
			/*height: 15px!important;*/
		}
	}

	.swiperBox {
		height: 99px;
		.swiper-slide_item {
			width: 100%;
			height: 74px;
			border-radius: 5px;
			overflow: hidden;
			/*border: 0.5px dashed #BBBBBB;*/
		}
		.imgBox {
			width: 100%;
			height: 74px;
			margin-left: -5px;
		}
	}
	.mySwiperBox .swiper-pagin{
		margin-bottom: 6px;
		margin-top: 3px!important;
	}
	.mySwiperBox .swiper-pagin /deep/ .swiper-pagination-bullet-active {
		background-color: #f44663!important;
	}

	.mySwiperBox /deep/ .swiper-pagination-bullet {
		background: #D4D4D4!important;
	}

	.mySwiperBox /deep/ .swiper-pagination-bullet-active {
		background: #35824E!important;
	}

	.dnot {
		margin-bottom: 0px;
		bottom: 0px;
	}
</style>
