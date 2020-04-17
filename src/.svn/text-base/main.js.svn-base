// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as filters from './filters'
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
// window.onresize = setHtmlFontSize;
// function setHtmlFontSize(){
//   const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//   const htmlDom = document.getElementsByTagName('html')[0];
//   htmlDom.style.fontSize = htmlWidth / 10 + 'px';
// };
// setHtmlFontSize();
//一键复制zhantie
//复制到粘贴板插件
import VueClipboard from 'vue-clipboard2'
VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)
   import 'lib-flexible/flexible.js'
import Vant from 'vant' //引入vant
import 'vant/lib/index.css'//引入vant
Vue.use(Vant);//引入vant
Vue.config.productionTip = false
Vue.prototype.showLoading  = false
//引用vue-awesome-swiper做轮播图
import vueSwiper from 'vue-awesome-swiper'
/* 样式的话，我这里有用到分页器，就在全局中引入了样式 */
import 'swiper/dist/css/swiper.css'
Vue.use(vueSwiper);
import store from './store'//引入store做缓存
import axios from 'axios' //引入axios
Vue.prototype.$axios = axios; //添加axios到Vue的原型对象上
Vue.prototype.apiUrl='http://39.108.142.52:8082/yinyuan11/';
Vue.prototype.resourcesApi='http://39.108.142.52:8082/yinyuan11/file/11yyUpload';
//图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
 
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})
//解决300ms延时
import FastClick from 'fastclick' ;
FastClick.attach(document.body);
//解决点击两次返回桌面
  import Mui from 'vue-awesome-mui';
       Vue.use(Mui);
/* eslint-disable no-new */
//图片预览

import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'

var options = {
  tapToClose: true, //点击图片默认关闭
  closeEl:true,    //显示关闭按钮
  captionEl: true,
  fullscreenEl: false,//全屏
  zoomEl: false,    //放大镜
  shareEl: false,//分享
  counterEl: true,//页数
  history:true,//打开历史记录（点击返回可回原来页面）
}
Vue.use(preview,options)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
