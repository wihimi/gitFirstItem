<template>
	<div id="model">
		<!--模态框-->
		<div class="container_model">
		 {{msg}}
		</div>
			<!--内容-->
		<div class="container">
			<img class="coupon1" src="../assets/tanchuang.png" alt="" />
			<img class="coupon2" src="../assets/but_massjvip@3x.png" alt="" />
			<img class="coupon3" src="../assets/icon_xing_2@2x.png" alt="" />
		</div>
	</div>
</template>

<script>
	export default{
		name:"model",
		data(){
			return {
				msg:"草泥马！"
			}
		}
	}
</script>

<style scoped="scoped">
	.container_model{
		width: 100%;
		height: 667px;
		background: black;
		opacity: .8;
		position: relative;
	}
	.container{
		width: 364px;
		height: 375px;
		border: 1px dotted black;
		position: absolute;
		z-index: 100;
		top: 118px;
	}
	.coupon1{
	}
	.coupon2{
		width: 195px;
		height:55px;
		position: absolute;
		top: 279px;
		left: 94px;
	}
	.coupon3{
		width: 20px;
		height:20px;
		position: absolute;
		top:388px;
		left: 179.5px;
	}
</style>