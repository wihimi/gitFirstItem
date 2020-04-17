<template>
	<div class="category">
		<div class="category_one" :class="{'actives':state==index}" v-for="(item,index) in msg" @click="changge(index)">
			{{item.name}}
			<img src="../../assets/icon_xiala.png" v-show="state!=index" alt="" />
			<img src="../../assets/icon_shangla.png" v-show="state==index" alt="" />
		</div>
		<div class="content" v-show="state==0||state==1||state==2">
			<div class="content_1">
				<div v-show="state==0">
					<!--类别一-->
					<div class="fenge">
						<div class="leibie" :class="leiBieIndex==-1?'leibie_active':''" @click="leiBieIndex=-1">全部</div>
						<!--选择类别-->
						<div class="quanbu">
							<div class="lei" :class="index1==leiBieIndex?'leibie_active':''" v-for="(item,index1) in list" @click="clickClassOne(item,index1)">
								{{item}}
							</div>
						</div>
					</div>
					<!--第二类-->
					<div class="fenge" style="height: 130px;">

						<div class="leibie_2" :class="leiBieIndex2==-1?'leibie_active':''" @click="leiBieIndex2=-1">
							默认排序
						</div>
						<!--选择类别-->
						<div class="quanbu" style="flex-wrap: wrap;">
							<div class="lei_2" :class="index==leiBieIndex2?'leibie_active':''" v-for="(item,index) in dataList" @click="clickClasstwo(item,index)">
								{{item}}
							</div>

						</div>
					</div>
					<!--类别三-->
					<div class="fenge">

						<div class="leibie_3" :class="0==leiBieIndex3?'leibie_active':''" @click="clickClasssan">
							未联系过
						</div>
						<div class="paiming">
							[申请排名优先，提高10倍收信]
						</div>
					</div>
				</div>

				<!--yes or not-->
				<div v-show="state==1||state==2">
					<div class="content_child" v-for="(item,index) in data">
						<div class="child_1">
							{{item.name}}
						</div>
						<div class="child_2" @click="location(index)">
							<!--{{item.expression}}-->
							<div :class="item.sexName?'actionTitle':''" id="" style="display: inline;">{{item.sexName?item.sexName:'请选择'}}</div>
							<img src="../../assets/icon_chela@3x.png" alt="" />
						</div>

					</div>
					<!--底部弹出模态框-->
					<van-popup v-model="showw" position="bottom" :style="{ height: '45%' }">
						<van-picker :show-toolbar="true" :columns="columns" @change="onChange" @cancel="cancelCheckSex" @confirm="onConfirmCheckSex" />
					</van-popup>
				</div>
				<div class="deciside" v-show="state==0||state==1||state==2">
					<div class="yes" @click="searchByChecked">
						确定
					</div>
					<div class="not" @click="onCanle">
						取消
					</div>
				</div>
			</div>

		</div>

	</div>

</template>

<script>
	import axios from 'axios'
	import qs from 'qs'
	export default {
		name: 'chooseSearchBytype',
		props: {
			msg: {
				type: Array,

			},
			state: {

				default: -1
			},
			state1: {

				default: 111
			},
		},

		data() {
			return {
				//			sexName: [],
				currentSort: 1,

				columns: [ //				'杭州', '宁波', '温州', '嘉兴', '湖州'
				],
				showw: false,
				status: false,
				dataList: [
					"最新注册", "最新登录", "在线会员", "实名会员", "照片最多", "资料最全"
				],
				leiBieIndex: -1,
				leiBieIndex2: -1,
				leiBieIndex3: -1,
				list: [
					"VIP", "未婚", "离异", "丧偶"
				],
				data: [{
						name: "所在地",
						expression: "广东深圳",
						sexName: ""
					},
					{
						name: "年龄",
						expression: "不限",
						sexName: ""
					},
					{
						name: "身高",
						expression: "145-210厘米",
						sexName: ""
					},
					{
						name: "婚姻状况",
						expression: "不限",
						sexName: ""
					},
					{
						name: "学历",
						expression: "大专",
						sexName: ""
					},
					{
						name: "月收入",
						expression: "不限",
						sexName: ""
					},
					{
						name: "头像",
						expression: "有",
						sexName: ""
					},
				],
				sexName: '',
				index: -1,
				arr3 : ['未婚', '离异', '丧偶'],
				arr4 : ['无', '初中', '中专/职校/技校', '高中', '大专', '本科', '双学士', '硕士', '博士', '博士后'],
				arr5 : ['保密', '6000元以下', '6000-12000元', '12000-20000元', '20000元以上'],
				arr6 : ['无', '有'],
			}
		},
		mounted() {},
		created() {},
		methods: {
			getAreaList() { //获取地区
				var requestUrl = this.apiUrl + 'user/getAreaList';
				var requestData = {
					pid: 0
				};
				axios.post(requestUrl,
						qs.stringify(requestData), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded'
							}
						},
					).then((res) => {
						var resdata = res.data;
						if(resdata.code == 200) {
							var arr = []
							arr.length = res.data.data.length
							for(let i = 0; i < arr.length; i++) {
								arr[i] = res.data.data[i].areaName
							}
							this.columns = arr; //获取所有的省份
						} else {
							this.$toast(resdata.msg)
						}
					})
					.catch((error) => {

					})
			},
			getAllAgesList() {
				//年龄数组
				var span = 10;
				var tempItem = '';
				var temp = [];
				for(var i = 5; i < 80; i += span) {
					tempItem = i + '—' + (i + span);
					temp.push(tempItem);
				}
				console.log(temp)
				this.columns = temp
				//赋值年龄数组
			},
			//第二个选项卡
			location(index) {
				//alert(index)
				this.index = index
				var arr = []
				if(index == 0) {
					//请求地址接口
					this.getAreaList();

					//					this.columns
				} else if(index == 1) {
					this.getAllAgesList();
				} else if(index == 2) {
					var span = 10;
					var tempItem = '';
					var temp = [];
					for(var i = 140; i < 260; i += span) {
						tempItem = i;
						temp.push(tempItem);
					}
					this.columns = temp
					//console.log(temp)
					//赋值身高数组
				} else if(index == 3) {
					//赋值婚姻数组
					this.columns = this.arr3

				} else if(index == 4) {
					arr = ['无', '初中', '中专/职校/技校', '高中', '大专', '本科', '双学士', '硕士', '博士', '博士后']
					//学历数组
					this.columns = this.arr4
				} else if(index == 5) {
						//赋值月收入数组
					this.columns = this.arr5
				} else {
					
					//赋值头像数组
					this.columns = this.arr6
				}
				this.showw = true;
			},
			clickClasssan() {
				if(this.leiBieIndex3 == 0) {
					this.leiBieIndex3 = -1;
				} else {
					this.leiBieIndex3 = 0;
				}

			},
			//选择
			clickClasstwo(item, index) {
				this.$emit('clickClasstwo', {
					item,
					index
				})
				this.leiBieIndex2 = index;
			},
			//选择类型
			clickClassOne(item, index) {
				this.$emit('clickClassOne', {
					item,
					index
				})
				this.leiBieIndex = index;
			},
			//选择分类
			searchByChecked() {
				var objectTempData = {};

				if(this.state == 0) { //第一个选项卡
					objectTempData = {
						userStatus: this.leiBieIndex + 1,
						sortType: this.leiBieIndex2 + 1,
						noContract: this.leiBieIndex3 + 1
					}
				}
				if(this.state == 1) {
					objectTempData = {
						area: this.data[0].sexName,
						ageRange:  this.data[1].sexName,
						heightRange:  this.data[2].sexName,
						maritalStatus: this.data[3].sexName?this.arr3.indexOf(this.data[3].sexName)+1:'',
						educationalStatus:this.data[4].sexName?this.arr4.indexOf(this.data[4].sexName):'' ,
						monthlyPay:this.data[5].sexName?this.arr5.indexOf(this.data[5].sexName)+1:'' ,
						haveHeadPortrait: this.data[6].sexName?this.arr6.indexOf(this.data[6].sexName):'',
					}
				}
				this.$emit('searchByChecked', objectTempData);
			this.move()
			},
			changePath() {
				var sexName = this.sexName
				this.$router.push({
					path: '/result',
					query: {
						area: sexName[0] ? sexName[0] : "",
						ageRange: sexName[1] ? sexName[1] : "",
						heightRange: sexName[2] ? sexName[2] : "",
						maritalStatus: sexName[3] ? sexName[3] : "",
						educationalStatus: sexName[4] ? sexName[4] : "",
						monthlyPay: sexName[5] ? sexName[5] : "",
						haveHeadPortrait: sexName[6] === "有" ? 1 : 0
					}
				})
			},
			//禁止滚动
			stop() {
				var mo = function(e) {
					e.preventDefault();
				};
				document.body.style.overflow = 'hidden';
				document.addEventListener("touchmove", mo, false); //禁止页面滑动
			},
			/***取消滑动限制***/
			move() {
				var mo = function(e) {
					e.preventDefault();
				};
				document.body.style.overflow = ''; //出现滚动条
				document.removeEventListener("touchmove", mo, false);
			},
			//选择确定
			onConfirmCheckSex(value) {
				this.data[this.index].sexName = value;
				//				console.log(value)
				//				var sexName = this.sexName
				//				for(let i = 0; i < sexName.length; i++) {
				//					if(i == this.index) {
				//						sexName[i] = value
				//					}
				//				}
				//				this.sexName = sexName
				this.showw = !this.showw
			},
			onCanle() {
				this.$emit('onCanle');
				this.move()
			},
			//选择取消
			cancelCheckSex(value) {
				console.log(value)
				this.showw = !this.showw
			},
			//change事件
			onChange(picker, values) {
				//              picker.setColumnValues(1, citys[values[0]]);
			},
			changge(index) {
				this.stop();
				this.$emit('changge', index)
			},
		}
	}
</script>

<style scoped lang="scss">
	.category {
		display: flex;
		position: relative;
	}
	
	.actives {
		color: red!important;
	}
	
	.content {
		width: 100%;
		height: 403px;
		background-color: rgba(0, 0, 0, 0.5);
		position: absolute;
		top: 46px;
		z-index: 100;
	}
	
	.content_1 {
		width: 100%;
		height: 390px;
		background-color: white;
		position: absolute;
		z-index: 1;
	}
	
	.fenge {
		width: 350px;
		margin: 0 auto;
		height: 80px;
		border-bottom: 1px solid #EBEBEB;
	}
	
	.leibie {
		background: #EDEDED;
		height: 30px;
		width: 76px;
		color: #FFFFFF;
		line-height: 30px;
		text-align: center;
		border-radius: 15px;
		/*margin-left:12.5px;*/
		margin-top: 10px;
		margin-left: 10px;
		font-size: 14px;
	}
	
	.leibie_active {
		color: #FFFFFF!important;
		background: #FB7BA0!important;
	}
	
	.leibie_2 {
		background: #EDEDED;
		height: 30px;
		width: 110px;
		color: #FFFFFF;
		line-height: 30px;
		text-align: center;
		border-radius: 15px;
		margin-left: 10px;
		margin-top: 10px;
		font-size: 14px;
	}
	
	.leibie_3 {
		width: 108px;
		height: 30px;
		color: #FB7BA0;
		font-size: 14px;
		border: 1px solid #FB7BA0;
		border-radius: 15px;
		text-align: center;
		line-height: 30px;
		margin-top: 15px;
		margin-left: 10px;
		letter-spacing: 1px;
	}
	
	.quanbu {
		display: flex;
		transform: translateX(-12.5px);
		/*border:1px solid red;*/
		width: 350px;
		margin-left: 15px;
	}
	
	.lei {
		background: #EDEDED;
		height: 30px;
		width: 76px;
		color: #838383;
		line-height: 30px;
		text-align: center;
		border-radius: 15px;
		margin-left: 8px;
		margin-top: 15px;
		font-size: 14px;
		font-weight: 100;
		letter-spacing: 3px;
	}
	
	.quanbu .lei_2:first-child {
		/*margin-left: 12.5px!important;*/
	}
	
	.lei_2 {
		background: #EDEDED;
		height: 30px;
		width: 104.05px;
		color: #838383;
		line-height: 30px;
		text-align: center;
		border-radius: 15px;
		margin-left: 8px;
		margin-top: 10px;
		font-size: 14px;
		box-sizing: border-box;
	}
	
	.paiming {
		width: 210.5px;
		height: 13.5px;
		font-size: 14px;
		color: #FB7BA0;
		margin-left: 10px;
		margin-top: 20px;
		letter-spacing: 1px;
	}
	
	.deciside {
		display: flex;
		justify-content: space-between;
		padding: 0 30px;
	}
	
	.yes {
		height: 42.5px;
		width: 134.5px;
		height: 42.5px;
		font-size: 16.5px;
		color: #fff;
		background: #FB7BA0;
		text-align: center;
		line-height: 42.5px;
		border-radius: 6px;
		/*margin-left: 28px;*/
		margin-top: 13px;
		letter-spacing: 10px;
	}
	
	.not {
		height: 42.5px;
		width: 134.5px;
		height: 42.5px;
		font-size: 16.5px;
		color: #5F5F5F;
		background: #DDDDDD;
		text-align: center;
		line-height: 42.5px;
		border-radius: 6px;
		/*margin-left: 18px;*/
		margin-top: 13px;
		letter-spacing: 10px;
	}
	
	.content_2 {
		width: 100%;
		height: 403px;
		background-color: rgba(0, 0, 0, 0.5);
		position: absolute;
		top: 46px;
		z-index: 100;
	}
	
	.content_child {
		width: 330px;
		height: 45px;
		border-bottom: 1px solid #EBEBEB;
		display: flex;
		justify-content: space-between;
		font-size: 14.5px;
		color: #444446;
		margin: 0 auto;
		line-height: 45px;
	}
	
	.child_1 {
		margin-left: 20px;
	}
	
	.child_2 {
		margin-right: 15px;
		img {
			width: 7px;
			height: 12px;
			margin-left: 11px;
		}
	}
	
	.confirm {
		width: 135px;
		height: 42.5px;
		border-radius: 6px;
		background: #FB7BA0;
		font-size: 16.5px;
		line-height: 45px;
		text-align: center;
		color: #FFFFFF;
		margin-left: 28.5px;
		margin-top: 11.5px;
		letter-spacing: 10px;
	}
	
	.cancel {
		width: 135px;
		height: 42.5px;
		border-radius: 6px;
		background: #DDDDDD;
		font-size: 16.5px;
		line-height: 45px;
		text-align: center;
		color: #5F5F5F;
		margin-left: 15px;
		margin-top: 11.5px;
		letter-spacing: 10px;
	}
	
	.category_one {
		margin-left: 31.5px;
		font-size: 15.5px;
		color: #444446;
		margin-top: 14px;
	}
	
	.category_one .active {
		color: red;
	}
	
	.mid {
		/*background: #F1F1F1;*/
		/*width: 100%;*/
		height: 100%;
		border: 1px solid #F1F1F1;
		margin-bottom: 49px;
	}
	
	.mid_hengfu {
		width: 297.5px;
		height: 26px;
		font-size: 13.5px;
		color: #FFFFFF;
		background: #C3C5C7;
		margin: 0 auto;
		line-height: 26px;
		margin-top: 11px;
		padding-left: 7px;
		box-sizing: border-box;
		letter-spacing: 1px;
		border-radius: 5px;
	}
</style>