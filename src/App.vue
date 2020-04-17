<template>
  <div>
    <!-- 邂逅 -->
    <!--v-if="$route.meta.footShow" 判断跳转之后底部导航栏隐藏-->

    <van-tabbar route  v-model="active" active-color="#E71C3E" inactive-color="#0A0A0A" v-if="$route.meta.footShow">
      <!-- active-color="#07c160" inactive-color="#000" -->

      <van-tabbar-item  replace router to="/index">
        <span>邂逅</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon1.active : icon1.inactive"
        >
      </van-tabbar-item>
      <!--搜索-->
       
      <van-tabbar-item replace  router to="/search">
          <span>搜索</span>
      <img
        slot="icon"
        slot-scope="props"
        :src="props.active ? icon2.active : icon2.inactive"
      >
        </van-tabbar-item>
      <!-- 消息 -->
      <van-tabbar-item   replace info="3" router to="/message">
    <span>
     消息
    </span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon3.active : icon3.inactive"
        >
      </van-tabbar-item>
      <!-- 发现 -->
      <van-tabbar-item  replace dot router to="/found">
    <span>发现</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon4.active : icon4.inactive"
        >
      </van-tabbar-item>
      <!-- 我的 -->
      <van-tabbar-item  replace router to="/My">
    <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon5.active : icon5.inactive"
        >
      </van-tabbar-item>

    </van-tabbar>

    <!-- 渲染页面 -->
    <router-view/>


  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        active: 0,
        icon1: {
          active: require('../static/img/nav/index2.png'),
          inactive: require('../static/img/nav/index1.png')
        },
        icon2: {
          active: require('../static/img/nav/seach2.png'),
          inactive: require('../static/img/nav/seach1.png')
        },
        icon3: {
          active: require('../static/img/nav/msg2.png'),
          inactive: require('../static/img/nav/msg1.png')
        },
        icon4: {
          active: require('../static/img/nav/fond2.png'),
          inactive: require('../static/img/nav/fond1.png')
        },
        icon5: {
          active: require('../static/img/nav/my2.png'),
          inactive: require('../static/img/nav/my1.png')
        },
      }
    },
    mounted () {
      // 判断当前页面是否为home或newpersonal页面
      const CURRENTTABBAR = window.location.hash.split('/')[1]
      if (CURRENTTABBAR === '/') {
        this.active = 0
      } else if (CURRENTTABBAR === 'search') {
        this.active = 1
      }
    },

    // activated() {
    //   if (typeof this.$route.path === 'string') {
    //     let val = this.$route.path
    //     // let val = this.$route.path.substring(1, this.$route.path.length)
    //     // console.log(val)
    //     switch (val) {
    //       case '/':
    //         active:0
    //         break
    //       case '/search':
    //         active:1
    //         break
    //       case '/message':
    //         active:2
    //         break
    //       case '/found':
    //         active:3
    //         break
    //       case '/My':
    //         active:5
    //         break
    //     }
    //   } else {
    //     console.log('不合法参数')
    //   }
    // },
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .van-tabbar-item--active {

  }
</style>


