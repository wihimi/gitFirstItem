<template>
		<div class="modal-dialog">
			{{showToast}}
		</div>
</template>

<script>
	export default{
		name:"modal",
		props: {
				showToast: {
				type: String,
				default: ''
			},
		},
		data(){
			return{
				msg:"goujibaji"
			}
		}
	}
</script>

<style>
		.modal-dialog{
		position: fixed;
		/*width: 100px;*/
		/*height: 20px;*/
		font-size: 14px;
		padding: 5px 5px;
		background: #8C8C8C;
		color: #fff;
		 left:50%;
    	top:50%;
		transform: translate(-50%,-50%);
	}
</style>