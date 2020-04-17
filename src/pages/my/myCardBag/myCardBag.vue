<template>
  <div class="pages">
    <header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title"></header-fixed-top>
    <div class="bodyBox" >
      <img src="../../../images/my/tc3@3x.png"/>
      <div id="" class="jifBox" >
        <div class="left-box">
          <p class="ptitle">账户积分 </p>
          <p class="pAcoutt"><span class="fen">236</span><span class="zi">积分</span></p>
          <div class="flex justify-space-around mingxi">
            <p @click="integral_detail">积分明细</p>
            <p @click="access_rules">获取规则</p>
          </div>
        </div>
        <div class="center_box"></div>
        <div class="left-box">
          <p class="ptitle">剩余短信 </p>
          <p class="pAcoutt"><span class="fen">10</span><span class="zi">条</span></p>
          <div class="flex justify-space-around mingxi">
            <p @click="details_sms">短信明细</p>
            <p @click="buy_sms">购买短信</p>
          </div>
        </div>
      </div>
    </div>
          <div class="padd1 flex justify-space-between align-center" >
            <div class="left_title">我的优惠券</div>
            <p class="ptitle">1张</p>
          </div>
          <div class="imgBox" >
            <img class="youhuijuan" src="../../../images/my/bg@3x.png"/>
              <!--<img class="youhuijuan" src="../../../images/my/juan_yhq.png"/>-->
              <div class="titleBox flex">
              	<div class="left_Card "><span class="span1">￥</span><span class="span2">20</span></div>
              	<div class="right_card">
              		<h1>新人优惠券</h1>
              		<p>coupons</p>
              		<h5>可用于升级永久VIP(申请时会自动抵扣)</h5>
              	</div>
              </div>
          </div>
          <div class="youhuishuoming">
            <p class="pTile">该券有效期至 :</p>
            <p class="pTile"> 2019 年 11 月 25 日 13 : 16 : 45 </p>
            <div class="flex mt10">
              <img class="imgTixing" src="../../../images/my/dbx.png"/>
              <div class="tixing">该券即将过期！</div>
            </div>
          </div>


  </div>
</template>

<script>
  import HeaderFixedTop from '../../../components/HeaderTop/HeaderFixedTop';

  export default {
    name: "MyCardBag",
    components: {
      HeaderFixedTop,

    },
    data() {
      return {
        showBackIcon: 'false',
        title: '我的卡包',
      }
    },
    methods: {
      buy_sms() {
        this.$router.push("/buy_sms");
      },
      access_rules() {
        this.$router.push("/access_rules");
      },
      details_sms() {
        this.$router.push("/details_sms");
      },
      integral_detail() {
        this.$router.push("/integral_detail");
      },
      goBack() {
        this.$router.go(-1);
      },

    }
  }
</script>
<style scoped src="../../../styles/mycomstyle.css"></style>
<style scoped lang="scss">
@import url("../../../styles/mycomstyle.css");
  .pages {
    height: 100% !important;
    height: 100%;
    overflow: hidden;
  }

  .bodyBox {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 40px;

    img {
      width: 100%;
      /*height: 250px;*/
      box-sizing: border-box;
      /*height: calc(100% - 44px);*/
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: -1;

    }

    .jifBox {
      margin-top: 40px;
      box-sizing: border-box;
      padding: 40px 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      .ptitle {
        color: #FFFFFF;
        font-size: 15.5px;
        letter-spacing: 4px;
      }

      .pAcoutt {
        color: #FFFFFF;
        font-size: 11.5px;
        margin: 20px auto 35px auto;

        .zi {
          position: absolute;
          opacity: 0.8;
          letter-spacing: 2px;
          margin-left: 5px;
          margin-top: 23px;
        }

        .fen {
          /*position: absolute;
          left: 0;
          right: 0;*/
          margin: 0 auto;
          color: #FFF04A;
          font-size: 35px;
        }
      }

      .mingxi {
        p {
          color: #FFFFFF;
          font-size: 13.5px;
          padding: 2px 0;
          opacity: 0.8;
          letter-spacing: 2px;
          border-bottom: 1px solid #FFFFFF;
        }
      }

      .left-box {
        flex: 1;
        position: relative;
        padding: 0 15px;
      }

      .center_box {
        width: 1px;
        height: 40px;
        background-color: #FFFFFF;
      }

      .right-box {
        flex: 1;
        padding: 0 15px;
      }
    }
  }

  .padd1 {
    padding: 10px 20px 20px 20px;

    /*padding: 0 20px;*/
    .left_title {
      color: #393939;
      font-size: 15.5px;
    }

    .ptitle {
      color: #808080;
      font-size: 15.5px;
    }

  }

  .imgBox {
    /*margin: 0 10px 10px 10px;*/
    width: 100%;
    box-sizing: border-box;
    position: relative;

    .youhuijuan {
      width: 340px;
      display: block;
      margin: auto;
    }
    .titleBox{
    	position: absolute;
    	/*margin: 10px;*/
    	height: 100px;
    	width: 80%;
    	left: 0;
    	right: 0;
    	top: 30px;
    	margin: auto;
    	z-index: 22;
    	 		color: white;
    	.left_Card{
    		width: 130px;
    		height: 100%;
   
    		border-right: 2px dashed white;
    		flex-shrink: initial;
    		transform: scale(0.8,1);/*第一个是横向百分比，第二个是纵向百分比*/
font: 3px/30px;
    		
    		.span1{
    			font-size: 20px;
    		}
    		.span2{
    			font-size: 80px;
    		}
    	}
    	.right_card{
    		
    		flex: 1;
    		/*padding: 0 10px;*/
    		h1{
    			letter-spacing: 1px;
    		}
    		p{
    		color: rgba(255,255,255,0.4);
    			font-size: 18px;
    			letter-spacing: 2px;
    		}
    		h5{
    			color: rgba(255,255,255,0.6);
    			font-size: 12px;
    		}
    	}
    }
  }

  .youhuishuoming {
    margin: 10px 20px 10px 20px;

    .pTile {
      font-size: 14px;;
      color: #848484;
      line-height: 25px;
    }

    .imgTixing {
      display: inline-block;
      margin-top: 2px;
      width: 20px;
    }

    .tixing {
      font-size: 14px;;
      color: #FF7B1A;
      line-height: 25px;
    }

    .mt10 {
      margin-top: 10px;
    }
  }
</style>
