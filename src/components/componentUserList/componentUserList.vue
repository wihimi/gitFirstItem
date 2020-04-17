<template>
  <div class="mid">
    <!--滑动信息-->
    <div class="swiper" v-for="(item,index) in arr" @click="swithTab(index)" :key="index">
      <!--左边图-->
      <img :src="prefixResApi+item.headPortrait"/>
      <!--右边文-->
      <div class="swiper_right">
        <div class="swiper_one">
          <img class="relative" src="../../assets/paimingyouxian@3x.png"/> <span>{{item.username}}</span>
          <div class="">
            <img v-show="item.whetherVip==0" src="../../images/my/vip@3xv.png"/>
            <img v-show="item.whetherVip==1" src="../../assets/vip@3x.png"/>

            <img v-show="item.whetherAutonym==0" src="../../../static/img/shiming2.png"/>
            <img v-show="item.whetherAutonym==1" src="../../assets/shiming@2x.png" alt=""/>
          </div>
        </div>
        <div class="swiper_two">
          {{item.age}}岁|{{item.height}}厘米|{{ item.educationalStatus | educationalStatusFilters }}
        </div>
        <div class="swiper_three">
          <div @click.stop="toSiliao(item.uid)">
            <img src="../../../static/img/icon_siliao_da.png" class="img1" alt=""/>
            <span>私聊</span></div>
          <div @click.stop="toSongli(item.uid)">
            <img src="../../assets/icon_shongli@2x.png" class="img2" alt=""/>
            <span>送礼</span>
          </div>
          <div @click.stop="toQuxiaoGuanzhu(index,item.uid,item.follow)" v-show="item.follow">
            <img src="../../assets/icon_guanzhu2@3x.png" class="img3" alt=""/>
            <span>取消关注</span> </div>
            <div @click.stop="toGuanzhu(index,item.uid,item.follow)" v-show="!item.follow">
              <img src="../../assets/icon_guanzhu@3x.png" class="img3" alt=""/>
              <span style="color: #B6B6B6;">关注</span>
            </div>
          </div>
        </div>
      </div>
    </div>



</template>

<script>
		import { addFollow } from '@/request/api'; // 导入我们的api接口
  export default {
    name: 'componentUserList',
    props: {
      arr: {
        type: Array,
        prefixResApi: '',
      },
      data() {
      	return {
      		followStatus:''
      	}
      },
    },
    created() {
      this.prefixResApi = this.resourcesApi;
    },
    methods: {
      swithTab(index) {
        this.$emit('swithTab', index)
      },
      toSiliao(uid) {
        this.$emit('toSiliao', uid)
      },
      toSongli(uid) {
        this.$emit('toSongli', uid);
      },
//    点击取关
      toGuanzhu(index,uid,followStatus) {
//    	var ruid = uid
//    		addFollow({
//					uid: localStorage.getItem("uid"),
//					ruid,
//					followStatus
//				}).then(res => {
//					console.log(res);
//				})
				
        this.$emit('toGuanzhu', index,uid,followStatus);
      },
      //点击关注
      toQuxiaoGuanzhu(index,uid,followStatus) {
//    		var ruid = uid
//    		addFollow({
//					uid: localStorage.getItem("uid"),
//					ruid,
//					followStatus
//				}).then(res => {
//					console.log(res);
//				})
        this.$emit('toQuxiaoGuanzhu', index,uid,followStatus)
      },
    }
  }
</script>

<style scoped="scoped" lang="scss">
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

  .swiper {
    /*width: 355px;*/
    height: 92.5px;
    background: #FFFFFF;
    border-radius: 4px;
    margin: 0 auto;
    margin-top: 10.5px;
    position: relative;
  }

  .swiper > img {
    width: 80.5px;
    height: 80.5px;
    margin: 6px 0 6px 6px;
  }

  .swiper {
    display: flex;
  }

  .swiper_one {
    font-size: 15.5px;
    color: #202020;
    margin-left: 16px;
    font-weight: bold;
    line-height: 16px;
    display: flex;
    padding-top: 8.5px;
    height: 18px;

    div {
      transform: translateY(-6px);
      margin-left: 2px
    }
    span{
      display: block;
      /* border: 1px solid red;*/
      text-overflow:ellipsis;

      white-space:nowrap;
      overflow: hidden;
      max-width: 160px;
    }
  }

  .swiper_one img {
    width: 28px;
    height: 18px;
    margin-left: 2px;
    margin-top: 6.5px
  }

  .swiper_two {
    margin-left: 17px;
    margin-top: 9.5px;
    font-size: 13.97px;
    color: #7F7F7F;
    letter-spacing: 1px;
  }

  .swiper_three {
    height: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;

    img {
      /*display: inline;*/
      transform: translateY(5px);
    }

    .img1 {
      width: 16px;
      height: 16px;
      margin-left: 16.5px;

    }

    .img2 {
      width: 16px;
      height: 16px;
      margin-left: 30px;
    }

    .img3 {
      width: 16px;
      height: 16px;
      margin-left: 30px;
    }

    span {
      font-size: 11.5px;
      color: #FB7BA0;
      display: inline-block;
      margin-left: 2.5px;
      letter-spacing: 2px;
      padding-bottom: 2px;
    }
  }

  .relative {
    width: 80.5px !important;
    height: 15px !important;
    position: absolute;
    top: 65.5px;
    left: 5px;
  }

  /*// 模态框*/

  .dialog {
    width: 100%;
    height: 92.5%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.85);
    left: 0;
    top: 0;
    z-index: 22;

    img {
      width: 308.5px;
      height: 269px;
      padding-left: 43.5px;
      padding-top: 40px;
      /*left: 43.5px;
      top: 52px;*/
    }
  }

  .dialog_txt1 {
    color: #FFFFFF;
    font-size: 16.24px;
    position: absolute;
    left: 95px;
    top: 335px;
    letter-spacing: 2px;
    font-weight: 100;
  }

  .dialog_txts1 {
    color: #FFFFFF;
    font-size: 16.24px;
    position: absolute;
    left: 34px;
    top: 360px;
    letter-spacing: 2px;
    font-weight: 100;
  }

  .dialog_txt2 {
    text-align: center;
    color: #FED52F;
    font-size: 14px;
    position: absolute;
    left: 55.5px;
    top: 400px;
    font-weight: 100;
  }

  .dialog_txt {
    width: 210px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    font-size: 19.18px;
    border: 1px solid #FF9483;
    color: #FF9483;
    position: absolute;
    left: 83px;
    top: 450px;
    border-radius: 50px;
    font-weight: 100;
    letter-spacing: 4px;
  }

  .dialog_txts {
    position: absolute;
    left: 117px;
    top: 530px;
    font-size: 19.18px;
    color: #B3B3B3;
    font-weight: 100;
    letter-spacing: 4px;
  }
</style>
