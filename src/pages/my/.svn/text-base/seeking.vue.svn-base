<template>
    <!-- 头部导航 -->
        <div>
        <header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd"  :rightTitle="rightTitle"> </header-fixed-top>
    <!-- 主体内容 -->
        <div class="marriage" style="  margin-top: 55px;">
         
           <div>
          <div class="marriage_subtitle">网络有哪些常见的骗术？</div>
          <div class="marriage_time">2019-01-23 15:32</div>
          <div class="marriage_txt">一般骗子会用那种比较漂亮的女生照片做头像，吸引你的注意，刚开始对你很主动、热情，取得信任后开始各种借口请你 . . .</div>
          <div class="marriage_img">
            <img src="../../../static/img/zp_quan_da1.png" alt />
            <img src="../../../static/img/zp_quan_da1.png" alt />
            <img src="../../../static/img/zp_quan_da1.png" alt />
          </div>
          </div>
          <div class="original">
            <div class="original_txt">原创</div>
            <div class="original_imgs">
              <div class="original_img">
                <img src="../../../static/img/icon_ck@2x.png" alt />
                <div>999</div>
              </div>
              <div class="original_img">
                <img src="../../../static/img/icon_pl@2x.png" alt />
                <div>999</div>
              </div>
              <div class="original_img">
                <img src="../../../static/img/icon_pl@2x.png" alt />
                <div>999</div>
              </div>
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
            title: "征婚必看",
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
/* 主体内容-------------------------------------------- */
.marriage {
  width: 90%;
  // border: 1px solid red;
  margin: 0 auto;
  .marriage_subtitle {
    color: #202020;
    font-size: 15.5px;
    font-weight: bold;
    position: relative;
  }
  .marriage_time {
    color: #c2c2c2;
    font-size: 12.86px;
    margin-top: 5px;
  }
  .marriage_txt {
    color: #444446;
    font-size: 14.25px;
    margin-top: 10px;
  }
  .marriage_img {
    display: flex;
    margin-top: 17.5px;
 
    img {
      width: 34%;
      height: 80px;
    }
  }
}
.original {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 17.5px;
  .original_txt {
    color: #7f7f7f;
    font-size: 13.97px;
  }
}
.original_imgs {
  display: flex;
  justify-content: space-between;
  color: #7f7f7f;
  font-size: 13.97px;
  .original_img {
    display: flex;
    margin-left: 15px;
    img {
      width: 18px;
      height: 18px;
      margin-right: 5px;
    }
  }
}
</style>