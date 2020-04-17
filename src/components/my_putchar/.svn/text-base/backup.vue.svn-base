<template>
	<!-- 大盒子 -->
	<div class="box">
		<!--搜索分类-->
		<div class="search_content">
			<div class="sousuo" @click="change(1)" :class="{'active':currentSort==1}">手机找回</div>

			<div class="lahei" @click="change(2)" :class="{'active':currentSort==2}">邮箱找回</div>
		</div>
		<!-- 返回按钮 -->
		<div class="fanhui" @click="fanhui">
			<img src="../../../static/img/icon_zuola_hei@2x.png" alt="">
		</div>
		<div v-show="currentSort==1">
			<!-- 邮件图标的盒子 -->
			<div class="email">
				<img src="../../../static/img/phone.png" alt />
			</div>

			<!-- 手机号码盒子 -->
			<div class="mobile" v-show="bb==1">
				<!-- 手机号码 -->
				<div class="mobile_sjh">
					<span>手机号码</span>
					<input type="text" v-model="phone" placeholder="请输入您注册的手机号" />
					<div></div>
				</div>

				<!-- 验证码 -->
				<div class="mobile_yzm">
					<span>验证码</span>
					<input  type="text" maxlength="4" v-model="code" ref="Id" @keyup="inputRef" placeholder="请输入右侧图中字符" />
					<div @click='random_code'>{{k}}</div>
				</div>
				<!-- 底部 -->

				<van-button class="step" type="primary" size="large" color="#ff8737" @click="toNestStep">下一步</van-button>

			</div>
			<!--手机找回2-->
			<div id="" v-show="bb==2">
				<!-- 文本 -->
				<div class="txt" v-if="!obtain_phone">
					<div>
						验证短信已发送到您的注册手机{{a}} 上，请在下面输入进行验证，若未收到验证短信，请您用注册手机拨打客服热线
					</div>
				</div>
				<!-- 手机号码盒子 -->
				<div class="mobile">
					<!-- 手机号码 -->
					<div class="mobile_sjh">
						<span>手机号码</span>
						<input type="text" v-model="phone" placeholder="请输入您注册的手机号" />
						<div></div>
					</div>

					<!-- 验证码 -->
					<div class="mobile_yzm">
						<span>验证短信</span>
						<input type="text" style="width: 150px;margin-left: 5px" v-model="codes" maxlength="4" placeholder="请输入验证短信" />
						<div @click="getCode_phone" v-if="obtain_phone" style=" font-size: 14px;color: #FF8737;border: 1px solid #FF8737;background: none;border-radius:5px;">立即获取</div>
						<div v-if="!obtain_phone" style=" font-size: 14px;color: #FF8737;border: 1px solid #FF8737;background: none;border-radius:5px;">{{count_phone}}s</div>
					</div>
					<!-- 底部 -->

					<van-button class="step" type="primary" size="large" color="#ff8737" router-link @click="printonly">提交</van-button>
				</div>
			</div>
			<div class="mobile" v-show="bb==3">
				<!-- 新的密码 -->
				<div class="mobile_sjh">
					<span>新的密码</span>
					<input type="text" v-model="confirm_password" placeholder="请输入您的新密码" />
					<div></div>
				</div>

				<!-- 确认密码 -->
				<div class="mobile_yzm">
					<span>确认密码</span>
					<input type="text" v-model="password" placeholder="请再次输入新密码" />
					<div style="  background: none;"></div>
				</div>
				<!-- 底部 -->

				<van-button class="step" type="primary" size="large" color="#ff8737" @click='reset_password'>重置密码</van-button>
			</div>

		</div>

		<div v-show="currentSort==2">
			<div class="email">
				<img src="../../../static/img/password.png" alt />
			</div>
			<!-- 返回按钮 -->
			<div class="fanhui" @click="fanhui">
				<img src="../../../static/img/icon_zuola_hei@2x.png" alt="">
			</div>
			<!--邮箱地址盒子 -->
			<div class="mobile" v-show="yx">
				<!-- 文本 -->
				<div class="txt" v-if="!obtain">
					<div>
						验证邮件已发送到您的注册邮箱{{str}} 上，请在下面输入进行验证，若未收到验证邮件，请您用注册邮箱发

					</div>
				</div>

				<!-- 验证码 -->
				<div class="mobile_yzm">
					<span>验证短信</span>
					<input style="margin-top: 17px;width: 160px;margin-left: 8px" type="text" maxlength="4" v-model="verification" placeholder="输入收到的验证短信" />
					<div @click="getCode" v-if="obtain" style="font-size: 14px;color: #FF8737;  background: none;  border: 1px solid #FF8737;border-radius:5px;">立即获取</div>
					<div v-if="!obtain" style="font-size: 14px;color: #FF8737;  background: none;  border: 1px solid #FF8737;border-radius:5px;">{{count}}s</div>

				</div>
				<!-- 底部 -->

				<van-button class="step" type="primary" size="large" color="#ff8737" @click='submit'>提交</van-button>

			</div>
			<!--邮箱地址盒子2 -->
			<div class="mobile" v-show="!yx">
				<!-- 邮箱地址 -->
				<div class="mobile_sjh">
					<span>邮箱地址</span>
					<input type="text" v-model="email" placeholder="请输入您注册的邮箱地址" />
					<div></div>
				</div>

				<!-- 验证码 -->
				<div class="mobile_yzm">
					<span>验证码</span>
					<input style="  margin-left: 20px;" v-model="character" maxlength="4" ref="dId" @keyup="inputRefs" type="text" placeholder="请输入左侧图中字符" />
					<div @click="random_codes">{{j}}</div>
				</div>
				<!-- 底部 -->

				<van-button class="step" type="primary" size="large" color="#ff8737" @click="toNestSteps">发送验证邮件</van-button>
			</div>

		</div>
		<!--模态框-->
		<modal :showToast="showToast" v-show='aa'></modal>

	</div>
</template>
<script>
	import modal from '../HeaderTop/modal-dialog'
	export default {
		components: {
			modal,

		},
		data() {
			return {
				obtain: true, //获取邮箱验证码
				count: '', //获取邮箱验证码
				timer: null, //获取邮箱验证码
				obtain_phone: true, //获取手机验证码
				count_phone: '', //获取手机验证码
				timer_phone: null, //获取手机验证码
				email_phone: '', //获取手机验证码
				character: '',
				aa: false, //模态框
				currentSort: 1,
				show: false, //路由切换
				showToast: '',
				phone: '',//获取手机号
				email: '', //获取邮箱号
				code: '',
				phones: '',
				codes: '',
				password: '',
				confirm_password: '',
				verification: '',
				yx: false, //邮箱内容切换
				bb: 1,
				k: '',
				accoutNum: '',
				j: '',
				accoutNums: '',
				str: '', //把邮箱号变成星号
				a: '' //把手机号变成星号
			};
		},
		//		页面初始就渲染数据
		mounted: function() {
			//			随机验证码
			var i = Math.floor(Math.random() * 10);
			var ii = Math.floor(Math.random() * 10);
			var iii = Math.floor(Math.random() * 10);
			var iiii = Math.floor(Math.random() * 10);
			this.k = i + "" + ii + '' + iii + '' + iiii
			this.j = i + "" + ii + '' + iii + '' + iiii

		},
		//		页面点击才渲染数据
		methods: {
			//			获取手机验证内容
			inputRef() {
				//通过ref获取input框输入的内容
				console.log(this.$refs.Id.value)
				this.accoutNum = this.$refs.Id.value
				//				把手机号变成星号
				var a = this.phone.substr(0, 3) + '****' + this.phone.substr(7);
				console.log(a)
				this.a = a
			},
			//			获取邮箱验证内容
			inputRefs() {
				//通过ref获取input框输入的内容
				console.log(this.$refs.dId.value)
				this.accoutNums = this.$refs.dId.value
				//				把邮箱号变成星号
				var q = this.email
				var reg = /(.{4}).+(.{1}@.+)/g;
				var str = q.replace(reg, "$1****$2")
				console.log(str);
				this.str = str
			},
			//			手机随机验证码
			random_code() {
				var i = Math.floor(Math.random() * 10);
				var ii = Math.floor(Math.random() * 10);
				var iii = Math.floor(Math.random() * 10);
				var iiii = Math.floor(Math.random() * 10);
				this.k = i + "" + ii + '' + iii + '' + iiii
				//				console.log(k)

			},
			//			邮箱随机验证码
			random_codes() {
				var i = Math.floor(Math.random() * 10);
				var ii = Math.floor(Math.random() * 10);
				var iii = Math.floor(Math.random() * 10);
				var iiii = Math.floor(Math.random() * 10);
				this.j = i + "" + ii + '' + iii + '' + iiii
				//				console.log(k)
			},
			toNestStep() {
				//判断手机号码不能为空
				if(this.phone == '') {
					this.aa = !this.aa
					this.showToast = '手机号码不能为空';

					var t = setTimeout(this.test, 1000);
					return
				}
				//				判断手机号码格式是否正确
				if(!(/^1[3456789]\d{9}$/.test(this.phone))) {
					this.aa = !this.aa
					this.showToast = '手机号码格式有误';
					var t = setTimeout(this.test, 1000);
					return
				}
				clearTimeout(t)
				//				判断验证码不能为空
				if(this.code == '') {
					this.aa = !this.aa
					this.showToast = '验证码不能为空';
					var t = setTimeout(this.test, 1000);
					return
				}
				//				判断验证码格式是否正确
				if(!(/[0-9]{4}/.test(this.code))) {
					this.aa = !this.aa
					this.showToast = '验证码格式有误';
					var t = setTimeout(this.test, 1000);
					return
				}

				//				判断验证码是否正确
				if(this.accoutNum == this.k) {
					this.bb = 2
				} else {
					this.aa = !this.aa
					this.showToast = '验证码错误';
					var t = setTimeout(this.test, 1000);
					return
				}
				//手机找回内容切换1
				clearTimeout(t)
			},
			//手机找回内容切换2
			printonly() {
				//判断手机号码不能为空
				if(this.phones == '') {
					this.aa = !this.aa
					this.showToast = '手机号码不能为空';

					var t = setTimeout(this.test, 1000);
					return
				}
				//				判断手机号码格式是否正确
				if(!(/^1[3456789]\d{9}$/.test(this.phones))) {
					this.aa = !this.aa
					this.showToast = '手机号码格式有误';
					var t = setTimeout(this.test, 1000);
					return
				}
				clearTimeout(t)
				//				判断验证码不能为空
				if(this.codes == '') {
					this.aa = !this.aa
					this.showToast = '验证短信不能为空';
					var t = setTimeout(this.test, 1000);
					return
				}
				//				判断验证码格式是否正确
				if(!(/[0-9]{4}/.test(this.codes))) {
					this.aa = !this.aa
					this.showToast = '验证短信格式有误';
					var t = setTimeout(this.test, 1000);
					return
				}
				clearTimeout(t)
				this.bb = 3;
			},
			//手机找回内容切换3
			reset_password() {
				//判断密码不能为空
				if(this.confirm_password == '') {
					this.aa = !this.aa
					this.showToast = '新密码不能为空';

					var t = setTimeout(this.test, 1000);
					return
				}
				//				//				判断手机号码格式是否正确
				//				if(!(/^1[3456789]\d{9}$/.test(this.confirm_password))) {
				//					this.aa = !this.aa
				//					this.showToast = '手机号码格式有误';
				//					var t = setTimeout(this.test, 1000);
				//					return
				//				}
				clearTimeout(t)
				//				判断验证码不能为空
				if(this.password == '') {
					this.aa = !this.aa
					this.showToast = '确认密码不能为空';
					var t = setTimeout(this.test, 1000);
					return
				}
				//				判断验证码格式是否正确
				//				if(!(/[0-9]{4}/.test(this.password))) {
				//					this.aa = !this.aa
				//					this.showToast = '验证短信格式有误';
				//					var t = setTimeout(this.test, 1000);
				//					return
				//				}
				clearTimeout(t)
			},
			//			邮箱验证1
			submit() {
				//				判断邮箱验证码不能为空
				if(this.verification == '') {
					this.aa = !this.aa
					this.showToast = '验证码不能为空'
					var y = setTimeout(this.test, 1000);
					return
				}
				//				判断邮箱验证码格式是否正确
				if(!(/[0-9]{4}/).test(this.verification)) {
					this.aa = !this.aa
					this.showToast = '验证码格式有误';
					var t = setTimeout(this.test, 1000);
					return
				}

			},
			//			邮箱验证2
			toNestSteps() {
				//判断邮箱不能为空
				if(this.email == '') {
					this.aa = !this.aa
					this.showToast = '邮箱地址不能为空';
					//					定时器
					var t = setTimeout(this.test, 1000);

					return
				}

				//				判断邮箱格式是否正确
				if(!(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(this.email))) {
					console.log(111)
					this.aa = !this.aa
					this.showToast = '邮箱地址格式有误';
					var t = setTimeout(this.test, 1000);
					return
				}
				clearTimeout(t)
				//				判断字符不能为空
				if(this.character == '') {
					this.aa = !this.aa
					this.showToast = '验证码不能为空';
					var t = setTimeout(this.test, 1000);
					return
				}
				//				判断字符格式是否正确
				if(!(/[0-9]{4}/.test(this.character))) {
					this.aa = !this.aa
					this.showToast = '字符格式有误';
					var t = setTimeout(this.test, 1000);
					return
				}
				//				判断验证码是否正确
				if(this.accoutNums == this.j) {
					//				隐藏邮箱当前内容
					this.yx = !this.yx;
					console.log(8888)
				} else {
					this.aa = !this.aa
					this.showToast = '验证码错误';
					var t = setTimeout(this.test, 1000);
					return
				}
				clearTimeout(t)
			},
			test() {
				this.aa = !this.aa
			},
			aaa() {
				this.showToast = "nihai"
			},

			aaa2323() {
				this.showToast = "ndfkkfdkjk"
			},
			fanhui() {
				this.$router.go(-1);
			},
			change(index) {
				//alert(index)
				this.currentSort = index;
			},
			//			邮箱获取验证码
			getCode() {
				console.log(111111111)
				const TIME_COUNT = 60;
				if(!this.timer) {
					this.count = TIME_COUNT;
					this.obtain = false;
					this.timer = setInterval(() => {
						if(this.count > 0 && this.count <= TIME_COUNT) {
							this.count--;
						} else {
							this.obtain = true;
							clearInterval(this.timer);
							this.timer = null;
						}
					}, 1000)
				}
			},
			//			手机获取验证码
			getCode_phone() {
				console.log(111111111)
				const TIME_COUNT = 60;
				if(!this.timer_phone) {
					this.count_phone = TIME_COUNT;
					this.obtain_phone = false;
					this.timer_phone = setInterval(() => {
						if(this.count_phone > 0 && this.count_phone <= TIME_COUNT) {
							this.count_phone--;
						} else {
							this.obtain_phone = true;
							clearInterval(this.timer_phone);
							this.timer_phone = null;
						}
					}, 1000)
				}
			}

		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.search_content {
		display: flex;
		height: 44px;
		line-height: 44px;
		justify-content: space-between;
		background: #fff;
	}

	.sousuo {
		color: #949494;
		font-size: 14px;
		margin-left: 94px;
		width: 57px;
	}

	.lahei {
		font-size: 14px;
		color: #949494;
		margin-right: 94.5px;
		width: 57px;
		text-align: center;
	}

	.active {
		border-bottom: 2px solid #f54663;
		color: #f54663;
	}
	/* 返回按钮 */

	.fanhui {
		position: fixed;
		left: 5%;
		top: 2%;
		img {
			width: 10px;
			height: 15px;
		}
	}
	/* 大盒子 */

	.box {
		width: 100%;
		height: 100%;
		position: fixed;
		background: #f5f5f5;
	}
	/* 邮件图标的盒子 */

	.email {
		width: 100%;
		height: 170px;
		text-align: center;
		line-height: 230px;
	}

	.email>img {
		width: 74.5px;
		height: 74.5px;
		margin-top: -20px;
		/* margin-left: 150.5px; */
	}
	/* 手机号码 邮件的大盒子 */

	.mobile {
		width: 100%;
		height: 99px;
		margin: 0 auto;
		text-align: center;
	}
	/* 手机号码内容 */

	.mobile_sjh {
		width: 85%;
		height: 54.5px;
		line-height: 54.5px;
		border-bottom: 1px solid #d2d2d2;
		font-size: 16px;
		margin: 0 auto;
		/* margin-left: 30px; */
		display: flex;
		justify-content: space-between;
	}

	.mobile_sjh>span {
		font-weight: bold;
		color: #3a3a3a;
	}

	.mobile_sjh>input {
		height: 21px;
		width: 162px;
		border: none;
		background: none;
		margin-left: -45px;
		font-size: 16px;
		margin-top: 15px;
	}

	.mobile_sjh>input:focus {
		outline: none;
	}
	/* 验证码内容 */

	.mobile_yzm {
		width: 85%;
		height: 54.5px;
		line-height: 54.5px;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #d2d2d2;
		/* margin-left: 30px; */
		margin: 0 auto;
	}

	.mobile_yzm>span {
		font-weight: bold;
		color: #3a3a3a;
		font-size: 16px;
	}

	.mobile_yzm>input {
		height: 21px;
		width: 162px;
		border: none;
		background: none;
		margin-left: 19.5px;
		font-size: 16px;
		margin-top: 15px;
	}

	.mobile_yzm>input:focus {
		outline: none;
	}

	.mobile_yzm>div {
		width: 66.5px;
		height: 32.5px;
		text-align: center;
		line-height: 32.5px;
		background: #797979;
		margin-top: 10px;
		font-size: 19.65px;
		color: #fff;
	}
	/* 底部 */

	.step {
		width: 90%;
		height: 56px;
		border-radius: 5px;
		position: fixed;
		bottom: 35px;
		left: 5%;
	}
	/* 文本 */

	.txt {
		width: 90%;
		margin: 0 auto;
		color: #d2d2d2;
	}
</style>
