<template>
  <!-- 大盒子 -->
  <div class="box">
      <!-- 手机号码找回 -->
      <van-tabs v-model="activeName" title-active-color='#F54663' line-width='60px'>
  <van-tab title="手机找回" name="a" line-width='5px;'>
      <!-- 邮件图标的盒子 --> 
    <div class="email">
      <img src="../../../static/img/password.png" alt />
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
        <span>验证码</span>
        <input type="text" placeholder="请输入右侧图中字符" />
          <div>9999</div>
      </div>
    
    </div>
      </van-tab>
        <!-- 底部 -->
     <div class="steps">
	

          <van-button class="step" type="primary" size="large" color="#ff8737" router-link to="/password">下一步</van-button>
      </div>
   <!-- 邮箱找回----------------------------- -->
  <van-tab title="邮箱找回" name="b">
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
      </van-tab>
</van-tabs>
    
  </div>
</template>

<script>
export default {
    data () {
      return {
        activeName: 'a'
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  height: 215.5px;
  text-align: center;
  line-height: 281px;
}
.email > img {
  width: 74.5px;
  height: 74.5px;
  /* margin-top: 118px; */
  /* margin-left: 150.5px; */
}
/* 手机号码 邮件的大盒子 */
.mobile {
  width: 100%;
  height: 99px;
  margin:0 auto;
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
    font-weight:bold;
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
    font-weight:bold;
  color: #3a3a3a;
  font-size: 16px;
}
.mobile_yzm > input {
  height: 21px;
  width: 162px;
  border: none;
  background: none;
  margin-left: 39.5px;
  font-size: 16px;
  margin-top: 15px;
}
.mobile_yzm >input:focus {
  outline: none;
}
.mobile_yzm>div{
    width: 66.5px;
    height: 32.5px;
    text-align: center;
    line-height: 32.5px;
    background: #797979;
    margin-top: 10px;
    font-size: 19.65px;
    color: #fff;
}
/* 底部 */
.step{
    width: 90%;
    height: 56px;
    border-radius:5px;
   position:fixed;
   bottom:35px;
   left:5% ;
    
}
</style>
