<template>
  <div class="box">
          <!-- 模态框 -->
    <show-dialog v-show="showD" :showDialog="showDialog" @cancelClick="cancelClick" @confirmClick="confirmClick"></show-dialog>


 <!-- 模态框2 -->
            <!-- <div class="dialogs"  v-show="!show">
                <img src="../../../static/img/tanchuang_shenhe.png" alt="">
                <van-button round type="info" class="dialogs_qian" @click="abrogate">返回栏目</van-button>

            </div> -->
    <!-- 头部导航 -->
    <div>
      <header-fixed-top
        @goBack="goBack"
        :showBack="showBackIcon"
        :topTitle="title"
        @goNavAdd="goNavAdd"
      ></header-fixed-top>
    </div>
    <!-- 主要内容合子 -->
    <div class="boxs">
      <van-dropdown-menu id="options">
        <van-dropdown-item  v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>

         <!-- 发贴标题 -->
    <div class="subtitle">
        <input type="text" placeholder="输入帖子标题">
          <!-- 发帖正文 -->
         <textarea placeholder="输入正文"></textarea>
    </div>
        <!-- 发表图片 -->
       <div class="pictures">
           <div class="pictures_img" @click="missile_img">+</div>
            <div class="pictures_img">+</div>
             <div class="pictures_img">+</div>
       </div>

       <!-- 底部按钮 -->
          <van-button class="step" type="primary" size="large" color="#ff8737" @click="clickOne" >立即发布</van-button>

    </div>


  </div>
</template>

<script>
import HeaderFixedTop from "../../components/HeaderTop/HeaderFixedTop";
import showDialog from "../../components/showDialog/showDialog";
export default {
  components: {
    HeaderFixedTop,showDialog
  },
  data() {
    return {
        show:true,
      showBackIcon: "true",
      title: "意见反馈",
      // rightTitle:'···',
      showD:false,
      showDialog:{
        message:'由于您的自我介绍尚未通过审核，暂不能发帖，请前往修改并完善。',
        confirmMsg:'前往修改',
      },
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ]
    };
  },

  methods: {
    cancelClick(){
      this.showD=false;
    },
    confirmClick(){
      console.log('bbbbb');
      this.showD=false;
    },
    // 跳转到发表图片
    missile_img(){
       // 点击跳转
      this.$router.push("/missile");
      // 点击跳转传参
      // this.$router.push("/details?id=" + index);
    },
      clickOne(){
        this.showD =!this.showD
      },
    goBack() {
      this.$router.go(-1);
    },
    goNavAdd() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;

  background: #f1f1f1;
}
// 模态框
.dialog{
    width: 100%;
    height: 100%;
  background-color:rgba(0, 0, 0,0.5);
    position: absolute;
    left: 0;
    z-index: 2;
    .dialog_box{
        width: 90%;
        height: 186px;
        border-radius:5px;
        background: #fff;
       margin-top: 50%;
       margin-left: 5%;
       .dialog_boxs{
           width:97%;
           height: 123px;
           line-height: 30px;
           margin: 0 auto;
           border-bottom: 1px solid #E0E0E0;

           .dialog_txt{
                width:90%;
                  margin: 0 auto;
                  padding-top: 30px;
                //   border: 1px solid red;

           }
       }
       .determined{
           width: 100%;
           display: flex;
           font-size: 18px;
            //  border: 1px solid red;
             .determined_txt{
                 width: 50%;
                 height: 30px;
                 margin-top: 20px;
                 text-align: center;
                  border-left: 1px solid #E0E0E0;
             }
       }
    }
}
// 模态框2
.dialogs{
    width: 100%;
    height: 100%;
  background-color:rgba(0, 0, 0,0.5);
    position: absolute;
    left: 0;
    z-index: 2;
    img{
      width: 83%;
      display: block;
      margin: 16% auto;

    }
    .dialogs_qian{
      width: 265px;
      height: 57px;
      background: #50ABFF;
      color: #fff;
      position: absolute;
      top: 64%;
      left: 15%;
      border-radius:5px;
      font-size: 17px;
      letter-spacing:2px;
    }
}
// 主要内容合子
.boxs {
  width: 90%;
//   border: 1px solid red;
  margin: 50px auto;
    position: relative;
}
#options{
    width: 60%;
}
// 选项的背景颜色
#options /deep/ .van-dropdown-menu__item{
    background: #f1f1f1;

}
#options /deep/ .van-dropdown-menu__title {
    color: #444446;
    font-size: 15.5;
    margin-right: 40px;
}
#optionss /deep/ .van-dropdown-item{
    width: 30%;
}
// 发帖标题
.subtitle{
width: 100%;

margin: 0 auto;
  input{
      width: 100%;
      height: 40.5px;
      border: 1px solid #ccc;
      text-indent : 15px;
  }
  // 发帖正文
textarea {
    margin-top: 12px;
    text-indent : 15px;
    border: 1px solid #ccc;
    width: 100%;
    height: 300px;
    line-height: 50px;
}
}
// 发表图片
.pictures{
    width: 68%;
    margin-top: 10px;
    display: flex;
   justify-content:space-between;
    //    border: 1px solid red;
.pictures_img{
    width: 67.5px;
    height: 67.5px;
    background: #E2E2E2;
    font-size: 50px;
    font-weight: 100;
    color: #B0B0B0;
    text-align: center;
    line-height: 60px;
}
}
/* 底部 */
.step{
       width: 90%;
    height: 56px;
    border-radius:5px;
   position:fixed;
   bottom:25px;
   left:5% ;
}
.confirmButtonColor{
    color: #F54663;
}
</style>
