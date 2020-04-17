<template>
	<div class="search">
				<img src="../../../assets/icon_shousuo2@2x.png"  @click="dianji"/>
				<!--搜索输入框-->
				<div class="search_value">
					<input type="text" placeholder="请输入用户名或ID" v-model="username" />
				</div>
			</div>
</template>

<script>
		import { getUserList } from '@/request/api'; // 导入我们的api接口
	export default {
//		props: {
//username: String,
//},
props: [ 'username' ],
 

		data(){
				return {
					list:[]
				}
		},
		methods: {
		dianji(){
//	
//			var username = this.username;
//			var list=[];
//			getUserList({
//				username,
//				}).then(res => {
//					list = res.data.list
//				});
					this.$emit('dianji', this.username)
		},
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.search {
		width: 345px;
		height: 35px;
		line-height: 35px;
		background: #DDDEE1;
		margin: 0 auto;
		display: flex;
		border-radius: 20px;
	}
	
	.search img {
		width: 16px;
		height: 16px;
		margin-top: 10.5px;
		margin-left: 13px;
	}
	
	.search_value input:focus {
		text-decoration: none;
		outline: none;
	}
	
	.search_value input {
	width: 80%;
		display: inline-block;
		border: none;
		background: #DDDEE1;
		font-size: 15.5px;
	}
	
	.search_value {
		width: 80%;
		flex: 1;margin-left: 8.5px;
		/*margin-top: 6.5px;
		margin-left: 8.5px;*/
	}
	
	.category {
		display: flex;
		position: relative;
	}
</style>