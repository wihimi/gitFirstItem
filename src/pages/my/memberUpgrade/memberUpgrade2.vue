<template>
	<div class="">
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title"></header-fixed-top>
		<div class="listBox">
			<div class="bottom_line_box ">
				<div id="" class="title">VIP会员权益列表 </div>
			</div>
			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_xinfeng.png" />
				<div class="text_right">
					<div class="titleDes">免费看信不限量</div>
					<div class="span1">不会错过任何一封来信，看信多，机会多。</div>
				</div>
			</div>
			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_bi.png" />
				<div class="text_right">
					<div class="titleDes">发信对方免费看 </div>
					<div class="span1">不用担心对方看不了信，回信率大大提高。，看信多，机会多。</div>
				</div>
			</div>

			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_dian.png" />
				<div class="text_right">
					<div class="titleDes">QQ在线聊天 </div>
					<div class="span1">沟通更直接、更方便，成功率会大大提高。
					</div>
				</div>
			</div>

			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_lianjie.png" />
				<div class="text_right">
					<div class="titleDes">加入VIP交友QQ群<img class="qie" src="../../../images/my/qie.png" /> </div>
					<div class="span1">全是VIP，在线沟通，成功率会大大提高。
					</div>
				</div>
			</div>

			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_yun.png" />
				<div class="text_right">
					<div class="titleDes">在VIP会员专区展示</div>
					<div class="span1">更多展示，曝光率更多，收信量会大增。
					</div>
				</div>
			</div>

			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_fdj.png" />
				<div class="text_right">
					<div class="titleDes">查看联系方式 </div>
					<div class="span1">对方不在线或很少登录，也能联系对方。</div>
				</div>
			</div>
			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_zuobiao.png" />
				<div class="text_right">
					<div class="titleDes">公开联系方式 </div>
					<div class="span1">你不在线或很少登录，对方也能联系你。</div>
				</div>
			</div>
			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_liwuu.png" />
				<div class="text_right">
					<div class="titleDes">送礼物 </div>
					<div class="span1">小小礼物更容易让对方动心哦。 </div>
				</div>
			</div>
			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_deng.png" />
				<div class="text_right">
					<div class="titleDes">信件显示优先</div>
					<div class="span1">抢占先机，更受关注，回信率会大大提高。
					</div>
				</div>
			</div>

			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_dhkuang.png" />
				<div class="text_right">
					<div class="titleDes">查看通信记录</div>
					<div class="span1">了解沟通历史，避免盲目沟通。
					</div>
				</div>
			</div>
			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_zxian.png" />
				<div class="text_right">
					<div class="titleDes">查看在线状态</div>
					<div class="span1">给正在线上的会员发信，更易收到回信。
					</div>
				</div>
			</div>
			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_ckguisd.png" />
				<div class="text_right">
					<div class="titleDes">查看手机归属地</div>
					<div class="span1">如发现它与注册资料不符，请提高警惕！
					</div>
				</div>
			</div>
			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_ckzcip.png" />
				<div class="text_right">
					<div class="titleDes">查看注册IP所在地</div>
					<div class="span1">如发现它与注册资料不符，请提高警惕！
					</div>
				</div>
			</div>
			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_ckzcsj.png" />
				<div class="text_right">
					<div class="titleDes">查看注册时间</div>
					<div class="span1">给最新注册的会员发信，更易收到回信。
					</div>
				</div>
			</div>
			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_fj.png" />
				<div class="text_right">
					<div class="titleDes">查看最近登录</div>
					<div class="span1">给最近有登录的会员发信，更易收到回信。
					</div>
				</div>
			</div>
			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_ckdlcs.png" />
				<div class="text_right">
					<div class="titleDes">查看登录次数</div>
					<div class="span1">给登录次数较多的会员发信，更易收到回信。
					</div>
				</div>
			</div>
			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_ckskgw.png" />
				<div class="text_right">
					<div class="titleDes">查看谁看过我</div>
					<div class="span1">给看过你的会员发信，更易收到回信。
					</div>
				</div>
			</div>
			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_sj.png" />
				<div class="text_right">
					<div class="titleDes">查看谁关注我</div>
					<div class="span1"> 给关注你的会员发信，更易收到回信。
					</div>
				</div>
			</div>
			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_chac.png" />
				<div class="text_right">
					<div class="titleDes">查看谁加我黑名单 </div>
					<div class="span1">如你被对方拉黑，就无法给对方发信。
					</div>
				</div>
			</div>
			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_czxzchy.png" />
				<div class="text_right">
					<div class="titleDes">查找最新注册会员 </div>
					<div class="span1">给最新注册会员发信，更易收到回信。
					</div>
				</div>
			</div>
			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_czzxdl.png" />
				<div class="text_right">
					<div class="titleDes">查找最新登陆会员 </div>
					<div class="span1">给最新登录会员发信，更易收到回信。
					</div>
				</div>
			</div>
			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_czzxhuiy.png" />
				<div class="text_right">
					<div class="titleDes">查找在线会员 </div>
					<div class="span1">给在线会员发信，更易收到回信。
					</div>
				</div>
			</div>
			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_czsmhy.png" />
				<div class="text_right">
					<div class="titleDes">查找实名会员 </div>
					<div class="span1">给实名会员发信，更易收到回信。
					</div>
				</div>
			</div>
			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_zpzdhy.png" />
				<div class="text_right">
					<div class="titleDes">查找照片最多会员 </div>
					<div class="span1">给照片最多会员发信，更易收到回信。
					</div>
				</div>
			</div>
			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_czzlqq.png" />
				<div class="text_right">
					<div class="titleDes">查找资料最全会员</div>
					<div class="span1">给资料最全会员发信，更易收到回信。
					</div>
				</div>
			</div>
			<div class="bottom_line_box flex align-items-center">
				<img src="../../../images/my/icon_sygjcz.png" />
				<div class="text_right">
					<div class="titleDes">使用高级查找功能 </div>
					<div class="span1">可进行针对性查找，节约时间，提高效率。
					</div>
				</div>
			</div>
		
		</div>
	</div>
</template>

<script>
	import HeaderFixedTop from '../../../components/HeaderTop/HeaderFixedTop'
	export default {
		name: "MemberUpgrade2",
		components: {
			HeaderFixedTop,
		},
		data() {
			return {

				showBackIcon: 'false',
				title: '升级会员',
			}
		},
		methods: {
			goBack() {
				this.$router.go(-1);
			},

		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../styles/mycomstyle.css";
	.listBox {
		margin-top: 60px;
		background-color: #FFFFFF;
		.bottom_line_box {
			width: 100%;
			padding: 12px 25.5px;
			box-sizing: border-box;
			border-bottom: 0.5px solid #E9E9E9;
			.title {
				font-size: 14.5px;
				color: #909090;
			}
			img {
				width: 40px;
				height: 40px;
				box-sizing: border-box;
				margin-right: 11px;
			}
			.text_right {
				width: 270px;
				.titleDes {
					font-size: 15.5px;
					color: #3F3F3F;
					line-height: 23.5px;
					white-space: nowrap;
					text-overflow: inherit;
					overflow: hidden;
					.qie{
					width: 17px;
					height: 20px;
					margin-bottom: -4px;
					margin-left: 8px;}
				}
				.span1 {
					font-size: 13px;
					color: #A6A6A6;
					height: 23.5px;
					line-height: 23.5px;
					overflow: hidden; //超出的文本隐藏
					text-overflow: ellipsis; //溢出用省略号显示
					white-space: nowrap; //溢出不换行
				}
			}
		}
	}
</style>