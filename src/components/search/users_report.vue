<template>
	<!-- 头部导航 -->
	<div class="box">
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"> </header-fixed-top>
		<div class="txt" style=" margin-top: 55px;">
			<div class="txt1" style="border: none;">
				<div style="  margin-left: -10px;">被举报人：</div>
				<div></div>
				<div style="  margin-left: 20px;">{{userName}}</div>
			</div>
			<div class="txt1">
				<div style="  margin-left: -10px;">被举报ID： </div>
				<div></div>
				<div style="  margin-left: 20px;">{{userId}}</div>
			</div>
			<van-cell @click="showPopup" class="txt1">
				<div class="yuany">
					<div>
						举报原因：
					</div>
					<div style="  margin-left: 150px;color: #BFBFBF;">请选择 </div>
					<img style=" width: 6.5px;height: 11.5px;margin-left: 10px;margin-top:18px;" src="../../../static/img/icon_chela.png" alt="">
				</div>

			</van-cell>
		</div>

		<!-- 具体说明 -->
		<div class="specify" style=" margin-top: 10px;">
			<div class="specify_txt">
				<div style="margin-left: 16px;font-size: 15px; color: #313131; font-weight: 556;">具体说明</div>
			</div>
			<div class="specify_txts">
				<div style="margin-left: 16px;">
					<textarea class="text" v-model="reportText" placeholder="请输入举报详细说明"></textarea>
				</div>
				<div style="margin-left: 88%; color:#9B9B9B; font-size: 13px;">{{zjxContentCountMax}}</div>
			</div>
		</div>
		<!-- 上传凭证 -->
		<div class="specify" style=" margin-top: 10px;">
			<div class="specify_txt">
				<div style="margin-left: 16px;font-size: 15px; color: #313131; font-weight: 556;">具体说明</div>
			</div>
			<div class="specify_txts flex flex_wrap">
				<div class="pictures_img mr_image" v-for="(item,nn) in postData" :key="nn">
					<img class="img" :src="item.content" alt="图片">
					<van-icon name="close" @click="delImg(nn)" class="delte" />

				</div>
				<van-uploader :after-read="onRead" :accept="'image/*'" v-show="postData.length<=8">
					<div class="pictures_img">+</div>
				</van-uploader>
				<!--				<input id="file" type="file" accept="image/*" capture="camera"/>-->
				<!--<div class="pictures_img">+</div>-->

			</div>
		</div>

		<!-- 有效举报一次奖励20积分，恶意举报一次扣罚20积分。 -->
		<div class="specify" style=" margin-top: 10px;background:none; margin-bottom:100px;">
			<div class="zi">
				有效举报一次奖励20积分，恶意举报一次扣罚20积分。
			</div>
		</div>
		<!-- 底部按钮 -->
		<van-button class="step" type="primary" size="large" color="#ff8737" @click="clickOne">立即提交</van-button>
		<!-- 弹出举报原因 -->
		<van-popup v-model="shows" capture="camera" position="bottom" :style="{ height: '30%' }">
			<van-picker :columns="columns" @change="onChange" />
		</van-popup>

	</div>
</template>

<script>
	import HeaderFixedTop from '../HeaderTop/HeaderFixedTop'
	import Vue from 'vue';
	import { Uploader } from 'vant';
	import axios from 'axios'
	import qs from 'qs'
	let fd = new FormData();
	Vue.use(Uploader);
	export default {
		data() {
			return {
				postData: [],
				shows: false,
				show: false,
				showBackIcon: "true",
				title: "用户举报",
				rightTitle: '',
				columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
				userName: '',
				userId: '',
				reportText: '',
				uid: '',
				phone: '',
				firImg: ''
			}
		},
		components: {
			HeaderFixedTop,

		},
		watch: {
			reportText() {
				if(this.reportText.length > 500) {
					this.reportText = String(this.reportText).slice(0, 500);
				}
			}
		},
		mounted() {

		},
		created(option) {
			this.userName = this.$route.query.userName,
				this.userId = this.$route.query.uid,
				this.phone = this.$route.query.phone
		},
		methods: {
			delImg(index) {
				// 删除指定下标的图片对象
				if(isNaN(index) || index >= this.postData.length) {
					return false
				}
				let tmp = []
				for(let i = 0, len = this.postData.length; i < len; i++) {
					if(this.postData[i] !== this.postData[index]) {
						tmp.push(this.postData[i])
					}
				}
				this.postData = tmp
			},
			onRead(file) {
				this.postData.push(file);
				// this.createImage(file.file)

			},
			//举报
			jubao(requestData){
					var requestUrl = this.apiUrl + 'tipOff/addTipOff';
					axios.post(requestUrl, qs.stringify(requestData), {
									headers: {
										'Content-Type': 'application/x-www-form-urlencoded',
										'token':localStorage.getItem('token')
									}
							}).then((res1) => {
									var resdata2 = res1.data;
									if(resdata2.code == 200) {
										this.$toast(resdata2.msg);
										this.$router.go(-1);
									} else {
										this.$toast(resdata2.msg)
									}
									console.log(res1)
								})
								.catch((error) => {})
			},
			
			clickOne() {
				
				for(var i = 0; i < this.postData.length; i++) {
					fd.append('file', this.postData[i].file);
				}
				fd.append('business', 'PHOTO');
				fd.append('type', 'IMAGE');
				var requestUrlfile = this.apiUrl + 'file/uploadFile';
				axios.post(requestUrlfile, fd, {
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					}).then((res) => {
						var resdata = res.data;
						if(resdata.code == 200) {
							var imgList = resdata.data;
							var requestData={
								uid: localStorage.getItem('uid'),
								phone: this.phone,
								cause: 1,
								ruid: this.userId,
								rusername: this.userName,
								description: this.reportText,
								//	voucher: imgList,/IMAGE/PHOTO/a02f10e65f614b109baebcf7173b0e13_20191203.jpg
								voucher:imgList
							}
							this.jubao(requestData);
						} else {
							this.$toast(resdata.msg)
						}
					})
					.catch((error) => {})
			},
			// 返回布尔值
			showPopup() {
				this.shows = true;
			},
			onChange(picker, value, index) {
				Toast(`当前值：${value}, 当前索引：${index}`);
			},
			goBack() {
				this.$router.go(-1);
			},
			goNavAdd() {
				this.$router.go(-1);
			},
			//图片上传
			createImage(file) {
				console.log('偷得浮生闲');
				console.log(file.name);
				let reader = new FileReader();
				let self = this
				var firImg = '';
				reader.onload = e => {
					let result = e.target.result
					let img = new Image()
					img.src = result;
					var aaa = {};
					console.log('********未压缩前的图片大小********')
					console.log(result.length / 1024)
					if(result.length / 1024 > 1) {
						img.onload = function() {
							//0.6为压缩的程度，数值越小，压缩的文件越小，图片也会越模糊
							firImg = self.compress(img, 0.6);
							var urlFile = self.dataURLtoFile(firImg); //base64文件

							// let fileTemp = self.blobToFile(urlFile,'aaa');
							// let fileTemp2  = self.dataURLtoFile(urlFile,file.name);
							console.log(firImg);
							console.log(urlFile);
							// console.log(fileTemp2);
							aaa = {
								file: urlFile,
								content: firImg
							}
							this.postData.push(aaa);
						}
					} else {
						firImg = result
					}
					// this.postData.push(firImg);
					console.log(this.postData);
				};
				// 读取图像
				reader.readAsDataURL(file);
			},
			blobToFile(theBlob, fileName) {

				theBlob.lastModifiedDate = new Date();

				theBlob.name = fileName;

				return theBlob;

			},
			dataURLtoFile(dataurl, filename) {
				var arr = dataurl.split(","),
					mime = arr[0].match(/:(.*?);/)[1],
					bstr = atob(arr[1]),
					n = bstr.length,
					u8arr = new Uint8Array(n);
				while(n--) {
					u8arr[n] = bstr.charCodeAt(n);
				}
				return new File([u8arr], filename, {
					type: mime
				});
			},
			convertBase64UrlToBlob(urlData) {

				var arr = urlData.split(','),
					mime = arr[0].match(/:(.*?);/)[1],

					bstr = atob(arr[1]),
					n = bstr.length,
					u8arr = new Uint8Array(n);

				while(n--) {

					u8arr[n] = bstr.charCodeAt(n);

				}

				return new Blob([u8arr], {
					type: mime
				});

			},

			blobToFile(theBlob, fileName) {

				theBlob.lastModifiedDate = new Date();

				theBlob.name = fileName;

				return theBlob;

			},
			// 压缩图片
			compress(img, size) {
				let canvas = document.createElement('canvas')
				let ctx = canvas.getContext('2d')
				let initSize = img.src.length
				let width = img.width
				let height = img.height
				canvas.width = width
				canvas.height = height
				// 铺底色
				ctx.fillStyle = '#fff'
				ctx.fillRect(0, 0, canvas.width, canvas.height)
				ctx.drawImage(img, 0, 0, width, height)
				//进行最小压缩
				let ndata = canvas.toDataURL('image/jpeg', size)
				console.log('*******压缩后的图片大小*******')
				console.log(ndata.length / 1024)
				return ndata
			},
		},
		computed: {
			//显示是否选择的分类
			zjxContentCountMax() {
				var nowLength = 0;
				if(this.reportText.length) {
					nowLength = 500 - this.reportText.length
				}
				return this.reportText.length ? nowLength : 500
			},

		}
	}
</script>

<style lang="scss" scoped>
	@import url("../../styles/mycomstyle.css");
	.upload-img-5 {
		margin: 5px 0 90px 0;
	}
	
	.upload-img-1 {
		margin: 5px 0 15px 0;
	}
	
	.yuany {
		display: flex;
		margin-top: -12px;
		margin-left: 5px;
	}
	
	.box {
		/*width: 100%;
		height: 100%;
		position: fixed;
		background: #F1F1F1;*/
	}
	
	.txt {
		width: 95%;
		background: #fff;
		margin: 0 auto;
		border-radius: 8px;
		.txt1 {
			width: 93%;
			height: 45px;
			margin: 0 auto;
			line-height: 45px;
			border-top: 1px solid #EAEAEA;
			display: flex;
			justify-content: space-around;
			;
			font-size: 14px;
			color: #2E2E2E;
		}
	}
	
	// 具体说明
	.specify {
		width: 95%;
		background: #fff;
		margin: 0 auto;
		border-radius: 8px;
		.specify_txt {
			width: 93%;
			height: 45px;
			margin: 0 auto;
			line-height: 45px;
			// border-top: 1px solid #EAEAEA;
			font-size: 14px;
			color: #2E2E2E;
		}
		.specify_txts {
			width: 93%;
			margin: 0 auto;
			line-height: 25px;
			border-top: 1px solid #EAEAEA;
			font-size: 14px;
			color: #2E2E2E;
			padding: 10px;
		}
	}
	
	// 文本域
	.text {
		width: 100%;
		height: 90px;
		color: #A0A0A0;
		font-size: 15px;
		border: none;
	}
	
	// 上传凭证
	.pictures_img {
		width: 60px;
		height: 60px;
		background: #EFEFEF;
		font-size: 40px;
		font-weight: 100;
		color: #ccc;
		text-align: center;
		line-height: 54px;
		position: relative;
		.img {
			width: 100%;
			height: 100%;
		}
		.delte {
			position: absolute;
			top: 0;
			right: 0;
			font-size: 16px;
			color: black;
		}
	}
	
	// 有效举报一次奖励20积分，恶意举报一次扣罚20积分。
	.zi {
		width: 80%;
		margin: 14px auto;
		font-size: 14px;
		color: #7B7B7B;
	}
	/* 底部 */
	
	.step {
		width: 90%;
		height: 56px;
		border-radius: 5px;
		position: fixed;
		bottom: 10px;
		left: 5%;
	}
	
	.mr_image {
		margin-right: 6px;
		margin-bottom: 6px;
	}
	
	.flex_wrap {
		flex-wrap: wrap;
	}
</style>