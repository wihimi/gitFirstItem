<template>
      <!-- 头部导航 -->
        <div class="box">
        <header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd"  :rightTitle="rightTitle"> </header-fixed-top>
   <div class="txt" style=" margin-top: 55px;">
       <div class="txt1">
           <div  style="  margin-left: -10px;">被举报人：</div>
           <div></div>
           <div style="  margin-left: 20px;">甲方乙方</div>
       </div>
         <div class="txt1">
<div  style="  margin-left: -10px;">被举报人：</div>
           <div></div>
           <div style="  margin-left: 20px;">88888888</div>
       </div>
       <div class="txt1">
<div  style="  margin-left: -10px;">被举报人：</div>
           <div></div>
           <div style="  margin-left: 20px;">88888888</div>
       </div>
       <div class="txt1">
<div  style="  margin-left: -10px;">被举报人：</div>
           <div></div>
           <div style="  margin-left: 0;">2019年5月12日</div>
       </div>
</div>
    <!-- 具体说明 -->
   <div class="specify" style=" margin-top: 10px;">
       <div class="specify_txt">
           <div style="margin-left: 16px;font-size: 15px; color: #313131; font-weight: 556;">具体说明</div>
       </div>
       <div class="specify_txts">
           <div style="margin-left: 16px;">发送恶意广告骚扰</div>
       </div>
</div>

<!-- 截图凭证 -->
<div class="specify" style=" margin-top: 10px;">
       <div class="specify_txt">
           <div style="margin-left: 16px;font-size: 15px; color: #313131; font-weight: 556;">截图凭证</div>
       </div>
       <div class="specify_txts">
           <div style="margin-left: 16px;">
               <img class="tu" src="../../../static/img/zp_byz.png" alt="">
           </div>
       </div>
</div>

    <!-- 处理结果 -->
    <div class="handling" style=" margin-top: 20px;">
       <div class="handling_txt">
           <div style="margin-left: 16px;font-size: 15px; color: #313131; font-weight: 556;">截图凭证</div>
       </div>
       <div class="handling_txts">
           <div style="margin-left: 16px;">
               该举报经核实已确认存在违规行为，已对此账号进行封号处理。 
           </div>
           <div style="margin-left: 16px;">
               感谢您的正义举报。
           </div>
       </div>
</div>

    </div>
</template>

<script>
    import HeaderFixedTop from '../../components/HeaderTop/HeaderFixedTop'

    export default {
        data(){
            return{
            show:false,
            showBackIcon: "true",
            title: "举报详情",
            rightTitle:''
          }
        },
        components: {
			HeaderFixedTop,
        },

 methods: {
goBack() {
      this.$router.go(-1);
    },
    goNavAdd() {
      this.$router.go(-1);
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
.txt{
    width: 95%;
    background: #fff;
     margin: 0 auto;
     border-radius:8px; 
    .txt1{
        width: 93%;
        height: 45px;
        margin: 0 auto;
        line-height: 45px;
        border-top: 1px solid #EAEAEA;
       display: flex;
       justify-content:space-around;;
       font-size: 14px;
       color: #2E2E2E;
    }
}
// 具体说明
.specify{
    width: 95%;
    background: #fff;
     margin: 0 auto;
     border-radius:8px; 
     .specify_txt{
          width: 93%;
        height: 45px;
        margin: 0 auto;
        line-height: 45px;
        // border-top: 1px solid #EAEAEA;
       font-size: 14px;
       color: #2E2E2E;
     }
      .specify_txts{
          width: 93%;
        margin: 0 auto;
        line-height: 25px;
        border-top: 1px solid #EAEAEA;
       font-size: 14px;
       color: #2E2E2E;
       padding: 10px;
     }
}
.tu{
    width: 59px;
    height: 59px;
}
// 处理结果
.handling{
    width: 95%;
     margin: 0 auto;
     .handling_txt{
          width: 93%;
        height: 45px;
        margin: 0 auto;
        line-height: 45px;
       font-size: 14px;
       color: #7B7B7B;
     }
      .handling_txts{
          width: 93%;
        margin: 0 auto;
        line-height: 21px;
       font-size: 14px;
       color: #7B7B7B;
     }
}
</style>