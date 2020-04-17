<template>
  <!-- 大盒子 -->
  <div class="box">
  	    <div class="search_content">
      <div class="sousuo" @click="change(1)" :class="{'active':currentSort==1}">手机找回</div>

      <div class="lahei" @click="change(2)" :class="{'active':currentSort==2}">邮箱找回</div>
    </div>
        		<!-- 返回按钮 -->
				<div class="fanhui" @click="fanhui">
					<img src="../../../static/img/icon_zuola_hei@2x.png" alt="">
				</div>
      <div v-show="currentSort==1" >
      	      <!-- 邮件图标的盒子 -->
        <div class="email">
          <img src="../../../static/img/password.png" alt />
        </div>
    
        <!-- 文本 -->
        <div class="txt">
            <div>
              验证短信已发送到您的注册手机 139*****231 上，请在下面输入进行验证，若未收到验证短信，请您用注册手机拨打客服热线          
            </div>
        </div>
        <!-- 手机号码盒子 -->
        <div class="mobile">
          <!-- 手机号码 -->
          <div class="mobile_sjh">
            <span>手机号码</span>
            <input type="text" placeholder="请输入您注册的手机号" />
            <div></div>
          </div>

          <!-- 验证码 -->
          <div class="mobile_yzm">
            <span>验证短信</span>
            <input type="text" placeholder="请输入右侧图中字符" />
            <div>重新获取</div>
          </div>
          <!-- 底部 -->

          <van-button
            class="step"
            type="primary"
            size="large"
            color="#ff8737"
            router-link
            to="/printonly"
          >提交</van-button>
        </div>
      	</div>
      	 <div v-show="currentSort==2">
      	 	        <div class="email">
          <img src="../../../static/img/password.png" alt />
        </div>
        <!--邮箱地址盒子 -->
        <div class="mobile">
          <!-- 邮箱地址 -->
          <div class="mobile_sjh">
            <span>邮箱地址</span>
            <input type="text" placeholder="请输入您注册的邮箱地址" />
            <div></div>
          </div>

          <!-- 验证码 -->
          <div class="mobile_yzm">
            <span>验证码</span>
            <input type="text" placeholder="请输入右侧图中字符" />
            <div>9999</div>
          </div>
          <!-- 底部 -->

          <van-button class="step" type="primary" size="large" color="#ff8737" router-link to="/backup">发送验证邮件</van-button>
        </div>
      	 </div>

  </div>
</template>

<script>
	export default {
	  data() {
    return {
      activeName: "a",
      currentSort: 1,
       show:false,
       arr: [
					{'num':1,'id':1},
					{'num':2,'id':2},
					{'num':3,'id':3}, 
					{'num':4,'id':4},
					{'num':5,'id':5},
					{'num':6,'id':6},
					{'num':7,'id':7}
				],
    };
  },
		methods: {
			fanhui() {
				this.$router.go(-1);
			},
			   change(index) {
      //alert(index)
      this.currentSort = index;
    },
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" >
		/* 返回按钮 */
	
	.fanhui {
		position: fixed;
		left: 5%;
		top: 2%;
		img {
			width: 10px;
			height: 15px;
		}
	}
	.search_content {
  display: flex;
  height: 44px;
  line-height: 44px;
  justify-content: space-between;
  background: #fff;
}
.sousuo {
  color: #949494;
  font-size: 14px;
  margin-left: 94px;
  width: 57px;
}
.lahei {
  font-size: 14px;
  color: #949494;
  margin-right: 94.5px;
  width: 57px;
  text-align: center;

}
.active {
  border-bottom: 2px solid #f54663;
  color: #f54663;
}
/* 大盒子 */
.box {
  width: 100%;
  height: 100%;
  position: fixed;
  background: #f5f5f5;
}
/* 邮件图标的盒子 */
.email {
  width: 100%;
  height: 170px;
  text-align: center;
  line-height: 230px;
}
.email > img {
  width: 74.5px;
  height: 74.5px;
}
 /* 文本 */
.txt{
    width: 90%;
    margin: 0 auto;
    color: #d2d2d2;
}
/* 手机号码 邮件的大盒子 */
.mobile {
  width: 100%;
  height: 99px;
  margin: 0 auto;
  text-align: center;
}
/* 手机号码内容 */
.mobile_sjh {
  width: 85%;
  height: 54.5px;
  line-height: 54.5px;
  border-bottom: 1px solid #d2d2d2;
  font-size: 16px;
  margin: 0 auto;
  /* margin-left: 30px; */
  display: flex;
  justify-content: space-between;
}
.mobile_sjh > span {
  font-weight: bold;
  color: #3a3a3a;
}
.mobile_sjh > input {
  height: 21px;
  width: 162px;
  border: none;
  background: none;
  margin-left: -45px;
  font-size: 16px;
  margin-top: 15px;
}
.mobile_sjh > input:focus {
  outline: none;
}
/* 验证码内容 */
.mobile_yzm {
  width: 85%;
  height: 54.5px;
  line-height: 54.5px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d2d2d2;
  /* margin-left: 30px; */
  margin: 0 auto;
}
.mobile_yzm > span {
  font-weight: bold;
  color: #3a3a3a;
  font-size: 16px;
}
.mobile_yzm > input {
  height: 21px;
  width: 162px;
  border: none;
  background: none;
  margin-left: 19.5px;
  font-size: 16px;
  margin-top: 15px;
}
.mobile_yzm > input:focus {
  outline: none;
}
.mobile_yzm > div {
  width: 66.5px;
  height: 32.5px;
  text-align: center;
  line-height: 32.5px;
  margin-top: 10px;
  font-size: 14px;
  color: #FF8737;
  border: 1px solid #FF8737;
}
/* 底部 */
.step {
   width: 90%;
    height: 56px;
    border-radius:5px;
   position:fixed;
   bottom:35px;
   left:5% ;
}
</style>
