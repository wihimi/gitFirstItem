<template>
	<div class="page">
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title"></header-fixed-top>
		<!--轮播图-->
    <div class="matTop"></div>
<!--引用封装好的轮播图-->
				<lunbotu :banner="banner"></lunbotu>
		<!--会员级别-->
		<div class="beijing">
			<div class="beijing_txt">
				<div class="beijing_txt1">会员级别：VIP会员</div>
				<div class="beijing_txt2">到期时间：  2019-12-31</div>
			</div>
			<div class="beijing_txts">
				<div class="">你有1张优惠券即将到期！ </div>
				<div class="">还剩10天10小时2分54秒</div>
			</div>
		</div>
		<!--今日特价-->
		<div class="toDayPrice">今日特价</div>
		<div class="vip">
		<div>升级VIP低至<span class="vips">5</span>折，还剩<span class="vips">3</span>天<span class="vips">20</span>小时<span class="vips">10</span>分<span class="vips">22</span>秒</div>
		<div style="margin-top: 7px;">除享受特价外，还享受<span class="vips">免费</span>实名认证，价值<span class="vips">29</span>元。</div>
		</div>

		    <!-- 选项1 -->
    <div class="option" style=" margin-top: 20px;">
      <div class="option_txt" :class="selectIndex==1?'action_border':'' ">
        <div class="option_txt1">
          <div class="div1">永久</div>
          <div class="div2">￥299</div>
          <div class="div3">原￥599</div>
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
    <div class="option" style=" margin-top: 10px;">
      <div class="option_txt" :class="selectIndex==2?'action_border':'' ">
        <div class="option_txt1">
          <div class="div1">半年</div>
          <div class="div2">￥249</div>
          <div class="div3">原￥499</div>
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
    <div class="option" style=" margin-top: 10px;">
      <div class="option_txt" :class="selectIndex==3?'action_border':'' ">
        <div class="option_txt1">
          <div class="div1">1个月</div>
          <div class="div2" style="margin-left: 7%;">￥199</div>
          <div class="div3">原￥399</div>
        </div>
        <div class="option_txt2">
           <div class="right_box">

				<img v-if="selectIndex==3" src="../../../images/my/gougou.png" />
				<div v-else class="rount_radi" @click="selectIndex=3"></div>
			</div>
        </div>
      </div>
    </div>
		<!--<div class="toDay_priceBigBox" :class="selectIndex==1?'action_border':'' ">
			<div class="left-box">
				<div class="top_Box">
					<div id="" class="title">永久</div>
					<div class="right_title">
						<span class="span1" id="">299</span> 元 &nbsp;<span class="span2">原价:799元</span>
					</div>
				</div>
				<div class="zengsong_box">
					<p>赠送100条手机短信，价值100元</p>
					<p>赠送排名优先7天，价值28元</p>
					<p>享受免费实名认证，价值29元</p>
				</div>
			</div>
			<div class="center_box">
				<img src="../../../images/my/tb_rx.png" />
			</div>

			<div class="right_box">

				<img v-if="selectIndex==1" src="../../../images/my/gougou.png" />
				<div v-else class="rount_radi" @click="selectIndex=1"></div>
			</div>

		</div>-->
		<!--<div class="toDay_priceBigBox" :class="selectIndex==2?'action_border':'' ">
			<div class="left-box">
				<div class="top_Box">
					<div id="" class="title">半年</div>
					<div class="right_title">
						<span class="span1" id="">249</span> 元 &nbsp;<span class="span2">原价:599元</span>
					</div>
				</div>
				<div class="zengsong_box">
					<p>赠送30条手机短信，价值50元</p>
					<p>赠送排名优先5天，价值20元</p>
					<p>享受免费实名认证，价值29元</p>
				</div>
			</div>
			<div class="center_box">
				<img class="remai" src="../../../images/my/remai.png"/>
			</div>
			<div class="right_box">
				<img v-if="selectIndex==2" src="../../../images/my/gougou.png" />
				<div v-else class="rount_radi" @click="selectIndex=2"></div>
			</div>

		</div>-->

		<!--<div class="toDay_priceBigBox" :class="selectIndex==3?'action_border':'' ">
			<div class="left-box">
				<div class="top_Box">
					<div id="" class="title">1个月</div>
					<div class="right_title">
						<span class="span1" id="">199</span> 元 &nbsp;<span class="span2">原价:399元</span>
					</div>
				</div>
				<div class="zengsong_box">
					<p>赠送10条手机短信，价值20元</p>
					<p>赠送排名优先3天，价值12元</p>
					<p>享受免费实名认证，价值29元</p>
				</div>
			</div>
			<div class="center_box">
				<img src="../../../images/my/tb_rx.png" />
			</div>
			<div class="right_box">
				<img v-if="selectIndex==3" src="../../../images/my/gougou.png" />
				<div v-else class="rount_radi" @click="selectIndex=3"></div>
			</div>

		</div>-->

		<div class="shuoming_box">
			<div>需付金额：<span class="money">99</span>元</div>
			<div class="">积分抵扣：<span class="money">-1</span>元[现有13积分，抵扣使用10积分]</div>
			<div class="fs_weith">卡卷抵扣：<span class="money">-30</span>元[现有1张30元新人优惠券，有限期剩下1天13小时]</div>
		</div>
		<img class="nowPay" src="../../../images/my/btn_ljfkwcsj@3x.png"/>
	</div>
</template>

<script>
	import HeaderFixedTop from '../../../components/HeaderTop/HeaderFixedTop'
	import lunbotu from '../../../components/HeaderTop/lunbotu_s'
	export default {
		name: "MemberUpgrade",
		components: {
			HeaderFixedTop,
			lunbotu
		},
		data() {
			return {
        banner:[{image:require('../../../images/my/bnr_sjhy.png')}],

				detailimages: [{
					image: 'https://upload.jianshu.io/users/upload_avatars/6519497/ab020fc6-26f6-4195-a543-db862b1fb4ca.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp'
				}],
				showBackIcon: 'false',
				title: '升级会员',
				selectIndex:0
			}
		},
		methods: {
			goBack() {
				this.$router.go(-1);
			},

		}
	}
</script>

<style scoped lang="scss">
  .page{
    font-size: 10px;
  }
  .matTop{
    height: 48px;
  }
	.toDayPrice {
		margin-top: 5px;
		text-align: center;
		font-size: 25.77px;
		color: #AF8168;
	}

	.toDay_priceBigBox {
		border: 1.5px solid #FFFFFF;
		width: 355px;
		margin: 17px auto 10px auto;
		border-radius: 4px;
		box-sizing: border-box;
		padding: 15px 12px;
		background-color: #FFFFFF;
		display: flex;
		.left-box {
			flex: 1;
			.top_Box {
				display: flex;
				justify-content: space-between;
				.title {
					font-size: 15.5px;
					color: #313131;
				}
				.right_title {
					font-size: 11.5 px;
					color: #A8A8A8;
					.span1 {
						font-size: 15.5 px;
						color: #FF773B;
					}
					.span2 {
						text-decoration: line-through;
						/*font-size: 15.5 px;
						color: #FF773B;*/
					}
				}
			}
			.zengsong_box {
				margin-top: 8px;
				p {
					font-size: 13.5px;
					color: #A8A8A8;
					line-height: 18px;
					letter-spacing: 1px;
				}
			}
		}
		.center_box {
			width: 80px;
			text-align: center;
			img {
				width: 75px;
				height: 24px;
			}
			.remai{
				width: 57px;
				height: 28px;
			}
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
	}

			.action_border{
			    border: 1.5px solid #E8C89B !important;
		}
	.shuoming_box {
		margin-top: 23px;
		width: 100%;
		padding: 0 30px;
		box-sizing: border-box;
		font-size: 14px;
		color: #A8A8A8;
		line-height: 23px;
		letter-spacing: 1px;
		.money {
			color: #FF773B;
		}
		.fs_weith{
			font-weight: 550;
		}
	}
	.nowPay{
		width:335px ;
		height: 61px;
		display: block;
		margin:24.5px auto;
		/*border: 0.5px dashed #BBBBBB;*/
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
        margin-left: 10%;
      }
    }
    .option_txt2 {
      margin-left: 10%;
      margin-top: 14px;
    }
  }
}
		/*选项的圈*/
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
		/*会员级别*/
		.beijing{
			width: 100%;
			height: 222.15px;
			background-image: url(../../../../static/img/43@3x.png);
			background-repeat:no-repeat ;
			background-size: 100% 100%;
			.beijing_txt{
				width: 90%;
				margin: 0 auto;
				display: flex;
				justify-content:space-between;
				.beijing_txt1{
					font-size: 16.5px;
					color:#FFFFFF ;
					margin-top: 25px;
				}
				.beijing_txt2{
					font-size:11px ;
					color:#FFFFFF ;
					margin-top: 31px;
				}
			}
		}
		.beijing_txts{
			width: 90%;
			margin: 80px auto;
			font-size: 14px;
			color: #FFFFFF;
			font-weight: 100;
		}
		.vip{
			font-size: 13px;
			color: #AF8168;
			text-align: center;
			margin-top: 10px;
		}
		.vips{
			color: #F54663 !important;
		}
</style>
