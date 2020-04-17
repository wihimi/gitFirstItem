<template>
  <div class="box">
    <!--搜索分类-->
    <div class="search_content">
      <div class="sousuo" @click="change(1)" :class="{'active':currentSort==1}">关注我的</div>

      <div class="lahei" @click="change(2)" :class="{'active':currentSort==2}">我关注的</div>
    </div>
     	  <!-- 返回按钮 -->
    <div class="fanhui" @click="fanhui">
      <img src="../../../static/img/icon_zuola_hei@2x.png" alt />
    </div>
    <div v-show="currentSort==1" >
    	
    	<div v-if="list.length==0" style="font-size: 15px;color: #ccc; text-align: center;line-height: 100px;">
    		暂无人关注
    	</div>

    <!--关注名单-->
    	<div v-else class="swiper" v-for="(item,index) in list" >
				<!--左边图-->
				<img :src="prefixResApi+item.headPortrait"/>
				<!--右边文-->
				<div class="swiper_right">
					<div class="swiper_one">
						<img class="relative" src="../../assets/paimingyouxian@3x.png" /> {{item.username}}
						<div class="">
							 <img v-show="item.whetherVip==0" src="../../images/my/vip@3xv.png"/>
            <img v-show="item.whetherVip==1" src="../../assets/vip@3x.png"/>

            <img v-show="item.whetherAutonym==0" src="../../../static/img/shiming2.png"/>
            <img v-show="item.whetherAutonym==1" src="../../assets/shiming@2x.png" alt=""/>
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
						<!--<img src="../../assets/icon_guanzhu2@3x.png" class="img3" alt="" />
						<span>关注</span>-->
						
						 <!--<div @click.stop="toQuxiaoGuanzhu(index,item.uid,item.follow)" v-show="item.follow">-->
						 	<div style="display: flex;" v-show="item.follow">
            <img src="../../assets/icon_guanzhu2@3x.png" class="img3" alt=""/>
            <span>取消关注</span> </div>
            <!--<div @click.stop="toGuanzhu(index,item.uid,item.follow)" v-show="!item.follow">-->
            	<div style="display: flex;" v-show="!item.follow">
              <img src="../../assets/icon_guanzhu@3x.png" class="img3" alt=""/>
              <div style="color: #B6B6B6;margin-left: 4px;">关注</div>
            </div>
						
					</div>
				</div>
			</div>

    </div>
 <div v-show="currentSort==2">
 	
 	
 	 <!--关注名单-->
    	<div  v-if="list.length>0" class="swiper" v-for="(item,index) in list" >
				<!--左边图-->
				<img :src="prefixResApi+item.headPortrait"/>
				<!--右边文-->
				<div class="swiper_right">
					<div class="swiper_one">
						<img class="relative" src="../../assets/paimingyouxian@3x.png" /> {{item.username}}
						<div class="">
							 <img v-show="item.whetherVip==0" src="../../images/my/vip@3xv.png"/>
            <img v-show="item.whetherVip==1" src="../../assets/vip@3x.png"/>

            <img v-show="item.whetherAutonym==0" src="../../../static/img/shiming2.png"/>
            <img v-show="item.whetherAutonym==1" src="../../assets/shiming@2x.png" alt=""/>
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
						<!--<img src="../../assets/icon_guanzhu2@3x.png" class="img3" alt="" />
						<span>关注</span>-->
						
						 <!--<div @click.stop="toQuxiaoGuanzhu(index,item.uid,item.follow)" v-show="item.follow">-->
						 	<div style="display: flex;" v-show="item.follow">
            <img src="../../assets/icon_guanzhu2@3x.png" class="img3" alt=""/>
            <span>取消关注</span> </div>
            <!--<div @click.stop="toGuanzhu(index,item.uid,item.follow)" v-show="!item.follow">-->
            	<div style="display: flex;" v-show="!item.follow">
              <img src="../../assets/icon_guanzhu@3x.png" class="img3" alt=""/>
              <div style="color: #B6B6B6;margin-left: 4px;">关注</div>
            </div>
						
					</div>
				</div>
			</div>
 		<div v-else style="font-size: 15px;color: #ccc; text-align: center;line-height: 100px;">
    		暂未关注人
    	</div>
 </div>


  </div>

</template>

<script>
			import { followList } from '@/request/api'; // 导入我们的api接口
export default {
		props: {
      arr: {
//      type: Array,
        prefixResApi: '',
      },
    },
  data() {
    return {
      activeName: "a",
      currentSort: 1,
       show:false,
				list:''
    };
  },
   created() {
   		this.prefixResApi = this.resourcesApi;
    this.getFollowList();

    },
  methods: {
  	getFollowList(){
  		   followList({
					uid: localStorage.getItem("uid"),
						type:this.currentSort==1?2:1
				}).then(res => {
					console.log(res);
					this.list = res.data.list
					console.log(this.list);
				})
  	},
    fanhui() {
      this.$router.go(-1);
    },
    change(index) {
      this.currentSort = index;
      this.getFollowList();
    },
       //    模态框点击显示与隐藏
//          store:function(){
//              this.show =!this.show
//          }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background: #f1f1f1;


}
/* 返回按钮 */
.fanhui {
  position: fixed;
  left: 5%;
  top: 2%;
  img {
    width: 10px;
    height: 15px;
  }
}
.search_content {
  display: flex;
  height: 44px;
  line-height: 44px;
  justify-content: space-between;
  background: #fff;
}
.sousuo {
  color: #949494;
  font-size: 14px;
  margin-left: 94px;
  width: 57px;
}
.lahei {
  font-size: 14px;
  color: #949494;
  margin-right: 94.5px;
  width: 57px;
  text-align: center;

}
.active {
  border-bottom: 2px solid #f54663;
  color: #f54663;
}

/**/

	.swiper {
		width: 355px;
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
		left: 4px;
	}

</style>
