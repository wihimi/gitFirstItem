<template>
    <div class="box">
        <header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd"  :rightTitle="rightTitle"> </header-fixed-top>
    <!-- 主体内容 -->
        <div class="box_txt">
            <div class="txt" @click="permission">
                <div class="txt_s"> 权限设置 </div>
                <img src="../../../static/img/icon_chela.png" alt="">
            </div>
             <div class="txt" style=" margin-top:7px;" @click="remind_set">
                <div class="txt_s"> 提醒设置 </div>
                <img src="../../../static/img/icon_chela.png" alt="">
            </div>
             <div class="txt" style=" margin-top:30px;" @click="feedback">
                <div class="txt_s"> 意见反馈 </div>
                <img src="../../../static/img/icon_chela.png" alt="">
            </div>
<!--             <router-link to="/ContactUs" class="txt" style=" margin-top:7px;">-->
<!--                <div class="txt_s"> 联系我们 </div>-->
<!--                <img src="../../../static/img/icon_chela.png" alt="">-->
<!--            </router-link>-->
             <div class="txt" style=" margin-top:7px;" @click="about_us">
                <div class="txt_s"> 关于我们 </div>
                <img src="../../../static/img/icon_chela.png" alt="">
            </div>
             <div class="txt" style=" margin-top:30px;">
                <div class="txt_s"> 清除缓存 </div>
                <img src="../../../static/img/icon_chela.png" alt="">
            </div>
             <div class="txt" style=" margin-top:7px;" @click="backup">
                <div class="txt_s"> 修改密码 </div>
                <img src="../../../static/img/icon_chela.png" alt="">
            </div>
             <div class="txt" style=" margin-top:30px;" @click="exit">
                <div class="txt_s" style="color: #F54663;"> 退出登录 </div>
                <img src="../../../static/img/icon_chela.png" alt="">
            </div>
        </div>
      <!-- 模态框 -->
      <show-dialog v-show="showD" :showDialog="showDialog" @cancelClick="cancelClick" @confirmClick="confirmClick"></show-dialog>

    </div>
</template>

<script>
   import HeaderFixedTop from '../../components/HeaderTop/HeaderFixedTop'
   import showDialog from "../../components/showDialog/showDialog";
import { Dialog } from 'vant';
    export default {
        data(){
            return{
            show:false,
            showBackIcon: "true",
            title: "账户设置",
            rightTitle:'',
              showD:false,
              showDialog:{
                message:'确定退出？',
                confirmMsg:'确定',
              },
          }
        },
        components: {
			HeaderFixedTop,showDialog
        },

 methods: {
   cancelClick(){
     this.showD=false;
   },
   confirmClick(){
     localStorage.clear();
     this.$router.push('/');
     this.showD=false;
   },
 	//退出登录
 	exit(){
    this.showD=true;
 	},

 	about_us(){
 		this.$router.push("/about_us");

 	},
 	feedback(){
 		this.$router.push("/feedback");

 	},
 	remind_set(){
 		this.$router.push("/remind_set");

 	},
     backup(){
         this.$router.push("/backup");
     },
     permission(){
this.$router.push("/permission");
     },
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
        .box_txt{
            width: 98%;
            // border: 1px solid red;
            margin: 60px auto;
            .txt{
                width:100%;
                height:50px;
                display: flex;
                line-height: 50px;
                background: #fff;
                border-radius:5px;
                .txt_s{
                    font-size: 15px;
                    color: #353535;
                    margin-left: 10%;
                }
                img{
                    width: 6.5px;
                    height: 11.5px;
                    margin-left: 66%;
                    margin-top:5% ;
                    // display: block;
                }
            }
        }
    }
</style>
