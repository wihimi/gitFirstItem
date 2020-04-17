<template>
	<div id="detail_s">
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"> </header-fixed-top>

		<div id="lianxi">
			<div class="method">
				联系方式
			</div>
			<div class="detail_method">
				<div class="detail_1">
					QQ:
				</div>
				<div class="detail_2">
					11111111111
				</div>
			</div>
			<div class="detail_method">
				<div class="detail_1">
					微信：
				</div>
				<div class="detail_2">
					11111111111
				</div>
			</div>
			<div class="detail_method">
				<div class="detail_1">
					邮箱：
				</div>
				<div class="detail_2">
					11111111111@qq.com
				</div>
			</div>
			<div class="detail_foot">
				在权限设置中可选择对联系方式公开或隐藏
			</div>
		</div>
		<!--个人资料-->
		<div class="pearson">
			<div class="method">
				个人资料
			</div>

			<div class="ID">
				<div class="ID_detail1">
					ID:
				</div>
				<div class="ID_detail2">
					60130451
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">
					所在地：
				</div>
				<div class="ID_detail2">
					湖北·武汉·江岸区
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">
					年龄:
				</div>
				<div class="ID_detail2">
					50岁
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">
					身高:
				</div>
				<div class="ID_detail2">
					158cm
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">
					体重:
				</div>
				<div class="ID_detail2">
					50kg
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">
					民族:
				</div>
				<div class="ID_detail2">
					汉族
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">
					血型:
				</div>
				<div class="ID_detail2">
					A型
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">
					星座:
				</div>
				<div class="ID_detail2">
					巨蟹
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">
					生肖:
				</div>
				<div class="ID_detail2">
					鼠
				</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">
					婚姻状况:
				</div>
				<div class="ID_detail2">
					离异
				</div>
			</div>

		</div>
		<div class="footer">
			<img src="../../assets/dibubeijing@3x.png" class="beijing" />
			<img src="../../assets/111@3x.png" class="siliao" /><span style="position: fixed;bottom:15px;left: 62.5px;">私聊</span>
			<img src="../../assets/222@3x.png" alt="" class="songli" /><span style="position: fixed;bottom:15px;left:182px;">送礼</span>
			<img src="../../assets/333@3x.png" class="guanzhu" /><span style="position: fixed;bottom:15px;left: 305px;">关注</span>
		</div>
		<!--底部透明层-->
		<div class="guodu">

		</div>
	</div>

</template>

<script>
	import HeaderFixedTop from '../HeaderTop/HeaderFixedTop'

	export default {
		data() {
			return {
				show: false,
				showBackIcon: "true",
				title: "春田油菜花",
				rightTitle: '...'
			}
		},
		components: {
			HeaderFixedTop,
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

<style scoped="scoped" lang="scss">
	#detail_s {
		width: 100%;
		height: 618px;
		/*position: fixed;*/
		background: #F1F1F1;
		margin-bottom: 54.5px;
	}
	
	#lianxi {
		width: 94.67%;
		height: 189.5px;
		background: #fff;
		margin: 54px auto 0;
		border-radius: 4px;
		position: relative;
		top: 10px;
	}
	
	.method {
		height: 40px;
		border-bottom: 0.5px solid #EAEAEA;
		width: 88%;
		margin: 0 auto;
		padding-left: 5.5px;
		padding-top: 10.5px;
		box-sizing: border-box;
		font-size: 14.5px;
		color: #313131;
		font-weight: bold;
	}
	
	.detail_method {
		width: 88%;
		margin: 15.5px auto 0;
		display: flex;
		justify-content: space-between;
	}
	
	.detail_1 {
		margin-left: 6px;
		font-size: 14px;
		color: #2E2E2E;
	}
	
	.detail_2 {
		margin-right: 30px;
		font-size: 14px;
		color: #8E8E8E;
		width: 140.5px;
	}
	
	.detail_foot {
		width: 77.6%;
		margin: 18.5px auto 0;
		font-size: 14px;
		color: #A0A0A0
	}
	
	.pearson {
		width: 94.67%;
		height: 389.5px;
		background: #fff;
		margin: 22.5px auto 0;
		border-radius: 4px;
	}
	
	.ID {
		display: flex;
		width: 88%;
		margin: 0 auto;
		justify-content: space-between;
	}
	
	.ID_detail1 {
		margin: 15px 0 0 6.5px;
		font-size: 14px;
		color: #2E2E2E;
	}
	
	.ID_detail2 {
		margin: 15px 37.5px 0 0;
		color: #8E8E8E;
		font-size: 14px;
		width: 125.5px;
	}
	
	.footer {
		/*height: 54.5px;*/
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	
	.beijing {
		height: 100%;
		width: 100%;
		/*vertical-align:top*/
		margin-bottom: -5px;
	}
	
	img {
		display: block;
	}
	
	.siliao {
		width: 16.5px;
		height: 14.5px;
		display: inline-block;
		position: fixed;
		bottom: 15px;
		left: 40px;
		z-index: 100;
	}
	
	.songli {
		width: 14px;
		height: 15.5px;
		display: inline-block;
		position: fixed;
		bottom: 15px;
		left: 162.5px;
		z-index: 100;
	}
	
	.guanzhu {
		width: 16.5px;
		height: 14.5px;
		display: inline-block;
		position: fixed;
		bottom: 15.5px;
		left: 283px;
		z-index: 100;
	}
	
	span {
		color: #fff;
		font-size: 14.5px;
	}
	
	.introduce {
		background: #fff;
		/*	height: 145px;*/
		width: 94.67%;
		margin: 0 auto;
		margin-top: 12.5px;
		border-radius: 4px;
	}
	
	.ziwojieshao {
		width: 88%;
		border-bottom: 0.5px solid #EAEAEA;
		margin: 0 auto;
		height: 40px;
		line-height: 40px;
		color: #313131;
		font-size: 15px;
		padding-left: 5px;
	}
	
	.jieshao {
		word-break: break-all;
		margin: 0 auto;
		margin-top: 16px;
		width: 318px;
		color: #848383;
		/*height: 88.5px;*/
	}
	
	.guodu {
		position: fixed;
		height:20px ;
		width: 100%;
		bottom:49.5px;
		/*border:1px solid red;*/
		/* position: absolute; */
		background: linear-gradient( bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))
	}
</style>