<template>
  <div class="box">
    <div class="box_head">
      <!--搜索分类-->
      <div class="search_content">
        <div class="sousuo" @click="change(1)" :class="{'active':currentSort==1}">看过我的</div>

        <div class="lahei" @click="change(2)" :class="{'active':currentSort==2}">我看过的</div>
      </div>
      <!-- 返回按钮 -->
      <div class="fanhui" @click="fanhui">
        <img src="../../../static/img/icon_zuola_hei@2x.png" alt/>
      </div>
    </div>
    <!-- 模态框 -->
        <div class="dialog" v-show="show">
            <img src="../../../static/img/hyfl.png" alt="">
            <div class="dialog_txt1"> 此功能为VIP会员特权</div>
            <div class="dialog_txts1">给最新注册会员发信，更易收到回信</div>
             <div class="dialog_txt2">会员尊享20多项特权，快速提高成功率</div>
            <div class="dialog_txt">立即升级会员 </div>
            <div class="dialog_txts" @click="store" >暂不升级会员</div>
        </div>



   <div class="listBox" v-for="(item,index) in 2" v-if="index+1==currentSort">
   	<div class="" v-if="userList.length>0">
   		 <div class="messages" @touchstart="showDeleteButton()" @click="showInfo(item.uid)" style="margin-top:8px;" 
    	 v-for="(item,index) in userList" v-show="item.uid!=null">
      <div class="content-box">
        <!-- 用户头像 -->
        <div class="content-t">
          <img v-if="vip==0&&currentSort==1" src="../../../static/img/novipimg.png" alt/>
          <img v-else :src="prefiex+item.headPortrait" alt/>
        </div>
        <div class="prioritize">
          <img src="../../../static/img/xianshiyouxian2@2x.png" alt/>
        </div>

        <!-- 右字 -->
        <div class="content-txt">
          <!-- 用户名称 -->
          <div class="named">
            <div class="named_mc" v-text="vip==0&&currentSort==1?'用户昵称':item.username"></div>
            <div class="named_tu">
              <img  v-show="item.whetherVip==1" src="../../../static/img/vip@2x.png" alt/>
              	<img v-show="item.whetherVip==0" src="../../images/my/vip@3xv.png" />
            </div>
            <div class="named_tu">
              <img v-show="item.whetherAutonym==0" src="../../../static/img/shiming2.png" />
             <img v-show="item.whetherAutonym==1" src="../../../static/img/shiming.png" alt="">
            </div>
          </div>
          <!-- 已读信息的显示 -->
          <div class="named_yd"></div>

          <!-- 用户的基本信息 -->
          <div class="basic">
            <div class="basic_txt">
              <div>{{item.age}}岁</div>
              <div class="basic_x">|</div>
              <div class="basic_cm">{{item.height}}厘米</div>
              <div class="basic_x">|</div>
              <div class="basic_cm">{{item.educationalStatus|educationalStatusFilters}}</div>
            </div>
            <div class="time_t">
              <div></div>
              <div>12:13</div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
   	</div>
   	<div class="noData" v-else>
   		暂无数据
   	</div>
   </div>

  </div>
</template>

<script>
		import { clearHaveSeenList,getHaveSeenList } from '@/request/api'; // 导入我们的api接口
	import Vue from 'vue';
  import Mui from 'vue-awesome-mui';

  Vue.use(Mui);
  export default {
    data() {
      return {
        activeName: "a",
        currentSort: 1,
        show: false,
        vip:this.$store.state.vip,
        userList:[],
        prefiex:this.resourcesApi
      };
    },
     created() {
     	if(localStorage.getItem('nowCurrentSort')){
     		this.currentSort=localStorage.getItem('nowCurrentSort')
     	}
//   clearHaveSeenList({
////					uid: localStorage.getItem("uid"),
////					sex: 1,
//						hsidStr:1
//				}).then(res => {
//					console.log(res);
//					
//				})
				this.haveSeenList();
    },
        mounted() {
      var that = this;
      mui.back = function () {
        window.history.go(-1);
        localStorage.removeItem('nowCurrentSort')
      }
    },
    methods: {
    	haveSeenList(){
    		var requestData={
    			type :this.currentSort==1?2:1,//1我看过谁 2谁看过我
    			uid :localStorage.getItem('uid'),
    			
    		}
    		 getHaveSeenList(requestData).then(res => {
    		 	if(res.code==200){
    		 		this.userList=res.data.list;
    		 		
    		 	}else{
    		 		this.$toast('网络连接不成功，请稍后再试');
    		 	}
					console.log(res);
					
				})
    	},
      showInfo(uid){
        if(this.vip==0&&this.currentSort==1){
          this.show=true;
          return
        }
            this.$router.push({
          path: '/detail',
          query:{
          	uid:uid
          }
        })

      },
      fanhui() {
        this.$router.go(-1);
        localStorage.removeItem('nowCurrentSort');
      },
      change(index) {
      	localStorage.setItem('nowCurrentSort',index)
        //alert(index)
        this.currentSort = index;
        this.haveSeenList();
      },
      //    模态框点击显示与隐藏
      store() {
        this.show = !this.show
      }
    }
  };
</script>

<style  scoped>
  .box {
    width: 100%;
    background: #f1f1f1;
  }
  .box_head{
    width: 100%;
    position: relative;
  }

  /* 返回按钮 */
  .fanhui {
    position: absolute;
    left: 5%;
    top: 50%;
    margin-top: -8px;
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

  /*// 模态框*/
  .dialog {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.85);
    left: 0;
    top: 0;
    z-index: 22;

    img {
      width: 308.5px;
      height: 269px;
      padding-left: 43.5px;
      padding-top: 52px;
      /*left: 43.5px;
    	top: 52px;*/
    }
  }

  .dialog_txt1 {
    color: #FFFFFF;
    font-size: 16.24px;
    position: absolute;
    left: 95px;
    top: 347px;
    letter-spacing: 2px;
  }

  .dialog_txts1 {
    color: #FFFFFF;
    font-size: 16.24px;
    position: absolute;
    left: 34px;
    top: 370px;
    letter-spacing: 2px;
  }

  .dialog_txt2 {
    text-align: center;
    color: #FED52F;
    font-size: 14px;
    position: absolute;
    left: 55.5px;
    top: 412px;
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
    top: 474px;
    border-radius: 50px;
    font-weight: 100;
    letter-spacing: 4px;
  }

  .dialog_txts {
    position: absolute;
    left: 117px;
    top: 547px;
    font-size: 19.18px;
    color: #B3B3B3;
    font-weight: 100;
    letter-spacing: 4px;
  }

  /* 消息列表 */
  .messages {
    width: 100%;
    display: flex;
  }
.listBox{

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
    font-size: 15.5px;
    color: #202020;
    font-weight: 600;
  }

  .named_tu > img {
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
    height: 16px;
    overflow: hidden;
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
  .noData{
  	text-align: center;
  	margin-top: 200px;
  	color: #BBBBBB;
  }
</style>
