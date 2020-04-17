<template>
	<div id="" class="page">
		<div class="backImage">
			<img class="imageBox" src="../../images/register/zhuceBj.png" />
			<div id="" class="register">
				<div class="left-box" @click="toRregister">
					<img src="../../images/register/zhuce1.png" />
				</div>
				<div class="right-box" @click="toLogin">
					<img src="../../images/register/zhuce2.png" />
				</div>

			</div>
			<div class="footBox">
				<div class="titleTips">
					<div id="" @click="aboutUs">
						关于我们
					</div>
					<div id="" @click="susessedStoy">
						成功故事
					</div>
					<div id="" @click="otherPingjia">
						用户评价
					</div>
					<div id="" @click="conentUs">
						联系我们
					</div>
				</div>

			</div>
		</div>

	</div>
</template>

<script>
	export default {

		data() {
			return {

			}
		},
		mounted() {

		},
		created() {
var token=localStorage.getItem('token');
if(token){
	this.$router.push('/index');
}
		},
		methods: {
			//关于我们
			aboutUs(){

			},
			susessedStoy(){},
			otherPingjia(){},
			conentUs(){},
			//免费注册
			toRregister(){


				 this.$router.push('/FreeRegister')
			},
			toLogin(){
				 this.$router.push('/Login')
			}

		}

	}

</script>

<style scoped lang="scss">
	* {
		padding: 0;
		margin: 0;
	}
	.page{
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
  }
	.backImage {
		width: 100%;
		height:100vh;
		position: relative;
		.imageBox {
			width: 100%;
			height: 100%;
		}
		.register {
			position: absolute;
			bottom: 70px;
			width: 100%;
			left: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			.left-box {
				flex: 1;
				margin-right: 10px;
				margin-left: 30px;
				img{
					width: 140px;
					height: 60px;
				}
			}
			.right-box {
				flex: 1;
				margin-right: 30px;
				margin-left: 10px;
				img{
					width: 155px;
					height: 60px;
				}
			}
		}
		.footBox {
			position: absolute;
			bottom: 30px;
			left: 0;
			padding: 0 20px;
			width: 100%;
			box-sizing: border-box;
			.titleTips {
				margin: 0 1px;
				display: flex;
				justify-content: center;
				align-items: center;
				div {
					flex: 1;
					font-size: 12px;
					margin: 0 10px;
					color: #6F6F6F;
				}
			}
		}
	}
</style>
