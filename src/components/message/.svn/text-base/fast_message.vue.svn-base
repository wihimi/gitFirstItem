<template>
  <div class="box">
    <header-fixed-top
      @goBack="goBack"
      :showBack="showBackIcon"
      :topTitle="title"
      @goNavAdd="goNavAdd"
      :rightTitle="rightTitle"
    ></header-fixed-top>
    <div class="txts">
      <div class="txt" @touchstart="showDeleteButton()">一样的城市不一样的心情，很高兴认识你~</div>
      <!-- 点击删除该聊天记录 -->
      <div class="dialogs" v-show="show">
        <div class="dialogs_triangle"></div>
        <div class="dialogs_information">
          <div class="dialogs_information_txt">删除 </div>
          <div class="dialogs_information_txt">编辑</div>
          <div class="dialogs_information_txts">置顶</div>
        </div>
      </div>
      <div class="txt">一样的城市不一样的心情，很高兴认识你~</div>
      <div class="txt">星相学里说我们很搭配，我能多了解点你的兴趣吗？</div>
    </div>
  </div>
</template>

<script>
import HeaderFixedTop from "../HeaderTop/HeaderFixedTop copy 2";

export default {
  data() {
    return {
      Loop: null,
      show: true,

      showBackIcon: "true",
      title: "快捷消息",
      rightTitle: ""
    };
  },
  components: {
    HeaderFixedTop
  },

  methods: {
    // 长按出现删除改聊天
    showDeleteButton: function(e) {
      clearTimeout(this.Loop); //再次清空定时器，防止重复注册定时器
      this.Loop = setTimeout(
        function() {
          this.show = !this.show;
        }.bind(this),
        1000
      );
    },
    goBack() {
      this.$router.go(-1);
    },
    // 点击跳转编辑模板
    goNavAdd() {
      this.$router.push("/edit_template")
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  position: fixed;
  background: #ebebeb;
}
.txts {
  width: 100%;
  margin: 45px auto;
}
.txt {
  width: 90%;
  font-size: 15.5px;
  color: #313131;
  border-bottom: 1px solid #cbcbcb;
  // text-align: center;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 15px;
  padding-left: 10px;
  line-height: 25px;
  position: relative;
}
/* 删除该聊天消息 */
.dialogs {
  width: 240px;
  height: 60px;
  position: absolute;
  /* border: 1px solid red; */
  left: 25%;
  top: 12%;
  border-radius: 5px;
  z-index: 2;
}
/* 三角形 */
.dialogs_triangle {
  width: 0;
  height: 0;
  border-right: 13px solid transparent;
  border-left: 13px solid transparent;
  border-bottom: 13px solid #ffffff;
  margin-left: 40%;
}
.dialogs_information {
  width: 240px;
  height: 45px; 

  background: #ffffff;
  color: #f54663;
  display: flex;
  justify-content:space-around;
  border-radius:5px; 
}
.dialogs_information_txt{
  width:70px;
  height:  18px;
  border-right: 0.5px solid #C6C6C6; 
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
    margin-top: 15px;
    line-height: 18px;
}
.dialogs_information_txts{
  width:62px;
  height:  18px;
  // border-right: 0.5px solid #C6C6C6; 
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
    margin-top: 15px;
    line-height: 18px;
}
</style>