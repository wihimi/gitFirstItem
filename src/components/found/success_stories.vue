<template>
      <!-- 头部导航 -->
        <div>
        <header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd"  :rightTitle="rightTitle"> </header-fixed-top>
  	<!--故事-->
        <div class="stories">
        	<div class="stories1">
        		<div class="stories1_bt">
        			找到真爱    
        		</div>
        		<div class="stories1_sj">
        			2019-04-15 14:00
        		</div>
        		<div class="stories1_txt">
        			   
                                非常感谢“一线姻缘”，是她让我找到了自己心仪的人，我现在和这个对象处的非常好，自己非常满意，我现在非常憧憬我们两个的未来，感谢有这么好的一个交友平台，感谢这里的工作人员，让我遇到了现在的他。在这样一个平台，茫茫人海中我碰到了我知心的人，就这样我们慢慢地确定了恋人关系，我们两个的相遇是那么的自然，顺理成章，我相信这迟来的爱情，也坚信，我们在爱情的道路上会相互帮助，相互依靠，相互扶持！

                            
        		</div>
        	</div>
        </div>
        	<!--祝福留言(4)-->
			<div class="love_story">
			祝福留言 <span style="color:#F54663 ;">(4)</span>
		</div>
				<div class="message">
		<div class="messages">
			<div class="messages_tu">
				<img src="../../../static/img/2399@3x(4).png"/>
			</div>
			<div class="messages_txt">
				<div class="messages_txts">
					<div style="font-size:11px;color:#F54663;">
							缘来似你啊   25岁  广东省深圳市
					</div>
				<div style="font-size:10px;color:#999999;">
							昨天20：23
					</div>
				</div>
				<div style="font-size:13px;color:#333333;margin-top: 5px;">
					祝福你们啊，幸福久久
				</div>
			</div>
		</div>
		<div class="messages">
			<div class="messages_tu">
				<img src="../../../static/img/2399@3x(4).png"/>
			</div>
			<div class="messages_txt">
				<div class="messages_txts">
					<div style="font-size:11px;color:#F54663;">
							缘来似你啊   25岁  广东省深圳市
					</div>
				<div style="font-size:10px;color:#999999;">
							昨天20：23
					</div>
				</div>
				<div style="font-size:13px;color:#333333;margin-top: 5px;">
					祝福你们啊，幸福久久
				</div>
			</div>
		</div>
		</div>
		<!--输入框-->
		<div class="message_input">
		<div class="message_inputs">
			
		
			<div class="message_input1">
				<input placeholder="请输入你想祝福的话" />
			</div>
			<div class="message_input2">
				发表
			</div>
		</div>
		</div>
        </div>
</template>

<script>
	import HeaderFixedTop from '../HeaderTop/HeaderFixedTop'

    export default {
        data(){
            return{
            show:false,
            showBackIcon: "true",
            title: "成功故事",
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
.stories{
	width: 100%;
	background: #fff;
	margin-top: 45px;
	.stories1{
		width: 90%;
		margin: 0 auto;
		.stories1_bt{
			text-align: center;
			font-size:15px;
			color: #333333;
		}
		.stories1_sj{
			text-align: center;
			font-size:10px;
			color: #999999;
			margin-top: 5px;
		}
		.stories1_txt{
			font-size:12px;
			line-height: 20px;
			color: #666666;
			letter-spacing:1px;
			margin-top: 5px;
			padding-bottom: 10px;
		}
	}
}
	/*爱情故事*/
	
	.love_story {
		width: 93%;
		margin: 0 auto;
		margin-top: 15px;
		height: 20px;
		font-size: 15px;
		color: #444446;
	}
		/*祝福留言*/
	.message{
		width: 100%;
		background: #FFFFFF;
		margin-top: 5px;
		.messages{
			width: 93%;
			height: 62.5px;
			margin: 0 auto;
			display: flex;
			border-bottom: 1px solid #DDDDDD;
			.messages_tu{
				width: 37.5px;
				height: 37.5px;
				margin-top: 12.5px;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.messages_txt{
				width: 87%;
				margin-left: 5px;
				margin-top: 15px;
				.messages_txts{
					display: flex;
					justify-content:space-between;
					
				}
			}
		}
	}
	/*输入框*/
	.message_input{
		width: 100%;
		height: 44px;
		background: #fff;
		position: fixed;
		bottom: 0;
		.message_inputs{
			width: 93%;
			margin: 0 auto;
			display: flex;
			justify-content:space-between;
		.message_input1{
			margin-top: 10px;
			input{
				width: 275px;
				height: 24px;
				background: #F1F1F1;
				border-radius: 20px;
				border: none;
				font-size: 10px;
				color: #999999;
				text-indent:10px;
			}	
		}
		.message_input2{
			width:62px ;
			height:22.5px ;
			text-align: center;
			line-height: 22.5px;
			border-radius: 5px;
			background: #F54663;
			color: #fff;
			font-size: 11px;
			margin-top: 10px;
			
		}
	}
	}
</style>