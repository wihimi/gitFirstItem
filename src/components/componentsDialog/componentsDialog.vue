<template>
  <div class="dialog">
    <img src="../../../static/img/hyfl.png" alt="">
    <div class="dialog_txt1">{{msgBox[1]?msgBox[1]:'此功能为VIP会员特权'}} </div>
    <div class="dialog_txts1">{{msgBox[0]}}</div>
    <div class="dialog_txt2">会员尊享20多项特权，快速提高成功率</div>
    <div class="dialog_txt" @click="toUpVip">立即升级会员</div>
    <div class="dialog_txts" @click="noUpVip">暂不升级会员</div>
  </div>
</template>

<script>
  export default {
    name: "componentsDialog",
    props: {
      msgBox: {}
    },
    methods: {
      toUpVip() {
        this.$emit('toUpVip')
      },
      noUpVip() {
        this.$emit('noUpVip')
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
  .dialog {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.85);
    left: 0;
    top: 0;
    z-index: 22;
    text-align: center;

    img {
      width: 308.5px;
      height: 269px;
      padding-left: 43.5px;
      padding-top: 40px;
    }
  }

  .dialog_txt1 {
    color: #FFFFFF;
    font-size: 16.24px;
    margin: 26px auto 0;
    top: 335px;
    letter-spacing: 2px;
    font-weight: 100;
  }

  .dialog_txts1 {
    color: #FFFFFF;
    font-size: 16.24px;
    letter-spacing: 2px;
    font-weight: 100;
    margin: 8px auto 0;
  }

  .dialog_txt2 {
    text-align: center;
    color: #FED52F;
    font-size: 14px;
    font-weight: 100;
    margin: 22px auto 0;
  }

  .dialog_txt {
    margin: auto;
    width: 210px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    font-size: 19.18px;
    border: 1px solid #FF9483;
    color: #FF9483;
    border-radius: 50px;
    font-weight: 100;
    letter-spacing: 4px;
    margin: 30px auto 0;
  }

  .dialog_txts {
    font-size: 19.18px;
    color: #B3B3B3;
    font-weight: 100;
    letter-spacing: 4px;
    margin: 35px auto 0;
  }
</style>
