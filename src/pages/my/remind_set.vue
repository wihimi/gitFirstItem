<template>
	<!-- 头部导航 -->
	<div>
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd"> </header-fixed-top>
		<van-cell-group style="margin-top: 60px;" class="txt" id="txts">
			<van-switch-cell v-model="checked1" title="手机提醒设置" @input="onInput" active-color="#FF8B45" inactive-color="#CDCDCD" />
		</van-cell-group>
		<!--文字-->
		<div class="set">
			<div>
				如果您点击开启后，当您有新的信件时，系统会手机短信的形式通知您，不上网也能及时收到提醒。为保证您顺利收到手机提醒，请确保你的注册手机能正常接收短信。每提醒1次，会从您的短信提醒账户中扣除1条，请您确保您的账户里有足够的短信。当你账户里的短信为0时，将会停止提醒。
			</div>
		</div>

		<van-cell-group style="margin-top: 15px;" class="txt" id="txts">
			<van-switch-cell v-model="checked2" title="邮件提醒设置" active-color="#FF8B45" inactive-color="#CDCDCD" />
		</van-cell-group>
		<!--文字-->
		<div class="set">
			<div>
				如果您点击开启后，当您有新的信件、礼物，关注，系统会以邮件的形式通知您。为保证您顺利收到邮件提醒，防止邮件进入垃圾箱，建议您把网站邮箱加入白名单，具体操作方法：在您的注册邮箱设置中，找到“反垃圾”设置，把网站邮箱
			</div>
		</div>
		<show-dialog v-show="showD" :showDialog="showDialog" @cancelClick="cancelClick" @confirmClick="confirmClick"></show-dialog>

	</div>
</template>

<script>
	import HeaderFixedTop from '../../components/HeaderTop/HeaderFixedTop'
	import showDialog from "../../components/showDialog/showDialog";
	export default {
		data() {
			return {
				show: false,
				showBackIcon: "true",
				title: "提醒设置",
				checked1: false,
				checked2: false,
				showD: false,
				showDialog: {
					message: '由于您的自我介绍尚未通过审核，暂不能发帖，请前往修改并完善。',
					confirmMsg: '前往修改',

				},
				msgLines: 24
			}
		},
		components: {
			HeaderFixedTop,
			showDialog
		},

		methods: {
			onInput(checked) {
				if(checked) {
					if(this.msgLines == 0) {
						this.showDialog = {
							message: '对不起，你的短信提醒为0',
							confirmMsg: '确定',

						}
						this.checked1=false
					}
					if(this.msgLines > 0) {
						this.showDialog = {
							message: '你还有'+this.msgLines+'条短信提醒，每提醒1次，扣除1条，你确定要提醒吗？',
							confirmMsg: '确定',

						}
					}
					this.showD = true;
				}
				console.log(checked)
			},
			cancelClick() {
				this.showD = false;
			},
			confirmClick() {
				console.log('bbbbb');
				this.showD = false;
			},
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
	.txt {
		width: 97%;
		height: 50px;
		margin: 0 auto;
		line-height: 50px;
	}
	
	.van-cell {
		border-radius: 8px;
	}
	
	.van-cell__title {
		color: #353535;
		font-size: 15px;
	}
	
	.van-switch {
		width: 58px;
		height: 28px;
	}
	
	.van-switch__node {
		width: 27px;
		height: 27px;
		top: 0.5px;
		left: 5px;
	}
	/*文字*/
	
	.set {
		width: 100%;
		margin-top: 5px;
		div {
			width: 90%;
			line-height: 15px;
			margin: 0 auto;
			font-size: 9px;
			color: #999999;
		}
	}
</style>