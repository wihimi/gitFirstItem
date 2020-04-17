<template>
	      <!-- 头部导航 -->
        <div>
        <header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd"  :rightTitle="rightTitle"> </header-fixed-top>
   			
   			<div class="box">
   				<div class="boxs">
   				<div class="xiao_box">
   					<div class="xiao_box_img">
   						<img src="../../../../static/img/2399@3x(1).png"/>
   					</div>
   					<div class="xiao_box_txt">
   						<div class="xiao_box_txt1">上传头像</div>
   						<div class="xiao_box_txt2">上传个人真实头像</div>
   						<div class="xiao_box_txt3">奖励： <span style="color:#F54663;">5</span>  积分</div>
   					</div>
   				</div>
   				<div class="xiao_box">
   					<div class="xiao_box_img">
   						<img src="../../../../static/img/2399@3x(1).png"/>
   					</div>
   					<div class="xiao_box_txt">
   						<div class="xiao_box_txt1">上传头像</div>
   						<div class="xiao_box_txt2">上传个人真实头像</div>
   						<div class="xiao_box_txt3">奖励： <span style="color:#F54663;">5</span>  积分</div>
   					</div>
   				</div>
   					<div class="xiao_box">
   					<div class="xiao_box_img">
   						<img src="../../../../static/img/2399@3x(1).png"/>
   					</div>
   					<div class="xiao_box_txt">
   						<div class="xiao_box_txt1">上传头像</div>
   						<div class="xiao_box_txt2">上传个人真实头像</div>
   						<div class="xiao_box_txt3">奖励： <span style="color:#F54663;">5</span>  积分</div>
   					</div>
   				</div>
   					<div class="xiao_box">
   					<div class="xiao_box_img">
   						<img src="../../../../static/img/2399@3x(1).png"/>
   					</div>
   					<div class="xiao_box_txt">
   						<div class="xiao_box_txt1">上传头像</div>
   						<div class="xiao_box_txt2">上传个人真实头像</div>
   						<div class="xiao_box_txt3">奖励： <span style="color:#F54663;">5</span>  积分</div>
   					</div>
   				</div>
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
            title: "积分获取",
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
		
		.boxs{
			width: 94%;
			margin: 0 auto;	
			display: flex;
			justify-content:space-between;	
			flex-wrap:wrap;
			.xiao_box{
				width: 162px;
				height: 60px;
				background-color: #fff;
				display: flex;
				margin-top: 10px;
				.xiao_box_img{	
					
					img{
						width: 50px;
						height: 50px;
						margin-top: 5px;
						margin-left: 5px;
					}
					
				}
				.xiao_box_txt{
						margin-top: 5px;
						margin-left: 5px;
						.xiao_box_txt1{
					font-weight: 300;
							font-size:12px ;
							color: #F54663;
							
						}
						.xiao_box_txt2{
							font-size:9px ;
							color: #666666;
							margin-top: 4px;
						}
						.xiao_box_txt3{
							font-size:10px ;
							color: #333333;
							margin-top: 4px;
						}
					}
			}
		}
	}
</style>