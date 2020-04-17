<template>
	<div>
		<!--返回按钮-->
		<div class="top_Back_nav">
			<div class="top_Back_left" @click="goBack">
        <img src="../../../../static/img/icon_zuola_hei@2x.png" />
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
		<!--body-->
		<div class="">
			<div class="" v-if="currentIndex==0">
				<div class="pinglunUl">
					<div class="imgHead ">
						<img class="" src="../../../images/my/toux.png" /></div>
					<div id="" class="flex1 " style="overflow: hidden;">
						<div id="" class="flex justify-space-between">
							<div class="nameClass">春田花花菜</div>
							<div class="timeClass">2019-01-23 15:32</div>
						</div>
						<div class="phContantClass">床前明月光，窗外叮叮当，装修师傅又来砸墙了，真开心</div>
						<div class="phPartanttClass">征婚说说 #买房应该注意哪些小细节几点几分家电家具减肥减肥解放军的解放军</div>
					</div>

				</div>
			</div>

			<div class="" v-if="currentIndex==1">

			</div>

		</div>

	</div>
</template>

<script>
  document.addEventListener("plusready", function() {
    // 注册返回按键事件
    plus.key.addEventListener('backbutton', function() {
      // 事件处理
      window.history.back();
    }, false);
  });
	export default {
		name: "MyPost",
		data() {
			return {
				navItemList: ['我发布的', '我评论的', '评论我的'],
				currentIndex: 0,

			}

		},
		methods: {
			clickNav(index) {
				this.currentIndex = index;
			},
				goBack() {
				this.$router.go(-1);
			},

		}

	}
</script>

<style scoped lang="scss">
	@import "../../../styles/mycomstyle.css";
	.pinglunUl {
		padding: 13px;
		display: flex;
	
		border-bottom: 0.5px solid #DADADA;
	
		letter-spacing: 1px;
			box-sizing: content-box;
		
		.imgHead {
			width: 42px;
			height: 42px;
			margin-right: 10px;
			flex-shrink: 0;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.nameClass{
				color: #F54663;
				font-size: 16px;
		}
		.timeClass{
			color:#959595;
				font-size: 13.76px;

		}
		.phContantClass{
			color:#323232;
				font-size: 16px;
				margin-top: 3px;
		}
		.phPartanttClass{
			width: 275px !important;
			margin-top: 10px;
			/*white-space: nowrap;*/
			/*overflow: hidden;*/
			/*text-overflow: ellipsis;*/
			word-break:break-word;
			color:#8E8D8D;
				font-size: 14px;
				width: 297px;
			
		}
	}

	.top_Back_nav {
		width: 100%;
		height: 44px;
		line-height: 44px;
		background-color: #FFFFFF;
		display: flex;
		.top_Back_left {
			box-sizing: border-box;
			width: 45px;
			img {
        width: 10px;
        height: 15px;
        margin-left: 27px;
        margin-top: 50%;
        transform: translateY(-50%);
        display: inline-block;
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
			padding: 0 15px;
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
</style>
