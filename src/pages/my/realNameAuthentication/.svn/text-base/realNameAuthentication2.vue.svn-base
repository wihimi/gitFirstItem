<template>
	<div class="">
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title"></header-fixed-top>
		<div class="paddIngTopTitle topImageBox">
			<img class="topImage" src="../../../images/my/bj_vip_mfrz.png" />
			<div class="smallBox">
				<!--<img src="../../../images/my/矩形 2096.png" />-->
			</div>
			<div class="titleBox">立即升级VIP会员</div>
		</div>
		<div class="shuoming_title_fufei">普通用户需付费认证</div>
		<div class="shuomingBox">
			<p>需付金额：<span id="">29</span>元 原件99元</p>
			<p>积分抵扣：<span id="">1</span>元[现有<span id="">13</span>积分，抵扣使用<span id="">10</span>积分]</p>
			<p>实付金额：<span id="">28</span>元 </p>
		</div>
		<img @click="topayMoney" class="imageBox2" src="../../../images/my/btn ljfkwcsq.png"/>
	<div class="shuomingBox2">
		<p>为什么要收取认证费</p>
	<span id=""> 实名认证是由第三方权威机构执行验证，需要一定成本；同时少量收费可有效淘汰部分动机不纯者，提高会员质量和网站真实度
   </span>
	</div>
	<div v-show="showSucssced==1" class="susscedImge">
		<img @click="toIndex" src="../../../images/my/rz_sussced.png"/>
	</div>
	
	</div>
</template>

<script>
	import HeaderFixedTop from '../../../components/HeaderTop/HeaderFixedTop'
	export default {
		name: "realNameAuthentication2",
		components: {
			HeaderFixedTop,

		},
		data() {
			return {
				showBackIcon: 'false',
				title: '实名认证',
				showSucssced:0
			}
		},
		methods: {
			goBack() {
				this.$router.go(-1);
			},
			topayMoney(){
				this.showSucssced=1
			},
			toIndex(){
				this.$router.push({path:'/Index'})
			}
		}
	}
</script>

<style scoped lang='scss'>
	@import "../../../styles/mycomstyle.css";
	.topImageBox {
		position: relative;
		.smallBox {
			position: absolute;
			left: 18px;
			right: 18px;
			top: 132px;
			border: 0.5px dashed #BBBBBB;
		}
		.titleBox {
			position: absolute;
			left: 0px;
			right: 0px;
			margin: auto;
			text-align: center;
			top: 147px;
			color: #79522E;
			font-size: 18px;
		}
	}
	
	.topImage {
		width: 100%;
		border: 0.5px dashed #BBBBBB;
	}
	
	.shuoming_title_fufei {
		color: #2D2D2D;
		font-size: 24px;
		text-align: center;
		margin-top: 10px;
	}
	
	.shuomingBox {
		margin: 12px 22.5px;
		color: #979797;
		font-size: 14px;
		line-height: 25px;
		span {
			color: #FF773B;
			font-size: 16px;
		}
	}
	.imageBox2{
		display: block;
		margin:20px auto;
		border: 0.5px dashed #BBBBBB;
	}
	.shuomingBox2{
		margin: 12px 22.5px;
		color: #979797;
		font-size: 14px;
		line-height: 25px;
		p{
			color:#313131;
			font-weight: 500;
			margin-bottom: 5px;
		}
	}
	.susscedImge{
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: 0;
		img{
			width: 100%;
			height: 100%;
		}
	}
</style>