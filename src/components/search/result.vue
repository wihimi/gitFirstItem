<template>
	<div id="result">
		<div class="search"></div>

		<!--搜索-->
		<com-search></com-search>
		<!--搜索分类-->
		<div class="search_content">
			<div class="sousuo" @click="change(1)" :class="{'active':currentSort==1}">
				搜索结果
			</div>
			<div class="lahei" @click="change(2)" :class="{'active':currentSort==2}">
				拉黑列表
			</div>
		</div>
		<!--对象表-->
		<user-list :arr="arr"  @swithTab="swithTab" @toSiliao="toSiliao" @toSongli="toSongli" @toGuanzhu="toGuanzhu" @toQuxiaoGuanzhu="toQuxiaoGuanzhu"></user-list>

		<!--对象表-->

		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"> </header-fixed-top>
    <com-dialog v-show="showWhetherVip2" :msgBox="msgBox" @toUpVip="toUpVip" @noUpVip="noUpVip"></com-dialog>
    <my-gift v-show='showGiftList' @choiceThe='choiceThe' :selectIndexArr="selectIndexArr" :selectIndex="selectIndex" @confirmGift="confirmGift" @cancerGift="cancerGift"></my-gift>

  </div>

</template>

<script>
	import HeaderFixedTop from '../HeaderTop/HeaderFixedTop';
	import comSearch from "./components/comSearch";
	import UserList from "../componentUserList/componentUserList";
  import comDialog from "../componentsDialog/componentsDialog";
  import myGift from "../myGift/myGift";
	import axios from "axios"
	import qs from "qs"

	export default {
		name: "result",
		components: {
			HeaderFixedTop,
			comSearch,
			UserList,comDialog,
      myGift
		},
		data() {
			return {
				showBackIcon: 'true',
				title: '搜索结果',
				rightTitle: '···',
				currentSort: "1",
				arr: [],
        showWhetherVip2: false,
        vip:this.$store.state.vip,
        showGiftList:false,
        selectIndexArr: 0,
        selectIndex:0,
        msgBox:['给最新注册会员发信，更易收到回信'],
			}
		},
		mounted() {
			console.log(this.$route.query);
			var requestData=this.$route.query;
			//请求搜索接口
			this.getFirstData(requestData);
		},
		methods: {
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
      toUpVip(){
        console.log('升级会员');
      },
      noUpVip(){
        this.showWhetherVip2=false;
      },
			getFirstData(requestData){
				var requestUrl = this.apiUrl + 'user/getUserList';
			//
			//                 	area:this.$route.query.area,
			//					ageRange:this.$route.query.ageRange,
			//					heightRange:this.$route.query.heightRange,
			//					maritalStatus:this.$route.query.maritalStatus,
			//					educationalStatus:this.$route.query.educationalStatus,
			//					monthlyPay:this.$route.query.monthlyPay,
			//					haveHeadPortrait:this.$route.query.haveHeadPortrait
			//				};
//			var requestData = {};
			axios.post(requestUrl,
					qs.stringify(requestData), {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
							//								token:localStorage.getItem("token")
						}
					},
				).then((res) => {
					console.log(res)
					var resourcesApi = this.resourcesApi
					var list = res.data.data.list
					this.arr = list
				})
				.catch((error) => {

				})
			},
			goBack() {
				this.$router.go(-1);
			},
			goNavAdd() {
				this.$router.go(-1);
			},
			change(index) {
				//alert(index)
				this.currentSort = index
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
        this.stop();
      },
      toGuanzhu(index){
        this.arr[index].followStatus=!this.arr[index].followStatus;
        // var arr=this.arr
        // for(let i=0;i<arr.length;i++){
        // 	if(i==index){
        // 		arr[i].followStatus=!arr[i].followStatus
        // 	}
        // }
        // this.arr=arr
      },
      toQuxiaoGuanzhu(index){
        this.arr[index].followStatus=!this.arr[index].followStatus;
        console.log(index);
      },
		}
	}
</script>

<style lang="scss" scoped>
	.van-nav-bar {
		color: #fff
	}

	.search {
		margin-top: 60px;
	}

	.search img {
		width: 16px;
		height: 16px;
		margin-top: 10.5px;
		margin-left: 13px;
	}

	.search_content {
		display: flex;
		height: 41.5px;
		line-height: 41.5px;
		justify-content: space-between;
	}

	.search_value input:focus {
		text-decoration: none;
		outline: none;
	}

	.search_value input {
		border: none;
		background: #DDDEE1;
	}

	.search_value {
		margin-top: 6.5px;
		margin-left: 8.5px;
	}

	.sousuo {
		color: #949494;
		font-size: 14px;
		margin-left: 94px;
		width: 57px;
		text-align: center;
	}

	.lahei {
		font-size: 14px;
		color: #949494;
		margin-right: 94.5px;
		width: 57px;
		text-align: center;
	}

	.active {
		border-bottom: 2.5px solid #F54663
	}

	.beautiful {
		background: #F1F1F1;
		/*position: fixed;*/
		/*height:100% ;*/
		width: 100%;
		/*height: 420px;*/
		border: 1px solid #F1F1F1;
		margin-bottom: 49px;
	}

	.swiper {
		width: 355px;
		height: 92.5px;
		background: #FFFFFF;
		border-radius: 4px;
		margin: 0 auto;
		margin-top: 12.5px;
		position: relative;
		/*box-shadow: 0px 0px 4px 2px #888888;*/
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
			color: #B6B6B6;
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
</style>
