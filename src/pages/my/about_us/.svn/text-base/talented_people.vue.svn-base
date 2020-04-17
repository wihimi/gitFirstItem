<template>
	<!-- 头部导航 -->
	<div>
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"> </header-fixed-top>
		<div class="txt">
			<div class="txts">
				<div class="txt1">



                                因网站不断快速发展需要，我们急需招聘以下人才：
 
                            
				</div>
				<div class="txts1" style="margin-top:20px;">

					
                                招聘职位：
                            

				</div>
				<div class="txts2">



                                优秀红娘 20名   客服人员 20名  爱情顾问5名   网站编辑 2名   论坛编辑 2名
技术人员   2名    广告经理  1名   公关经理 1名   策划经理 1名   招商经理 1名
 
                            
				</div>
				<div class="txts1" style="margin-top:20px;">

                                职位要求：
                            

				</div>
				<div class="txts2">



                                热爱婚恋交友行业、道德品质好、服务意识强、具有团队精神、熟悉岗位工作，有一定工作经验。
 
                            
				</div>
				<div class="txts1" style="margin-top:20px;">

                                简历投递：
                            
				</div>
				<div class="txts2">



                                E-Mail：1610907206@qq.com  （请在简历邮件主题标注您期望应聘的职位）
 
人才是网站发展的根本，也是网站服务的保证，我们一直非常重视人才的培养和引进，我们会给员工提供良好的工作
环境和薪资待遇，我们真诚期待更多优秀人才的加盟，也非常欢迎广大会员积极向我们推荐优秀人才！
                            
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	import HeaderFixedTop from '../../../components/HeaderTop/HeaderFixedTop'

	export default {
		data() {
			return {
				show: false,
				showBackIcon: "true",
				title: "诚聘英才",
				rightTitle: ''
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

<style scoped>
	.txt {
		width: 100%;
		margin-top: 60px;
	}
	
	.txt1 {
		font-size: 13px;
		color: #666666;
	}
	
	.txts {
		width: 90%;
		margin: 0 auto;
	}
	
	.txts1 {
		font-size: 13px;
		color: #333333;
		font-weight: 600;
	}
	
	.txts2 {
		font-size: 13px;
		color: #666666;
		line-height: 20px;
	}
</style>