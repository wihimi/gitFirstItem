<template>
	<div id="prevent" >
		<div class="header">
			<img src="../../../static/img/icon_zuola_hei@2x.png" @click="fanhui" />
			<div class="zuzhi">
				阻止名单
			</div>
		</div>
		<!--内容-->
		<div class="content" @click="quxiao">
			<div class="swiper" v-for="(item,index) in arr" :key="index"  @touchstart="showDeleteButton(index)" :class="{'active':currentSort==index}" >
				<!--左边图-->
				<img v-lazy="prefiex+item.headPortrait" />
				<!--右边文-->
				<div class="swiper_right">
					<div class="swiper_one">
						<img class="relative" src="../../assets/paimingyouxian@3x.png" /> {{item.username}}
						<div class="">
							 <img  v-show="item.whetherVip==1" src="../../../static/img/vip@2x.png" alt/>
              	<img v-show="item.whetherVip==0" src="../../images/my/vip@3xv.png" />
							  <img v-show="item.whetherAutonym==0" src="../../../static/img/shiming2.png" />
             <img v-show="item.whetherAutonym==1" src="../../../static/img/shiming.png" alt="">
						</div>
					</div>
					<div class="swiper_two">
						{{item.age}}岁|{{item.height}}厘米|{{item.educationalStatus|educationalStatusFilters}}
					</div>
					<div class="swiper_three">
						<img src="../../../static/img/icon_siliao_da.png" class="img1" alt="" />
						<span>私聊</span>
						<img src="../../assets/icon_shongli@2x.png" class="img2" alt="" />
						<span>送礼</span>
						<img src="../../assets/icon_guanzhu2@3x.png" class="img3" alt="" />
						<span>关注</span>
					</div>
				</div>
				 <div class="yichu" v-show="item.show" :key="index"> 
				 	
				 	<img src="../../../static/img/delete_yczzmd@3x.png" @click="yichu(index,item.uid)"/>
            	<!--三角形-->
            	<!--<div class="triangle">
            	
            	</div>
            	<div class="text">
            		移出阻止名单
            	</div>-->
            	
            </div>
			</div>
           
		</div>
	</div>
</template>

<script>
			import { pullBlackListByUid,addPullBlack  } from '@/request/api'; // 导入我们的api接口
	export default {
      data(){
      	return {
      		arr: [
					{num:1,id:1,show:false},
					{num:2,id:2,show:false},
					{num:3,id:3,show:false}, 
					{num:4,id:4,show:false},
					{num:5,id:5,show:false},
					{num:6,id:6,show:false},
					{num:7,id:7,show:false}
				],
				Loop:"",
				currentSort:0.5,
				prefiex:this.resourcesApi
				
      	}
      },
         created() {
     pullBlackListByUid({
					uid: localStorage.getItem("uid"),
					pullType:1
				}).then(res => {
					if(res.code==200){
						this.arr=res.data.list
					}else{
						this.$toast('网络不佳，请稍后再试');
					}
					
				})
    },
      methods:{
      	yichu(index,uid){
      		console.log(index,uid);
      		     addPullBlack({
					blackStatus : false,
					opType  :1,
					ruid :localStorage.getItem('uid'),
					uid:uid
				}).then(res => {
					if(res.code==200){
						this.$toast(res.msg);
						this.arr.splice(index,1)
					}else{
						this.$toast('网络不佳，请稍后再试');
					}
					
				})
      	},
      	fanhui(){
      		    this.$router.go(-1);

      	},
      	   showDeleteButton:function (index) {
      		console.log(index);
      		this.currentSort=index;
      		//alert(index)
      			for(let i=0;i<this.arr.length;i++){
		this.arr[i].show=false
	}
    clearTimeout(this.Loop); //再次清空定时器，防止重复注册定时器
    this.Loop = setTimeout(function() {

       this.arr[index].show=true;
console.log(this.arr)
    }.bind(this), 1000);
},
 quxiao(){
 	    this.currentSort=0.5
      	for(let i=0;i<this.arr.length;i++){
      		this.arr[i].show=false
      	}
      },
     
      }
	}
</script>

<style scoped="scoped" lang='scss'>
#prevent{
	user-select:none 
}
	.header {
		display: flex;
		width: 100%;
		height: 44px;
		line-height: 44px;
		background-color: #FFFFFF;
		/*box-shadow: 0px 1px 4px rgb(10, 10, 10, 0.1);*/
		img {
			width: 9px;
			height: 16.5px;
			margin: 14px 0 0 27px;
		}
		.zuzhi {
			margin: 0 0 0 115px;
			font-size: 18px;
			color: #303030;
		}
	}
	
	.content {
		width: 100%;
		background: #F1F1F1;
		border:1px solid #F1F1F1;
	}
	
	.swiper {
		
		width: 355px;
		height: 92.5px;
		border-radius: 4px;
		margin: 0 auto;
		margin-top: 10px;
		position: relative;
		background: #fff;
	}
	.active{
			background: #D7D7D7;
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
	.yichu{
		position: absolute;
		z-index: 101;
		width: 173px;
		top:71px;
		left: 91.5px;
		
	}
	.yichu img{
		width:173px;
		height: 68px;
		margin: auto;
	}
	.triangle{
	  
	 width: 0;

    height: 0;

    border-left: 13px solid transparent;

    border-right: 13px solid transparent;

    border-bottom: 13px solid white;
    margin:0 auto;
	}
	.text{
		width: 100%;
		height:50px ;
		line-height: 50px;
		text-align: center;
	    background: #fff;
	    color:#F54663;
	    font-weight: bold;
		
	}
</style>