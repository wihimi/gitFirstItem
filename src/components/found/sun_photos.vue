<template>
    <div class="box">
           <!-- 头部导航 -->
        <div>
        <header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd"  :rightTitle="rightTitle"> </header-fixed-top>
    </div>
    <!-- 点击加号 -->
    <div class="sign">
        <div>点击加号</div>
          <div>选择拍摄或从相册选取图片上传</div>
    </div>
    <!-- 加号 -->
    <div class="sign_s" @click="tophotoalbum">
        +
    </div>

    <!-- 靓照只能上传一张 -->
    <div class="sign" style="margin-top: 30px;color:#989898;font-size: 14px;">
        <div>靓照只能上传一张 </div>
          <div>且需经过平台审核才能在页面显示</div>
    </div>
    <!-- 底部按钮 -->
    <van-button class="step" type="primary" size="large" color="#ff8737" @click='pictures' >立即发布</van-button>
    </div>
</template>

<script>
			import axios from 'axios'
	import qs from 'qs'
import HeaderFixedTop from '../HeaderTop/HeaderFixedTop'
       export default {
        data(){
            return{
            show:false,
            showBackIcon: "true",
            title: "晒靓照",
            rightTitle:''
          }
        },
        components: {
			HeaderFixedTop,
        },

 methods: {
 	pictures(){
 		var requestUrl = this.apiUrl + 'user/addBeautifulPhoto';
				var requestData = {
					type:1,    
					photoes:'https://www.baidu.com/img/bd_logo1.png',
					uId:'8d053b9b', 
				};
				axios.post(requestUrl,
						qs.stringify(requestData), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded',
								 token:localStorage.getItem("token")
							}
						},
					).then(res => {
						console.log(res);
					})
					.catch((error) => {})
// 		this.$router.push('/pictures')
 	},
goBack() {
      this.$router.go(-1);
    },
    goNavAdd() {
      this.$router.go(-1);
    },
    tophotoalbum(){
    	this.$router.push('/photoalbum')
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
    // 点击加号
    .sign{
        width: 100%;
        text-align: center;
        font-size: 16px;
        color: #323232;
        margin-top: 100px;
        line-height: 30px;
    }
    // 加号
    .sign_s{
        width:172px;
        height:172px;
        background: #fff;
        font-size: 68px;
        font-weight:100; 
        color: #ccc;
        text-align: center;
        line-height: 153px;
        margin: 37px auto;
        border:0.1px dashed #000; 
    }
    // 底部按钮
.step{
       width: 90%;
    height: 56px;
    border-radius:5px;
   position:fixed;
   bottom:35px;
   left:5% ;
}
</style>