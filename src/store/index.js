import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
//定义参数
// 保存的token
let token = '';
let phone = '';
let uid = '';
let test = '';
let vip = '';
let register = '';
let list = '';
//防止低版本兼容问题
try {
	if(localStorage.list) {
		list = localStorage.list
	}
} catch(e) {}
try {
	if(localStorage.register) {
		register = localStorage.register
	}
} catch(e) {}
try {
	if(localStorage.test) {
		test = localStorage.test
	}
} catch(e) {}
try {
	if(localStorage.vip) {
		vip = localStorage.vip
	}
} catch(e) {}
try {
	if(localStorage.token) {
		token = localStorage.token
	}
} catch(e) {}
try {
	if(localStorage.phone) {
		phone = localStorage.phone
	}
} catch(e) {}
try {
	if(localStorage.uid) {
		uid = localStorage.uid
	}
} catch(e) {}
export default new Vuex.Store({
	// state 存放数据的地方
	state: {
		token: token,
		phone: phone,
		uid: uid,
		test: test,
		vip: vip,
		register: register,
		list:list
	},
	// 修改数据的方法  commit
	mutations: {
		// 保存的token
		set_test(state, test) {
			state.test = test;
			try {
				localStorage.test = test
			} catch(e) {}
		},
				set_vip(state, vip) {
			state.vip = vip;
			try {
				localStorage.vip = vip
			} catch(e) {}
		},
		set_rigister(state, register) {
			state.register = register;
			try {
				localStorage.register = register
			} catch(e) {}
		},
			set_list(state, list) {
			state.list = list;
			try {
				localStorage.list = list
			} catch(e) {}
		},
		set_token(state, token) {
			state.token = token;
			try {
				localStorage.token = token
			} catch(e) {}
		},
		set_phone(state, phone) {
			state.phone = phone;
			try {
				localStorage.phone = phone
			} catch(e) {}
		},
		set_uid(state, uid) {
			state.uid = uid;
			try {
				localStorage.uid = uid
			} catch(e) {}
		},
	}
})