<template>
	<!-- 头部导航 -->
	<div class="box">
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"></header-fixed-top>
		<!-- 模态框 -->
    <show-dialog v-show="showD" :showDialog="showDialog" @cancelClick="cancelClick" @confirmClick="confirmClick"></show-dialog>
		<!--引用封装好的轮播图-->
		<lunbotu></lunbotu>

		<div class="tu">
			<img src="../../../static/img/3@2x.png" alt />
		</div>

		<!-- 选项1 -->
		<div class="option" style=" margin-top: 20px;">
			<div class="option_txt" :class="selectIndex==1?'action_border':'' ">
				<div class="option_txt1">
					<div class="div1">30天</div>
					<div class="div2">￥48</div>
					<div class="div3">原￥96</div>
				</div>
				<div class="option_txt2">
					<div class="right_box">

						<img v-if="selectIndex==1" src="../../images/my/gougou.png" />
						<div v-else class="rount_radi" @click="selectIndex=1"></div>
					</div>
				</div>
			</div>
		</div>

		<!-- 选项2 -->
		<div class="option" style=" margin-top: 10px;">
			<div class="option_txt" :class="selectIndex==2?'action_border':'' ">
				<div class="option_txt1">
					<div class="div1">15天</div>
					<div class="div2">￥27</div>
					<div class="div3">原￥54</div>
				</div>
				<div class="option_txt2">
					<div class="right_box">

						<img v-if="selectIndex==2" src="../../images/my/gougou.png" />
						<div v-else class="rount_radi" @click="selectIndex=2"></div>
					</div>
				</div>
			</div>
		</div>
		<!-- 选项3 -->
		<div class="option" style=" margin-top: 10px;">
			<div class="option_txt" :class="selectIndex==3?'action_border':'' ">
				<div class="option_txt1">
					<div class="div1">5天</div>
					<div class="div2" style="margin-left: 15%;">￥10</div>
					<div class="div3">原￥20</div>
				</div>
				<div class="option_txt2">
					<div class="right_box">

						<img v-if="selectIndex==3" src="../../images/my/gougou.png" />
						<div v-else class="rount_radi" @click="selectIndex=3"></div>
					</div>
				</div>
			</div>
		</div>

		<!-- 付款 -->
		<div class="payment">
			<!-- 需付金额： -->
			<div>
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
				<span style=" color: #FF773B;">1</span>元 [现有
				<span style=" color: #FF773B;">13</span>积分,抵扣使用
				<span style=" color: #FF773B;">10</span>积分]
			</div>
			<!-- 实付金额： -->
			<div style=" margin-top: 6px;">
				实付金额：
				<span style=" color: #FF773B;">47</span>元
			</div>
		</div>

		<!-- 底部按钮 -->
		<van-button class="step" type="primary" size="large" color="#ff8737" @click="clickOne">确认购买</van-button>
	</div>
</template>

<script>
	import HeaderFixedTop from "../../components/HeaderTop/HeaderFixedTop";
	import lunbotu from '../../components/HeaderTop/lunbotu'
  import showDialog from "../../components/showDialog/showDialog";
	export default {
		components: {
			HeaderFixedTop,
			lunbotu,showDialog
		},

		data() {
			return {
        showD: false,
				showBackIcon: "true",
				title: "排名优先",
        showDialog:{
          message:'由于您的自我介绍尚未通过审核，暂不能申请，请前往上传并等待审核。',
          confirmMsg:'前往上传',
        },
				rightTitle: "",
				selectIndex: 0,
			};
		},

		methods: {
      cancelClick(){
        this.showD=false;
      },
      confirmClick(){
        console.log('bbbbb');
        this.showD=false;
      },
			goBack() {
				this.$router.go(-1);
			},
			goNavAdd() {
				this.$router.go(-1);
			},
			clickOne() {
				this.showD = !this.showD
			},
		},

	};
</script>

<style lang="scss" scoped>
	.box {
		width: 100%;
		height: 100%;
	}

	.tu {
		margin-top: 5px;
		img {
			width: 100%;
			height: 100%;
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

	.action_border {
		border: 1.5px solid #E8C89B !important;
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

	.step {
		width: 90%;
		height: 56px;
		border-radius: 5px;
		/*position:fixed;*/
		bottom: 20px;
		left: 5%;
	}
	/*// 模态框*/

</style>
