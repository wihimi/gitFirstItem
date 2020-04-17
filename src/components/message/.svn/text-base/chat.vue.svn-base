<template>
  <div class="box">
    <!-- 头部导航 -->
    <header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd"
                      :rightTitle="rightTitle"></header-fixed-top>
    <div class="boxs">
      <!-- 实名认证 -->
      <div class="real-name">
        Ta尚未实名认证，请提高征婚安全意识 - 点此邀请认证
      </div>
      <!-- 消息内容 -->
      <div class="xw-content" ref="xwBody">
        <div class="" v-for="(item,index) in records">
          <div class="message flex_left" v-if="item.type==1">
            <div class="message_heads">

              <img src="../../../static/img/touxiang1.png" alt="">
            </div>
            <div class="message_details text_align_left">
              <div class="message_sj">12月15日</div>
              <div class="message_box message_box_left">{{item.content}}</div>
            </div>

          </div>
          <!-- 回复消息的盒子 -->
          <div v-else class="message flex_right">

            <!-- 回复消息的右盒子 -->
            <div class="message_details text_align_right">
              <div class="message_sj">12月15日</div>
              <div class="" style="display: flex;align-items: center;">
                <!-- 回复消息的左盒子 -->
                <div class="userToken_zuo">
                  <div class="userToken_sending">发送提醒</div>
                  <div class="userToken_unread">未读</div>
                </div>
                <div class="message_box message_box_right t_left">{{item.content}}</div>

              </div>

            </div>

            <div class="message_heads">
              <img src="../../../static/img/touxiang2.png" alt="">
            </div>
          </div>

        </div>

      </div>

      <!-- 升级vip -->
      <div class="vip">
        <div class="vip_txt">
          对方尚未激活免费看信功能，建议你<span class="vip_txts">升级VIP</span> ，发信 <span class="vip_txts">对方免费看</span>
        </div>
      </div>
      <div class="crazy">
        <div class="box-left">
          <img class="crazy_tu" src="../../../static/img/icon_duihua.png" @click="fast_message" alt="">
          <input class="crazy_input" type="text" v-model="content">

        </div>
        <div class="box-right">
          <img class="imgA" src="../../../static/img/icon_gengduo.png" @click="edit_template" alt="">

          <span id="" class="sendSty" @click="sendMsg">发送</span>
        </div>
      </div>
      <!-- input框 -->
      <!-- 模态框 -->
      <!--<div class="dialog" v-show="!show">
        <img src="../../../static/img/tanchuang_duanxing.png" alt="">
        <div class="dialog_txt">立即购买短信 </div>
        <div class="dialog_txts" @click="store">暂不购买短信</div>
      </div>-->
      <!-- 模态框 -->
      <div class="dialog" v-show="show">
        <img src="../../../static/img/dxtx.png" alt="">

        <div class="dialog_txt1">对不起，你的短信提醒条数为0，无法</div>
        <div class="dialog_txts1">发送短信提醒，请先购买吧</div>
        <div class="dialog_txt">确定购买</div>
        <div class="dialog_txts" @click="store">暂不购买</div>
      </div>
    </div>
    <show-dialog v-show="showD" :showDialog="showDialog" @cancelClick="cancelClick"
                 @confirmClick="confirmClick"></show-dialog>

  </div>
</template>

<script>
  import HeaderFixedTop from '../HeaderTop/HeaderFixedTop'
  import showDialog from "../showDialog/showDialog";

  export default {
    data() {
      return {
        show: false,
        showBackIcon: "true",
        title: "悲伤的鱼",
        rightTitle: '...',
        records: [{
          type: 1,
          time: new Date().toLocaleTimeString(),
          content: '看了你的资料，觉得我们很合适，能聊聊吗，看了你的资料，觉得我们很合适，能聊聊吗看了你的资料，觉得我们很合适，能聊聊吗'
        },
          {
            type: 2,
            time: new Date().toLocaleTimeString(),
            content: '最近比较忙，有空再联系'
          }, {
            type: 1,
            time: new Date().toLocaleTimeString(),
            content: '看了你的资料，觉得我们很合适，能聊聊吗'
          },
        ],
        content: '',
        showD: false,
        showDialog: {
          message: '对不起，你的短信提醒条数为0。',
          confirmMsg: '确定',
        },
        maxLineMsg: 14
      }
    },
    components: {
      HeaderFixedTop, showDialog
    },

    methods: {
      cancelClick() {//取消提示语事假
        this.showD = false;
      },
      confirmClick() {//确定提示语事件
        if (this.maxLineMsg == 0) {
          this.show = true;
        }
        this.showD = false;
      },
      sendMsg() {
        // this.show = !this.show
        if (this.maxLineMsg <= 0) {//当短信剩余数量为0时
          this.showD = true;
          return
        } else { //
          this.showD = true;
          this.showDialog = {
            message: '你还' + this.maxLineMsg + '条短信提醒，将要扣除1条。',
            confirmMsg: '确定',
          };

          var content = this.content.trim();
          if (content.length <= 0) {
            return;
          }
          this.records.push({
            time: new Date().toLocaleTimeString(),
            content: content,
            type: 2
          });
          this.content = "";
          setTimeout(() => {
            //					this.hint();
            this.records.push({
              time: new Date().toLocaleTimeString(),
              content: '鞍山市所所',
              type: 1
            });
            this.scrollToBottom();
          }, 800);
        }

      },
      //滚动到底
      scrollToBottom() {
        setTimeout(() => {
          //滚动条长度
          var currentDistance = this.$refs.xwBody.scrollHeight - this.$refs.xwBody.clientHeight;
          //当前滚动条距离顶部的距离
          var currentScroll_y = this.$refs.xwBody.scrollTop;
          if (currentDistance > 0 && currentDistance > currentScroll_y) {
            currentScroll_y = Math.ceil((currentDistance - currentScroll_y) / 10) + currentScroll_y;
            currentScroll_y = currentScroll_y > currentDistance ? currentDistance : currentScroll_y;
            //微信和qq浏览器不支持 scrollTo？
            //this.$refs.xwBody.scrollTo(0,currentScroll_y);
            this.$refs.xwBody.scrollTop = currentScroll_y;
            this.scrollToBottom();
          }
        }, 13);
      },
      //  跳到快捷信息
      fast_message() {
        this.$router.push("/fast_message");
      },
      edit_template() {
        this.$router.push("/edit_template");
      },
      goBack() {
        this.$router.go(-1);
      },
      goNavAdd() {
        this.$router.go(-1);
      },
      //    模态框点击显示与隐藏
      store: function () {
        this.show = !this.show
      }
    }
  }
</script>

<style lang="scss" scoped>
  // 头部导航
  .van-nav-bar {
    color: #303030;
    font-weight: 500px;
  }

  // 全页面背景颜色
  /*.box {
    width: 100%;
    height: 100%;
    position: fixed;
    background: #E5E5E5;
  }
  */

  // 模态框
  /*.boxs {
    position: relative;
  }*/

  .dialog {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.85);
    left: 0;
    top: 0;
    z-index: 22;

    img {
      width: 252px;
      height: 241px;
      padding-left: 60.5px;
      padding-top: 72px;
      /*left: 43.5px;
    	top: 52px;*/
    }
  }

  .dialog_txt {
    width: 210px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    border: 1px solid #ff3366;
    color: #ff3366;
    position: absolute;
    left: 83px;
    top: 474px;
    border-radius: 50px;
  }

  .dialog_txts {
    position: absolute;
    left: 140px;
    top: 547px;
    color: #ababab;
  }

  // 头部实名认证
  .real-name {
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin-top: 45px;
    font-size: 13px;
    color: #ffffff;
    background: #FEA557;
  }

  // 消息内容
  .xw-content {
    flex: 1;
    position: relative;
    overflow: auto;
    transition: height .8s;
    height: 400px;
  }

  .message {
    width: 100%;
    padding: 5px 15px 8px;
    box-sizing: border-box;
    font-size: 15px;
    letter-spacing: 1px;
    display: flex;

    .message_heads > img {
      width: 45px;
      height: 45px;
    }

    .message_details {
      .message_sj {
        color: #a2a2a2;
        font-size: 13px;
        height: 20px;
        line-height: 20px;
      }

      .message_box {
        margin-top: 5px;
        padding: 10px;
      }
    }

    // 回复消息的左盒子
    .userToken_zuo {
      display: flex;
      align-items: center;

      .userToken_sending {
        width: 64.5px;
        height: 24px;
        font-size: 12px;
        color: #ffffff;
        text-align: center;
        line-height: 24px;
        background: #ccc;
        border-radius: 4px;
      }

      // 回复消息的右盒子
      .userToken_unread {
        width: 30px;
        margin-left: 10px;
        margin-right: 5px;
        color: #929191;
        font-size: 12.86px;
      }
    }

    .text_align_left {
      margin-left: 10px;
      text-align: left;
    }

    .text_align_right {
      text-align: right;
      margin-right: 10px;

      .t_left {
        text-align: left;
      }
    }
  }

  .flex_left {
    justify-content: flex-start;
  }

  .flex_right {
    justify-content: flex-end;
  }

  .message_box_left {
    border-radius: 0px 7px 7px 7px;
    background-color: #ffffff;
    color: #4C4C4C;
  }

  .message_box_right {
    border-radius: 7px 0px 7px 7px;
    background-color: #FB7BA0;
    color: white;
  }

  .message_txt {
    letter-spacing: 1px;
    line-height: 25px;
  }

  .message_txts {
    width: 100%;
    letter-spacing: 1px;
    line-height: 25px;
  }

  // 回复消息的盒子
  // 升级vip
  .vip {
    width: 90%;
    background: #dcdcdc;
    // border: 1px solid red;
    margin: 30px auto;
  }

  .vip_txt {
    font-size: 14px;
    color: #757575;
    padding-left: 7px;
    padding-top: 5.5px;
    line-height: 20px;
    letter-spacing: 1px;
  }

  .vip_txts {
    color: #FEA557;
  }

  // input框
  .crazy {
    width: 100%;
    height: 49px;
    line-height: 49px;
    background: #ffffff;
    position: fixed;
    bottom: 0;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    .box-left {
      flex: 1;

      .crazy_tu {
        width: 18.5px;
        height: 16.5px;
        /*margin-right: 10px;*/
      }

      .crazy_input {
        width: 210px;
        flex: 1;
        height: 20px;
        border-left: none;
        border-right: none;
        border-top: none;
      }
    }

    .box-right {
      width: 60px;
      display: flex;
      align-items: center;

      .imgA {
        width: 16.5px;
        height: 16.5px;
        display: inline;
        margin-right: 10px;
      }

      .sendSty {
        color: #F86690;
        font-size: 16px;
        text-align: right;
      }
    }
  }

  .dialog_txt1 {
    color: #E5E5E5;
    font-size: 16.24px;
    position: absolute;
    left: 28px;
    top: 350px;
    letter-spacing: 2px;
    font-weight: 100;
  }

  .dialog_txts1 {
    color: #E5E5E5;
    font-size: 16.24px;
    position: absolute;
    left: 74px;
    top: 380px;
    letter-spacing: 2px;
    font-weight: 100;
  }

  .dialog_txt {
    width: 208.5px;
    height: 47px;
    text-align: center;
    line-height: 47px;
    font-size: 19.18px;
    border: 1px solid #FF9483;
    color: #FF9483;
    position: absolute;
    left: 83px;
    top: 450px;
    border-radius: 50px;
    font-weight: 100;
    letter-spacing: 4px;
  }

  .dialog_txts {
    position: absolute;
    left: 140px;
    top: 535px;
    font-size: 19.18px;
    color: #B3B3B3;
    font-weight: 100;
    letter-spacing: 4px;
  }
</style>
