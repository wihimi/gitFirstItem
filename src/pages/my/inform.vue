<template>
      <!-- 头部导航 -->
        <div class="box">
        <header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd"  :rightTitle="rightTitle"> </header-fixed-top>
   <!-- 消息列表 -->
<div class="messages"  style="margin-top: 48px;" >
    <div class="content-box" @click="report_details"> 
      <!-- 用户头像 -->
      <div class="content-t">
         <img src="../../../static/img/tx_wodetouxiang@2x.png" alt="">
      </div>
     
    <!-- 右字 -->
      <div class="content-txt">
         <!-- 用户名称 -->
        <div class="named"> 
          <div class="named_mc">
            春田花花菜
            </div>
           <div class="named_tu">
             <img src="../../../static/img/vip@2x.png" alt="">
           </div>
            <div class="named_tu">
              <img src="../../../static/img/shiming.png" alt="">
            </div>

        </div>
       
         <!-- 用户的基本信息 -->
      <div class="basic">
        <div class="basic_txt">
          <div >41岁</div>
          <div class="basic_x">|</div>
          <div class="basic_cm">163厘米</div>
          <div class="basic_x">|</div>
          <div class="basic_cm">初中</div>
        </div>
        <div class="time_t">
         处理中
        </div>
      </div>

      </div>
    
    </div>
    
</div>
    </div>
</template>

<script>
    import HeaderFixedTop from '../../components/HeaderTop/HeaderFixedTop'
			import { addTipOff } from '@/request/api'; // 导入我们的api接口
    export default {
        data(){
            return{
            show:false,
            showBackIcon: "true",
            title: "举报记录",
            rightTitle:''
          }
        },
        components: {
			HeaderFixedTop,
        },
   created() {
     addTipOff({
					uid: localStorage.getItem("uid"),//举报人id
					cause: 1,//举报原因
						description:1,//具体说明
						phone:1,//举报人电话
						ruid:1,//被举报人id
						rusername:1,// 被举报人用户名
						voucher:1,//截图凭证
				}).then(res => {
					console.log(res);
					
				})
    },
 methods: {
goBack() {
      this.$router.go(-1);
    },
    goNavAdd() {
      this.$router.go(-1);
    },
    // 跳到举报详情
      report_details() {

        this.$router.push("/report_details");
        // 点击跳转传参
            // this.$router.push("/details?id=" + index);
        }
}
}
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 100%;
    position: fixed;
    background: #F1F1F1;
}
/* 消息列表 */
.messages{
  width: 100%;
  display: flex;
   
}
.content-box{
  width: 95%;
  height: 72.5px;
  margin: 8px auto;
  background:#ffffff;
  position: relative;
  display: flex;
 border-radius:5px;
  }

  /* 用户头像 */
  .content-t>img{
    width: 60.5px;
    height: 60.5px;
    margin-left: 6px;
    margin-top: 6px;
    
  }
/* 消息列表 */
.content-txt{
  width: 73%;
  height: 36px;
  display: flex;
  justify-content:space-between;
  margin-left: 3%;
  flex-wrap:wrap ;
}
.named{
display: flex;

margin-top: 13.5px;
}
.named_mc{
  font-size: 15.5px;
  color: #202020;
  font-weight: 600;
}
.named_tu>img{
  width: 27.5px;
  height: 16.5px;
  margin-top: 2px;
  margin-left: 5px;
}
.named_yd{
  margin-top: 15.5px;
  color: #c2c2c2;
}
/* 用户的基本信息 */
.basic{
  width: 100%;
  margin-top: 10px;
  margin-left: 1%;
 display: flex;
  justify-content:space-between ;
}
.basic_txt{
  display: flex;
  color: #7f7f7f;
  font-size: 13.97px;
}
.basic_x{
  margin-left: 4px;
}
.basic_cm{
  margin-left: 4px;
}
.time_t{
  font-size: 12.86px;
  color: #c2c2c2;
  margin-top: -14px;
}
</style>