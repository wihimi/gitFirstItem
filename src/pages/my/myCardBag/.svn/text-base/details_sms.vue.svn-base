<template>
	      <!-- 头部导航 -->
        <div>
        <header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd"  :rightTitle="rightTitle"> </header-fixed-top>
   			
   			<div class="box">
   				<div class="boxs">
   					<div class="integral">
   						<div class="integral_txt">
   							购买短信提醒
   						</div>
   						<div class="integral_txts">
   						<span style="font-size: 24px;color: #F54663;">+2</span>积分
   						</div>
   					</div>
   					
   						<div  style="color: #999999;font-size: 11px;">
   							2019-10-14  15:59:31
   						</div>
   			
   				</div>
   				<div class="boxs">
   					<div class="integral">
   						<div class="integral_txt">
   							手机提醒
   						</div>
   						<div class="integral_txts">
   						<span style="font-size: 24px;color: #F54663;">+2</span>积分
   						</div>
   					</div>
   					
   						<span style="color: #999999;font-size: 11px;">
   							2019-10-14  15:59:31
   						</span>
   					
   				</div>
   			</div>
        
        </div>
</template>

<script>
	import HeaderFixedTop from '../../../components/HeaderTop/HeaderFixedTop'

    export default {
        data(){
            return{
            show:false,
            showBackIcon: "true",
            title: "短信明细",
         rightTitle:''
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

<style lang="scss" scoped>
	.box{
		width: 100%;
		margin-top: 45px;
		background-color: #fff;
		.boxs{
			width: 90%;
			height: 66px;
			margin: 0 auto;
			border-top:0.5px solid #DDDDDD;
			.integral{
				width: 100%;
				display: flex;
				justify-content:space-between;
				
				.integral_txt{
					font-size: 14px;
					color: #333333;
					margin-top: 17px;
				}
				.integral_txts{
					font-size: 14px;
					color: #333333;
					margin-top: 15px;
				}
			}
			.integral2{
				width: 100%;
				display: flex;
				justify-content:space-between;
				margin-top: 5px;
				#integral_txt2{
					font-size: 11px;
					color: #999999;
				}

			}
		}
	}
</style>