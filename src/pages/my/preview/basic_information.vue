<template>
	<!-- 头部导航 -->
	<div class="">
		<header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title" @goNavAdd="goNavAdd" :rightTitle="rightTitle"> </header-fixed-top>
		<div id="" class="paddIngTopTitle2"></div>
		<div class="">
			<div class="userInfoInput">
				<div class="title_Tips">基本情况</div>
				<div class="user_com">
					<div class="left">昵称</div>
					<div class="right flex justify-center align-center">
						<div :class="myNikeName?'actionTitle':'myCar'">{{username}}</div>
						<!--<img src="../../../images/youjiantou.png" />-->
					</div>
				</div>
				<div class="user_com">
					<div class="left">会员ID</div>
					<div class="right flex justify-center align-center">
						<div :class="userId?'actionTitle':'myCar'">{{uid}}</div>
						<!--<img src="../../../images/youjiantou.png" />-->
					</div>
				</div>
				<div class="user_com">
					<div class="left">征友状态</div>
					<div class="right flex justify-center align-center" >
						<div :class="appointState?'actionTitle':'myNikeName'">{{appointState?appointState:'寻觅中'}}</div>
						<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>
				<div class="user_com">
					<div class="left">出生日期<span class="tips">（联系客服修改）</span></div>
					<!--<div class="right flex justify-center align-center" @click="selectDate">-->
						<div class="right flex justify-center align-center" >
						<div :class="birthDay?'actionTitle':'myNikeName'">{{crtimes}}</div>
						<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>

				<div class="user_com">
					<div class="left">生肖<span class="tips">（联系客服修改）</span></div>
					<div class="right flex justify-center align-center" >
						<div :class="myChildren?'actionTitle':'myNikeName'">{{zodiac}}</div>
						<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>

				<div class="user_com">
					<div class="left">星座<span class="tips">（联系客服修改）</span></div>
					<!--<div class="right flex justify-center align-center" @click="selectConstellation">-->
						<div class="right flex justify-center align-center" >
						<div :class="constellations?'actionTitle':'myNikeName'">{{constellation}}</div>
						<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>
				<div class="user_com">
					<div class="left">血型<span class="tips">（联系客服修改）</span></div>
					<!--<div class="right flex justify-center align-center" @click="selectBlood">-->
						<div class="right flex justify-center align-center" >
						<div :class="bloodType?'actionTitle':'myNikeName'">{{bloodType|bloodTypeFilter}}</div>
						<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>

				<div class="user_com">
					<div class="left">身高<span class="tips">（联系客服修改）</span></div>
					<!--<div class="right flex justify-center align-center" @click="selectHeight">-->
						<div class="right flex justify-center align-center" >
						<div :class="height?'actionTitle':'myNikeName'">{{height}}</div>
						<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>
				<div class="user_com">
					<div class="left">体重</div>
					<div class="right flex justify-center align-center" @click="selectWeight">
						<div :class="weight?'actionTitle':'myNikeName'">{{weight?weight:'请选择'}}</div>
						<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>
				<div class="user_com">
					<div class="left">学历</div>
					<div class="right flex justify-center align-center" @click="selectRecord">
						<div :class="record?'actionTitle':'myNikeName'">{{educationalStatus|educationalStatusFilters}}</div>
					<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>
				<div class="user_com">
					<div class="left">月薪</div>
					<div class="right flex justify-center align-center" @click="selectYueXMoney">
						<div :class="yueXMoney?'actionTitle':'myNikeName'">{{monthlyPay|monthpay}}</div>
						<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>
				<div class="user_com">
					<div class="left">工作地区</div>
					<div class="right flex justify-center align-center" @click="selectWorkPlace(1)">
						<div :class="workPlace?'actionTitle':'myNikeName'">{{placeOfWork}}</div>
						<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>
				<div class="user_com">
					<div class="left">住房情况</div>
					<div class="right flex justify-center align-center" @click="selectHousing">
						<div :class="housing?'actionTitle':'myNikeName'">{{housingConditions|housing}}</div>
						<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>
				<div class="user_com">
					<div class="left">职业类型</div>
					<div class="right flex justify-center align-center" @click="selectProfessional">
						<div :class="professional?'actionTitle':'myNikeName'">{{professionalIndex|vocationalTypeFilter}}</div>
						<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>
				<div class="user_com">
					<div class="left">是否购车</div>
					<div class="right flex justify-center align-center" @click="selectCar">
						<div :class="car?'actionTitle':'myNikeName'">{{whetherBuyCars|car}}</div>
						<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>
					<div class="user_com">
					<div class="left">所在行业</div>
					<div class="right flex justify-center align-center" @click="selectindustry">
						<div :class="industry?'actionTitle':'myNikeName'">{{industry?industry:'请选择'}}</div>
						<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>
				
					<div class="user_com">
					<div class="left">户口地区</div>
					<div class="right flex justify-center align-center" @click="selectWorkPlace(2)">
						<div :class="residence?'actionTitle':'myNikeName'">{{residence}}</div>
						<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>	<div class="user_com">
					<div class="left">婚姻状况</div>
					<div class="right flex justify-center align-center" @click="selectMarriage">
						<div :class="marriage?'actionTitle':'myNikeName'">{{maritalStatus|maritalStatusFilter}}</div>
						<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>
				
					<div class="user_com">
					<div class="left">民族</div>
					<div class="right flex justify-center align-center" @click="selectNational">
						<div :class="national?'actionTitle':'myNikeName'">{{nation|nationFilter}}</div>
						<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>
					<div class="user_com">
					<div class="left">有无子女</div>
					<div class="right flex justify-center align-center" @click="selectSon">
						<div :class="son?'actionTitle':'myNikeName'">{{withoutChildren|withoutChildren}}</div>
					<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>
					<div class="user_com">
					<div class="left">宗教</div>
					<div class="right flex justify-center align-center" @click="selectReligious">
						<div :class="religious?'actionTitle':'myNikeName'">{{religion?religion:'请选择'}}</div>
					<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>
				
				
				<div class="contactInf">
					<div class="left">联系方式 <span class="xuanT" id="()">(选填)</span></div>
					<div class="contact_tips">
						手机仅供该网站诚信认证使用，不会对外公开。请填写真实的邮箱和手机，可以用来找回密码、开通邮箱和手机提醒等。如果有需要公开联系方式，升级VIP会员后可到“权限设置”将联系方式设置为公开。
					</div>
				</div>

				<!--<div class="user_com">
				手机仅供该网站诚信认证使用，不会对外公开。请填写真实的邮箱和手机，可以用来找回密码、开通邮箱和手机提醒等。如果有需要公开联系方式，升级VIP会员后可到“权限设置”将联系方式设置为公开。
			</div>-->
				<div class="user_com">
					<div class="left">手机号码</div>
					<div class="right flex justify-center align-center">
						<input class="inputNotsty" :class="phone?'actionTitle':''" maxlength="11" v-model="phone" placeholder="请输入手机号码" />

					</div>
				</div>
				<div class="user_com">
					<div class="left">QQ</div>
					<div class="right flex justify-center align-center">
						<input class="inputNotsty" :class="qq?'actionTitle':''" v-model="qq" placeholder="请输入QQ号" />

					</div>
				</div>
				<div class="user_com">
					<div class="left">邮箱</div>
					<div class="right flex justify-center align-center">
						<input class="inputNotsty" :class="myEmail?'actionTitle':''" v-model="myEmail" placeholder="请输入邮箱" />

					</div>
				</div>
					<div class="user_com">
					<div class="left">微信</div>
					<div class="right flex justify-center align-center">
						<input class="inputNotsty" :class="weixinId?'actionTitle':''" v-model="weixinId" placeholder="请输入微信" />

					</div>
				</div>
					<div class="user_com">
					<div class="left">微博</div>
					<div class="right flex justify-center align-center">
						<input class="inputNotsty" :class="weiBoId?'actionTitle':''" v-model="weiBoId" placeholder="请输入微博" />

					</div>
				</div>
				<div class="contactInf">
					<div class="left">择偶要求 <span class="xuanT" id="()">(选填)</span></div>
					<div class="contact_tips">
						如果有需要限定按择偶条件来信，注册后，升级VIP，可以到“权限设置”将按择偶条件来信限定。 </div>
				</div>
				<div class="user_com">
					<div class="left">年齡</div>
					<div class="right flex justify-center align-center" @click="selectAge">
						<div :class="age?'actionTitle':'myNikeName'">{{ages?ages:'请选择'}}</div>
						<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>
				<div class="user_com">
					<div class="left">身高</div>
					<div class="right flex justify-center align-center" @click="selectHeights">
						<div :class="heights?'actionTitle':'myNikeName'">{{heights?heights:'请选择'}}</div>
						<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>
				<div class="user_com">
					<div class="left">学历</div>
					<div class="right flex justify-center align-center" @click="selectEduction">
						<div :class="myEducation?'actionTitle':'myNikeName'">{{myEducation?myEducation:'请选择'}}</div>
						<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>
				<div class="user_com">
					<div class="left">婚姻状况</div>
					<div class="right flex justify-center align-center" @click="showMarriages=true">
						<div :class="marriages?'actionTitle':'myNikeName'">{{marriages?marriages:'请选择'}}</div>
						<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>

				<div class="user_com">
					<div class="left">工作地区</div>
					<div class="right flex justify-center align-center" @click="selectWorkPlace(3)">
						<div :class="workOfPlace?'actionTitle':'myNikeName'">{{workOfPlace?workOfPlace:'请选择'}}</div>
						<img src="../../../../static/img/icon_chela.png" />
					</div>
				</div>
			</div>
		</div>
		<!--生日-->
		<!--<van-popup v-model="showDate" position="bottom" :style="{ height: '45%' }">
			<van-datetime-picker v-model="currentDate" type="date" @cancel='showDate=false' @confirm='comfirmBirthDay' :minDate="minDate" currentDate="currentDate" />
		</van-popup>-->
		<!--星座-->
		<!--<van-popup v-model="showConstellation" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="constellation" @cancel="showConstellation=false" @confirm="onConfirmConstellation" />
		</van-popup>-->
		<!--血型-->
		<!--<van-popup v-model="showBloodType" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="bloodArr" @cancel="showBloodType=false" @confirm="onConfirmBloodType" />
		</van-popup>-->
		<!--身高-->
			<!--<van-popup v-model="showHeight" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="heightArr" @cancel="showHeight=false" @confirm="onConfirmHeight" />
		</van-popup>-->
		<!--体重-->
		<van-popup v-model="showWeight" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="weightArr" @cancel="showWeight=false" @confirm="onConfirmWeight" />
		</van-popup>
		<!--学历-->
		<van-popup v-model="showRecord" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="recordArr" @cancel="showRecord=false" @confirm="onConfirmRecord" />
		</van-popup>
		<!--月薪-->
		<van-popup v-model="showYxin" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="yueXMoneyArr" @cancel="showYxin=false" @confirm="onConfirmyueXMoney" />
		</van-popup>
		<!--地区-->
		<van-popup v-model="showArea" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="areaArr" @cancel="showArea=false" @confirm="onConfirmCheckArea" />
		</van-popup>
		<!--住房情况-->
		<van-popup v-model="showHousingSituation" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="housingSituationArr" @cancel="showHousingSituation=false" @confirm="onConfirmCheckHousingSituation" />
		</van-popup>
		<!--所在行业-->
		<van-popup v-model="showIndustry" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="industryArr" @cancel="showIndustry=false" @confirm="onConfirmCheckIndustry" />
		</van-popup>
		<!--职业类型-->
		<van-popup v-model="showProfessional" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="professionalArr" @cancel="showProfessional=false" @confirm="onConfirmProfessional" />
		</van-popup>
		<!--有无车-->
		<van-popup v-model="showCar" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="carArr" @cancel="showCar=false" @confirm="onConfirmCar" />
		</van-popup>
		<!--婚姻-->
		<van-popup v-model="showMarriage" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="marriageArr" @cancel="showMarriage=false" @confirm="onConfirmMarriage" />
		</van-popup>
		<!--民族-->
		<van-popup v-model="showNational" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="nationalArr" @cancel="showNational=false" @confirm="onConfirmNational" />
		</van-popup>
		<!--有无子女-->
		<van-popup v-model="showSon" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="sonArr" @cancel="showSon=false" @confirm="onConfirmSon" />
		</van-popup>
		<!--宗教-->
		<van-popup v-model="showReligious" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="religiousArr" @cancel="showReligious=false" @confirm="onConfirmReligious" />
		</van-popup>
		<!--年龄-->
		<van-popup v-model="showAge" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="ageArr" @cancel="showAge=false" @confirm="onConfirmAge" />
		</van-popup>
		<!--身高-->
		<van-popup v-model="showHeights" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="heightsArr" @cancel="showHeights=false" @confirm="onConfirmHeights" />
		</van-popup>
		<!--配偶学历-->
		<van-popup v-model="showMyEducation" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="myEducationArr" @cancel="showMyEducation=false" @confirm="onConfirmMyEducation" />
		</van-popup>
		<!--配偶婚姻-->
		<van-popup v-model="showMarriages" position="bottom" :style="{ height: '45%' }">
			<van-picker :show-toolbar="true" :columns="marriagesArr" @cancel="showMarriages=false" @confirm="onConfirmMarriages" />
		</van-popup>
		   <div class="loading" v-show="showLoading">
      <van-loading class="vanLoading" type="spinner" size="24px"></van-loading>
    </div>
	</div>
</template>

<script>
   import HeaderFixedTop from '../../../components/HeaderTop/HeaderFixedTops'
   import axios from 'axios'
   import qs from 'qs'
	export default {
		data() {
			return {
				show: false,
				showBackIcon: "true",
				title: "基本资料",
				rightTitle: '保存',
				showDate: false,
				currentDate: new Date(),
				minDate: new Date(1900, 1, 1),
				myNikeName:"",
				userId:"",
				myHousingSituation:"",
				myCar:"",
				myChildren:"",
				myArea:"",
				myNation:"",
				myReligion:"",
				myAgeArr:"",
				myOtherHeight:"",
				myEducation:"",
				marryName:"",
				education:'',
				monthlyPayS:'',
				otherArea:"",
				appointState:"",
				phone:"",
				qq:"",
				myEmail:"",
				birthDay:"",
				weixinId:'',
				weiBoId:'',
				constellation:['白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天秤座','天蝎座','射手座','摩羯座','水瓶座','双鱼座'],
				constellations:"",
				showConstellation:false,
				bloodType:"",
				bloodArr:['A型','B型','O型','AB型','其他'],
				showBloodType:false,
				showHeight:false,
				height:"",
				heightArr:['140cm','150cm','160cm','170cm','180cm','190cm','200cm','210cm','220cm'],
				showWeight:false,
				weightArr:['40kg','45kg','50kg','55kg','60kg','65kg','70kg','75kg','80kg','85kg','90kg','95kg'],
				weight:"",
				showRecord:false,
				recordArr:['无','初中','中专/职校/技校','高中','大专','本科','双学士','硕士','博士','博士后'],
				record:"",
				yueXMoney:"",
				showYxin: false,
				yueXMoneyArr:['保密','6000元以下','6000-12000元','12000-20000元','20000元以上'],
				showArea:false,
				areaArr:[],
				workPlace:"",
				showHousingSituation:false,
				housingSituationArr:['无','和父母同住','自有物业','租房','其他'],
				housing:"",
				showIndustry:false,
				industryArr: ['计算机', '通信、电信', '互联网', '电子行业', '金融服务', '金融/投资/证券 贸易', '快速消费品', '服装/纺织/皮革', '家具/家电/工艺品/玩具', '办公用品及设备', '医疗，医药', '广告/公关/市场推广/会展', '影视/媒体/出版/印刷/包装', '房地产相关', '家居/室内设计/装潢', '服务(咨询，人力资源)', '法律相关',
					'教育/培训', '学术/科研', '酒店/餐饮业', '旅游', '娱乐/休闲/体育', '美容/保健', '交通', '汽车及零配件', '农业', '政府机关', '非盈利机构', '其他行业'
				],
				industry:"",
				professional:"",
				professionalIndex:'',
				professionalArr:['市场销售','生产采购','行政\人事','培训\咨询','普通职员','高级职员','中层管理','高层管理','公务员','教师','军人','警察',
'医疗人员','护士','艺术','演艺','记者\编辑','体育','律师','学生','科研人员','设计','策划','技术人员','科研','自由职业','私营业主','其他职业'],
				showProfessional:false,
				showCar:false,
				car:"",
				carArr:['无车','有车'],
				marriage:"",
				showMarriage:false,
				marriageArr:[ '未婚','离异', '丧偶'],
				national:"",
				showNational:false,
				nationalArr:['汉族','壮族','蒙古族','回族','维吾尔族','苗族','朝鲜族','满族','侗族','瑶族','白族','彝族','土家族','哈萨克族',
'傣族','黎族','高山族','土族','藏族','其他民族'],
                son:"",
                showSon:false,
                sonArr:["无","有"],
                religious:"",
                showReligious:false,
                religiousArr:['无神论者','佛教','基督教','道教','伊斯兰教','天主教','有神论者','其他'],
                age:"",
                ageArr:['15-20','20-25','25-30','30-35','35-40','40-45','45-50','50-55','55-60','60-65','65-70','70-75','75-80','80-85'],
                showAge:false,
                heights:"",
                heightsArr:['140cm','150cm','160cm','170cm','180cm','190cm','200cm','210cm','220cm'],
                showHeights:false,
                myEducation:"",
                showMyEducation:false,
                myEducationArr:['无','初中','中专/职校/技校','高中','大专','本科','双学士','硕士','博士','博士后'],
                marriages:"",
                marriagesArr:[ '未婚','离异', '丧偶'],
                showMarriages:false,
                dianjiIndex:"",
                residence:"",
                workOfPlace:"",
              	username:'',
              	uid:'',
              	crtimes:'',
              	zodiac:'',
              	constellation:'',
              	bloodType:'',
              	height:'',
              	weight:'',
              	educationalStatus:'',
              	monthlyPay:'',
              	placeOfWork:'',
              	housingConditions:'',
              	whetherBuyCars:'',
              	industry:'',
              	placeOfWork:'',
              	maritalStatus:'',
              	nation:'',
              	withoutChildren:'',
              	religion:'',
              	phone:'',
              	ages:'',
              	showLoading:false
			}
		},
		components: {
			HeaderFixedTop,
		},
		mounted(){
			this.$route.query.list;
			this.getWorkArea()
		},
		created() {
			this.getUserInfo();
//			this.$route.query.userInfo;
//		console.log(this.$route.query.userInfo)
		},
		methods: {
				//获取用户信息
			getUserInfo() {
				var requestUrl = this.apiUrl + 'user/getUserDetail';
				var requestData = {
					ruid: localStorage.getItem('uid'),
					type: 2
				};
				axios.post(requestUrl,
						qs.stringify(requestData), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded'
							}
						},
					).then((res) => {
						var resdata = res.data;
						var lists=resdata.data;
						if(resdata.code == 200) {
							this.username = lists.username;
////		uid
		this.uid = lists.uid;
//		出生日期
		this.crtime = lists.crtime;
		var crtimes = this.crtime;
		this.crtimes = crtimes.slice(0,9);
//		生肖
		this.zodiac = lists.zodiac;
//		星座
		this.constellation = lists.constellation;
//		血型
		this.bloodType = lists.bloodType;
//		身高
		this.height = lists.height;
//		体重
		this.weight = lists.weight;;
//		学历；
		this.educationalStatus = lists.educationalStatus;
//		月薪
		this.monthlyPay = parseInt(lists.userBase.monthlyPay);
//		工作地区
		this.placeOfWork = lists.placeOfWork;
//		住房情况
		this.housingConditions = lists.userBase.housingConditions;
//		是否有车
		this.whetherBuyCars = lists.userBase.whetherBuyCars;
		//		所在行业
		this.industry =parseInt(lists.userBase.industry) ;
				//		户口所在地
		this.placeOfWork = lists.placeOfWork;
				//		婚姻状况
		this.maritalStatus = lists.maritalStatus;
				//		民族
		this.nation = lists.nation;
			//		有无子女
		this.withoutChildren = lists.userBase.withoutChildren;
				//		宗教
		this.religion = lists.userBase.religion;
				//		手机号
		this.phone = lists.phone;
		//		年龄
		this.ages = lists.userBase.ages;
		this.qq= lists.qq;
		this.myEmail= lists.email;
		this.weixinId= lists.wechat;
		this.weiBoId=lists.weibo;
	this.professionalIndex=parseInt(lists.vocationalType) ;
						}
					})
					.catch((error) => {})
			},
			getWorkArea(){
				var requestUrl = this.apiUrl + 'user/getAreaList';
				var requestData = {
					pid:0		
				};
					axios.post(requestUrl,
						qs.stringify(requestData), {
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded',
								'token': 'jBRsp64qnxvm+TXlEJZMQZ6+ezZaRCAX22lBSyOZPpQ='
							}
						},
					).then(res => {
						var tempArea = res.data.data;
						var tempArr = [];
						for(var i = 0; i < tempArea.length; i++) {
							tempArr.push(tempArea[i].areaName)
						}
						this.areaArr = tempArr
						console.log(this.areaArr);
                          this.showLoading=false;
					})
					.catch((error) => {this.showLoading=false;})

				//this.$router.push('/activationAccout')
			
				
			},
			basic_information() {
				this.$router.push('/basic_information')
			},
			goBack() {
				this.$router.go(-1);
			},
			goNavAdd() {
				
        var requestUrl = this.apiUrl + 'user/editUserInfo';
        //var requestUrl = this.apiUrl + 'user/getMatchingUserList';
        //var data1={
        //	uid: this.$store.state.uid,
        //	sex:"1"
        //}
        var requestData = {
          uid: this.$store.state.uid, //this.myPhone,
        }
        this.yueXMoney ? requestData.monthlyPay = this.yueXMoneyArr.indexOf(this.yueXMoney) + 1 : '';
        this.industry ? requestData.industry = this.industryArr.indexOf(this.industry) + 1 : '';
        this.housing ? requestData.housingConditions = this.housingSituationArr.indexOf(this.housing)  : '';
        this.car ? requestData.whetherBuyCars = this.carArr.indexOf(this.car) : '';
        this.son ? requestData.withoutChildren = this.sonArr.indexOf(this.son) : '';
        this.residence ? requestData.censusRegister = this.residence : '';
        this.national ? requestData.nation = this.nationalArr.indexOf(this.national) + 1 : '';
        this.religious ? requestData.religion = this.religiousArr.indexOf(this.religious) + 1 : '';
        this.phone ? requestData.phone = this.phone : '';
        this.myEmail ? requestData.email = this.myEmail : '';
        this.qq ? requestData.qq = this.qq : '';
       this.ages ? requestData.ages = this.ages : '';
        this.heights ? requestData.rheight = this.heights : '';
         this.myEducation ? requestData.reducationalStatus = this.myEducationArr.indexOf(this.myEducation) : '';
       this.workOfPlace ? requestData.area = this.workOfPlace : '';
       this.marriages ? requestData.rmaritalStatus = this.marriagesArr.indexOf(this.marriages) + 1 : '';
        this.weiBoId?requestData.weibo = this.weiBoId: '';
      this.weixinId?requestData.wechat = this.weixinId: '';
      this.professional?requestData.vocationalType =this.professionalArr.indexOf(this.professional)+1: '';
// requestData.type=1;

console.log(requestData);
this.showLoading=true;

//return;
        var token = localStorage.getItem('token');
        axios.post(requestUrl,
          qs.stringify(requestData), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'token': token
            }
          },
        ).then((res) => {
          this.showLoading=false;
          console.log(res);
          var resdata = res.data;
          if (resdata.code == 200) {
            this.$router.go(-1);
            this.$toast(resdata.msg);
            //							this.$store.commit('set_token', resdata.token);
            //							this.$store.commit('set_phone', resdata.phone);
          } else {
            this.$toast(resdata.msg)
          }

        })
          .catch((error) => {
            this.showLoading=false;
          })
      },
			selectDate(){
				this.showDate=true
			},
			selectConstellation(){
				this.showConstellation=true
			},
			selectBlood(){
				this.showBloodType=true
			},
			selectHeight(){
				this.showHeight=true
			},
			selectWeight(){
				this.showWeight=true
			},
			selectRecord(){
				this.showRecord=true
			},
			selectYueXMoney(){
				this.showYxin=true
			},
			selectWorkPlace(index){
				this.dianjiIndex=index
				this.showArea=true;
				
			},
			selectHousing(){
				this.showHousingSituation=true
			},
			selectindustry(){
				this.showIndustry=true
			},
			selectProfessional(){
				this.showProfessional=true
			},
			selectCar(){
				this.showCar=true
			},
			selectMarriage(){
				this.showMarriage=true
			},
			selectNational(){
				this.showNational=true
			},
			selectSon(){
				this.showSon=true
			},
			selectReligious(){
				this.showReligious=true
			},
			selectAge(){
				this.showAge=true
			},
			selectHeights(){
				this.showHeights=true
			},
			selectEduction(){
				this.showMyEducation=true
			},
			cancelBirthDay(){
			  this.showDate = false;
			
			},
			comfirmBirthDay(value){
				console.log(value)
				const d = new Date(value)
				console.log(d);
				const resDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + (d.getDate())　;
				console.log(resDate);
				this.birthDay = resDate;
				this.showDate = false;
			},
			
			onConfirmConstellation(value){
				console.log(value)
				this.showConstellation=false
				this.constellations=value
			},
			
			onConfirmBloodType(value){
				this.showBloodType = false;
				this.bloodType=value
			},
			
			onConfirmHeight(value){
				this.height=value
				this.showHeight=false
			},
			
			onConfirmWeight(value){
				this.weight=value
				this.showWeight=false
			},
		
			onConfirmRecord(value,index){
				this.showRecord=false;
				this.record=value;
				this.educationalStatus=index; //educationalStatus
			},
			
			onConfirmyueXMoney(value,index){
				this.showYxin=false
				this.yueXMoney=value;
				this.monthlyPay=index+1;
			},
			onConfirmCheckArea(value){
				this.showArea=false
				if(this.dianjiIndex==1){
					this.placeOfWork=value
				}else if(this.dianjiIndex==2){
					this.residence=value
				}else{
					this.workOfPlace=value
				}
			
			},
			onConfirmCheckHousingSituation(value,index){
				this.showHousingSituation=false
				this.housing=value;
				this.housingConditions=index;
			},
			onConfirmCheckIndustry(value){
				this.showIndustry=false
				this.industry=value
			},
			onConfirmProfessional(value){
				this.showProfessional=false
				this.professional=value
			},
			onConfirmCar(value,index){
				this.showCar=false
				this.car=value;
				this.whetherBuyCars=index;
			},
			onConfirmMarriage(value,index){
				this.showMarriage=false;
				this.marriage=value;
				this.maritalStatus=index+1
			},
			onConfirmNational(value,index){
				this.showNational=false;
				this.national=value;
				this.nation=index+1
			},
			onConfirmSon(value,index){
				this.showSon=false;
				this.son=value;
				this.withoutChildren=index
			},
			onConfirmReligious(value){
				this.showReligious=false;
				this.religious=value;
				this.religion=value;
			},
			onConfirmAge(value){
				this.showAge=false
				this.age=value;
				this.ages=value;
			},
			onConfirmHeights(value){
				this.heights=value
				this.showHeights=false
			},
			onConfirmMyEducation(value){
				this.showMyEducation=false
				this.myEducation=value
			},
			onConfirmMarriages(value){
				this.showMarriages=false
				this.marriages=value
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../styles/mycomstyle.css";
	.box {
		width: 100%;
		height: 100%;
		margin-top: 60px;
		.box_txt {
			width: 98%;
			/*border: 1px solid red;*/
			margin: 0 auto;
			/*margin-top: 60px;*/
			.txt {
				width: 100%;
				height: 50px;
				display: flex;
				line-height: 50px;
				background-color: #FFFFFF;
				border-radius: 5px;
				margin-bottom: 10px;
				.txt_s {
					font-size: 15px;
					color: #353535;
					margin-left: 10%;
				}
				img {
					width: 6.5px;
					height: 11.5px;
					margin-left: 66%;
					margin-top: 5%;
					/*display: block;*/
				}
			}
		}
	}
	
	* {
		padding: 0;
		margin: 0;
		touch-action: none;
	}
	.myNikeName{
		margin-right: 9.5px;
	}
	.myCar{
		margin-right: 16px;
	}
	
	.actionTitle {
		color: #3A3A3A;
		margin-right: 9.5px;
	}
	/*表格样式*/
	
	.userInfoInput {
		width: 100%;
		.agreeClause {
			display: flex;
			align-items: center;
			font-size: 14px;
			margin: 10px 20px;
			.clauseOne {
				color: #FF8737;
			}
			img {
				display: inline;
				width: 30px;
				height: 30px;
				margin-top: 2px;
				margin-left: -10px;
			}
		}
		.title_Tips {
			margin: 10px 20px;
			font-size: 15px;
			display: inline-block;
		}
		.contactInf {
			margin: 30px 20px;
			.xuanT {
				color: #BBBBBB;
				font-size: 15px;
			}
			.contact_tips {
				color: #FF7199;
				font-size: 13px;
				letter-spacing: 2px;
				margin-top: 10px;
			}
		}
		.selfIntroduction {
			font-weight: 600;
			margin: 30px 20px;
			border-bottom: 0.5px solid #D2D2D2;
			.selfIn {
				margin: 30px 0px 10px 0px;
			}
			.optionsType {
				.introdAction {
					color: #F54663;
					font-size: 14px;
					padding: 10px 10px 10px 10px;
					padding-bottom: 10px;
					border-bottom: 2px solid #F54663;
					margin-right: 20px;
				}
				.introdDefualt {
					color: #949494;
					padding: 10px 10px 10px 10px;
					font-size: 14px;
					margin-right: 20px;
				}
			}
		}
		.introdExplain {
			margin: 0 20px;
			color: #AAAAAA;
			font-size: 12px;
		}
		.introdTextarea {
			margin: 0 20px;
			flex: 1;
			textarea {
				background: red;
				flex: 1;
				width: 90%;
				padding: 10px;
				margin: auto;
				display: block;
				background: none;
				border: none;
				outline: none;
				height: 120px;
			}
		}
		.user_com {
			margin: 0 20px;
			border-bottom: 0.5px solid #D2D2D2;
			height: 40px;
			line-height: 40px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left {
				color: #3A3A3A;
				font-size: 15px;
				.tips{
					color: #F54663;
					font-size: 13px;
				}
			}
			.right {
				color: #999999;
				font-size: 15px;
				img {
					width: 6.5px;
					height: 11.5px;					
				}
				.inputNotsty {
					flex: 1;
					background: none;
					border: none;
					outline: none;
					text-align: right;
					margin-right: 10px;
				}
				.VerificationCode {
					width: 90px;
					height: 31px;
					border: 0.5px solid #FF8737;
					border-radius: 5px;
					color: #FF8737;
					line-height: 31px;
					text-align: center;
				}
			}
		}
	}
</style>