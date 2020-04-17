<template>
  <div>
    <div>
      <header-fixed-top
        @goBack="goBack"
        :showBack="showBackIcon"
        :topTitle="title"
        @goNavAdd="goNavAdd"
        :rightTitle="rightTitle"
      ></header-fixed-top>
    </div>
    <!-- 展示图片 -->
    <div class="pictures_img">
      <img src="../../../static/img/da_zp.png" alt />
    </div>
    <!-- 图层蒙版 -->
    <div class="mask">
      <!-- 用户基本信息的盒子 -->
      <div class="information">
        <!-- 用户名 -->
        <div class="named">
          <div class="named_mc">春田花花菜</div>
          <div class="named_tu">
            <img src="../../../static/img/vip@2x.png" alt />
          </div>
          <div class="named_tu">
            <img src="../../../static/img/shiming.png" alt />
          </div>
        </div>
        <!-- 字 -->
        <div class="basic_txt">
          <div>41岁</div>
          <div class="basic_x">|</div>
          <div class="basic_cm">163厘米</div>
          <div class="basic_x">|</div>
          <div class="basic_cm">初中</div>
        </div>
        <!-- 用户描述信息 -->
        <div class="information_txt">
            我的性格特点是开朗乐观自信。业余时间我喜欢读健康类知识。我憧憬的生活是独立，自由有规律的生活
             我的性格特点是开朗乐观自信。业余时间我喜欢读健康类知识。我憧憬的生活是独立，自由有规律的生活 . . .
        </div>
      </div>
    </div>
    <!-- 底部选项 -->
    <div class="pictures_dibu">
      <div class="pictures_tu">
        <img src="../../../static/img/icon_siliao@2x.png" alt />
        <div>私聊</div>
      </div>
      <div class="pictures_tu">
        <img src="../../../static/img/icon_shongli@2x.png" alt />
        <div>送礼</div>
      </div>
      <div class="pictures_tu">
        <img src="../../../static/img/icon_guanzhu_da@2x.png" alt />
        <div>关注</div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderFixedTop from "../HeaderTop/HeaderFixedTop";
export default {
  data() {
    return {
      show: false,
      showBackIcon: "true",
      title: "晒靓照",
      rightTitle: "..."
    };
  },
  components: {
    HeaderFixedTop
  },

  methods: {
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
.pictures_img {
  width: 100%;
  position: relative;
  img {
    width: 100%;
  }
}
// 图层蒙版
.mask {
  width: 100%;
  height: 152px;
  position: absolute;
  background-color: white;
  opacity: 0.8;
  left: 0;
  top: 70%;
}
//  <!-- 用户基本信息的盒子 -->
.information{
    width: 90%;
    margin: 0 auto;
}
//  用户名
.named {
  display: flex;

  margin-top: 13.5px;
}
.named_mc {
  font-size: 15.5px;
  color: #F54663;
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

// 字
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
// 用户的描述信息
.information_txt{
    margin-top: 10px;
    font-size: 14.5px;
    color: #4D4D4D;
    letter-spacing:2px;
    line-height: 24px;
    overflow: hidden;
text-overflow: ellipsis;
display:-webkit-box; //作为弹性伸缩盒子模型显示。
-webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
-webkit-line-clamp:3; //显示的行
}
//  <!-- 底部选项 -->
.pictures_dibu {
  width: 100%;
  height: 49px;
  position: fixed;
  bottom: 0;
  background: #fff;
  display: flex;
  justify-content: space-around;
  line-height: 49px;
  .pictures_tu {
    display: flex;
   
    img {
      width: 21px;
      height: 21px;
      margin-top: 14px;
    }
    div {
      font-size: 16.5px;
      color: #fb7ba0;
     margin-left: 5px;
    }
  }
}
</style>