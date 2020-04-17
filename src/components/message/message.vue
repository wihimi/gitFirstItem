<template>
	<!-- 消息的大盒子 -->
	<div class="box">
		<!-- 封装轮播图 -->
		<lunbotu_s :banner="banner">></lunbotu_s>
		<!-- 消息列表 -->

		<div class="messages"
         @touchstart="touchin(index)"
         @touchend="cleartime(lists[index])"
			   @click="details(index)"
			   v-for="(item,index) in lists" :key='index'>

			<div class="content-box" ref="testDom">
				<!-- 点击删除该聊天记录 -->
				<div class="dialogs" v-show="item.state">
					<div class="dialogs_triangle"></div>
					<div class="dialogs_information" @click.stop="handdelete">删除该聊天</div>
				</div>
				<!-- 用户头像 -->
				<div class="content-t">
					<img src="../../../static/img/tx_wodetouxiang@2x.png" alt="">
				</div>
				<!-- 优先显示图 -->
				<!-- 消息提醒的圈 -->
				<div class="messages_q">5</div>
				<div class="prioritize">
					<img src="../../../static/img/xianshiyouxian2@2x.png" alt="">

				</div>

				<!-- 右字 -->
				<div class="content-txt">
					<!-- 用户名称 -->
					<div class="named">
						<div class="named_mc">
							{{item.name}}
						</div>
						<div class="named_tu">
							<img src="../../../static/img/vip@2x.png" alt="">
						</div>
						<div class="named_tu">
							<img src="../../../static/img/shiming.png" alt="">
						</div>

					</div>
					<!-- 已读信息的显示 -->
					<div class="named_yd">{{item.yiduo}}</div>

					<!-- 用户的基本信息 -->
					<div class="basic">
						<div class="basic_txt">
							<div>{{item.age}}</div>
							<div class="basic_x">|</div>
							<div class="basic_cm">{{item.height_y}}厘米</div>
							<div class="basic_x">|</div>
							<div class="basic_cm">{{item.formal}}</div>
						</div>
						<div class="time_t">
							<div>{{item.time}}</div>
							<div>{{item.times}}</div>
						</div>
					</div>

				</div>

			</div>

		</div>

	</div>
</template>

<script>
	import lunbotu_s from "../HeaderTop/lunbotu_s";
	export default {
		components: {
			lunbotu_s, //抛出组件
		},
		data() {
			return {
				banner: [{
						image: require('../../../static/img/tp_banner1@2x.png')
					},
					{
						image: require('../../../static/img/tp_banner1@2x.png')
					},
					{
						image: require('../../../static/img/tp_banner1@2x.png')
					},
				],
				Loop: null,
				show: true,
				selectIndex: 0,
				lists: [{
						name: '多多',
						age: '11',
						height_y: '122',
						formal: '本科',
						time: '昨天',
						times: '11:11',
						yiduo: '已读',
						imgs: '../../../static/img/shiming.png',
						state: false
					},
					{
						name: '稍稍',
						age: '546',
						height_y: '5646',
						formal: '本科',
						time: '昨天',
						times: '22:22',
						yiduo: '未读',
						imgs: '../../../static/img/shiming.png',
						state: false
					},
					{
						name: '小小',
						age: '121',
						height_y: '12',
						formal: '本科',
						time: '昨天',
						times: '18:11',
						yiduo: '已读',
						imgs: '../../../static/img/shiming.png',
						state: false
					},
					{
						name: '笑笑',
						age: '121',
						height_y: '1232',
						formal: '本科',
						time: '昨天',
						times: '13:11',
						yiduo: '已读',
						imgs: '../../../static/img/shiming.png',
						state: false
					},
					{
						name: '心心',
						age: '111',
						height_y: '1222',
						formal: '本科',
						time: '昨天',
						times: '11:11',
						yiduo: '已读',
						imgs: '../../../static/img/shiming.png',
						state: false
					},
					{
						name: '心心',
						age: '111',
						height_y: '1222',
						formal: '本科',
						time: '昨天',
						times: '11:11',
						yiduo: '已读',
						imgs: '../../../static/img/shiming.png',
						state: false
					},
					{
						name: '心心',
						age: '111',
						height_y: '1222',
						formal: '本科',
						time: '昨天',
						times: '11:11',
						yiduo: '已读',
						imgs: '../../../static/img/shiming.png',
						state: false
					},
					{
						name: '心心',
						age: '111',
						height_y: '1222',
						formal: '本科',
						time: '昨天',
						times: '11:11',
						yiduo: '已读',
						imgs: '../../../static/img/shiming.png',
						state: false,

					},
				],
				dianji: '',
				recodeIndex:''
			}
		},
		methods: {
			// 长按出现删除改聊天
			touchin(index) {
				if(this.recodeIndex!=''){
					this.lists[this.recodeIndex].state=false;
					this.$refs.testDom[this.recodeIndex].style.background='#FFFFFF'
				}
				var that = this;
				this.dianji = index
				//					用ref点击相对应的下标让其变背景色
					this.$refs.testDom[index].style.background='#D7D7D7';
				this.Loop = setTimeout(function() {
					that.recodeIndex=index;
					that.Loop = 0;
					var lists = that.lists
					lists[index].state = !lists[index].state
					that.lists = lists
				}, 500);
				return false;
			},
			 //手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
			cleartime(index) {
				var that = this;
				clearTimeout(this.Loop);
				if(that.Loop != 0) {
				}
				return false;
			},
			// 点击跳转
			details(index) {
				this.$router.push("/chat");
				// 点击跳转传参
				// this.$router.push("/details?id=" + index);
			},
//			点击删除
			handdelete() {
//				console.log(this.dianji);
//				alert('点击删除');


				//					用ref点击相对应的下标让其恢复原来的背景颜色
//					this.$refs.testDom[this.dianji].style.background='#fff'

				this.lists.splice(this.dianji, 1)
			}
		}

	}
</script>

<style scoped lang="scss">
	/* 消息的大盒子 */

	.box {
		width: 100%;
		height: 100%;
		background: #f5f5f5;
		margin-bottom: 50px;
	}
	/* 轮播图 */

	.figure {
		width: 100%;
		text-align: center;
	}

	.figure>img {
		width: 95%;
		height: 70px;
	}
	/* 轮播图的圈 */

	.figure_q {
		width: 45px;
		height: 15.5px;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		/* border: 1px solid red; */
	}

	.figure_quan {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		margin-top: 4px;
		background: #F54663;
	}

	.figure_quan {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #F54663;
	}

	.figure_quan {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #F54663;
	}
	/* 消息列表 */

	.messages {
		width: 100%;
		display: flex;
    user-select:none;
	}

	.content-box {
		width: 93%;
		height: 72.5px;
		margin: 8px auto;
		background: #ffffff;
		position: relative;
		display: flex;
		border-radius: 5px;
	}
	/* 删除该聊天消息 */

	.dialogs {
		width: 175px;
		height: 70px;
		position: absolute;
		/* border: 1px solid red; */
		left: 28%;
		top: 45px;
		border-radius: 5px;
		z-index: 99;
	}
	/* 三角形 */

	.dialogs_triangle {
		width: 0;
		height: 0;
		border-right: 13px solid transparent;
		border-left: 13px solid transparent;
		border-bottom: 13px solid #ffffff;
		margin-left: 40%;
	}

	.dialogs_information {
		width: 175px;
		height: 55px;
		text-align: center;
		line-height: 55px;
		background: #ffffff;
		color: #F54663;
		font-size: 18px;
		font-weight: 500;
		letter-spacing: 3px;
		box-shadow:3px 3px 4px 0.1px #ccc;
		border-radius:5px;
	}
	/* 用户头像 */

	.content-t>img {
		width: 60.5px;
		height: 60.5px;
		margin-left: 6px;
		margin-top: 6px;
	}
	/* 消息优先 */

	.prioritize {
		position: absolute;
		left: 6px;
		top: 51px;
	}

	.prioritize>img {
		width: 60.5px;
		height: 15px;
	}
	/* 消息提醒 */

	.messages_q {
		width: 17px;
		height: 17px;
		font-size: 1px;
		color: #fff;
		text-align: center;
		line-height: 17px;
		border-radius: 50%;
		background: #FF4330;
		position: absolute;
		left: 57px;
		top: 0;
	}
	/* 消息列表 */

	.content-txt {
		width: 73%;
		height: 36px;
		display: flex;
		justify-content: space-between;
		margin-left: 3%;
		flex-wrap: wrap;
	}

	.named {
		display: flex;
		margin-top: 13.5px;
	}

	.named_mc {
		font-size: 15.5px;
		color: #202020;
		font-weight: 600;
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
		margin-top: 10px;
		margin-left: 1%;
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
</style>
