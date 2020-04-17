<template>
	<div class="box">
		<!--顶部内容切换-->
		<div class="boxss">
			<div class="search_content">
				<div class="sousuos" @click="change(1)" :class="{'active':currentSort==1}">晒靓照</div>
				<div class="sousuo" @click="change(2)" :class="{'active':currentSort==2}">发帖征婚</div>
				<div class="sousuo" @click="change(3)" :class="{'active':currentSort==3}">
					婚恋课堂
					<div class="">
						<div class="quan">

						</div>
					</div>
				</div>
				<div class="sousuo" @click="change(4)" :class="{'active':currentSort==4}">成功故事</div>
			</div>
		</div>
		<!--晒靓照 --------------------------------------------------------- -->
		<div v-show="currentSort==1">
			<div id="bj">
				<!-- input框 -->
				<div class="search">
					<img src="../../assets/icon_shousuo2@2x.png" />
					<!--搜索输入框-->
					<div class="search_value">
						<input type="text" placeholder="请输入用户名或ID" />
					</div>
				</div>
				<!-- 分类 -->
				<div class="photos">
					<van-dropdown-menu id="photos">
						<van-dropdown-item v-model="value1" :options="option1" />
						<van-dropdown-item v-model="value2" :options="option2" />
					</van-dropdown-menu>
					<div class="photos_box" @click="sun_photos">
						<div class="photos_txt">晒靓照</div>
						<div class="photos_tu">
							<img src="../../../static/img/icon_liangzhao_jia.png" alt />
						</div>
					</div>
				</div>
			</div>
			<!-- 主体内容 -->
			<div class="main_box" id="boxs">
				<div class="main">
					<img v-for="img in imageList" v-lazy="img">
					<!--<img src="../../../static/img/zp_quan_da1.png" alt />
            <img src="../../../static/img/zp_quan_da1.png" alt />-->
				</div>
			</div>
			<!-- 新增会员靓照 -->
			<div class="vip">新增会员靓照 133 张</div>
			<!-- 渐变样式 -->
			<div class="path"></div>
		</div>
		<!-- 征婚说说----------------------------------------------- -->
		<div v-show="currentSort==2">
			<div id="bj">
				<!-- input框 -->
				<div class="search">
					<img src="../../assets/icon_shousuo2@2x.png" />
					<!--搜索输入框-->
					<div class="search_value">
						<input type="text" placeholder="请输入用户名或ID" />
					</div>
				</div>
				<!-- 分类 -->
				<div class="photos">
					<van-dropdown-menu id="photos">
						<van-dropdown-item v-model="value1" :options="option3" />
						<van-dropdown-item v-model="value2" :options="option4" />
					</van-dropdown-menu>
					<div class="photos_box">
						<div class="photos_tu" @click="release">
							<div class="photos_txt" style="width: 36px;">发帖</div>
							<img src="../../../static/img/icon_liangzhao_jia.png" alt />
						</div>
					</div>
				</div>
			</div>
			<!-- 征婚说说主体内容 -->
			<div class="boxs">
				<!-- 新增帖子 122 篇 -->
				<div class="vip">新增帖子 122 篇</div>
				<div class="marriage" v-for="(item,index) in dataTable">
					<div @click="details(index)">
						<div class="marriage_subtitle" style="font-size: 15.5px;color: #202020;">{{item.title}}</div>

						<div class="marriage_time">{{item.crtime}}</div>
						<div class="marriage_txt">{{item.content}}</div>
						<div class="marriage_img">
							<img src="../../../static/img/zp_quan_da1.png" alt />
							<img src="../../../static/img/zp_quan_da1.png" alt />
							<img src="../../../static/img/zp_quan_da1.png" alt />

							<!--<img :src = resourcesApi + headPortrait/>-->
							<!--<img v-for="img in imageList" v-lazy="img" >-->
							{{item.photoes}}
						</div>
					</div>
					<div class="original">
						<div class="original_txt">#{{item.type|types}}</div>
						<div class="original_imgs">
							<div class="original_img">
								<img src="../../../static/img/icon_ck@2x.png" alt />
								<div>{{item.readNum}}</div>
							</div>
							<div class="original_img" @click="pl">
								<img src="../../../static/img/icon_pl@2x.png" alt />
								<div>{{item.replyNum}}</div>
							</div>
							<div class="original_img" @click="zan(index,item.pid,item.uid)">
								<img v-if="!item.likeStatus" src="../../../static/img/icon_dianzhan.png" alt />
								<img v-if="item.likeStatus" src="../../../static/img/icon_dianzhan2@3x.png" alt />
								<!--<img src="../../../static/img/icon_dianzhan@3x.png" alt />-->
								<div>{{item.likeStatus?item.likeStatus:0}}</div>
								<!--<div>{{likeNum?likeNum:0}}</div>-->

							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
		<!-- 婚恋课堂-------------------------------------------------------- -->
		<div v-show="currentSort==3">
			<!-- input框 -->
			<div class="search">
				<img src="../../assets/icon_shousuo2@2x.png" />
				<!--搜索输入框-->
				<div class="search_value">
					<input type="text" placeholder="请输入用户名或ID" />
				</div>
			</div>
			<!-- 选项卡 -->
			<van-tabs v-model="active" @click="changeTab" line-width="60" title-active-color='#F54663' background='#f1f1f1'>

				<van-tab v-for="(itemTab,indexTab) in 4" :title="tabList[indexTab]">
					<div class="posts">
						<div class="postss">
							<div class="posts_bt">
								<span style="  font-size: 13px;color: #3199FA;">置顶</span>
								<span style="font-size: 13px;   margin-left: 10px;">[婚恋话题] 年龄差会导致婚姻问题吗?</span>
							</div>
							<div class="posts_bts">
								<span style="  font-size: 13px;color: #3199FA;">置顶</span>
								<span style="font-size: 13px;   margin-left: 10px;">[婚恋话题] 年龄差会导致婚姻问题吗?</span>
							</div>
						</div>

					
						<!--婚恋课堂主体内容-->
						<div class="marriage" style="margin-top: 10px;" v-for="(item,index) in dataTable">
							<div @click="details(index)">
								<div class="marriage_box">
									<div class="marriage_subtitle">
										{{item.title}}
										<div class="marriage_tu">
											精
										</div>
									</div>
								</div>
								<div class="marriage_time">{{item.crtime}}</div>
								<div class="marriage_txt">{{item.content}}</div>
								<div class="marriage_img">
									<img src="../../../static/img/zp_quan_da1.png" alt />
									<img src="../../../static/img/zp_quan_da1.png" alt />
									<img src="../../../static/img/zp_quan_da1.png" alt />
								</div>
							</div>
							<div class="original">
								<div class="original_txt">#{{item.type|types}}</div>
								<div class="original_imgs">
									<div class="original_img">
										<img src="../../../static/img/icon_ck@2x.png" alt />
										<div>{{item.readNum}}</div>
									</div>
									<div class="original_img" @click="pl">
										<img src="../../../static/img/icon_pl@2x.png" alt />
										<div>{{item.replyNum}}</div>
									</div>

									<div class="original_img" @click="zan(index,item.pid,item.uid)">
										<img v-if="!item.likeStatus" src="../../../static/img/icon_dianzhan.png" alt />
										<img v-if="item.likeStatus" src="../../../static/img/icon_dianzhan2@3x.png" alt />
										<!--<img src="../../../static/img/icon_dianzhan@3x.png" alt />-->
										<div>{{item.likeStatus?item.likeStatus:0}}</div>
										<!--<div>{{likeNum?likeNum:0}}</div>-->

									</div>

									<!--<div class="original_img" @click="zan(index)">
                <img v-if="isClick==0" src="../../../static/img/icon_dianzhan.png" alt />
                <img v-if="isClick==1" src="../../../static/img/icon_dianzhan2@3x.png" alt />  
                <div>{{clickNum?clickNum:0}}</div>
              </div>-->
								</div>
							</div>
						</div>
	
					</div>
					<!-- 两图标 -->
					<div class="ann">
						<div>
							<img src="../../../static/img/fx_icon_add.png" alt="">
						</div>
						<div>
							<img src="../../../static/img/fx_icon_jt.png" alt="">
						</div>
					</div>
					<div v-show="dataTable.length==0" style="background-color: #F1F1F1;text-align: center;font-size: 20px;line-height: 100px;color: #ccc;">
							暂无此类帖子
						</div>
				</van-tab>

			</van-tabs>
			<!--秀恩爱---------------------------------------------------------------------->
		</div>
		<div v-show="currentSort==4">
			<!--头部-->
			<div class="show_love">
				<div class="show-tu">
					<img src="../../../static/img/4@3x.png" />
				</div>
				<div class="show-txt">
					<div class="show-txt1">#找到了真爱#</div>
					<div class="show-txt2">
						2018年6月6日领证的，快四个月了，潮汕这边的风俗四个月内和和气气，以后日子也差不多就是这种模式。心理学上好像也有个类似这种
					</div>
					<div class="show-txt3">
						<span class="show-txt4">寻找真爱的姑娘</span>
						<span class="show-txt5">的爱情故事 </span>
					</div>
				</div>
			</div>
			<!--成功故事-->
			<div class="success-stories">
				<div class="success-txt">
					其他会员的成功故事
				</div>

				<div class="success-tu" @click="show_love">
					<div class="success-tu1">
						<span>晒幸福 </span>
					</div>
					<div class="success-tu2">
						<img src="../../../static/img/icon_liangzhao_jia.png" />
					</div>

				</div>
			</div>
			<!--主体内容-->
			<div class="main-content">
				<div class="main-content1" @click="dianji">
					<div class="main-tu1">
						<img src="../../../static/img/2399@3x(5).png" />
					</div>
					<div class="main-tu2">#文文的恩爱空间#</div>
					<div class="main-tu3">文文#</div>
				</div>
				<div class="main-content1">
					<div class="main-tu1">
						<img src="../../../static/img/2399@3x(5).png" />
					</div>
					<div class="main-tu2">#文文的恩爱空间#</div>
					<div class="main-tu3">文文#</div>
				</div>
				<div class="main-content1">
					<div class="main-tu1">
						<img src="../../../static/img/2399@3x(5).png" />
					</div>
					<div class="main-tu2">#文文的恩爱空间#</div>
					<div class="main-tu3">文文#</div>
				</div>
				<div class="main-content1">
					<div class="main-tu1">
						<img src="../../../static/img/2399@3x(5).png" />
					</div>
					<div class="main-tu2">#文文的恩爱空间#</div>
					<div class="main-tu3">文文#</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Lazyload } from 'vant';
	Vue.use(Lazyload);
	import axios from 'axios'
	import qs from 'qs'
	import { getPostList } from '@/request/api'; //引入api文件
	export default {
		data() {
			return {
				show: false,
				likeNum: '',
				isClick: '', //点赞状态
				clickNum: '', //点赞次数
				currentSort: '1',
				active: 0,
				actives: 1,
				value1: 0,
				value2: "a",
				value: "",
				dataTable: '', //帖子数据
				imageList: [
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
					'../../../static/img/zp_quan_da1.png',
				],
				option1: [{
						text: "默认排序",
						value: 0
					},
					{
						text: "官方",
						value: 1
					},
					{
						text: "转载",
						value: 2
					},
					{
						text: "原创",
						value: 3
					},
				],
				option2: [{
						text: "所在地区",
						value: "a"
					},
					{
						text: "好评排序",
						value: "b"
					},
					{
						text: "销量排序",
						value: "c"
					}
				],
				option3: [{
						text: "全部帖子",
						value: 0
					},
					{
						text: "GG征婚",
						value: 1
					},
					{
						text: "MM征婚",
						value: 2
					},
					{
						text: "网站公告",
						value: 3
					},
					{
						text: "成功故事",
						value: 4
					},
					{
						text: "评价网站",
						value: 5
					},
					{
						text: "曝光骗子",
						value: 6
					},
					{
						text: "寻求帮助",
						value: 7
					},
					{
						text: "反馈意见",
						value: 8
					},
					{
						text: "婚恋话题",
						value: 9
					},
					{
						text: "婚恋骗局",
						value: 10
					},
					{
						text: "婚恋指南",
						value: 11
					},
					{
						text: "晒幸福",
						value: 12
					},
				],
				option4: [{
						text: "默认排序",
						value: "a"
					},
					{
						text: "官方",
						value: 1
					},
					{
						text: "转载",
						value: 2
					},
					{
						text: "原创",
						value: 3
					},
				],
				tabList: ['全部帖子', '婚恋话题', '婚恋骗局', '婚恋指南'],
				tabIndex: 0
			};
		},
		created() {
			if(localStorage.getItem('currentSort')) {
				this.currentSort = localStorage.getItem('currentSort')
			}
			//			if(localStorage.getItem('actives')){
			//					console.log(localStorage.getItem('actives'))
			//			this.actives=	localStorage.getItem('actives');
			//			console.log(	this.actives)
			//			}
			//			if(this.$route.query.currentSort) {
			//				//				console.log(this.$route.query.currentSort)
			//				this.currentSort = this.$route.query.currentSort
			//			}

		},
		//贴子列表接口
		mounted() {
			if(localStorage.getItem('actives')) {
				this.active = parseInt(localStorage.getItem('actives'));
				this.changeTab(this.active,'');
			}else{
				getPostList({
				// 			uId:'af858952',
			}).then(res => {
				console.log(res)
				var dataTable = res.data.list
				this.dataTable = dataTable
				var resourcesApi = this.resourcesApi
				// 			console.log(resourcesApi) 
			})
			}
			
		},
		methods: {
			changeTab(name, title) {
				this.tabIndex = name;
				this.actives = name;
				localStorage.setItem('actives', name);

				getPostList({}).then(res => {
					var dataTable = res.data.list;
					var temp = [];
					if(name == 0) {
						this.dataTable = dataTable;
					}
					if(name == 1) {
						for(var i = 0; i < dataTable.length; i++) {
							if(dataTable[i].postType == 9) {
								temp.push(dataTable[i]);
							} else {
								this.show = !this.show
							}
							this.dataTable = temp;
						}
					}
					if(name == 2) {
						for(var i = 0; i < dataTable.length; i++) {
							if(dataTable[i].postType == 10) {
								temp.push(dataTable[i]);
							} else {
								this.show = !this.show
							}
							this.dataTable = temp;
						}
					}
					if(name == 3) {
						for(var i = 0; i < dataTable.length; i++) {
							if(dataTable[i].postType == 11) {
								temp.push(dataTable[i]);
							} else {
								this.show = !this.show
							}
							this.dataTable = temp;
						}
					}

				})
			},
			//	类型切换
			change(index) {
				//alert(index)
				this.currentSort = index;
				localStorage.setItem('currentSort', index)
			},
			//	评论接口
			pl() {
				var requestUrl = this.apiUrl + 'post/getPostReplyList';
				var requestData = {
					uid: localStorage.getItem('uid'),
					ruid: 'c9627304',
				};
				axios.post(requestUrl,
						qs.stringify(requestData), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded',
								token: localStorage.getItem("token")
							}
						},
					).then(res => {
						console.log(res);
					})
					.catch((error) => {})
			},
			//	点赞接口
			zan(index, pid, uid) {
				var requestUrl = this.apiUrl + 'post/addPostReplyOrLike';
				var requestData = {
					uid: localStorage.getItem('uid'),
					ruid: uid,
					pid: pid,
					likeStatus: 1
				};
				axios.post(requestUrl,
						qs.stringify(requestData), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded',
								token: localStorage.getItem("token")
							}
						},
					).then(res => {
						console.log(res);

						if(!this.dataTable[index].likeStatus) {
							this.dataTable[index].likeStatus = 1
						} else {
							this.dataTable[index].likeStatus = null
						};
						getPostList({
							// 			uId:'af858952',
						}).then(res => {
							console.log(res)
							var dataTable = res.data.list
							this.dataTable = dataTable
							var resourcesApi = this.resourcesApi
							// 			console.log(resourcesApi) 
						})
					})
					.catch((error) => {})
			},
			// 点击跳转
			release() {
				// 跳到聊天页面
				this.$router.push("/release");
			},
			// 跳到征婚说说
			details(index) {
				//  	贴子详情接口
				this.$router.push("/details");
				this.$router.push({
					path: '/details',
					query: {
						title: this.tabList[this.tabIndex],
						dataTable: this.dataTable[index]
					}
				});
			},
			// 跳到晒靓照发布
			sun_photos() {
				this.$router.push("/sun_photos");
			},
			//跳到晒幸福发布
			show_love() {
				this.$router.push("/ShowOfAffection");
			},
			//跳到恩爱空间
			dianji() {
				this.$router.push("/show_love");
			}
		}
	};
</script>

<style lang="scss" scoped>
	.box {
		width: 100%;
		height: 100%;
	}
	/*顶部内容切换*/
	
	.boxss {
		width: 100%;
		height: 100%;
		background: #fff;
	}
	
	.search_content {
		width: 85%;
		display: flex;
		height: 44px;
		line-height: 44px;
		justify-content: space-between;
		margin: 0 auto;
	}
	
	.sousuos {
		color: #949494;
		font-size: 14px;
		width: 44px;
	}
	
	.sousuo {
		color: #949494;
		font-size: 14px;
		width: 60px;
		position: relative;
	}
	
	.active {
		border-bottom: 2.5px solid #f54663;
		color: #f54663;
	}
	
	.boxs {
		width: 100%;
		background: #fff;
	}
	
	.quan {
		width: 7.5px;
		height: 7.5px;
		left: 58px;
		top: 10px;
		position: absolute;
		border-radius: 50px;
		background-color: #FF4330;
	}
	/* 新增会员靓照 ---------------------------------------------- */
	
	.vip {
		width: 100%;
		height: 32px;
		background: #f54663;
		opacity: 0.9;
		position: absolute;
		color: #ffffff;
		font-size: 13px;
		line-height: 32px;
		text-align: center;
		letter-spacing: 2px;
		left: 0;
		top: 130px;
	}
	/* 渐变样式 */
	
	.path {
		/* border: 1px solid red; */
		left: 0;
		bottom: 50px;
		width: 100%;
		height: 100px;
		/* position: absolute; */
		position: fixed;
		background: linear-gradient( bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
	}
	/* 晒靓照 */
	
	#photos {
		width: 70%;
		height: 39px;
		/* border: 1px solid red; */
	}
	
	#photos /deep/ .van-dropdown-menu__title {
		/* border: 1px solid red; */
		margin-right: 45%;
		background: #f1f1f1;
		font-size: 15.5px;
		font-weight: 530;
		color: #444446;
	}
	
	#photos /deep/ .van-dropdown-menu__item {
		width: 100px;
		background: #f1f1f1;
	}
	
	.photos {
		display: flex;
		justify-content: space-around;
	}
	
	.photos_box {
		display: flex;
	}
	
	.photos_txt {
		width: 50px;
		height: 39px;
		line-height: 39px;
		font-size: 15.5px;
		/* border: 1px solid red; */
		color: #ff773b;
	}
	
	.photos_tu {
		line-height: 47px;
		display: flex;
	}
	
	.photos_tu>img {
		width: 16px;
		height: 16px;
		margin-top: 11px;
	}
	/* 晒照片主体内容 */
	
	.main_box {
		width: 100%;
		/*flex-wrap: wrap;*/
		margin-bottom: 50px;
		.main {
			display: flex;
			flex-wrap: wrap
		}
		img {
			width: 118px;
			height: 165px;
		}
	}
	/* 征婚说说主体内容-------------------------------------------- */
	
	.marriage {
		width: 90%;
		// border: 1px solid red;
		margin: 0 auto;
		.marriage_box {
			display: flex;
			.marriage_subtitle {
				color: #202020;
				font-size: 15.5px;
				font-weight: bold;
				position: relative;
			}
			.marriage_tu {
				width: 17px;
				height: 17px;
				line-height: 17px;
				text-align: center;
				background-image: url(../../../static/img/jingping@3x.png);
				background-repeat: no-repeat;
				background-size: 100% 100%;
				font-size: 10px;
				color: #FEFEFF;
				display: inline-block;
			}
		}
		.marriage_time {
			color: #c2c2c2;
			font-size: 12.86px;
			margin-top: 5px;
		}
		.marriage_txt {
			color: #444446;
			font-size: 14.25px;
			margin-top: 10px;
			word-break: break-word;
		}
		.marriage_img {
			display: flex;
			margin-top: 17.5px;
			img {
				width: 34%;
				height: 80px;
			}
		}
	}
	
	.original {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 17.5px;
		.original_txt {
			color: #7f7f7f;
			font-size: 13.97px;
		}
	}
	
	.original_imgs {
		display: flex;
		justify-content: space-between;
		color: #7f7f7f;
		font-size: 13.97px;
		.original_img {
			display: flex;
			margin-left: 15px;
			img {
				width: 18px;
				height: 18px;
				margin-right: 5px;
			}
		}
	}
	/*// 婚恋课堂样式-----------------------------------------*/
	
	.posts {
		width: 100%;
		background: #fff;
		.postss {
			width: 100%;
			height: 70px;
			border-bottom: 1px solid #F1F1F1;
			.posts_bt {
				width: 90%;
				height: 38.5px;
				line-height: 38.5px;
				margin: 0 auto;
			}
			.posts_bts {
				width: 90%;
				height: 30px;
				/*line-height: 38.5px;*/
				margin: 0 auto;
			}
		}
	}
	/*// 两图标*/
	
	.ann {
		position: fixed;
		left: 87%;
		top: 26%;
	}
	/*秀恩爱----------------------------------------------------------------------*/
	
	.show_love {
		width: 93%;
		/*width: 375px;*/
		height: 114px;
		margin: 0 auto;
		background: #FFF1F1;
		border-radius: 10px;
		display: flex;
		margin-top: 20px;
		.show-tu {
			margin-top: 9.5px;
			margin-left: 8px;
			img {
				width: 144px;
				height: 95px;
			}
		}
		.show-txt {
			width: 165px;
			margin-left: 11.5px;
			margin-top: 9.5px;
			.show-txt1 {
				font-size: 11px;
				color: #F54663;
				font-weight: 600;
			}
			.show-txt2 {
				font-size: 7px;
				color: #555555;
				margin-top: 9px;
			}
			.show-txt3 {
				font-size: 8px;
				margin-top: 14.5px;
				.show-txt4 {
					color: #F54663;
					margin-left: 58.5px;
				}
				.show-txt5 {
					color: #555555;
				}
			}
		}
	}
	/*成功故事*/
	
	.success-stories {
		width: 93%;
		height: 20px;
		line-height: 20px;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		margin-top: 10px;
		/*border: 1px solid red;*/
		.success-txt {
			color: #444446;
			font-size: 15.5px;
		}
		.success-tu {
			display: flex;
			.success-tu1 {
				span {
					color: #FF773B;
					font-size: 15.5px;
					margin-right: 5px;
				}
			}
			.success-tu2 {
				margin-top: 1px;
				img {
					height: 13.5px;
					width: 13.5px;
				}
			}
		}
	}
	/*主体内容*/
	
	.main-content {
		width: 93%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		/*border: 1px solid red;*/
		flex-wrap: wrap;
		.main-content1 {
			width: 160px;
			height: 155px;
			background: #fff;
			margin-top: 10px;
			.main-tu1 {
				margin-top: 7.5px;
				margin-left: 3.5px;
				img {
					width: 152px;
					height: 102px;
				}
			}
			.main-tu2 {
				text-align: center;
				font-size: 12px;
				color: #F54663;
			}
			.main-tu3 {
				margin-top: 2px;
				text-align: center;
				font-size: 10px;
				color: #767575;
			}
		}
	}
	/*搜索框*/
	
	.search {
		width: 345px;
		height: 35px;
		background: #fff;
		margin: 0 auto;
		display: flex;
		border-radius: 20px;
		margin-top: 15px;
	}
	
	.search img {
		width: 16px;
		height: 16px;
		margin-top: 10.5px;
		margin-left: 13px;
	}
	
	.search_value input:focus {
		text-decoration: none;
		outline: none;
	}
	
	.search_value input {
		border: none;
		color: #919399;
		font-size: 15.5px;
	}
	
	.search_value {
		margin-top: 6.5px;
		margin-left: 8.5px;
	}
</style>