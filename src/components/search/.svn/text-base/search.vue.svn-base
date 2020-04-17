<template>
	<div id="search">
		<div class="bigBox">
			<!--调用封装好的轮播图-->
      <lunbotu_s :banner="banner">></lunbotu_s>
		</div>
		<!-- 模态框 -->
		<div class="dialog" v-show="showWhetherVip">
			<img src="../../../static/img/hyfl.png" alt="">
			<div class="dialog_txt1"> 此功能为VIP会员特权</div>
			<div class="dialog_txts1">给最新注册会员发信，更易收到回信</div>
			<div class="dialog_txt2">会员尊享20多项特权，快速提高成功率</div>
			<div class="dialog_txt">立即升级会员 </div>
			<div class="dialog_txts" @click="notOpenVip">暂不升级会员</div>
		</div>
		<div class="top">
			<div class="test"></div>

			<!--顶部轮播-->

			<!--<div class="lunbo">
					<img src="/static/img/banner2@2x.5288369.png" alt="" />
				<img src="../../assets/banner2@2x.png" alt="" />
			</div>-->
			<!--轮播图按钮-->
			<!--<div class="lunbo_btn">
				<img src="../../assets/icon_dian1.png" alt="" />
			</div>-->
			<!--搜索-->
      <!--<div style="margin-top: 20px"></div>-->
			<com-search :username="username" @dianji='dianji'></com-search>
			<!--类别搜索-->

			<search-bytype :msg="msg" :state='stateType' @changge="changge" @searchByChecked="searchByChecked" @onCanle="onCanle"></search-bytype>
		</div>

		<!--中部-->
		<div class="mid_hengfu">{{obj}}</div>
		<user-list :arr="arr" @swithTab="swithTab" @toSiliao="toSiliao" @toSongli="toSongli" @toGuanzhu="toGuanzhu" @toQuxiaoGuanzhu="toQuxiaoGuanzhu"></user-list>
    <my-gift v-show='showGiftList' @choiceThe='choiceThe' :selectIndexArr="selectIndexArr" :selectIndex="selectIndex" @confirmGift="confirmGift" @cancerGift="cancerGift"></my-gift>
    <com-dialog v-show="showWhetherVip2" :msgBox="msgBox" @toUpVip="toUpVip" @noUpVip="noUpVip"></com-dialog>
  </div>
</template>

<script>
		import { addFollow,getUserList } from '@/request/api'; // 导入我们的api接口
	
	import lunbotu_s from "../HeaderTop/lunbotu_s";
	import UserList from "../componentUserList/componentUserList";
	import myGift from "../myGift/myGift";
	import SearchBytype from "../chooseSearchBytype/chooseSearchBytype";
	import comSearch from "./components/comSearch";
  import comDialog from "../componentsDialog/componentsDialog"
	import axios from 'axios'
	import qs from 'qs'
	export default {
		name: "search_value",
		components: {
			lunbotu_s, //抛出组件
			UserList,
			SearchBytype,
			comSearch,
      myGift,
      comDialog
		},
		data() {
			return {
				banner:[{image:require('../../assets/banner2@2x.png')},{image:require('../../assets/banner2@2x.png')}],
				show: false,
				showw: false,
				detailimages: [{
					image: 'https://upload.jianshu.io/users/upload_avatars/6519497/ab020fc6-26f6-4195-a543-db862b1fb4ca.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp'
				}],
				title: '升级会员',
				selectIndex: 0,
				imgUrl: '../../assets/paimingyouxian@3x.png',
				prefixResApi: '',
				msg: [{
						name: "会员搜索"
					},
					{
						name: "基础搜索"
					},
					{
						name: "高级搜索"
					}
				],
				obj: '升级vip可查看更多状态,点我查看会员详情',
				arr: [],
				stateType: -1,
				showWhetherVip: false,
				showWhetherVip2: false,
				index: "",
				requestData: {},
        selectIndexArr: 0,
        selectIndex:0,
        showGiftList:false,
        vip:this.$store.state.vip,
        msgBox:['给最新注册会员发信，更易收到回信'],
        username:''
			}
		},
		mounted() {
			this.getSearchAll();

		},
		created() {
			this.prefixResApi = this.resourcesApi;
		},
		methods: {
      toUpVip(){
        console.log('升级会员');
      },
      noUpVip(){
        this.showWhetherVip2=false;
      },
      choiceThe(indexArr,index){
        this.selectIndexArr=indexArr;
        this.selectIndex=index;
      },
      confirmGift(){
        this.showGiftList=false;
        this.move();
        console.log('确定')
      },
      cancerGift(){
        this.showGiftList=false;
        this.move();
        console.log('取消')
      },
			//禁止滚动
			stop() {
				var mo = function(e) {
					e.preventDefault();
				};
				document.body.style.overflow = 'hidden';
				document.addEventListener("touchmove", mo, false); //禁止页面滑动
			},
			/***取消滑动限制***/
			move() {
				var mo = function(e) {
					e.preventDefault();
				};
				document.body.style.overflow = ''; //出现滚动条
				document.removeEventListener("touchmove", mo, false);
			},
			//根据条件提交
			searchByChecked(objData) {
				this.stateType = -1; //关闭选项卡
				//				this.requestData = aa
				this.$router.push({
					path: '/result',
					query: objData
				})
				//				this.getSearchAll();
			},
			//取消模态框
			onCanle() {
				this.stateType = -1;
			},
			//获取所有搜索结果
			getSearchAll() {
				var requestUrl = this.apiUrl + 'user/getUserList';
				var requestData = {};
				axios.post(requestUrl,
						qs.stringify(requestData), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded'
							}
						},
					).then((res) => {
						var resdata = res.data;
						if(resdata.code == 200) {
							this.arr = resdata.data.list;
							this.state = false;
						}
					})
					.catch((error) => {
						this.requestData = {}
					})
			},
			//选择选项相卡类型
			changge(index) {
				this.stateType = index;
				if(index==2&&this.$store.state.vip==0){//当非Vip的人点击高级搜索，弹出模态框
					this.showWhetherVip2=true;
					this.msgBox=['可以任性地按照自己要求进行查找，不用大海捞针。','使用高级查找功能是VIP会员的特权'];
					this.stateType=-1;
				}

			},
			swithTab(index) {
				console.log(this.arr[index].id);
				this.$router.push({
					path: "/detail",
					query: {
						uid: this.arr[index].uid
					}
				})
			},
			toSiliao(uid){
			  // if(this.vip==0){
			  //   this.showWhetherVip2=true;
			  //   return
        // }
            this.$router.push('/chat')
			},
			toSongli(uid){
			  if(this.vip==0){
          this.msgBox=['小小礼物更容易让对方动心哦'];
          this.showWhetherVip2=true;
          return
        }

        this.showGiftList=true;
			},
			toGuanzhu(index,uid,followStatus){
//				console.log(index,uid,followStatus)
//				console.log('aaaaaaaaaaaaaaaaaaaf');
//				return
//				
					addFollow({
					uid: localStorage.getItem("uid"),
					ruid:uid,
					followStatus:true
				}).then(res => {
					console.log(res);
				})
				
		
        this.arr[index].follow=!this.arr[index].follow;
				// var arr=this.arr
				// for(let i=0;i<arr.length;i++){
				// 	if(i==index){
				// 		arr[i].followStatus=!arr[i].followStatus
				// 	}
				// }
				// this.arr=arr
			},
      toQuxiaoGuanzhu(index,uid,followStatus){
//    	console.log(index,uid,followStatus);
//    	console.log('取消');
//    	

		addFollow({
					uid: localStorage.getItem("uid"),
					ruid:uid,
					followStatus:false
				}).then(res => {
					console.log(res);
				})
      
      	
        this.arr[index].follow=!this.arr[index].follow;
        	return
			  console.log(index);
			  this.getSearchAll();
			  
      },
			notOpenVip(){
				this.showWhetherVip=false;
			},
//			点击搜索
			dianji(userName){
				getUserList({
				username:userName
				}).then(res => {
					if(res.data.list.length!=0){
						this.arr = res.data.list
					}else{
						this.getSearchAll();
					}
					
				});
				this.username=''
			console.log(userName);

			},
		},

	}
</script>

<style scoped="scoped" lang="scss">
	/*@import url("../../styles/swipterBanner.css");*/

	* {
		touch-action: none;
	}

	.bigBox {
		background-color: #fff;
	}

	$color:white;
	.actionTitle {
		color: #3A3A3A;
	}

	#search {
		width: 100%;
	}

	.active {
		color: red!important;
	}

	.actives {
		color: red!important;
	}

	.top {
		width: 100%;
		padding-bottom: 10px;
		/*height: 175px;*/
		background: $color;
		border-bottom: $color;
	}

	.lunbo {
		width: 345px;
		height: 70px;
		margin: 0 auto;
	}

	.lunbo img {
		width: 100%;
		height: 70px;
	}

	.lunbo_btn {
		width: 80px;
		margin: 0 auto;
	}

	.lunbo_btn img {
		width: 42px;
		height: 8px;
	}


	.category {
		display: flex;
		position: relative;
	}

	.content {
		width: 100%;
		height: 403px;
		background-color: rgba(0, 0, 0, 0.5);
		position: absolute;
		top: 46px;
		z-index: 100;
	}

	.content_1 {
		width: 100%;
		height: 390px;
		background-color: white;
		position: absolute;
		z-index: 1;
	}

	.fenge {
		width: 350px;
		margin: 0 auto;
		height: 80px;
		border-bottom: 1px solid #EBEBEB;
	}

	.leibie {
		background: #EDEDED;
		height: 30px;
		width: 76px;
		color: #FFFFFF;
		line-height: 30px;
		text-align: center;
		border-radius: 15px;
		/*margin-left:12.5px;*/
		margin-top: 10px;
		margin-left: 10px;
		font-size: 14px;
	}

	.leibie_active {
		color: #FFFFFF!important;
		background: #FB7BA0!important;
	}

	.leibie_2 {
		background: #EDEDED;
		height: 30px;
		width: 110px;
		color: #FFFFFF;
		line-height: 30px;
		text-align: center;
		border-radius: 15px;
		margin-left: 10px;
		margin-top: 10px;
		font-size: 14px;
	}

	.leibie_3 {
		width: 108px;
		height: 30px;
		color: #FB7BA0;
		font-size: 14px;
		border: 1px solid #FB7BA0;
		border-radius: 15px;
		text-align: center;
		line-height: 30px;
		margin-top: 15px;
		margin-left: 10px;
		letter-spacing: 1px;
	}

	.quanbu {
		display: flex;
		transform: translateX(-12.5px);
		/*border:1px solid red;*/
		width: 350px;
		margin-left: 15px;
	}

	.lei {
		background: #EDEDED;
		height: 30px;
		width: 76px;
		color: #838383;
		line-height: 30px;
		text-align: center;
		border-radius: 15px;
		margin-left: 8px;
		margin-top: 15px;
		font-size: 14px;
		font-weight: 100;
		letter-spacing: 3px;
	}

	.quanbu .lei_2:first-child {
		/*margin-left: 12.5px!important;*/
	}

	.lei_2 {
		background: #EDEDED;
		height: 30px;
		width: 104.05px;
		color: #838383;
		line-height: 30px;
		text-align: center;
		border-radius: 15px;
		margin-left: 8px;
		margin-top: 10px;
		font-size: 14px;
		box-sizing: border-box;
	}

	.paiming {
		width: 210.5px;
		height: 13.5px;
		font-size: 14px;
		color: #FB7BA0;
		margin-left: 10px;
		margin-top: 20px;
		letter-spacing: 1px;
	}

	.deciside {
		display: flex;
	}

	/*.yes {
		height: 42.5px;
		width: 134.5px;
		height: 42.5px;
		font-size: 16.5px;
		color: #fff;
		background: #FB7BA0;
		text-align: center;
		line-height: 42.5px;
		border-radius: 6px;
		margin-left: 28px;
		margin-top: 13px;
		letter-spacing: 10px;
	}*/

	/*.not {
		height: 42.5px;
		width: 134.5px;
		height: 42.5px;
		font-size: 16.5px;
		color: #5F5F5F;
		background: #DDDDDD;
		text-align: center;
		line-height: 42.5px;
		border-radius: 6px;
		margin-left: 18px;
		margin-top: 13px;
		letter-spacing: 10px;
	}*/

	.content_2 {
		width: 100%;
		height: 403px;
		background-color: rgba(0, 0, 0, 0.5);
		position: absolute;
		top: 46px;
		z-index: 100;
	}

	.content_child {
		width: 330px;
		height: 45px;
		border-bottom: 1px solid #EBEBEB;
		display: flex;
		justify-content: space-between;
		font-size: 14.5px;
		color: #444446;
		margin: 0 auto;
		line-height: 45px;
	}

	.child_1 {
		margin-left: 20px;
	}

	.child_2 {
		margin-right: 15px;
		img {
			width: 7px;
			height: 12px;
			margin-left: 11px;
		}
	}

	.confirm {
		width: 135px;
		height: 42.5px;
		border-radius: 6px;
		background: #FB7BA0;
		font-size: 16.5px;
		line-height: 45px;
		text-align: center;
		color: #FFFFFF;
		margin-left: 28.5px;
		margin-top: 11.5px;
		letter-spacing: 10px;
	}

	.cancel {
		width: 135px;
		height: 42.5px;
		border-radius: 6px;
		background: #DDDDDD;
		font-size: 16.5px;
		line-height: 45px;
		text-align: center;
		color: #5F5F5F;
		margin-left: 15px;
		margin-top: 11.5px;
		letter-spacing: 10px;
	}

	.category_one {
		margin-left: 31.5px;
		font-size: 15.5px;
		color: #444446;
		margin-top: 14px;
	}

	.category_one .active {
		color: red;
	}

	.mid {
		/*background: #F1F1F1;*/
		/*width: 100%;*/
		height: 100%;
		border: 1px solid #F1F1F1;
		margin-bottom: 49px;
	}

	.mid_hengfu {
		width: 297.5px;
		height: 26px;
		font-size: 13.5px;
		color: #FFFFFF;
		background: #C3C5C7;
		margin: 0 auto;
		line-height: 26px;
		margin-top: 11px;
		padding-left: 7px;
		box-sizing: border-box;
		letter-spacing: 1px;
		border-radius: 5px;
	}

	.swiper {
		/*width: 355px;*/
		height: 92.5px;
		background: #FFFFFF;
		border-radius: 4px;
		margin: 0 auto;
		margin-top: 10.5px;
		position: relative;
	}

	.swiper>img {
		width: 80.5px;
		height: 80.5px;
		margin: 6px 0 6px 6px;
	}

	.swiper {
		display: flex;
	}

	.swiper_one {
		font-size: 15.5px;
		color: #202020;
		margin-left: 16px;
		font-weight: bold;
		line-height: 16px;
		display: flex;
		padding-top: 8.5px;
		height: 18px;
		div {
			transform: translateY(-6px);
			margin-left: 2px
		}
	}

	.swiper_one img {
		width: 28px;
		height: 18px;
		margin-left: 2px;
		margin-top: 6.5px
	}

	.swiper_two {
		margin-left: 17px;
		margin-top: 9.5px;
		font-size: 13.97px;
		color: #7F7F7F;
		letter-spacing: 1px;
	}

	.swiper_three {
		height: 16px;
		display: flex;
		justify-content: space-between;
		margin-top: 15px;
		.img1 {
			width: 16px;
			height: 16px;
			margin-left: 16.5px;
		}
		.img2 {
			width: 16px;
			height: 16px;
			margin-left: 47.5px;
		}
		.img3 {
			width: 16px;
			height: 16px;
			margin-left: 49px;
		}
		span {
			font-size: 11.5px;
			color: #FB7BA0;
			display: inline-block;
			margin-left: 2.5px;
			letter-spacing: 2px;
			padding-bottom: 2px;
		}
	}

	.relative {
		width: 80.5px!important;
		height: 15px!important;
		position: absolute;
		top: 65.5px;
		left: 5px;
	}
	/*// 模态框*/

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
