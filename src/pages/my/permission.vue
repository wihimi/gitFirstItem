<template>
    <div class="box">
      
        <header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd"  :rightTitle="rightTitle"> </header-fixed-top>
   
   <van-cell-group style="margin-top: 60px;" class="txt" id="txts">
  <van-switch-cell v-model="checked1" title="公开头像" active-color="#FF8B45" inactive-color="#CDCDCD" />
</van-cell-group>
 <van-cell-group style="margin-top: 8px;" class="txt" id="txts">
  <van-switch-cell v-model="checked2" title="公开相册" active-color="#FF8B45" inactive-color="#CDCDCD" />
</van-cell-group>
 <van-cell-group style="margin-top: 8px;" class="txt" id="txts">
  <van-switch-cell v-model="checked3" title="公开联系方式" active-color="#FF8B45" inactive-color="#CDCDCD" />
</van-cell-group>
 <van-cell-group style="margin-top: 8px;" class="txt" id="txts">
  <van-switch-cell v-model="checked4" title="接收手机短信" active-color="#FF8B45" inactive-color="#CDCDCD" />
</van-cell-group>
 <van-cell-group style="margin-top: 8px;" class="txt" id="txts">
  <van-switch-cell v-model="checked5" title="显示资料" active-color="#FF8B45" inactive-color="#CDCDCD" />
</van-cell-group>
 <van-cell-group style="margin-top: 8px;" class="txt" id="txts">
  <van-switch-cell v-model="checked6" title="拒收择偶条件外的来信" active-color="#FF8B45" inactive-color="#CDCDCD" />
</van-cell-group>
    </div>
</template>

<script>
   import HeaderFixedTop from '../../components/HeaderTop/HeaderFixedTop'

    export default {
        data(){
            return{
            show:false,
            showBackIcon: "true",
            title: "权限设置",
            rightTitle:'',
            checked1:true,
            checked2:true,
            checked3:true,
            checked4:true,
            checked5:true,
            checked6:true
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
    background: #F1F1F1;
    position: fixed;
}
.txt{
    width: 97%;
    height: 50px; 
    margin: 0 auto; 
    line-height: 50px;
}
.van-cell{
 border-radius:8px; 
}
.van-cell__title{
 color: #353535;
    font-size: 15px;
}
.van-switch{
    width: 54.8px;
    height: 28px;
}
.van-switch__node{
    width:26px;
    height:26px;
     top: 1px;
    left: 3.5px;
}
</style>