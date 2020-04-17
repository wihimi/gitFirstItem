<template>
         <!-- 头部导航 -->
        <div class="box">
        <header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd"  :rightTitle="rightTitle"> </header-fixed-top>
     <!-- 文本域 -->
     <div class="txt">
        <textarea name="" placeholder="请输入模板内容"></textarea>
        </div>
        <!-- 底部按钮 -->
        <van-button class="step" type="primary" size="large" color="#ff8737">保存模板</van-button>
    </div>
  

</template>

<script>
  import HeaderFixedTop from '../HeaderTop/HeaderFixedTop'

    export default {
        data(){
            return{
            show:false,
            showBackIcon: "true",
            title: "编辑模板",
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
    width: 100%;
    // border: 1px solid red;
    margin-top: 70px;
    text-align: center;
    textarea{
        width: 90%;
        height: 220px;
        color: #FF9363;
        font-size: 15px;
        padding-top: 15px;
        // padding-left: 15px;
        text-indent : 31.5px;
        letter-spacing:2px;
        border: none;
        border-radius: 5px;
    }
}
// 底部按钮
.step{
       width: 90%;
    height: 56px;
    border-radius:5px;
   position:fixed;
   bottom:35px;
   left:5% ;
   font-size: 18px;
   letter-spacing:4px;
}
</style>