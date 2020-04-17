<template>
	<div class="search">
				<!--自我介绍-->
		<div class="introduce">
			<div class="ziwojieshao">
				<b>自我介绍</b>
			</div>
			<div class="jieshao">{{userInfo.selfIntroduction}}</div>
		</div>
		<!---->
		<div id="lianxi">
			<div class="method">联系方式</div>
			<div class="detail_method">
				<div class="detail_1">QQ:</div>
				<div class="detail_2">{{userInfo.qq?userInfo.qq:'暂无数据'}}</div>
			</div>
			<div class="detail_method">
				<div class="detail_1">微信：</div>
				<div class="detail_2">{{userInfo.wechat?userInfo.wechat:'暂无数据'}}</div>
			</div>
			<div class="detail_method">
				<div class="detail_1">邮箱：</div>
				<div class="detail_2">{{userInfo.email?userInfo.email:'暂无数据'}}</div>
			</div>
			<div class="detail_foot">在权限设置中可选择对联系方式公开或隐藏</div>
		</div>
		<!--个人资料-->
		<div class="pearson">
			<div class="method">个人资料</div>

			<div class="ID">
				<div class="ID_detail1">ID:</div>
				<div class="ID_detail2">{{userInfo.uid}}</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">所在地：</div>
				<div class="ID_detail2">{{userInfo.placeOfWork}}</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">年龄:</div>
				<div class="ID_detail2">{{userInfo.age}}岁</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">身高:</div>
				<div class="ID_detail2">{{userInfo.height}}cm</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">体重:</div>
				<div class="ID_detail2">{{userInfo.weight}}kg</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">民族:</div>
				<div class="ID_detail2">{{userInfo.nation}}</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">血型:</div>
				<div class="ID_detail2">{{userInfo.bloodType|bloodTypeFilter}}</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">星座:</div>
				<div class="ID_detail2">{{userInfo.constellation}}</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">生肖:</div>
				<div class="ID_detail2">{{userInfo.zodiac}}</div>
			</div>
			<div class="ID">
				<div class="ID_detail1">婚姻状况:</div>
				<div class="ID_detail2">{{userInfo.maritalStatus|maritalStatusFilter}}</div>
			</div>
		</div>
			</div>
</template>

<script>
	export default{
		name:"person",
		props:{
			userInfo:{
				type:Object
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.introduce {
		background: #fff;
		/*	height: 145px;*/
		width: 94.67%;
		margin: 0 auto;
		margin-top: 12.5px;
		border-radius: 4px;
		padding-bottom: 10px;
	}
	
	.ziwojieshao {
		width: 88%;
		border-bottom: 0.5px solid #eaeaea;
		margin: 0 auto;
		height: 40px;
		line-height: 40px;
		color: #313131;
		font-size: 15px;
		padding-left: 5px;
	}
	
	.jieshao {
		word-break: break-all;
		padding: 0px 10px 0 10px;
		letter-spacing: 2px;
		line-height: 20px;
		color: #848383;
		box-sizing: border-box;
		font-size: 15px;
	}
	/**/
	
	#lianxi {
		width: 94.67%;
		height: 189.5px;
		background: #fff;
		margin: 10px auto 0;
		border-radius: 4px;
		/*position: relative;*/
	}
	
	.method {
		height: 40px;
		border-bottom: 0.5px solid #eaeaea;
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
		color: #2e2e2e;
	}
	
	.detail_2 {
		margin-right: 30px;
		font-size: 14px;
		color: #8e8e8e;
		width: 140.5px;
	}
	
	.detail_foot {
		margin: 18.5px 20px 0;
		/*margin: 18.5px auto 0;*/
		font-size: 14px;
		color: #a0a0a0;
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
		color: #2e2e2e;
	}
	
	.ID_detail2 {
		margin: 15px 37.5px 0 0;
		color: #8e8e8e;
		font-size: 14px;
		width: 125.5px;
	}
</style>