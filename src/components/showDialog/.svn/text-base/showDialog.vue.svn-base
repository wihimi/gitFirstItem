<template>
	<div class="box">
		<!-- 模态框 -->
		<div class="dialog">
			<div class="dialog_box">

				<div class="dialog_boxs">
					<div class="dialog_txt" style="color: #444446;font-size: 17px;">{{showDialog.message}}</div>
				</div>
				<div class="determined">
					<div class="determined_txt" style="color:#F54663;" @click="confirm">{{showDialog.confirmMsg}}</div>
					<div class="determined_txt" style="color:#959595;" @click="cancel">取消</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
  export  default {
    name:'showDialog',
    props:{
      showDialog:{
        message:{},
        confirmMsg:{},
      }


    },
    methods:{
      cancel(){
        this.$emit('cancelClick')
      },
      confirm(){
        this.$emit('confirmClick')
      }
    }

  }
</script>
<style lang="scss" scoped>
	.box {
		width: 100%;
		height: 100%;
		background: #f1f1f1;
	}

	// 模态框
	.dialog {
		width: 100%;
		/*height: 100%;*/
    position: fixed;
		background-color: rgba(0, 0, 0, 0.5);
		/*position: absolute;*/
		left: 0;
    top: 0;
    bottom: 0;
		z-index: 98;
		.dialog_box {
			width: 90%;
			height: 186px;
			border-radius: 5px;
			background: #fff;
			margin-top: 50%;
			margin-left: 5%;
			.dialog_boxs {
				width: 97%;
				height: 123px;
				line-height: 30px;
				margin: 0 auto;
				border-bottom: 1px solid #E0E0E0;
        text-align: center;
				.dialog_txt {
					width: 90%;
					margin: 0 auto;
					padding-top: 30px;
					//   border: 1px solid red;
				}
			}
			.determined {
				width: 100%;
				display: flex;
				font-size: 18px;
				//  border: 1px solid red;
				.determined_txt {
					width: 50%;
					height: 30px;
					margin-top: 20px;
					text-align: center;
					border-left: 1px solid #E0E0E0;
				}
			}
		}
	}
</style>
