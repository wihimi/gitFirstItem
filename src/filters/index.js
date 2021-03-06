const isNullOrEmpty = function(val) {
	if(val == null || val == "" || typeof(val) == undefined) {
		return true;
	} else {
		return false;
	}
}
//职业
const vocationalTypeFilter = (value) => {
	value=parseInt(value);
	
	switch(value) {
	
		case 1:
			return "市场销售"
			break;
		case 2:
			return "生产采购"
			break;
		case 3:
			return "行政\人事"
			break;
		case 4:
			return "培训\咨询"
			break;
		case 5:
			return "普通职员"
			break;
		case 6:
			return "高级职员"
			break;
		case 7:
			return "中层管理"
			break;
		case 8:
			return "高层管理"
			break;
		case 9:
			return "公务员"
			break;
		case 10:
			return "教师"
			break;
		case 11:
			return "军人"
			break;
		case 12:
			return "警察"
			break;
		case 13:
			return "医疗人员"
			break;
		case 14:
			return "护士"
			break;
		case 15:
			return "艺术"
			break;
		case 16:
			return "演艺"
			break;
		case 17:
			return "记者\编辑"
			break;
		case 18:
			return "体育"
			break;
			
		case 19:
			return "律师"
			break;
		case 20:
			return "学生"
			break;
		case 21:
			return "科研人员"
			break;
		case 22:
			return "设计"
			break;
		case 23:
			return "策划"
			break;
		case 24:
			return "技术人员"
			break;
		case 25:
			return "科研"
			break;
		case 26:
			return "自由职业"
			break;
		case 27:
			return "私营业主"
			break;
		default :
		  return '其他职业'
		  break;
	}
}
//行业
const industryFilter = (value) => {
	value=parseInt(value);
	switch(value) {
	
		case 1:
			return "计算机"
			break;
		case 2:
			return "通信、电信"
			break;
		case 3:
			return "互联网"
			break;
		case 4:
			return "电子行业"
			break;
		case 5:
			return "金融服务"
			break;
		case 6:
			return "金融/投资/证券 贸易"
			break;
		case 7:
			return "快速消费品"
			break;
		case 8:
			return "服装/纺织/皮革"
			break;
		
		case 9:
			return "家具/家电/工艺品/玩具"
			break;
		case 2:
			return "办公用品及设备"
			break;
		case 10:
			return "'医疗，医药"
			break;
		case 11:
			return "广告/公关/市场推广/会展"
			break;
		case 12:
			return "影视/媒体/出版/印刷/包装"
			break;
		case 13:
			return "房地产相关"
			break;
		case 14:
			return "家居/室内设计/装潢"
			break;
		case 15:
			return "服务(咨询，人力资源)"
			break;
		case 16:
			return "法律相关"
			break;
			
		case 17:
			return "教育/培训"
			break;
		case 18:
			return "学术/科研"
			break;
		case 19:
			return "酒店/餐饮业"
			break;
		case 20:
			return "旅游"
			break;
		case 21:
			return "娱乐/休闲/体育"
			break;
		case 22:
			return "美容/保健"
			break;
		case 23:
			return "交通"
			break;
		case 24:
			return "汽车及零配件"
			break;
		case 25:
			return "农业"
			break;
		case 26:
			return "政府机关"
			break;
		case 27:
			return "非盈利机构"
			break;
		default :
		  return '其他行业'
		  break;
	}
}

const maritalStatusFilter = (value) => {
	switch(value) {
	
		case 1:
			return "未婚"
			break;
		case 2:
			return "离异"
			break;
		case 3:
			return "丧偶"
			break;
		default :
		  return '未知'
		  break;
	}
}

const educationalStatusFilters = (value) => {
	switch(value) {
		case 0:
			return "无"
			break;
		case 1:
			return "初中"
			break;
		case 2:
			return "中专/职校/技校"
			break;
		case 3:
			return "高中"
			break;

		case 4:
			return "大专"
			break;

		case 5:
			return "本科"
			break;

		case 6:
			return "双学士"
			break;

		case 7:
			return "硕士"
			break;

		case 8:
			return "博士"
			break;
		case 9:
			return "博士后"
			break;

	}
	console.log(value)　　　
}
const timeFormat = (value, format) => {
	let date = new Date(value);
	let y = date.getFullYear();
	let m = date.getMonth() + 1;
	let d = date.getDate();
	let h = date.getHours();
	let min = date.getMinutes();
	let s = date.getSeconds();
	let result = "";
	if(format == undefined) {
		result = `${y}-${m < 10 ? "0" + m : m}-${d < 10 ? "0" + d : d} ${
        h < 10 ? "0" + h : h
      }:${min < 10 ? "0" + min : min}:${s < 10 ? "0" + s : s}`;
	}
	if(format == "yyyy-mm-dd") {
		result = `${y}-${m < 10 ? "0" + m : m}-${d < 10 ? "0" + d : d}`;
	}
	if(format == "yyyy-mm") {
		result = `${y}-${m < 10 ? "0" + m : m}`;
	}
	if(format == "mm-dd") {
		result = ` ${mm < 10 ? "0" + mm : mm}:${ddmin < 10 ? "0" + dd : dd}`;
	}
	if(format == "hh:mm") {
		result = ` ${h < 10 ? "0" + h : h}:${min < 10 ? "0" + min : min}`;
	}
	if(format == "yyyy") {
		result = `${y}`;
	}
	return result;
};

const bloodTypeFilter = (value) => {
	switch(value) {
		case 1:
			return "O型"
			break;
		case 2:
			return "A型"
			break;
		case 3:
			return "B型"
			break;

		case 4:
			return "AB型"
			break;

		case 5:
			return "其他"
			break;

		case 6:
			return "不清楚"
			break;

	}
}
const nationFilter=(value)=>{
	switch (value){
	
		case 1:
		    return "汉族"
			break;	
		case 2:
		    return "壮族"
			break;
		case 3:
		    return "蒙古族"
			break;
		case 4:
		    return "回族"
			break;
		case 5:
		    return "维吾尔族"
			break;
		case 6:
		    return "苗族"
			break;
		case 7:
		    return "朝鲜族"
			break;
		case 8:
		    return "满族"
			break;
		case 9:
		    return "侗族"
			break;
		case 10:
		    return "瑶族"
			break;
		case 11:
		    return "白族"
			break;
		case 12:
		    return "彝族"
			break;
		case 13:
		    return "土家族"
			break;
		case 14:
		    return "哈萨克族"
			break;
		case 15:
		    return "傣族"
			break;
		case 16:
		    return "黎族"
			break;
		case 17:
		    return "高山族"
			break;
		case 18:
		    return "土族"
			break;
		case 19:
		    return "藏族"
			break;
		case 20:
		    return "其他民族"
			break;
		default:
			 return "其他民族"
			break;
	}
}
const monthpay=(value)=>{
	switch (value){
		case 1:
		    return '保密'
			break;
		case 2:
		    return '6000元以下'
			break;
		case 3:
		    return '6000-12000元'
			break;
		case 4:
		    return '12000-20000元'
			break;
		case 5:
		    return '20000元以上'
			break;
		
	}
}
const housing=(value)=>{
	switch(value){
		case 0:
		  return '无' 
		  break;
		case 1:
		  return '和父母同住'
		  break;
	    case 2:
		  return '自有物业'
		  break;
		case 3:
		  return '租房'
		  break;
		case 4:
		  return '其他'
		  break;
	}
}
const car=(value)=>{
	switch(value){
		case 0:
		  return '无车' 
		  break;
		case 1:
		return "有车"
		break;
	}
}
const religion=(value)=>{
	switch(value){
		case 0:
		  return '未知' 
		  break;
		case 1:
			return "无神论者"
			break;
		case 2:
			return "佛教"
			break;
		case 3:
			return "基督教"
			break;
		case 4:
			return "道教"
			break;
		case 5:
			return "伊斯兰教"
			break;
		case 6:
			return "天主教"
			break;
		case 7:
			return "有神论者"
			break;
		case 8:
			return "其他"
			break;
	}
}
const loveStatus=(value)=>{
	switch(value){
		case 1:
		  return '寻觅中'
		  break;
		case 2:
		  return '恋爱啦'
		  break;
		case 3:
		  return '结婚啦'
		  break;
	}
}
const withoutChildren=(value)=>{
		switch(value){
		case 0:
		  return '无'
		  break;
		case 1:
		  return '有'
		  break;
	}
}
const sex=(value)=>{
		switch(value){
		case 0:
		  return '未知'
		  break;
		case 1:
		  return '男'
		  break;
		case 2:
		  return '女'
		  break;
	}
}
const familyStatus=(value)=>{
	value=parseInt(value);
		switch(value){
		case 0:
		  return '未知'
		  break;	
		case 1:
		  return '父母健在'
		  break;
		case 2:
		  return '单亲家庭'
		  break;
		case 3:
		  return '父亲健在'
		  break;
	    case 4:
		  return '母亲健在'
		  break;
		case 5:
		  return '父母均离世'
		  break;
		default:
		  return '暂未填写'
		  break;
	}
}
const rankingInHome=(value)=>{
			switch(value){
				case"无":
										return '无'
										break;
		case 0:
		  return '未知'
		  break;
		case 1:
		  return '独生子女'
		  break;
		case 2:
		  return '老大'
		  break;
		case 3:
		  return '老二'
		  break;
	    case 4:
		  return '老三'
		  break;
		case 5:
		  return '老四'
		  break;
		case 6:
		  return '老五'
		  break;
		case 7:
		  return '其他'
		  break;
	}
}
const dailyRoutine=(value)=>{
			switch(value){
				case"无":
										return '无'
										break;
		case 0:
		  return '未知'
		  break;
		case 1:
		  return '早睡早起'
		  break;
		case 2:
		  return '偶尔熬夜'
		  break;
		case 3:
		  return '经常熬夜'
		  break;
		case 4:
		  return '偶尔懒散 '
		  break;
		case 5:
		  return '没有规律'
		  break;
	}
}
const whetherSmoking=(value)=>{
		switch(value){
			case"无":
										return '无'
										break;
		case 0:
		  return '未知'
		  break;
		case 1:
		  return '不吸，很反感'
		  break;
		case 2:
		  return '不吸烟，但不反感'
		  break;
		case 3:
		  return '社交时偶尔吸烟'
		  break;
		case 4:
		  return '烟不离手 '
		  break;
		
	}
}
const whetherDrink=(value)=>{
			switch(value){
				case"无":
										return '无'
										break;
		case 0:
		  return '未知'
		  break;
		case 1:
		  return '不喝酒'
		  break;
		case 2:
		  return '社交需要喝'
		  break;
		case 3:
		  return '兴致时小酌'
		  break;
		case 4:
		  return '酒不离口 '
		  break;
		
	}
}
const householdDuties=(value)=>{
				switch(value){
					case"无":
										return '无'
										break;
		case 0:
		  return '未知'
		  break;
		case 1:
		  return '任劳任怨'
		  break;
		case 2:
		  return '希望对方承担家务'
		  break;
		case 3:
		  return '一起分工合作'
		  break;
		case 4:
		  return '看各自闲忙，协商分担 '
		  break;
		
	}
}
const cookingSkill=(value)=>{
					switch(value){
						case"无":
										return '无'
										break;
		case 0:
		  return '未知'
		  break;
		case 1:
		  return '色香味俱全'
		  break;
		case 2:
		  return '能做几样可口的小菜'
		  break;
		case 3:
		  return '不太会，但愿为心爱的人学习'
		  break;
		
	}
}
const marry=(value)=>{
						switch(value){
							case"无":
										return '无'
										break;
		case 0:
		  return '未知'
		  break;
		case 1:
		  return '及时闪婚'
		  break;
		case 2:
		  return '一年以内'
		  break;
		case 3:
		  return '两年以内'
		  break;
		case 4:
		  return '三年以内'
		  break;
		case 5:
		  return '时机成熟时就结婚'
		  break;
		
	}
}
const liveWithParents=(value)=>{
						switch(value){
							case"无":
										return '无'
										break;
		case 0:
		  return '未知'
		  break;
		case 1:
		  return '愿意'
		  break;
		case 2:
		  return '不愿意'
		  break;
		case 3:
		  return '视具体情况而定'
		  break;
		
	}
}
const wantChildren=(value)=>{
						switch(value){
							case"无":
										return '无'
										break;
		case 0:
		  return '未知'
		  break;
		case 1:
		  return '想'
		  break;
		case 2:
		  return '不想'
		  break;
		case 3:
		  return '还没想好'
		  break;
		case 4:
		  return '视情况而定'
		  break;
	}
}
const appointment=(value)=>{
							switch(value){
								case"无":
										return '无'
										break;
		case 0:
		  return '未知'
		  break;
		case 1:
		  return '一起打游戏或者一起看电影'
		  break;
		case 2:
		  return '一起做饭'
		  break;
		case 3:
		  return '共赴浪漫之旅'
		  break;
		case 4:
		  return '牵手漫步在公园'
		  break;
		case 5:
		  return '彼此相依相偎'
		  break;
	}
}
const wedding=(value)=>{
							switch(value){
								case"无":
										return '无'
										break;
		case 0:
		  return '未知'
		  break;
		case 1:
		  return '顶级酒店，高朋满座'
		  break;
		case 2:
		  return '户外婚礼，温馨浪漫'
		  break;
		case 3:
		  return '旅游结婚，不大操大办'
		  break;
		case 4:
		  return '中式婚礼，宴请宾客'
		  break;
		case 5:
		  return '简单就好，无所谓'
		  break;
	}
}
const appreciate=(value)=>{
								switch(value){
										case"无":
										return '无'
										break;
		case 0:
		  return '未知'
		  break;
		case 1:
		  return '容貌身材'
		  break;
		case 2:
		  return '性格，心灵'
		  break;
		case 3:
		  return '经济实力'
		  break;
		case 4:
		  return '教育程度'
		  break;
	}
}
const types = (value) => {
 switch(value) {
  case 1:
   return "官方"
   break;
  case 2:
   return "转载"
   break;
  case 3:
   return "原创"
   break;
 }
}
export {
	isNullOrEmpty,
	timeFormat,
	educationalStatusFilters,
	bloodTypeFilter,
	maritalStatusFilter,
	nationFilter,
	monthpay,
	housing,
	car,
	religion,
	loveStatus,
	withoutChildren,
	sex,
	familyStatus,
	rankingInHome,
	dailyRoutine,
	whetherSmoking,
	whetherDrink,
	householdDuties,
	cookingSkill,
	marry,
	liveWithParents,
	wantChildren,
	appointment,
	wedding,
	appreciate,
	types,vocationalTypeFilter,industryFilter
}