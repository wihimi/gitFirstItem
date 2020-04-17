import Vue from 'vue'
import Router from 'vue-router'
//邂逅页面
import Index from '@/components/index/index'
//发现页面
import  Search  from  '@/components/search/search'
//消息页面
import Message from '@/components/message/message'
import  Chat  from  '@/components/message/chat'
import  Fast_message  from  '@/components/message/fast_message'
import  Edit_template  from  '@/components/message/edit_template'
//发现页面
import Found from '@/components/found/found'
import Release from '@/components/found/release'
import Missile from '@/components/found/missile'
import Details from '@/components/found/details'
import Sun_photos from '@/components/found/sun_photos'
import Pictures from '@/components/found/pictures'
import Show_love from '@/components/found/show_love'
import Success_stories from '@/components/found/success_stories'

//我的页面
import My_putchar from '@/components/my_putchar/my_putchar'
//忘记密码页面
import Forgot from '@/components/my_putchar/forgot'
import Password from '@/components/my_putchar/password'
import Printonly from '@/components/my_putchar/printonly'
import Backup from '@/components/my_putchar/backup'

//搜索结果页面
import Result from '@/components/search/result'
//搜索详情
import Detail from '@/components/search/detail'
import Users_report from '@/components/search/users_report'
//注册页面
import Register from '@/pages/login/index'
import Login from '@/pages/login/login'
import OneClickLogin from '@/pages/login/OneClickLogin'
import FreeRegister from '@/pages/register/freeRegister'
import ActivationAccout from '@/pages/register/activationAccout'
import PerfectInfo from '@/pages/register/perfectInfo'
import PerfectInfo2 from '@/pages/register/perfectInfo2'
//我的
import My from '@/pages/my/index'
import RealNameAuthentication from '@/pages/my/realNameAuthentication/realNameAuthentication'
import RealNameAuthentication2 from '@/pages/my/realNameAuthentication/realNameAuthentication2'
import FaceRecog from '@/components/faceRecognition/faceRecog'
import MemberUpgrade from '@/pages/my/memberUpgrade/memberUpgrade'
import MemberUpgrade2 from '@/pages/my/memberUpgrade/memberUpgrade2'
import MyCardBag from '@/pages/my/myCardBag/myCardBag'


import Integral_detail from '@/pages/my/myCardBag/integral_detail'
import Details_sms from '@/pages/my/myCardBag/details_sms'
import Access_rules from '@/pages/my/myCardBag/access_rules'
import Buy_sms from '@/pages/my/myCardBag/buy_sms'



import MyPost from '@/pages/my/myPost/myPost'
import ShowOfAffection from '@/pages/my/showOfAffection/showOfAffection'
import ContactUs from '@/pages/my/contactUs/contactUs'

import Permission from '@/pages/my/permission'
import Read_my from '@/pages/my/read_my'
import Priority from '@/pages/my/priority'
import Seeking from '@/pages/my/seeking'
import Inform from '@/pages/my/inform'
import Report_details from '@/pages/my/report_details'
import Online_remind from '@/pages/my/online_remind'
import My_gift from '@/pages/my/my_gift'
import Recommend from '@/pages/my/recommend'
import Focus from '@/pages/my/focus'
import Photoalbum from '@/pages/my/photoalbum/photoalbum'
import Prevent from '@/pages/my/prevent'
import Setting from '@/pages/my/setting'
import Askforhelp from '@/pages/my/askforhelp'
import Feedback from '@/pages/my/feedback'
import Contact from '@/pages/my/contact'
import Evaluation from '@/pages/my/evaluation'
import Remind_set from '@/pages/my/remind_set'
import About_us from '@/pages/my/about_us'
import preview from '@/pages/my/preview/preview'
import Site_profile from '@/pages/my/about_us/site_profile'
import Site_characteristics from '@/pages/my/about_us/site_characteristics'
import Media_reports from '@/pages/my/about_us/media_reports'
import Media_reports_details from '@/pages/my/about_us/media_reports_details'
import Weibo from '@/pages/my/about_us/weibo'
import Legal_notices from '@/pages/my/about_us/legal_notices'
import Privacy_protection from '@/pages/my/about_us/privacy_protection'
import Copyright_statement from '@/pages/my/about_us/copyright_statement'
import Registration_terms from '@/pages/my/about_us/registration_terms'
import Vip from '@/pages/my/about_us/vip'
import Business_cooperation from '@/pages/my/about_us/business_cooperation'
import Advertising_business from '@/pages/my/about_us/advertising_business'
import Friendship_link from '@/pages/my/about_us/friendship_link'
import Talented_people from '@/pages/my/about_us/talented_people'
import Modify_data from '@/pages/my/preview/modify_data'
import Basic_information from '@/pages/my/preview/basic_information'
import Myself from '@/pages/my/preview/myself'
import Personal_life from '@/pages/my/preview/personal_life'
import Love_plan from '@/pages/my/preview/love_plan'
import Way_of_life from '@/pages/my/preview/way_of_life'

Vue.use(Router)

export default new Router({
	routes: [
		//邂逅页面
		{
			path: '/index',
			name: 'index',
			component: Index,
			meta:  {        
				footShow:  true      
			}
		},   {      
			path:   '/search',
			      name:   'search',
			      component:  Search,
			meta:  {        
				footShow:  true      
			}    
		},
		//  消息页面
		{
			path: '/message',
			name: 'message',
			component: Message,
			meta:  {        
				footShow:  true      
			}
		},   // 聊天窗口
		     {      
			path:   '/chat',
			      name:   'chat',
			      component:  Chat,
			    
		},

		//发现页面
		{
			path: '/found',
			name: 'found',
			component: Found,
			meta:  {        
				footShow:  true      
			}
		},
		//我的页面
		{
			path: '/my_putchar',
			name: 'my_putchar',
			component: My_putchar,
			meta:  {        
				footShow:  true      
			}
		},
		//忘记密码页面
		{
			path: '/forgot',
			name: 'forgot',
			component: Forgot,

		},
		{
			path: '/password',
			name: 'password',
			component: Password
		},
		{
			path: '/printonly',
			name: 'printonly',
			component: Printonly
		},
		{
			path: '/backup',
			name: 'backup',
			component: Backup
		},

		// -----------------
		{
			path: '/Login',
			name: 'Login',
			component: Login
		},
		{
			path: '/OneClickLogin',
			name: 'OneClickLogin',
			component: OneClickLogin
		},
		{
			path: '/',
			name: 'Register',
			component: Register
		},
		{
			path: '/FreeRegister',
			name: 'FreeRegister',
			component: FreeRegister
		},
		{
			path: '/ActivationAccout',
			name: 'ActivationAccout',
			component: ActivationAccout
		},
		{
			path: '/release',
			name: 'release',
			component: Release
		},
		{
			path: '/missile',
			name: 'missile',
			component: Missile
		},
		{
			path: '/details',
			name: 'details',
			component: Details
		},
		{
			path: '/sun_photos',
			name: 'sun_photos',
			component: Sun_photos
		},
		{
			path: '/pictures',
			name: 'pictures',
			component: Pictures
		},
		//搜索结果页面
		{
			path: '/result',
			name: 'result',
			component: Result
		},
		//搜索详情
		{
			path: '/detail',
			name: 'detail',
			component: Detail
		},
		{
			path: '/PerfectInfo',
			name: 'PerfectInfo',
			component: PerfectInfo
		},

		{
			path: '/PerfectInfo2',
			name: 'PerfectInfo2',
			component: PerfectInfo2
		},

		{
			path: '/My',
			name: 'My',
			component: My,
			meta:  {        
				footShow:  true      
			}
		},

		{
			path: '/RealNameAuthentication',
			name: 'RealNameAuthentication',
			component: RealNameAuthentication
		},

		{

			path: '/FaceRecog',
			name: 'FaceRecog',
			component: FaceRecog
		},

		{
			path: '/RealNameAuthentication2',
			name: 'RealNameAuthentication2',
			component: RealNameAuthentication2
		},

		{
			path: '/MemberUpgrade',
			name: 'MemberUpgrade',
			component: MemberUpgrade
		},
		{
			path: '/MemberUpgrade2',
			name: 'MemberUpgrade2',
			component: MemberUpgrade2
		},
		{      
			path:   '/fast_message',
			      name:   'fast_message',
			      component:  Fast_message    
		},  
		{      
			path:   '/edit_template',
			      name:   'edit_template',
			      component:  Edit_template    
		},   
		{      
			path:   '/MyCardBag',
			      name:   'MyCardBag',
			      component:  MyCardBag    
		},  
		{      
			path:   '/MyPost',
			 name:   'MyPost',
			 component:  MyPost    
		},  
		{      
			path:   '/ShowOfAffection',
			      name:   'ShowOfAffection',
			      component:  ShowOfAffection    
		},  
		{      
			path:   '/ContactUs',
			      name:   'ContactUs',
			      component:  ContactUs    
		},
		{      
			path:   '/Permission',
			      name:   'Permission',
			      component:  Permission    
		},
		{      
			path:   '/Read_my',
			      name:   'Read_my',
			      component:  Read_my    
		},
		{      
			path:   '/Priority',
			      name:   'Priority',
			      component:  Priority    
		},

		{      
			path:   '/Seeking',
			      name:   'Seeking',
			      component:  Seeking    
		},

		{      
			path:   '/Inform',
			      name:   'Inform',
			      component:  Inform    
		},

		{      
			path:   '/Report_details',
			      name:   'Report_details',
			      component:  Report_details    
		},
		{      
			path:   '/Online_remind',
			      name:   'Online_remind',
			      component:  Online_remind    
		},
		{      
			path:   '/My_gift',
			      name:   'My_gift',
			      component:  My_gift    
		},
		{      
			path:   '/Recommend',
			      name:   'Recommend',
			      component:  Recommend    
		},
		{      
			path:   '/Focus',
			      name:   'Focus',
			      component:  Focus    
		},
		{      
			path:   '/Users_report',
			      name:   'Users_report',
			      component:  Users_report    
		},
		{      
			path:   '/Photoalbum',
			      name:   'Photoalbum',
			      component:  Photoalbum    
		},
		{      
			path:   '/Prevent',
			      name:   'Prevent',
			      component:  Prevent    
		},
		{      
			path:   '/Setting',
			      name:   'Setting',
			      component:  Setting    
		},
		{      
			path:   '/askforhelp',
			      name:   'askforhelp',
			      component:  Askforhelp    
		},
		{      
			path:   '/feedback',
			      name:   'feedback',
			      component:  Feedback    
		},
		{      
			path:   '/contact',
			      name:   'contact',
			      component:  Contact    
		},
		{      
			path:   '/show_love',
			      name:   'show_love',
			      component:  Show_love    
		},
		{      
			path:   '/success_stories',
			      name:   'success_stories',
			      component:  Success_stories    
		},
		{      
			path:   '/evaluation',
			      name:   'evaluation',
			      component:  Evaluation    
		},
		{      
			path:   '/remind_set',
			      name:   'remind_set',
			      component:  Remind_set    
		},
		{      
			path:   '/about_us',
			      name:   'about_us',
			      component:  About_us    
		},
		{      
			path:   '/site_profile',
			      name:   'site_profile',
			      component:  Site_profile    
		},
		{      
			path:   '/preview',
			      name:   'preview',
			      component:  preview    
		},
		{      
			path:   '/site_characteristics',
			      name:   'site_characteristics',
			      component:  Site_characteristics    
		},
		{      
			path:   '/media_reports',
			      name:   'media_reports',
			      component:  Media_reports    
		},
		{      
			path:   '/media_reports_details',
			      name:   'media_reports_details',
			      component:  Media_reports_details    
		},
		{      
			path:   '/weibo',
			      name:   'weibo',
			      component:  Weibo    
		},
		{      
			path:   '/legal_notices',
			      name:   'legal_notices',
			      component:  Legal_notices    
		},
		{      
			path:   '/privacy_protection',
			      name:   'privacy_protection',
			      component:  Privacy_protection    
		},
		{      
			path:   '/copyright_statement',
			      name:   'copyright_statement',
			      component:  Copyright_statement    
		},
		{      
			path:   '/registration_terms',
			      name:   'registration_terms',
			      component:  Registration_terms    
		},
		{      
			path:   '/vip',
			      name:   'vip',
			      component:  Vip    
		},
		{      
			path:   '/business_cooperation',
			      name:   'business_cooperation',
			      component:  Business_cooperation    
		},
		{      
			path:   '/advertising_business',
			      name:   'advertising_business',
			      component:  Advertising_business    
		},
				{      
			path:   '/friendship_link',
			      name:   'friendship_link',
			      component:  Friendship_link    
		},
					{      
			path:   '/talented_people',
			      name:   'talented_people',
			      component:  Talented_people    
		},
					{      
			path:   '/integral_detail',
			      name:   'integral_detail',
			      component:  Integral_detail    
		},
					{      
			path:   '/details_sms',
			      name:   'details_sms',
			      component:  Details_sms    
		},
					{      
			path:   '/access_rules',
			      name:   'access_rules',
			      component:  Access_rules    
		},
					{      
			path:   '/buy_sms',
			      name:   'buy_sms',
			      component:  Buy_sms    
		},
					{      
			path:   '/modify_data',
			      name:   'modify_data',
			      component:  Modify_data    
		},
						{      
			path:   '/basic_information',
			      name:   'basic_information',
			      component:  Basic_information    
		},
							{      
			path:   '/myself',
			      name:   'myself',
			      component:  Myself    
		},
								{      
			path:   '/personal_life',
			      name:   'personal_life',
			      component:  Personal_life    
		},
									{      
			path:   '/love_plan',
			      name:   'love_plan',
			      component:  Love_plan    
		},
										{      
			path:   '/way_of_life',
			      name:   'way_of_life',
			      component:  Way_of_life    
		},
    // { path: '/',    redirect: '/index'  },

	],
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	}
})
