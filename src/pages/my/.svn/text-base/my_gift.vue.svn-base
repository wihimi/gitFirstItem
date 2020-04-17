<template>
  <div class="box">
    <!--搜索分类-->
    <div class="topHead">
    <div class="search_content">
      <div class="sousuo" @click="change(1)" :class="{'active':currentSort==1}">我收到的</div>

      <div class="lahei" @click="change(2)" :class="{'active':currentSort==2}">我送出的</div>
    </div>

    <!-- 返回按钮 -->
    <div class="fanhui" @click="fanhui">
      <img src="../../../static/img/icon_zuola_hei@2x.png" alt />
    </div>
    </div>
    <!--我收到的-->
<div class="" v-show="currentSort==1">
    <!-- 消息列表 -->
    <div class="messages" @touchstart="showDeleteButton()" v-for="item in 10" style="margin-top:8px;">
      <div class="content-box">
        <!-- 用户头像 -->
        <div class="content-t">
          <img src="../../../static/img/tx_wodetouxiang@2x.png" alt />
        </div>
        <div class="prioritize">
          <!-- <img src="../../../static/img/xianshiyouxian2@2x.png" alt /> -->
        </div>

        <!-- 右字 -->
        <div class="content-txt">
          <!-- 用户名称 -->
          <div class="named">
            <div class="named_mc">春田花花菜</div>
            <div class="named_tu">
              <img src="../../../static/img/vip@2x.png" alt />
            </div>
            <div class="named_tu">
              <img src="../../../static/img/shiming.png" alt />
            </div>
          </div>
          <!-- 已读信息的显示 -->
          <div class="named_yd"> 13:05</div>

          <!-- 用户的基本信息 -->
          <div class="basic">
              <div style="margin-top: 2px;">赠送给你一份礼物 <span style="  font-size: 13px;color: #FF3366;">爱如玫瑰</span> </div>
             <!-- 回赠 -->
          <div class="yuan" @click="reGift">
              回赠
          </div>
          </div>



        </div>
      </div>
    </div>

    <!-- 消息列表2-------------------------------------------- -->

    </div>

<!--我送出的-->

<div class="" v-show="currentSort==2">
    <!-- 消息列表 -->
    <div class="messages" @touchstart="showDeleteButton()" style="margin-top:8px;">
      <div class="content-box">
        <!-- 用户头像 -->
        <div class="content-t">
          <img src="../../../static/img/tx_wodetouxiang@2x.png" alt />
        </div>
        <div class="prioritize">
          <!-- <img src="../../../static/img/xianshiyouxian2@2x.png" alt /> -->
        </div>

        <!-- 右字 -->
        <div class="content-txt">
          <!-- 用户名称 -->
          <div class="named">
            <div class="named_mc">春田花花菜</div>
            <div class="named_tu">
              <img src="../../../static/img/vip@2x.png" alt />
            </div>
            <div class="named_tu">
              <img src="../../../static/img/shiming.png" alt />
            </div>
          </div>
          <!-- 已读信息的显示 -->
          <div class="named_yd"> 13:05</div>

          <!-- 用户的基本信息 -->
          <div class="basic">
              <div style="margin-top: 2px;">赠送给TA一份礼物 <span style="  font-size: 13px;color: #FF3366;">爱如玫瑰</span> </div>
             <!-- 回赠 -->
          <!--<div class="yuan">
              回赠
          </div>-->
          </div>



        </div>
      </div>
    </div>

    <!-- 消息列表2-------------------------------------------- -->
    <div class="messages" @touchstart="showDeleteButton()" style="margin-top:8px;">
      <div class="content-box">
        <!-- 用户头像 -->
        <div class="content-t">
          <img src="../../../static/img/tx_wodetouxiang@2x.png" alt />
        </div>
        <div class="prioritize">
          <!-- <img src="../../../static/img/xianshiyouxian2@2x.png" alt /> -->
        </div>

        <!-- 右字 -->
        <div class="content-txt">
          <!-- 用户名称 -->
          <div class="named">
            <div class="named_mc">春田花花菜</div>
            <div class="named_tu">
              <img src="../../../static/img/vip@2x.png" alt />
            </div>
            <div class="named_tu">
              <img src="../../../static/img/shiming.png" alt />
            </div>
          </div>
          <!-- 时间的显示 -->
          <div class="named_yd">13:05</div>

          <!-- 用户的基本信息 -->

           <div class="basic">
              <div style="margin-top: 2px;">赠送给TA一份礼物<span style="  font-size: 13px;color: #FF3366;">爱如玫瑰</span> </div>
           <!-- 回赠 -->
          <!--<div class="yuan">
              回赠
          </div>-->
          </div>

        </div>
      </div>
    </div>

    </div>
   <!--礼物列表-->
   <my-gift v-show='showGiftList' @choiceThe='choiceThe' :selectIndexArr="selectIndexArr" :selectIndex="selectIndex" @confirmGift="confirmGift" @cancerGift="cancerGift"></my-gift>

  </div>
</template>

<script>
				import { myGiftList } from '@/request/api'; // 导入我们的api接口
	import myGift from "../../components/myGift/myGift"
export default {
	components:{
			myGift
		},
  data() {
    return {
      activeName: "a",
      currentSort: "1",
       show:false,
       	showGiftList:false,
       	selectIndexArr: 0,
				selectIndex:0,
				show1:true
    };
  },
   created() {
     myGiftList({
//					uid: localStorage.getItem("uid"),
						pageNum:1,
						pageSize:1
				}).then(res => {
					console.log(res);
					
				})
    },
  methods: {
  	choiceThe(indexArr,index){
	this.selectIndexArr=indexArr;
	this.selectIndex=index;
	console.log(indexArr)
	console.log(index)
},
		  confirmGift(){
          	this.showGiftList=false
          	console.log('确定')
          },
          cancerGift(){
          	    	this.showGiftList=false
          		console.log('取消')
          },
    fanhui() {
      this.$router.go(-1);
    },
    change(index) {
      //alert(index)
      this.currentSort = index;
      this.showGiftList=false
    },
       //    模态框点击显示与隐藏
            store:function(){
                this.show =!this.show
            },
            reGift(){
            	this.showGiftList=true
            },
            showDeleteButton(){}
  }
};
</script>

<style lang="scss" scoped>
.box {
  /*width: 100%;
  height: 100%;
  position: fixed;
  background: #f1f1f1;*/
}
.myPopup /deep/ .van-overlay{
	background-color: rgba(0,0,0,0.2);
}
/* 返回按钮 */
.fanhui {
  position: absolute;
  left: 5%;
  top: 50%;
  margin-top: -7px;
  img {
    width: 10px;
    height: 15px;
  }
}
.topHead{
  position: relative;
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
/* 消息列表 */
.messages {
  width: 100%;
  display: flex;
}
.content-box {
  width: 93%;
  height: 72.5px;
  margin: 0px auto;
  background: #ffffff;
  position: relative;
  display: flex;
  border-radius: 5px;
}

/* 用户头像 */
.content-t > img {
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
.prioritize > img {
  width: 60.5px;
  height: 15px;
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
  font-size: 14px;
  color: #202020;
  font-weight: 500;
}
.named_tu > img {
  width: 27.5px;
  height: 16.5px;
  margin-top: 2px;
  margin-left: 5px;
}
.named_yd {
  margin-top: 15px;
  color: #c2c2c2;
  font-size: 13px;
}
/* 用户的基本信息 */
.basic {
  width: 100%;
  margin-top: 5px;
  margin-left: 1%;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #7F7F7F;
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
.time_t > div {
  margin-left: 6px;
  font-size: 12.86px;
  color: #c2c2c2;
}
// 回赠
.yuan{
    width: 46px;
    height: 24px;
    background: #FF773B;
    border-radius:8px;
    text-align: center;
    line-height: 24px;
    font-size:13px ;
    color: #FFFFFF;
}
</style>
