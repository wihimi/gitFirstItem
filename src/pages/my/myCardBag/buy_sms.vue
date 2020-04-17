<template>
	<!-- 头部导航 -->
	<div>
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"> </header-fixed-top>

		<div class="box">
			<!--头部图片-->
			<div class="boxs">
				<!--引用封装好的轮播图-->
				<lunbotu></lunbotu>
			</div>
			<!--短信提醒-->
			<div class="sms">
				<div class="sms_s">
					<div class="sms_1">
						短信提醒：0条
					</div>
					<div class="sms_2">

						开通短信提醒可提醒对方看信，更有诚意回信率大大提高;　可设置线上提醒让你能及时与在线的 联系；可设置手机提醒，不上网也能及时收到提醒

					</div>
				</div>
			</div>
			
			 <!-- 选项1 -->
    <div class="option"  style=" margin-top: 20px;">
      <div class="option_txt" :class="selectIndex==1?'action_border':'' ">
        <div class="option_txt1">
          <div class="div1">30天</div>
          <div class="div2">￥48</div>
          <div class="div3">原￥96</div>
        </div>
        <div class="option_txt2">
          	<div class="right_box">
				
				<img v-if="selectIndex==1" src="../../../images/my/gougou.png" />
				<div v-else class="rount_radi" @click="selectIndex=1"></div>
			</div>
        </div>
      </div>
    </div>

    <!-- 选项2 -->
    <div class="option"  style=" margin-top: 10px;">
      <div class="option_txt" :class="selectIndex==2?'action_border':'' ">
        <div class="option_txt1">
          <div class="div1">15天</div>
          <div class="div2">￥27</div>
          <div class="div3">原￥54</div>
        </div>
        <div class="option_txt2">
          <div class="right_box">
				
				<img v-if="selectIndex==2" src="../../../images/my/gougou.png" />
				<div v-else class="rount_radi" @click="selectIndex=2"></div>
			</div>
        </div>
      </div>
    </div>
    <!-- 选项3 -->
    <div class="option"  style=" margin-top: 10px;">
      <div class="option_txt" :class="selectIndex==3?'action_border':'' ">
        <div class="option_txt1">
          <div class="div1">5天</div>
          <div class="div2">￥10</div>
          <div class="div3">原￥20</div>
        </div>
        <div class="option_txt2">
         <div class="right_box">
				
				<img v-if="selectIndex==3" src="../../../images/my/gougou.png" />
				<div v-else class="rount_radi" @click="selectIndex=3"></div>
			</div>
        </div>
      </div>
    </div>

    <!-- 付款 -->
    <div class="payment">
        <!-- 需付金额： -->
      <div >
        需付金额：
        <span style=" color: #FF773B;">48元</span>
        <span style="  text-decoration: line-through;">
          原价
          <span style="font-weight:555;color: #989898; ">96</span> 元
        </span>
      </div>
       <!-- 积分抵扣： -->
      <div style=" margin-top: 6px;">
        积分抵扣：
        <span style=" color: #FF773B;">1</span>元 [ 现有
        <span style=" color: #FF773B;">13</span>积分，抵扣使用
        <span style=" color: #FF773B;">10</span>积分 ]
      </div>
      <!-- 实付金额： -->
      <div style=" margin-top: 6px;">
        实付金额：
        <span style=" color: #FF773B;">47</span>元
      </div>
    </div>
        
    <!-- 底部按钮 -->
      <van-button class="step" type="primary" size="large" color="#ff8737" >确认购买</van-button>
  </div>

		</div>

	</div>
</template>

<script>
	import HeaderFixedTop from '../../../components/HeaderTop/HeaderFixedTop'
	import lunbotu from '../../../components/HeaderTop/lunbotu'
	export default {
		data() {
			return {
				show: false,
				showBackIcon: "true",
				title: "短信提醒",
				rightTitle: '',
				selectIndex:0
			}
		},
		components: {
			HeaderFixedTop,
			lunbotu,
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
	.box {
		width: 100%;
		margin-top: 55px;
		/*头部图片*/
		.boxs {
			width: 94%;
			margin: 0 auto;
			img {
				width: 331px;
				height: 80.25px;
			}
		}
		/*短信提醒*/
		.sms {
			width: 100%;
			height: 171.45px;
			background: url(../../../../static/img/43@3x.png);
			background-repeat: no-repeat;
			background-size: 100% 100%;
			.sms_s {
				margin: 0 auto;
				width: 90%;
				.sms_1 {
					height: 60px;
					line-height: 60px;
					font-size: 16.5px;
					color: #FFFFFF;
				}
				.sms_2 {
					font-size: 14px;
					color: #FFFFFF;
					line-height: 20px;
					letter-spacing:1px;
				}
			}
		}
	}
	/*// 选项*/
.option {
  width: 100%;

  /*// border: 1px solid red;*/
  .option_txt {
    width: 95%;
    border: 1.5px solid #FFFFFF;
    height: 57.5px;
    background: #fff;
    margin: 0 auto;
    border-radius: 5px;
    display: flex;
    
    .option_txt1 {
      width: 70%;
      height: 30px;
      line-height: 30px;
      margin-left: 13px;
      margin-top: 13px;
      border-right: 0.5px dashed #bfbfbf;
      display: flex;
      .div1 {
        color: #313131;
        font-size: 15.5px;
      }
      .div2 {
        color: #ff773b;
        font-size: 15.5px;
        margin-left: 11%;
      }
      .div3 {
        color: #a8a8a8;
        font-size: 11.5px;
        text-decoration: line-through;
        margin-left: 2%;
      }
    }
    .option_txt2 {
      margin-left: 10%;
      margin-top: 14px;
    }
  }
}
/*// 付款*/
.payment {
    width: 85%;
    margin: 20px auto;
  color: #979797;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 50px;
}
/*// 底部按钮*/
/* 底部 */
.step{
       width: 90%;
    height: 56px;
    border-radius:5px;
   bottom:20px;
   left:5% ;
}
		.right_box {
			width: 33px;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			.rount_radi {
				width: 25px;
				height: 25px;
				border: 1px solid #CACACA;
				border-radius: 50%;
				/*display: block;
				margin: auto;*/
			}
		}
		.action_border{
			    border: 1.5px solid #E8C89B !important;
		}
</style>