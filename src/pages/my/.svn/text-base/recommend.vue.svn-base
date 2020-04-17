<template>
  <!-- 头部导航 -->
  <div>
    <header-fixed-top
      @goBack="goBack"
      :showBack="showBackIcon"
      :topTitle="title"
      @goNavAdd="goNavAdd"
      :rightTitle="rightTitle"
    ></header-fixed-top>
    <div class="bigBox">

      <div class="box">
        <!-- 内容盒子 -->
        <div class="txt">
          <!-- 推广品牌 -->
          <div class="the-title">
            <div class="line"></div>
            <div class="line_txt">推广品牌</div>
            <div class="lines"></div>
          </div>
          <!-- 通过以下方式向网友推荐“一线姻缘”：  -->
          <div class="recommended">通过以下方式向网友推荐“一线姻缘”：</div>
          <!-- 提问回答问题 -->
          <div class="questions">
            <div>1、在百度知道提问回答问题奖励50积分，每个问题仅可回答一次。</div>
            <div style=" color: #ccc;">注：在知乎、百度派、360问答、搜狗问答、天涯问答等各大问答平台回答问题，也享受相同的奖励。</div>
          </div>
          <!-- 百度贴吧发帖 -->
          <div class="questions" style=" margin-top: 10px;">
            <div>2、在百度贴吧发帖一篇奖励100积分；相同帖子：初次回帖奖励50积分，此后，每天可以跟帖一次，跟帖一次奖励20积分。</div>
            <div style=" color: #ccc;">
              注：在综合论坛（如天涯、猫扑等）的相关栏目或各个地区的征婚交友论坛按规定发帖和回帖，也享受相同的奖励。
            </div>
          </div>
          <!-- 百度口碑发帖 -->
          <div class="questions" style=" margin-top: 10px;">
            <div>3、在百度口碑中点评“一线姻缘”一次奖励50积分，每人只能点评一次</div>
          </div>
          <!-- app界面点评 -->
          <div class="questions" style=" margin-top: 10px;">
            <div>4、在APP下载界面点评“一线姻缘”一次奖励50积分，每人只能点评一次。</div>
          </div>
          <!-- 回帖截图 -->
          <div class="screenshots">
            <div>
              操作完，请将帖子链接、回帖截图或点评截图和你的会员ID号发给网站在线客服
              <span style=" color: #F54663;">（QQ：1610907206，微信：yinyuankefu）</span>，我们会及时给你奖励积分。
            </div>
          </div>
          <!-- 联系在线客服 -->
          <div class="questions" style=" margin-top: 10px;">
            <div> 具体操作方法请看相关教程或咨询网站在线客服。</div>
          </div>
          <!-- 百度知道赚积分教程 -->
          <div class="tutorial">
            <div @click="toWeb(1)">
              百度知道赚积分教程
            </div>
            <div @click="toWeb(2)">百度贴吧赚积分教程</div>
          </div>
          <!-- 百度知道赚积分教程2 -->
          <div class="tutorial" style=" margin-top: 10px;">
            <div @click="toWeb(3)">
              百度口碑赚积分教程
            </div>
            <div @click="toWeb(4)">APP点评赚积分教程</div>
          </div>
          <!-- 推广链接 -->
          <div class="the-title" style="margin-top: 20px;">
            <div class="line"></div>
            <div class="line_txt">推广链接</div>
            <div class="lines"></div>
          </div>
          <!-- 推广须知 -->
          <div class="questions" style=" margin-top: 10px;">
            <div>推广须知：</div>
            <div style=" color: #707070;"> 你可以自己推广，也可以委托他人推广。禁止作弊，如有发现，不仅扣除所有积分，而且会立即拉黑。</div>
          </div>
          <!-- 推广链接 -->
          <div class="questions" style=" margin-top: 10px;">
            <div>1、推广链接：</div>
            <span
              style=" color: #707070; word-wrap:break-word; white-space:normal; word-break:break-all;"> {{webLink}} </span>
          </div>
          <!-- 复制按钮 -->
          <div class="copy">
            <div v-clipboard:copy="webLink"
                 v-clipboard:success="onCopy"
                 v-clipboard:error="onError">复制
            </div>
          </div>
          <!-- 推广奖励 -->
          <div class="questions" style=" margin-top: 10px;">
            <div>2、推广奖励：</div>
            <div style=" color: #707070;"> 你的推广链接是根据你的ID专门为你设定的，只要有人（必须是不同IP）点击你的推广链接，
              有一个人点击，网站会自动奖励你5积分；另外，对方如在网站注册，网站会另外奖励你50积分；如对方是女生，且上传头像通过审核，网站会另外奖励你50积分。建议大家多推荐女生注册。
              当你向好友或他人推荐“一线姻缘”时，你可以将推广链接发给对方，也可以按照以下建议和方法推广。
            </div>
          </div>
          <div class="questions" style=" margin-top: 10px;">
            <div> 3、推广建议：</div>
            <div style=" color: #707070;"><p> (1)你可以在你的各种签名、日志、博客或其它文章的显眼位置加入您的推广链接和推广词进行推广。</p>
              <p>(2)你可以自己设计推广内容，在内容中加入你的推广链接，通过以下推广方法或其它方法进行推广。</p>
              <p> (3)你可以复制以下推广内容，或者对以下推广内容进行修改，通过以下推广方法或其它方法进行推广。</p>
              <p>(4)你可以分享以下推广内容，到QQ空间、新浪微博、腾讯微博、开心网、人人网、豆瓣网等进行推广。</p>
            </div>
          </div>
          <div class="questions" style=" margin-top: 10px;">
            <div>4、推广方法：</div>
            <div style=" color: #707070;"> 签名（文章）添加 QQ群转发 邮件群发 微博转发 论坛（贴吧）转发 QQ空间转载 推荐给好友
            </div>
          </div>
          <div class="questions" style=" margin-top: 10px;">
            <div> 5、参考内容：</div>
            <div> 参考内容（一）</div>
            <div style=" color: #707070;word-wrap:break-word; white-space:normal; word-break:break-all;">{{text1}}
            </div>
            <div class="copy" v-clipboard:copy="text1"
                 v-clipboard:success="onCopy1"
                 v-clipboard:error="onError1">
              <div>复制</div>
            </div>
            <div> 参考内容（二）</div>
            <div style=" color: #707070;word-wrap:break-word; white-space:normal; word-break:break-all;">
             {{text2}} </div>
            <div class="copy" v-clipboard:copy="text2"
                 v-clipboard:success="onCopy2"
                 v-clipboard:error="onError2">
              <div>复制</div>
            </div>
            <div> 参考内容（三） </div>
            <div style=" color: #707070;word-wrap:break-word; white-space:normal; word-break:break-all;">
              给大家推荐“一线姻缘”婚恋网站
              给大家推荐“一线姻缘”婚恋网站:网站比较正规，对骗子和婚托打击力度很大。如果大家觉得我没推荐错，请帮点击以下链接注册，帮我赚点积分，谢啦！http://www.11yinyuan.com/?memberid=72026557
            </div>
            <div class="copy">
              <div>复制</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderFixedTop from "../../components/HeaderTop/HeaderFixedTop";

  export default {
    data() {
      return {
        show: false,
        showBackIcon: "true",
        title: "有奖推荐",
        rightTitle: "",
        webLink: 'http://www.11yinyuan.com/?memberid=72026557',
        text1:' 给大家推荐“一线姻缘”婚恋网站:网站比较正规，管理比较严格，很多免费服务，收费低、且可赚积分消费。如果大家觉得我没推荐错，请帮点击以下链接注册，帮我赚点积分，谢啦！http://www.11yinyuan.com/?memberid=72026557',
text2:' 给大家推荐“一线姻缘”婚恋网站\n' +
  '              给大家推荐“一线姻缘”婚恋网站:网站比较正规，跟很多婚恋网站不同。如果大家觉得我没推荐错，请帮点击以下链接注册，帮我赚点积分，谢啦！http://www.11yinyuan.com/?memberid=72026557',
      };
    },
    components: {
      HeaderFixedTop
    },

    methods: {
      onCopy(e) {
        this.$toast('复制成功！');
      },
      onError(e) {
        this.$toast('复制失败！');
      },
      onCopy1(e) {
        this.$toast('复制成功！');
      },
      onError1(e) {
        this.$toast('复制失败！');
      },
      onCopy2(e) {
        this.$toast('复制成功！');
      },
      onError2(e) {
        this.$toast('复制失败！');
      },
      //跳转到外网
      toWeb(value) {
        var url = "";
        if (value == 1) {
          url = 'http://www.11yinyuan.com/pic/file/baidzhi.pdf'
        }
        if (value == 2) {
          url = 'http://www.11yinyuan.com/pic/file/baidtie.pdf'
        }
        if (value == 3) {
          url = ' http://www.11yinyuan.com/pic/file/baidkou.pdf'
        }
        if (value == 4) {
          url = 'http://www.11yinyuan.com/pic/file/appdian.pdf';
        }
        window.location.href = url;
      },
      goBack() {
        this.$router.go(-1);
      },
      goNavAdd() {
        this.$router.go(-1);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .bigBox {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;


  }

  .box {
    width: 100%;
    height: 100%;
    background-image: url(../../../static/img/xx.png);
    background-size: 100%;
    position: relative;
  }

  .txt {
    width: 70%;
    // border: 1px solid red;
    position: absolute;
    left: 14%;
    top: 26%;
    overflow-y: auto;
    height: 429.5px;

    .the-title {
      display: flex;
      // justify-content:space-around;
      .line {
        width: 30px;
        height: 2px;
        background: #bfbfbf;
        margin-top: 8px;
        margin-left: 17%;
      }

      .lines {
        width: 30px;
        height: 2px;
        background: #bfbfbf;
        margin-top: 8px;
        margin-left: 10%;
      }

      .line_txt {
        font-size: 15px;
        color: #f54663;
        margin-left: 10%;
        letter-spacing: 2 spx;
      }
    }
  }

  // 通过以下方式向网友推荐“一线姻缘”：
  .recommended {
    font-size: 12px;
    color: #333333;
    margin-top: 10px;
  }

  // 提问回答问题\
  .questions {
    font-size: 12px;
    color: #333333;
    margin-top: 10px;
  }

  // 回帖截图
  .screenshots {
    font-size: 12px;
    color: #707070;
    margin-top: 10px;
  }

  // 百度知道赚积分教程
  .tutorial {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;

    div {
      width: 115px;
      height: 27.5px;
      border: 1px solid #f54663;
      color: #f54663;
      border-radius: 5px;
      line-height: 27.5px;
      text-align: center;
      font-size: 11px;
    }
  }

  // 复制按钮
  .copy {
    margin-top: 5px;

    div {
      width: 53.5px;
      height: 27.5px;
      background: #F54663;
      color: #fff;
      border-radius: 5px;
      line-height: 27.5px;
      text-align: center;
      font-size: 12px;
      margin: 0 auto;
    }
  }
</style>
