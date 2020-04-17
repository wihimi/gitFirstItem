<template>
  <div>
    <!-- 头部导航 -->
    <div class="box">
      <header-fixed-top
        @goBack="goBack"
        :showBack="showBackIcon"
        :topTitle="title"
        @goNavAdd="goNavAdd"
        :rightTitle="rightTitle"
      ></header-fixed-top>
      <img src="../../../static/img/da_zp.png" alt />
      <!-- 模态框 -->
      <show-dialog v-show="showD" :showDialog="showDialog" @cancelClick="cancelClick" @confirmClick="confirmClick"></show-dialog>
    </div>
  </div>
</template>

<script>
import HeaderFixedTop from "../HeaderTop/HeaderFixedTop copy";
import showDialog from "../showDialog/showDialog";
export default {
  data() {
    return {
      show: true,
      showBackIcon: "true",
      title: "1/1",
      rightTitle: "",
      showD:false,
      showDialog:{
        message:'要删除这张照片吗？',
        confirmMsg:'删除',
      },
    };
  },
  components: {
    HeaderFixedTop,showDialog
  },
  methods: {
    cancelClick(){
      this.showD=false;
    },
    confirmClick(){
      this.showD=false;
    },
    goBack() {
      this.$router.go(-1);
    },
    goNavAdd() {
      this.showD = !this.showD;
    },
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  position: relative;
  img {
    width: 100%;
  }
}
</style>
