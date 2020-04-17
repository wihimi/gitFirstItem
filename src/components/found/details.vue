<template>
	<!-- 头部导航 -->
	<div>
		<div>
			<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"> </header-fixed-top>
		</div>
		<!-- 征婚说说主体内容 -->
		<div style="background-color: #fff;">
			<div class="marriage">
				<div class="vip">{{dataTable.title}}</div>
				<div style=" font-size: 14.37px;margin-top: 20px; ">
					<span style="color: #F54663;">{{dataTable.username}}</span>
					<span style="color: #ccc; margin-left: 12px;">{{dataTable.age}}岁 | {{dataTable.height}}厘米 | {{dataTable.educationalStatus|educationalStatusFilters}}</span>
				</div>
				<div class="marriage_time">{{dataTable.crtime}}</div>
				<div class="marriage_txt">{{dataTable.content}}</div>
				<div class="marriage_img">
					<img src="../../../static/img/zp_quan_da1.png" alt />
					<img src="../../../static/img/zp_quan_da1.png" alt />
					<img src="../../../static/img/zp_quan_da1.png" alt />
				</div>
			</div>
			<div class="original">
				<div class="original_txt">#{{dataTable.type|types}}</div>
				<div class="original_imgs">
					<div class="original_img">
						<img src="../../../static/img/icon_ck@2x.png" alt />
						<div>{{dataTable.readNum}}</div>
					</div>
					<div class="original_img" @click="critic">
						<img src="../../../static/img/icon_pl@2x.png" alt />
						<div>{{dataTable.replyNum}}</div>
					</div>
					<div class="original_img" @click="zan(dataTable.pid,dataTable.uid)">
						<img v-if="!dataTable.likeStatus" src="../../../static/img/icon_dianzhan.png" alt />
						<img v-if="dataTable.likeStatus" src="../../../static/img/icon_dianzhan2@3x.png" alt />
						<div>{{dataTable.likeStatus?dataTable.likeStatus:0}}</div>
					</div>
				</div>
			</div>

		</div>

		<!-- 底部评论回复 -->
		<div class="comment_back">
			<div class="comment_hf">
				<div class="comment_img">
					<img src="../../../static/img/touxiang_xiao.png" alt="">
				</div>
				<div style="width: 100%; margin-left: 10px;">
					<div class="comment_txt">
						<div class="comment_txts">三十二点</div>
						<div class="comment_sj">2019-01-23 15:32</div>
					</div>
					<div class="comment_nr">生活不易，且行且珍惜。</div>
				</div>
			</div>
			<!-- 楼主回复 -->
			<div class="comment_hf" style="margin-top: 20px;">
				<div class="comment_img">
					<img src="../../../static/img/touxiang_xiao.png" alt="">
				</div>
				<div style="width: 100%;margin-left: 10px;">
					<div class="comment_txt">
						<div class="comment_txts">三十二点</div>
						<div class="comment_sj">2019-01-23 15:32</div>
					</div>
					<div class="comment_nr"> 回复 <span style=" color: #F54663;">三十二点</span>： 生活不易，且行且珍惜。</div>
				</div>
			</div>

		</div>
		<!-- 底部发表评论 -->
		<div class="bottom_comment" v-show="!show">
			<input type="text" placeholder="输入评论内容">
			<img src="../../../static/img/icon_xiaolian.png" alt="">
			<van-button round type="info" color='#FF8048' class="xxx">发送</van-button>

		</div>
	</div>
</template>

<script>
	import { getPostList } from '@/request/api'; //引入api文件
	import axios from 'axios'
	import qs from 'qs'
	import HeaderFixedTop from '../HeaderTop/HeaderFixedTop'
	export default {
		data() {
			return {
				show: true,
				radio: '',
				showBackIcon: "true",
				title: "征婚说说",
				rightTitle: ''
			}
		},
		components: {
			HeaderFixedTop,
		},
		mounted() {
			this.title = this.$route.query.title;
			this.dataTable = this.$route.query.dataTable;
			console.log(this.$route.query.dataTable)
			console.log(this.$route.query.title)
		},
		methods: {
			// 点击评论出现input框
			critic: function() {
				this.show = !this.show
				this.radio = ''
			},
			goBack() {
				this.$router.push({
					path: "/found",
				});
			},
			goNavAdd() {
				//    this.$router.go(-1);
			},
			//	点赞接口
			zan(pid, uid) {
				var requestUrl = this.apiUrl + 'post/addPostReplyOrLike';
				var requestData = {
					uid: localStorage.getItem('uid'),
					ruid: uid,
					pid: pid,
					likeStatus:1
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
						if(!this.dataTable.likeStatus) {
							this.dataTable.likeStatus = 1
						} else {
							this.dataTable.likeStatus = null
						};
						getPostList({}).then(res => {
							console.log(res)
							var dataTable = res.data.list
							this.dataTable = dataTable
							var resourcesApi = this.resourcesApi
						})
					})
					.catch((error) => {})
			},
		}
	}
</script>

<style lang="scss" scoped>
	/* 征婚说说主体内容 */
	
	.marriage {
		width: 90%;
		// border: 1px solid red;
		margin: 0 auto;
		margin-top: 45px;
		.vip {
			font-size: 19px;
			padding-top: 20px;
		}
		.marriage_subtitle {
			color: #1F1F1F;
			font-size: 19px;
			font-weight: bold;
			position: relative;
		}
		.marriage_time {
			color: #B8B8B8;
			font-size: 14.41px;
			margin-top: 9.5px;
		}
		.marriage_txt {
			color: #444446;
			font-size: 16px;
			margin-top: 16px;
			line-height: 28px;
			// font-weight: 500;
		}
		.marriage_img {
			display: flex;
			justify-content: space-between;
			margin-top: 17.5px;
			img {
				width: 108px;
				height: 108px;
			}
		}
	}
	
	.original {
		width: 90%;
		height: 30px;
		display: flex;
		/*padding-top: 20px;*/
		justify-content: space-between;
		margin: 17.5px auto;
		//   margin-top: 17.5px;
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
	
	// 底部评论回复
	.comment_back {
		width: 100%;
		background: #EFEFEF;
		.comment_hf {
			width: 90%;
			// border: 1px solid red;
			margin: 0 auto;
			display: flex;
			.comment_img {
				img {
					width: 37px;
					height: 37px;
				}
			}
		}
	}
	
	.comment_txt {
		display: flex;
		justify-content: space-between;
		height: 26px;
		.comment_txts {
			color: #F54663;
			font-size: 16px;
		}
		.comment_sj {
			color: #959595;
			font-size: 13.76px;
			/*margin-left: 108px;*/
		}
	}
	
	.comment_hf {
		color: #323232;
		font-size: 16px;
	}
	
	// 底部发表评论
	.bottom_comment {
		width: 100%;
		height: 51.5px;
		background-color: #fff;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-around;
		input {
			width: 245px;
			height: 38.5px;
			border: 1px solid #DEDEDE;
			text-indent: 8px;
			color: #F54663;
			margin-top: 5px;
		}
		img {
			width: 24px;
			height: 24px;
			margin-top: 14px;
		}
		van-button {
			width: 60.5px;
			height: 39.5px;
			color: #fff;
			font-size: 15px;
		}
	}
	
	.xxx {
		border-radius: 5px;
		margin-top: 3px;
	}
</style>