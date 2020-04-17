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
				<div :style="rightText">{{rightTitle}}</div>
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
		data() {
			return {
				rightText: {
					marginRight: '27px',
				}
			}
		},
		mounted() {
			if(this.rightTitle == '保存') {
				this.rightText= {
					fontSize: '14px',
					color: '#F54663',
					marginRight:'25px'
				}
			}

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
		position: fixed;
		display: flex;
		justify-content: space-between;
		align-items: center;
		left: 0;
		top: 0px;
		right: 0;
		background-color: #ffffff;
		z-index: 99;
		/* border-bottom:1px solid rgba(10,10,10,0.8); */
		/* box-shadow: 12px,12px,12px,12px,rgba(0, 0, 0, 0.5)!important; */
		/* box-shadow: (0px 1px 0px 1px rgb(10,10,10)); */
		/* box-shadow:inset 0px 1px 0px 2px rgb(10,10,10);
	   */
		box-shadow: 0px 1px 4px rgb(10, 10, 10, 0.1);
	}

	.top-left-icon {
		width: 100px;
		/* margin-left: 20px; */
	}

	.top-left-icon .imageIcon {
		width: 10px;
		height: 15px;
		margin-left: 27px;
		margin-top: 5px;
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
	/*.top-right-sec .rightText{
margin-right: 27px;
	}*/
</style>
