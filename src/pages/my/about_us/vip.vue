<template>
	<!-- 头部导航 -->
	<div>
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"> </header-fixed-top>
		<div class="txt">
			<div class="txts">
				<div class="txt1">

					一线姻缘”同城婚恋网是一家专门提供同城婚恋交友服务的网络平台，我们主要为有婚恋交友需要的单身人士提供服务，你加入“一线姻缘”之前，请你先确认是否符合“一线姻缘”的会员标准。

				</div>
				<div class="txts1" style="margin-top:20px;">

					1、年龄必须在18岁以上

				</div>
				<div class="txts1" style="margin-top:20px;">

					2、婚姻状况必须单身（未婚、离异或丧偶）

				</div>
				<div class="txts2">

					“一线姻缘”不接受已婚者注册，一旦发现或确认用户投诉的已婚者都将被加入网站黑名单，即使已经是缴费会员，也不能继续使用任何“一线姻缘”服务。

				</div>
				<div class="txts1" style="margin-top:20px;">

					3、需以婚恋征友为目的

				</div>
				<div class="txts2">

					“一线姻缘”不接受任何以玩色情、找一夜情、找第三者、发广告、做托、诈骗等非婚恋征友为目的的人注册，一旦发现或确认用户投诉，都会将其加入网站黑名单，即使已经是缴费会员，也不能继续使用任何“一线姻缘”服务。

				</div>
				<div class="txts1" style="margin-top:20px;">

					4、 、需是注册者本人婚恋交友

				</div>
				<div class="txts2">

					为保证会员权益，在“一线姻缘”注册会员需是本人征友行为，不接受代为征友或征婚的注册。

				</div>
				<div class="txts1" style="margin-top:20px;">

					5、需对其他会员持尊重态度

				</div>
				<div class="txts2">

					成为“一线姻缘”会员后，您仍需在“一线姻缘”征友过程中对其他会员保持尊重态度，任何攻击、讽刺、辱骂其他会员的行为都是网站禁止的，都会将其加入网站黑名单，即使已经是缴费会员，也不能继续使用任何“一线姻缘”服务。

				</div>
				<div class="txts1" style="margin-top:20px;">

					6、你在“一线姻缘”不曾有不良记录

				</div>
				<div class="txts2">

					对于曾经因为违反“一线姻缘”规则而被删除的会员，即使重新注册，“一线姻缘”仍将其加入黑名单，随时发现随时删除。 除了以上筛选要求以外，“一线姻缘”会坚持通过技术、人工等手段严厉打击借“一线姻缘”平台对其他会员进行诈骗的行为；一经发现或会员投诉查实将无条件停止其一切服务，并报送公安机关进一步处理。 因会员人数太多，“一线姻缘”保留对可能有不良目的的会员随时取消会员资格的权利，在这个过程中，我们可能会把一些正常会员误取消资格，如果您认为自己没有违反一线姻缘的规则而被误取消资格，请提交相应身份证明给我们的客服，如果审核通过，我们会及时恢复您的会员资格。

				</div>
				<div class="txts1" style="margin-top:20px;display: flex;justify-content:space-between;">
					<div class="">

					</div>
					<div class="">
						“一线姻缘”同城婚恋交友网
					</div>

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
				title: "会员标准",
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