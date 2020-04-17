<template>
    <div class="box">
      
        <header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd"  :rightTitle="rightTitle"> </header-fixed-top>
   
   <van-cell-group style="margin-top: 60px;" class="txt" id="txts">
  <van-switch-cell v-model="checked1" title="消息通知" active-color="#FF8B45" @click="clickOne" inactive-color="#CDCDCD"   />
</van-cell-group>
    </div>
</template>

<script>
   import HeaderFixedTop from '../../components/HeaderTop/HeaderFixedTop'
	import { addRemind } from '@/request/api'; // 导入我们的api接口
		import { delRemind } from '@/request/api'; // 导入我们的api接口
    export default {
        data(){
            return{
            show:false,
            showBackIcon: "true",
            title: "上线提醒",
            rightTitle:'',
            checked1:'',
            remindId:""
          }
        },
        components: {
			HeaderFixedTop,
        },
 created(){
 	console.log(this.$route.query.remindId)
// 	this.remindId=this.$route.query.remindId
if(this.$route.query.remindId){
	this.checked1=true
	
}else{
	this.checked1=false
}			
 },
 methods: {
goBack() {
      this.$router.go(-1);
    },
    goNavAdd() {
      this.$router.go(-1);
    },
     	clickOne(){
     		if(this.$route.query.remindId){
     			delRemind({
//					uid: localStorage.getItem("uid"),
					ruid:'9df2b979',
				}).then(res => {
					console.log(res);
				})
     		}else{
     			delRemind({
					uid: localStorage.getItem("uid"),
					ruid:'9df2b979',
				}).then(res => {
					console.log(res);
				})
     		}
   			
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
    width: 58px;
    height: 28px;
}
.van-switch__node{
    width:27px;
    height:27px;
     top: 0.5px;
    left: 5px;
}
</style>