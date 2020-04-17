<template>
	<div>
		<div class="top-continer">
			<div class="top-left-icon">
				<div v-show="showBack" @click="goBack">
					<img class="imageIcon" src="../../../static/img/icon_zuola_hei@2x.png">
				</div>
			</div>
			<div class="top-center-content">{{topTitle}}</div>
			<div class="top-right-sec" @click="goNavAdd">
				<div class="rightText">
						<img class="imageIcons" src="../../../static/img/icon_shanchu2.png">
				</div>
				</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'HeaderFixedTop',
		props: {
			showBack: {
				type: String,
				default: 'true'
			},
			topTitle: {
				type: String,
				default: ''
			},
			rightTitle: {
				type: String,
				default: ''
			},
		},
		methods: {
			goBack() {
				this.$emit('goBack');
			},
			goNavAdd() {
				this.$emit('goNavAdd');
			}
		}
	}
</script>

<style scoped>
	.top-continer {
		width: 100%;
		height: 44px;
		line-height: 44px;
		position: fixed;
		display: flex;
		justify-content: space-between;
		align-items: center;
		left: 0;
		top: 0;
		right: 0;
		background-color: #ffffff;
		z-index: 99;
	}

	.top-left-icon {
		width: 100px;
		/* margin-left: 20px; */
	}

	.top-left-icon .imageIcon {
		width: 10px;
		height: 15px;
		margin-left: 27px;
		margin-top: 17px;
	}

	.top-center-content {
		text-align: center;
		color: #303030;
		font-size: 18px;
	}

	.top-right-sec {
		width: 100px;
		/* margin-right: 20px; */
		text-align: right;
		font-size: 40px;

	}
	.top-right-sec .rightText{
	margin-right: 27px;
	margin-top: -25px;
	}
	.imageIcons{
		width:20px ;
		height:20px ;
		margin-top: 33px;
	}
</style>
