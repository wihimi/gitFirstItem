<template>
  <div id="photoalbum">
    <div class="" style="display: flex;">

      <div class="header" @click="fanhui">
        <img src="../../../../static/img/icon_zuola_hei@2x.png" alt=""/>
      </div>
      <!--相册靓照-->
      <div class="" style="display: flex;justify-content: space-between;">
        <div class="xiangce" @click="myphoto" :class="{'active':currentSort==1}">我的相册</div>
        <div class="liangzhao" @click="Prettypictures" :class="{'active':currentSort==2}">已晒靓照</div>
      </div>
    </div>

    <div class="" v-show="currentSort==1">
      <!--图片展示-->
      <div class="tupian">
        <div class="img">

          <img v-for="item in list" :src="prefixResApi+item.photo"/>


          <img src="../../../assets/dianjitianjia@3x.png" class="tianjia" @click="dianji"/>
        </div>
      </div>

      <!--点击显示与隐藏模态框-->

      <div v-show="state">
        <!--模态框-->
        <div class="mubu" v-show="state" @click="quxiao">

        </div>
        <div class="zhaopian" v-show="state">
          <div class="shenhe">
            以下照片不会通过审核
          </div>
          <div class="zpfangzhi">
            <div class="zpleixing" v-for="item in list">
              <img :src="item.src" alt=""/>
              <div class="zpmiaoshu">非头部</div>
            </div>
          </div>
          <div class="paizhao" @click="paizhao">
            拍照
          </div>
          <div class="bendi" @click="bendi">
            本地相册
          </div>
        </div>
        <div class="quxiao" v-show="state" @click="quxiao">
          取消
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Vue from 'vue';
  import { Lazyload } from 'vant';
  import Mui from 'vue-awesome-mui';
	import { albumList } from '@/request/api'; // 导入我们的api接口
  Vue.use(Mui);
  //	Mui.init({
  //swipeBack: true //启用右滑关闭功能
  //});
  export default {
  	props: {
      arr: {
        type: Array,
        prefixResApi: '',
      },
    },
    data() {
      return {
        state: false,
        currentSort: 1,
        list:''
      }
    },
   created() {
      this.prefixResApi = this.resourcesApi;
    },
    mounted() {
    	
    		albumList({
//					uid: localStorage.getItem("uid"),
//					sex: 1,
					type:1,
					owner:true
				}).then(res => {
					this.list = res.data.list
					console.log(res);
					console.log(this.list);
					
				})
      // 扩展API加载完毕后调用onPlusReady回调函数
      document.addEventListener("plusready", onPlusReady, false);

      // 扩展API加载完毕，现在可以正常调用扩展API
      function onPlusReady() {
        console.log("plusready");
      }
    },
    methods: {
      quxiao() {
        this.state = false
      },
      fanhui() {
        this.$router.go(-1);
      },
      myphoto() {
        this.currentSort = 1
      },
      Prettypictures() {
        this.currentSort = 2
      },
      paizhao() {
        var cmr = plus.camera.getCamera();
        var res = cmr.supportedImageResolutions[0];
        var fmt = cmr.supportedImageFormats[0];
        console.log("Resolution: " + res + ", Format: " + fmt);
        var that = this
        cmr.captureImage((path) => {
//alert( path );
            console.log(path)
            var obj = {}
            var arr = that.arr
            console.log(typeof path)
            obj.src = require(path)
            arr.push(obj)
            that.arr = arr
            console.log(JSON.stringify(arr))
            that.state = false
          },
          function (error) {
//alert( "Capture image failed: " + error.message );
          },
          {resolution: res, format: fmt}
        );

      },
      bendi() {
        plus.gallery.pick(function (e) {
          console.log(e)
//          let name = e.substr(e.lastIndexOf('/') + 1);
//          compressImage(e,name);
        }, function (e) {
        }, {
          filter: "image"
        });
      },
      dianji() {
        this.state = !this.state
      }
    },

  }
</script>

<style scoped="scoped" lang="scss">
  .header {
    margin-left: 27px;
    margin-top: 14px;

    img {
      width: 9px;
      height: 16.5px;
    }
  }

  .active {
    border-bottom: 2.5px solid #F54663;
  }

  .xiangce {
    font-size: 14px;
    color: #F54663;
    width: 56px;
    /*top: 12.5px;*/
    margin-left: 67px;
    height: 44px;
    line-height: 44px;
    /*padding-bottom: 15px;
  padding-top: 0;*/
  }

  .liangzhao {
    font-size: 14px;
    color: #949494;
    width: 56px;
    /*top: 12.5px;*/
    margin-left: 55px;
    height: 44px;
    line-height: 44px;
    /*	border-bottom:1px solid red;*/
    /*padding-bottom: 15px;
  padding-top: 0;*/
  }

  img {
    /*border: 0;
    vertical-align: bottom;*/
  }

  .tupian {
    height: 100%;
    background: #333333;
    /*border: 1px solid #333333;*/
    /*display: flex;*/
    /*flex-wrap: wrap;*/

    .img {
      img {
        width: 108px;
        height: 108px;
        margin: 7.5px 0 0 7.5px;
        /*border:1px dotted white;*/
      }
    }
  }

  .mubu {
    width: 100%;
    height: 623px;
    position: absolute;
    z-index: 100;
    background: black;
    opacity: .6;
    top: 46.5px;
  }

  .zhaopian {
    width: 325px;
    height: 267px;
    background: #fff;
    position: absolute;
    z-index: 101;
    bottom: 91px;
    left: 15px;
    border-radius: 6px;

    .shenhe {
      /*width: 175.5px;*/
      height: 16px;
      font-size: 17px;
      margin-top: 23px;
      margin-left: 84.5px;
      letter-spacing: 1px;
      color: #444446;
    }
  }

  .zpfangzhi {
    display: flex;
    margin-top: 21.5px;
  }

  .zpleixing {
    img {
      width: 47px;
      height: 47px;
      margin-left: 6px;
    }

    .zpmiaoshu {
      font-size: 12px;
      color: #9C9C9C;
      margin-left: 12.5px;
      margin-top: 6px;
    }
  }

  .paizhao {
    height: 60px;
    margin: 0 auto;
    margin-top: 18.5px;
    line-height: 60px;
    text-align: center;
    color: #F54663;
    font-size: 18px;
    border-top: 1px solid #E0E0E0;
    width: 325px;
  }

  .bendi {
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #F54663;
    font-size: 18px;
    border-top: 1px solid #E0E0E0;
    width: 325px;
    margin: 0 auto;
  }

  .quxiao {
    position: absolute;
    z-index: 101;
    bottom: 15px;
    background: #FFFFFF;
    width: 325px;
    height: 61px;
    text-align: center;
    line-height: 61px;
    left: 15px;
    border-radius: 6px;
    font-size: 18px;
    color: #959595;
  }
</style>
