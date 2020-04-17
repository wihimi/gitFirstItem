<template>
  <div>
    <!--返回按钮-->
    <div class="top_Back_nav">
      <div class="top_Back_left" @click="goBack">
        <img src="../../../../static/img/icon_zuola_hei@2x.png" />
      </div>
      <div class="top_Back_center">
        <div class="top_Back_item" v-for="(item,index) in navItemList" :key="index">
          <div class="defualtTitle" @click="clickNav(index)">
						<span id="" :class="index==currentIndex?'navActive':''">
						{{item}}
					</span>
          </div>
        </div>
      </div>
      <div class="top_Back_right"></div>
    </div>
    <!--body-->
    <div class="body paddIngTopTitle">
      <div class="panel1" v-if="currentIndex==0">
        <!--引用封装好的轮播图-->
        <lunbotu></lunbotu>
        <div class="shuoming">
<!--          <img src="../../../images/my/bj_bolang.png" />-->
          <div class="shuoming_title">认证状态：未实名</div>
          <div class="shuoming_title" style="top: 30px;">你目前可信度和被关注度比较低，而且部分功能不能用，会影响成功率哦。</div>
        </div>
        <div class="typeOptions_title">以下验证方式任选其一，通过即可</div>
        <div class="option_type">
          <div class="optionType_item" @click="clickType(index2)" :class="index2==optionNavIndex?'optionType_Action':''" v-for="(optionsType,index2) in optionNavList" :key="index2">{{optionsType}}
          </div>
        </div>
        <div class="" v-show="optionNavIndex==0">
          <div class="inputSty">
            <input class="inputNotsty" type="" placeholder="输入办理手机号的身份证姓名" name="" id="" value="" />
          </div>
          <div class="inputSty">
            <input class="inputNotsty" type="" placeholder="输入办理手机号的身份证号码" name="" id="" value="" />
          </div>
          <div class="inputSty" v-show="changePhone==0" @click="changePhone=1">
            <div class="flex-justify-content">
              <input class="inputNotsty" type="" placeholder="输入手机号" name="" id="" value="1212" />
              <div class="changeNum">更换号码</div>
            </div>

          </div>
          <div class="inputSty" v-show="changePhone==1">
            <input class="inputNotsty" type="" placeholder="输入新的手机号码" name="" id="" value="" />
          </div>
          <div class="inputSty" v-show="changePhone==1">
            <div class="flex-justify-content">
              <input class="inputNotsty" type="" placeholder="输入手机号" name="" id="" value="1212" />
              <div class="changeNum">获取短信</div>
            </div>
          </div>

        </div>
        <div class="" v-show="optionNavIndex==1">
          <div class="inputSty">
            <input class="inputNotsty" type="" placeholder="输入本人身份证姓名" name="" id="" value="" />
          </div>
          <div class="inputSty">
            <input class="inputNotsty" type="" placeholder="输入本人身份证号码" name="" id="" value="" />
          </div>
          <div class="showFace" @click="toRLsB">
            <div class="">
              <img src="../../../images/my/icon_tianjai_big.png" />
            </div>
            <div class="title_Tips">点击进行人脸验证</div>
          </div>
        </div>
        <div class="loginBtn " @click="loginBtn">立即提交</div>
      </div>

    </div>
    <div class="" v-if="currentIndex==1">
      <div class="test">
        <div class="messages" @touchstart="showDeleteButton()" @click="details">
          <div class="content-box">

            <!-- 用户头像 -->
            <div class="content-t">
              <img src="../../../images/my/tx_yqtx3.png" alt="">
            </div>
            <!-- 优先显示图 -->
            <!-- 消息提醒的圈 -->
            <!--<div class="messages_q">5</div>-->
            <div class="prioritize">
              <img src="../../../../static/img/xianshiyouxian2@2x.png" alt="">

            </div>

            <!-- 右字 -->
            <div class="content-txt">
              <!-- 用户名称 -->
              <div class="named">
                <div class="named_mc">
                  春田花花菜
                </div>
                <div class="named_tu">
                  <img src="../../../../static/img/vip@2x.png" alt="">
                </div>
                <div class="named_tu">
                  <img src="../../../../static/img/shiming.png" alt="">
                </div>
                <div class="named_tu ">
                  <img class="shiM" src="../../../../static/img/icon_zxian(1).png" alt="">
                </div>
              </div>

              <!-- 用户的基本信息 -->
              <div class="basic">
                <div class="basic_txt">
                  <div>41岁</div>
                  <div class="basic_x">|</div>
                  <div class="basic_cm">163厘米</div>
                  <div class="basic_x">|</div>
                  <div class="basic_cm">初中</div>
                </div>
                <div class="time_t">
                  <div>昨天</div>
                  <div style="margin-top: 1px;">12:13</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
  document.addEventListener("plusready", function() {
    // 注册返回按键事件
    plus.key.addEventListener('backbutton', function() {
      // 事件处理
      window.history.back();
    }, false);
  });
  import lunbotu from '../../../components/HeaderTop/lunbotu'
  	import { userAuth } from '@/request/api'; // 导入我们的api接口
  export default {
    name: "RealNameAuthentication",
    components: {
      lunbotu,
    },
    data() {
      return {
        navItemList: ['实名认证', '我的邀请', '邀请我的'],
        currentIndex: 0,
        optionNavList: ['证件验证', '人脸验证'],
        optionNavIndex: 0,
        changePhone: 0,
      }

    },

    methods: {
      clickNav(index) {
        this.currentIndex = index;
      },
      clickType(index) {
        this.optionNavIndex = index;
      },
      toRLsB() {
        this.$router.push({
          path: '/FaceRecog'
        })
      },
      details() {

      },
      goBack() {

        this.$router.go(-1);
      },
      loginBtn(){
      		userAuth({
					uid: localStorage.getItem("uid"),
					authType:1,
					idCardNumber:421202199611011379,
					realName:'金栋梁',
					
				}).then(res => {
					console.log(res);
				})
      }
    }

  }
</script>

<style scoped lang="scss">
  .test {
    display: flex;
    flex: 1;
  }

  @import "../../../styles/mycomstyle.css";
  input::-webkit-input-placeholder {
    color: #red;
  }

  input::-moz-input-placeholder {
    color: #red;
  }

  input::-ms-input-placeholder {
    color: #red;
  }

  .top_Back_nav {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 44px;
    line-height: 44px;
    background-color: #FFFFFF;
    display: flex;
    z-index: 999;
    .top_Back_left {
      box-sizing: border-box;
      width: 45px;
      img {
        width: 10px;
        height: 15px;
        margin-left: 27px;
        margin-top: 50%;
transform: translateY(-50%);
        display: inline-block;
      }
    }
    .top_Back_center {
      display: flex;
      align-content: center;
      flex: 1;
      justify-content: space-around;
      text-align: center;
      font-size: 14px;
      color: #949494;
      padding: 0 20px;
      .top_Back_item {
        display: inline;
        flex: 1;
        .defualtTitle {
          display: inherit;
        }
      }
      .navActive {
        color: #F54663;
        padding-bottom: 12px;
        border-bottom: 1px solid #F54663;
      }
    }
    .top_Back_right {
      width: 45px;
    }
  }

  .body {
    .panel1 {
      .shuoming {
        width: 100%;
        height: 140px;
        position: relative;
        margin-top: 1px;
        background: url("../../../../static/img/43@3x.png");
        background-repeat:no-repeat ;
			background-size: 100% 100%;
      }
      .shuoming_title {
        position: absolute;
        top: 0;
        left: 0;
        padding: 20px;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 2px;
        line-height: 22px;
      }
      .typeOptions_title {
        font-size: 14px;
        color: #FA8061;
        letter-spacing: 2px;
        line-height: 22px;
        display: block;
        margin: 25px auto 20px auto;
        text-align: center;
      }
      .option_type {
        width: 238px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #FF773B;
        height: 30px;
        line-height: 30px;
        color: #FF773B;
        margin: auto;
        border-radius: 4px;
        overflow: hidden;
        .optionType_item {
          width: 120px;
        }
        .optionType_Action {
          background-color: #FF773B;
          color: #FFFFFF;
        }
      }
      .inputSty {
        width: 240px;
        padding: 10px 0;
        margin: auto;
        border-bottom: 1px solid #AEAEAE;
        .inputNotsty {
          background: none;
          border: none;
          outline: none;
          text-indent: 10px;
          width: 100%;
          margin-top: 17px;
          font-size: 15.5px;
          color: #6A6A6A;
          letter-spacing: 1px;
        }
        input::-webkit-input-placeholder{
          color: #C6C6C6;
        }
        .changeNum {
          width: 120px;
          text-align: center;
          color: #49A3FF;
          font-size: 15.5px;
          margin-top: 17px;
          padding-right: 10px;
        }
      }
      .showFace {
        width: 240px;
        padding: 10px;
        margin: 20px auto 0 auto;
        height: 87px;
        background-color: #E0E0E0;
        border-radius: 6px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        img {
          border: 1px dashed #bbbbbb;
        }
        .title_Tips {
          text-align: center;
          font-size: 14px;
          color: #7A7A7A;
          margin-right: 10px;
        }
      }
    }
  }

  .fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  /*登录按钮*/

  .loginBtn {
    margin: 25px 20px 30px 20px;
    background-color: #FF8737;
    flex: 1;
    height: 55px;
    line-height: 55px;
    color: white;
    text-align: center;
    font-size: 18px;
    border-radius: 5px;
    box-shadow: 0 0 4px 2px #FF8737;
    letter-spacing: 3px;
  }

  .messages {
    width: 100%;
    display: flex;
  }

  .content-box {
    width: 93%;
    height: 72.5px;
    margin: 8px auto;
    background: #ffffff;
    position: relative;
    display: flex;
    border-radius: 5px;
  }
  /* 删除该聊天消息 */

  .dialogs {
    width: 175px;
    height: 70px;
    position: absolute;
    /* border: 1px solid red; */
    left: 28%;
    top: 45px;
    border-radius: 5px;
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
    width: 175px;
    height: 55px;
    text-align: center;
    line-height: 55px;
    background: #ffffff;
    color: #F54663;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 3px;
  }
  /* 用户头像 */

  .content-t>img {
    width: 60.5px;
    height: 60.5px;
    margin-left: 6px;
    margin-top: 6px;
    border: 0.5px solid #FF8737;
  }
  /* 消息优先 */

  .prioritize {
    position: absolute;
    left: 6px;
    top: 51px;
  }

  .prioritize>img {
    width: 60.5px;
    height: 15px;
  }
  /* 消息提醒 */

  .messages_q {
    width: 17px;
    height: 17px;
    font-size: 1px;
    color: #fff;
    text-align: center;
    line-height: 17px;
    border-radius: 50%;
    background: #FF4330;
    position: absolute;
    left: 57px;
    top: 0;
  }
  /* 消息列表 */

  .content-txt {
    width: 73%;
    height: 36px;
    display: flex;
    justify-content: space-between;
    margin-left: 3%;
    flex-wrap: wrap;
  }

  .named {
    display: flex;
    margin-top: 13.5px;
  }

  .named_mc {
    font-size: 15.5px;
    color: #202020;
    font-weight: 600;
  }

  .named_tu>img {
    width: 27.5px;
    height: 16.5px;
    margin-top: 2px;
    margin-left: 5px;
  }

  .named_tu .shiM {
    width: 16.5px!important;
  }

  .named_yd {
    margin-top: 15.5px;
    color: #c2c2c2;
  }
  /* 用户的基本信息 */

  .basic {
    width: 100%;
    margin-top: 10px;
    margin-left: 1%;
    display: flex;
    justify-content: space-between;
  }

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

  .time_t>div {
    margin-left: 6px;
    font-size: 12.86px;
    color: #c2c2c2;
  }
</style>
