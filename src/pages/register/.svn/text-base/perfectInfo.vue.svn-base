<template>
  <div id="page">
    <header-fixed-top @goBack="goBack" :showBack="showBackIcon" :topTitle="title"></header-fixed-top>
    <div class="paddIngTopTitle"></div>
    <div class="" v-show="stepNUm==1">
      <div class="userInfoInput">
        <div class="title_Tips">基本情况</div>
        <!--<div class="user_com">
          <div class="left">月薪</div>
          <div class="right flex justify-center align-center" @click="selectYxin">
            <div :class="yueXMoney?'actionTitle':''">{{yueXMoney?yueXMoney:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>-->
        <div class="user_com">
          <div class="left">所在行业</div>
          <div class="right flex justify-center align-center" @click="selectIndustry">
            <div :class="myIndustry?'actionTitle':''">{{myIndustry?myIndustry:'请选择'}}</div>
            <img  src="../../images/jiantou3@3x.png"/>
          </div>
        </div>
        <div class="user_com">
          <div class="left">住房情况</div>
          <div class="right flex justify-center align-center" @click="selectHouse">
            <div :class="myHousingSituation?'actionTitle':''">{{myHousingSituation?myHousingSituation:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>
        <div class="user_com">
          <div class="left">是否购车</div>
          <div class="right flex justify-center align-center" @click="selectCar">
            <div :class="myCar?'actionTitle':''">{{myCar?myCar:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>

        <div class="user_com">
          <div class="left">有无子女</div>
          <div class="right flex justify-center align-center" @click="selectChildren">
            <div :class="myChildren?'actionTitle':''">{{myChildren?myChildren:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>

        <div class="user_com">
          <div class="left">户籍地区</div>
          <div class="right flex justify-center align-center" @click="selectArea">
            <div :class="myArea?'actionTitle':''">{{myArea?myArea:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>
        <div class="user_com">
          <div class="left">民族</div>
          <div class="right flex justify-center align-center" @click="selectNation">
            <div :class="myNation?'actionTitle':''">{{myNation?myNation:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>

        <div class="user_com">
          <div class="left">宗教</div>
          <div class="right flex justify-center align-center" @click="selectReligion">
            <div :class="myReligion?'actionTitle':''">{{myReligion?myReligion:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>

        <div class="contactInf">
          <div class="left" style="font-size: 15px;">联系方式 <span class="xuanT" id="()">(选填)</span></div>
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
            <input class="inputNotsty" :class="phone?'actionTitle':''" maxlength="11" v-model="phone"
                   placeholder="请输入手机号码"/>

          </div>
        </div>
        <div class="user_com">
          <div class="left">QQ</div>
          <div class="right flex justify-center align-center">
            <input class="inputNotsty" :class="qq?'actionTitle':''" v-model="qq" placeholder="请输入QQ号"/>

          </div>
        </div>
        <div class="user_com">
          <div class="left">邮箱</div>
          <div class="right flex justify-center align-center">
            <input class="inputNotsty" :class="myEmail?'actionTitle':''" v-model="myEmail" placeholder="请输入邮箱"/>

          </div>
        </div>
        <div class="contactInf">
          <div class="left" style="font-size: 15px;">择偶要求 <span class="xuanT" id="()">(选填)</span></div>
          <div class="contact_tips">
            如果有需要限定按择偶条件来信，注册后，升级VIP，可以到“权限设置”将按择偶条件来信限定。
          </div>
        </div>
        <div class="user_com">
          <div class="left">年龄</div>
          <div class="right flex justify-center align-center" @click="selectOtherAge">
            <div :class="myAgeArr?'actionTitle':''">{{myAgeArr?myAgeArr:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>
        <div class="user_com">
          <div class="left">身高</div>
          <div class="right flex justify-center align-center" @click="selectOtherHeight">
            <div :class="myOtherHeight?'actionTitle':''">{{myOtherHeight?myOtherHeight:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>
        <div class="user_com">
          <div class="left">学历</div>
          <div class="right flex justify-center align-center" @click="selectEduction">
            <div :class="myEducation?'actionTitle':''">{{myEducation?myEducation:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>
        <div class="user_com">
          <div class="left">婚姻状况</div>
          <div class="right flex justify-center align-center" @click="shoumarryStaty=true">
            <div :class="marryName?'actionTitle':''">{{marryName?marryName:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>

        <div class="user_com">
          <div class="left">所在地区</div>
          <div class="right flex justify-center align-center" @click="selectOtherArea">
            <div :class="otherArea?'actionTitle':''">{{otherArea?otherArea:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>
        <div class="selfIntroduction">
          <div class="selfIn" style="font-size: 15px;">自我介绍</div>

          <div class="flex optionsType">
            <div id="" :class="introdType==1?'introdAction':'introdDefualt'" @click="introdType=1">自己写</div>
            <div id="" :class="introdType==2?'introdAction':'introdDefualt'" @click="introdType=2">帮你写</div>
          </div>
        </div>
        <div id="" v-show="introdType==1">
          <div class="introdTextarea">
            <textarea class="" v-model="inputintrod"></textarea>
          </div>

        </div>
        <div id="" v-show="introdType==2">
          <div class="user_com">
            <div class="left">我的性格特点是</div>
            <div class="right flex justify-center align-center">
              <input class="inputNotsty" :class="inputxg?'actionTitle':''" v-model="inputxg" placeholder="请输入" name=""
                     id="" value=""/>
            </div>
          </div>
          <div class="user_com">
            <div class="left">业余时间我喜欢</div>
            <div class="right flex justify-center align-center">
              <input class="inputNotsty" :class="inputwxh?'actionTitle':''" v-model="inputwxh" placeholder="请输入" name=""
                     id="" value=""/>
            </div>
          </div>
          <div class="user_com">
            <div class="left">我憧憬的生活是</div>
            <div class="right flex justify-center align-center">
              <input class="inputNotsty" :class="inputcjsh?'actionTitle':''" v-model="inputcjsh" placeholder="请输入"
                     name="" id="" value=""/>
            </div>
          </div>
          <div class="user_com">
            <div class="left">我希望我的爱人</div>
            <div class="right flex justify-center align-center">
              <input class="inputNotsty" :class="inputwdar?'actionTitle':''" v-model="inputwdar" placeholder="请输入"
                     name="" id="" value=""/>

            </div>
          </div>
          <div class="text-center">
            <div class="submitMyIntrod" @click="generateIntroduction">点击生成自我介绍</div>
          </div>

        </div>
        <div class="introdExplain">
          “自我介绍”是个人资料中最重要的一部分，建议您用心填写！您可以向对方介绍自己的个性特点、兴趣爱好、生活观念和择偶要求等。禁止留手机/微信/微博等联系方式，否则不会通过审核。
        </div>
      </div>

      <div class="loginBtn" @click="toSecondStep">下一步</div>
    </div>
    <!--爱情规划-->
    <div class="" v-show="stepNUm==2">
      <div class="userInfoInput">
        <div class="title_Tips">爱情规划</div>
        <div class="user_com">
          <div class="left">想何时结婚</div>
          <div class="right flex justify-center align-center" @click="showTimeMerry=true">
            <div :class="myTimeMerry?'actionTitle':''">{{myTimeMerry?myTimeMerry:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>
        <div class="user_com">
          <div class="left">是否愿与父母同住</div>
          <div class="right flex justify-center align-center" @click="showLiveWithParent=true">
            <div :class="myLiveWithParent?'actionTitle':''">{{myLiveWithParent?myLiveWithParent:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>
        <div class="user_com">
          <div class="left">是否想要小孩</div>
          <div class="right flex justify-center align-center" @click="showHaveChildren=true">
            <div :class="myHaveChildren?'actionTitle':''">{{myHaveChildren?myHaveChildren:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>
        <div class="user_com">
          <div class="left">你想要怎样的约会</div>
          <div class="right flex justify-center align-center" @click="showWhatAppiontment=true">
            <div :class="myWhatAppiontment?'actionTitle':''">{{myWhatAppiontment?myWhatAppiontment:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>

        <div class="user_com">
          <div class="left">期待怎样的婚礼</div>
          <div class="right flex justify-center align-center" @click="showWhatMerry=true">
            <div :class="myWhatMerry?'actionTitle':''">{{myWhatMerry?myWhatMerry:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>

        <div class="user_com">
          <div class="left">你需要另一半看重</div>
          <div class="right flex justify-center align-center" @click="showWhatHalfNeed=true">
            <div :class="myWhatHalfNeed?'actionTitle':''">{{myWhatHalfNeed?myWhatHalfNeed:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>

      </div>
      <div class="loginBtn" @click="toThirdStep">下一步</div>
      <div class="loginBtn1" @click="JumpStap1">跳过此步，暂不完善</div>
    </div>
    <!--个人生活-->
    <div class="" v-show="stepNUm==3">
      <div class="userInfoInput">
        <div class="title_Tips">个人生活</div>

        <div class="user_com">
          <div class="left">父母情况</div>
          <div class="right flex justify-center align-center" @click="showParentSituation=true">
            <div :class="myParentSituation?'actionTitle':''">{{myParentSituation?myParentSituation:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>
        <div class="user_com">
          <div class="left">家中排行</div>
          <div class="right flex justify-center align-center" @click="showFamilyRanking=true">
            <div :class="myFamilyRanking?'actionTitle':''">{{myFamilyRanking?myFamilyRanking:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>
        <div class="user_com">
          <div class="left">生活作息</div>
          <div class="right flex justify-center align-center" @click="showDailyLifeARest=true">
            <div :class="myDailyLifeARest?'actionTitle':''">{{myDailyLifeARest?myDailyLifeARest:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>
        <div class="user_com">
          <div class="left">是否吸烟</div>
          <div class="right flex justify-center align-center" @click="showWhetherSomke=true">
            <div :class="myWhetherSomke?'actionTitle':''">{{myWhetherSomke?myWhetherSomke:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>

        <div class="user_com">
          <div class="left">是否喝酒</div>
          <div class="right flex justify-center align-center" @click="showWhetherDring=true">
            <div :class="myWhetherDring?'actionTitle':''">{{myWhetherDring?myWhetherDring:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>

        <div class="user_com">
          <div class="left">家务</div>
          <div class="right flex justify-center align-center" @click="showDoHomework=true">
            <div :class="myDoHomework?'actionTitle':''">{{myDoHomework?myDoHomework:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>
        <div class="user_com">
          <div class="left">厨艺</div>
          <div class="right flex justify-center align-center" @click="showDoFood=true">
            <div :class="myDoFood?'actionTitle':''">{{myDoFood?myDoFood:'请选择'}}</div>
            <img src="../../images/jiantou3@3x.png"/>
          </div>
        </div>
      </div>
      <div class="loginBtn Btnmt" @click="toFourthStep">下一步</div>
      <div class="loginBtn1" @click="JumpStap2">跳过此步，暂不完善</div>
    </div>
    <div v-show="stepNUm==4">
      <div class="title_com">生活方式</div>
      <div class="title_com">兴趣爱好</div>
      <div class="title_com">
        <div class="labelsBox">
          <div @click="selectLabels(index,item.name)" class="label_single"
               :class="item.flagCheck?'label_single_action':''" v-for="(item,index) in labelList" :key="index">
            {{item.name}}
          </div>

        </div>
      </div>
      <div class="title_com">饮食习惯</div>
      <div class="title_com">
        <div class="labelsBox">
          <div @click="selectYSLabels(index,item.name)" class="label_single"
               :class="item.flagCheck?'label_single_action':''" v-for="(item,index) in yslabelList" :key="index">
            {{item.name}}
          </div>

        </div>
      </div>
      <div class="title_com">喜欢的音乐</div>
      <div class="title_com">
        <div class="labelsBox">
          <div @click="selectMusic(index,item.name)" class="label_single"
               :class="item.flagCheck?'label_single_action':''" v-for="(item,index) in musicList" :key="index">
            {{item.name}}
          </div>

        </div>
      </div>
      <div class="title_com">喜欢的运动</div>
      <div class="title_com">
        <div class="labelsBox">
          <div @click="selectYunDLabels(index,item.name)" class="label_single"
               :class="item.flagCheck?'label_single_action':''" v-for="(item,index) in yunDlabelList" :key="index">
            {{item.name}}
          </div>

        </div>
      </div>
      <div class="title_com">喜欢的电影</div>
      <div class="title_com">
        <div class="labelsBox">
          <div @click="selectDianYLabels(index,item.name)" class="label_single"
               :class="item.flagCheck?'label_single_action':''" v-for="(item,index) in dianYlabelList" :key="index">
            {{item.name}}
          </div>

        </div>
      </div>
      <div class="loginBtn" @click="completionRegistration">完成注册</div>
      <div class="loginBtn1" @click="JumpStap3">跳过此步，暂不完善</div>
    </div>
    <!--底部渐变-->
    <!--<div class="fixedBottom" v-show="showMb"></div>-->
    <!--月薪-->
    <van-popup v-model="showYxin" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="actionsYxin" @cancel="cancelCheckYxin" @confirm="onConfirmCheckYxin"/>
    </van-popup>
    <!--教育-->
    <van-popup v-model="showEducation" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="educationArr" @cancel="cancelCheckEducation"
                  @confirm="onConfirmCheckEducation"/>
    </van-popup>
    <!--所在行业-->
    <van-popup v-model="showIndustry" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="industryArr" @cancel="cancelCheckIndustry"
                  @confirm="onConfirmCheckIndustry"/>
    </van-popup>
    <!--住房情况-->
    <van-popup v-model="showHousingSituation" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="housingSituationArr" @cancel="cancelCheckHousingSituation"
                  @confirm="onConfirmCheckHousingSituation"/>
    </van-popup>
    <!--是否购车-->
    <van-popup v-model="showBycar" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="bycarArr" @cancel="cancelCheckBycar" @confirm="onConfirmCheckBycar"/>
    </van-popup>
    <!--是否有小孩-->
    <van-popup v-model="showChildren" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="childrenArr" @cancel="cancelCheckChildren"
                  @confirm="onConfirmCheckChildren"/>
    </van-popup>
    <!--名族-->
    <van-popup v-model="showNation" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="nationArr" @cancel="cancelCheckNation"
                  @confirm="onConfirmCheckNation"/>
    </van-popup>
    <!--宗教-->
    <van-popup v-model="showReligion" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="religionArr" @cancel="cancelCheckReligion"
                  @confirm="onConfirmCheckReligion"/>
    </van-popup>
    <!--是否已婚-->
    <van-popup v-model="shoumarryStaty" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="actionsMarrys" @cancel="cancelCheckMerry"
                  @confirm="onConfirmCheckMerry"/>
    </van-popup>
    <!--何时结婚-->
    <van-popup v-model="showTimeMerry" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="timeMerryArr" @cancel="showTimeMerry=false"
                  @confirm="onConfirmCheckTimeMerry"/>
    </van-popup>
    <!--是否与父母同住-->
    <van-popup v-model="showLiveWithParent" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="liveWithParentArr" @cancel="showLiveWithParent=false"
                  @confirm="onConfirmCheckLiveWithParent"/>
    </van-popup>
    <!--是否想要小孩-->
    <van-popup v-model="showHaveChildren" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="haveChildrenArr" @cancel="showHaveChildren=false"
                  @confirm="onConfirmCheckHaveChildren"/>
    </van-popup>
    <!--想要怎么样的约会-->
    <van-popup v-model="showWhatAppiontment" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="whatAppiontmentArr" @cancel="showWhatAppiontment=false"
                  @confirm="onConfirmCheckWhatAppiontment"/>
    </van-popup>
    <!--想要怎么样的婚礼-->
    <van-popup v-model="showWhatMerry" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="whatMerryArr" @cancel="showWhatMerry=false"
                  @confirm="onConfirmCheckWhatMerry"/>
    </van-popup>
    <!--你看中另一半的什么-->
    <van-popup v-model="showWhatHalfNeed" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="whatHalfNeedArr" @cancel="showWhatHalfNeed=false"
                  @confirm="onConfirmCheckHalfNeed"/>
    </van-popup>
    <!--父母情况-->
    <van-popup v-model="showParentSituation" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="parentSituationArr" @cancel="showParentSituation=false"
                  @confirm="onConfirmCheckParentSituation"/>
    </van-popup>
    <!--家庭排行-->
    <van-popup v-model="showFamilyRanking" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="familyRankingArr" @cancel="showFamilyRanking=false"
                  @confirm="onConfirmCheckFamilyRanking"/>
    </van-popup>
    <!--生活作息-->
    <van-popup v-model="showDailyLifeARest" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="dailyLifeARestArr" @cancel="showDailyLifeARest=false"
                  @confirm="onConfirmCheckDailyLifeARest"/>
    </van-popup>
    <!--是否吸烟-->
    <van-popup v-model="showWhetherSomke" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="whetherSomkeArr" @cancel="showWhetherSomke=false"
                  @confirm="onConfirmCheckWhetherSomke"/>
    </van-popup>
    <!--是否喝酒-->
    <van-popup v-model="showWhetherDring" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="whetherDringArr" @cancel="showWhetherDring=false"
                  @confirm="onConfirmCheckWhetherDring"/>
    </van-popup>
    <!--家务-->
    <van-popup v-model="showDoHomework" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="doHomeworkArr" @cancel="showDoHomework=false"
                  @confirm="onConfirmCheckDoHomework"/>
    </van-popup>
    <!--厨艺-->
    <van-popup v-model="showDoFood" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="doFoodArr" @cancel="showDoFood=false" @confirm="onConfirmCheckDoFood"/>
    </van-popup>
    <!--地区-->
    <van-popup v-model="showArea" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="areaArr" @cancel="showArea=false" @confirm="onConfirmCheckArea"/>
    </van-popup>
    <!--选择年龄范围-->
    <van-popup v-model="showOtherAge" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="otherAgeArr" @cancel="showOtherAge=false"
                  @confirm="onConfirmCheckOtherAge"/>
    </van-popup>
    <!--选择身高范围-->
    <van-popup v-model="showOtherHeight" position="bottom" :style="{ height: '45%' }">
      <van-picker :show-toolbar="true" :columns="otherHeightArr" @cancel="showOtherHeight=false"
                  @confirm="onConfirmCheckOtherHeight"/>
    </van-popup>
    <div class="loading" v-show="showLoading">
      <van-loading class="vanLoading" type="spinner" size="24px"></van-loading>
    </div>
  </div>

</template>

<script>
  import HeaderFixedTop from '../../components/HeaderTop/HeaderFixedTop'
  import axios from 'axios'
  import qs from 'qs'
  import Vue from 'vue';
  import {Loading} from 'vant'
  import Mui from 'vue-awesome-mui';

  Vue.use(Mui);
  export default {
    name: "PerfectInfo",
    components: {
      HeaderFixedTop,
    },

    data() {
      return {
        showLoading: false,
        showBackIcon: 'false',
        title: '完善资料',
        introdType: 1,
        stepNUm: 1,
        showYxin: false,
        actionsYxin: ['保密', '6000元以下', '6000-12000元', '12000-20000元', '20000元以上'],
        yueXMoney: '',
        flagAgree: false,
        countdown: 60,

        labelList: [{
          flagCheck: false,
          name: '星座'
        }, {
          flagCheck: false,
          name: '园艺'
        }, {
          flagCheck: false,
          name: '汽车'
        }, {
          flagCheck: false,
          name: '读书'
        }, {
          flagCheck: false,
          name: '家居装饰'
        }, {
          flagCheck: false,
          name: '网游/电竞'
        }, {
          flagCheck: false,
          name: '计算机/互联网'
        }, {
          flagCheck: false,
          name: '运动'
        }, {
          flagCheck: false,
          name: '收藏'
        }, {
          flagCheck: false,
          name: '听音乐'
        }, {
          flagCheck: false,
          name: '科学'
        }, {
          flagCheck: false,
          name: '电子产品'
        }, {
          flagCheck: false,
          name: '志愿者活动'
        }, {
          flagCheck: false,
          name: '乐器/唱歌'
        }, {
          flagCheck: false,
          name: '厨艺'
        }, {
          flagCheck: false,
          name: '购物'
        }, {
          flagCheck: false,
          name: '瑜伽'
        }, {
          flagCheck: false,
          name: '美食'
        }, {
          flagCheck: false,
          name: '炒股'
        }, {
          flagCheck: false,
          name: '时尚'
        }, {
          flagCheck: false,
          name: '看电影'
        }, {
          flagCheck: false,
          name: '美术'
        }, {
          flagCheck: false,
          name: '摄影'
        }, {
          flagCheck: false,
          name: '旅游'
        }, {
          flagCheck: false,
          name: '政治'
        }, {
          flagCheck: false,
          name: '彩票'
        }, {
          flagCheck: false,
          name: '品酒'
        }, {
          flagCheck: false,
          name: '跳舞'
        }, {
          flagCheck: false,
          name: '戏剧'
        }, {
          flagCheck: false,
          name: '茶艺'
        }, {
          flagCheck: false,
          name: '功夫'
        }, {
          flagCheck: false,
          name: '读报'
        }, {
          flagCheck: false,
          name: '喝咖啡'
        }],
        yslabelList: [{
          flagCheck: false,
          name: '清淡'
        }, {
          flagCheck: false,
          name: '微辣'
        }, {
          flagCheck: false,
          name: '麻辣'
        }, {
          flagCheck: false,
          name: '略咸'
        }, {
          flagCheck: false,
          name: '越辣越好'
        }, {
          flagCheck: false,
          name: '滋补食品'
        }, {
          flagCheck: false,
          name: '健康食品'
        }, {
          flagCheck: false,
          name: '甜'
        }, {
          flagCheck: false,
          name: '酸'
        }, {
          flagCheck: false,
          name: '西餐'
        }, {
          flagCheck: false,
          name: '中餐'
        }, {
          flagCheck: false,
          name: '素食'
        }, {
          flagCheck: false,
          name: '日韩餐'
        }, {
          flagCheck: false,
          name: '零食'
        }],
        yunDlabelList: [{
          flagCheck: false,
          name: '冰球'
        }, {
          flagCheck: false,
          name: '冲浪'
        }, {
          flagCheck: false,
          name: '桌球'
        }, {
          flagCheck: false,
          name: '骑马'
        }, {
          flagCheck: false,
          name: '网球'
        }, {
          flagCheck: false,
          name: '划船'
        }, {
          flagCheck: false,
          name: '打猎'
        }, {
          flagCheck: false,
          name: '排球'
        }, {
          flagCheck: false,
          name: '保龄球'
        }, {
          flagCheck: false,
          name: '山地车'
        }, {
          flagCheck: false,
          name: '野营'
        }, {
          flagCheck: false,
          name: '滚轴'
        }, {
          flagCheck: false,
          name: '举重'
        }, {
          flagCheck: false,
          name: '划艇'
        }, {
          flagCheck: false,
          name: '滑冰'
        }],
        dianYlabelList: [{
          flagCheck: false,
          name: '爱情'
        }, {
          flagCheck: false,
          name: '悬疑'
        }, {
          flagCheck: false,
          name: '卡通'
        }, {
          flagCheck: false,
          name: '纪录'
        }, {
          flagCheck: false,
          name: '音乐歌舞'
        }, {
          flagCheck: false,
          name: '武打动作'
        }, {
          flagCheck: false,
          name: '独立电影'
        }, {
          flagCheck: false,
          name: '喜剧'
        }, {
          flagCheck: false,
          name: '科幻'
        }, {
          flagCheck: false,
          name: '警匪'
        }],
        myLabelList: [],
        myYSLabelList: [],
        myYunDLabelList: [],
        myDianYLabelList: [],
        showIndustry: false,
        industryArr: ['计算机', '通信、电信', '互联网', '电子行业', '金融服务', '金融/投资/证券 贸易', '快速消费品', '服装/纺织/皮革', '家具/家电/工艺品/玩具', '办公用品及设备', '医疗，医药', '广告/公关/市场推广/会展', '影视/媒体/出版/印刷/包装', '房地产相关', '家居/室内设计/装潢', '服务(咨询，人力资源)', '法律相关',
          '教育/培训', '学术/科研', '酒店/餐饮业', '旅游', '娱乐/休闲/体育', '美容/保健', '交通', '汽车及零配件', '农业', '政府机关', '非盈利机构', '其他行业'
        ],
        myIndustry: '',
        showHousingSituation: false,
        housingSituationArr: ['无 ', '和父母同住', '自有物业', '租房', '其他'],
        myHousingSituation: '',
        showBycar: false,
        bycarArr: ['无车', '有车'],
        myCar: '',
        showChildren: false,
        childrenArr: ['无', '有'],
        myChildren: '',
        showNation: false,
        nationArr: ['汉族', '壮族', '蒙古族', '回族', '维吾尔族', '苗族', '朝鲜族', '满族', '侗族', '瑶族', '白族', '彝族', '土家族', '哈萨克族',
          '傣族', '黎族', '高山族', '土族', '藏族', '其他民族'
        ],
        myNation: '',
        showReligion: false,
        religionArr: ['无神论者', '佛教', '基督教', '道教', '伊斯兰教', '天主教', '有神论者', '其他'],
        myReligion: '',
        showEducation: false,
        educationArr: ['无', '初中', '中专/职校/技校', '高中', '大专', '本科', '双学士', '硕士', '博士', '博士后'],
        myEducation: '',
        shoumarryStaty: false,
        actionsMarrys: ['未婚', '离异', '丧偶'],
        marryName: '',
        showTimeMerry: false,
        timeMerryArr: ['及时闪婚', '一年以内', '两年以内', '三年以内', '时机成熟时就结婚'],
        myTimeMerry: '',
        showLiveWithParent: false,
        liveWithParentArr: ['愿意', '不愿意', '视具体情况而定'],
        myLiveWithParent: '',
        showHaveChildren: false,
        haveChildrenArr: ['想', '不想', '还没想好', '视情况而定'],
        myHaveChildren: '',
        showWhatAppiontment: false,
        whatAppiontmentArr: ['一起打游戏或者一起看电影', '一起做饭', '共赴浪漫之旅', '牵手漫步在公园', '彼此相依相偎'],
        myWhatAppiontment: '',
        showWhatMerry: false,
        whatMerryArr: ['顶级酒店，高朋满座', '户外婚礼，温馨浪漫', '旅游结婚，不大操大办', '中式婚礼，宴请宾客', '简单就好，无所谓'],
        myWhatMerry: '',
        showWhatHalfNeed: false,
        whatHalfNeedArr: ['容貌身材', '性格，心灵', '经济实力', '教育程度'],
        myWhatHalfNeed: '',
        showParentSituation: false,
        parentSituationArr: ['父母健在', '单亲家庭', '父亲健在', '母亲健在', '父母均离世'],
        myParentSituation: '',
        showFamilyRanking: false,
        familyRankingArr: ['独生子女', '老大', '老二', '老三', '老四', '老五', '其他'],
        myFamilyRanking: '',
        showDailyLifeARest: false,
        dailyLifeARestArr: ['早睡早起', '偶尔熬夜', '经常熬夜', '偶尔懒散', '没有规律'],
        myDailyLifeARest: '',
        showWhetherSomke: false,
        whetherSomkeArr: ['不吸，很反感', '不吸烟，但不反感', '社交时偶尔吸烟', '烟不离手'],
        myWhetherSomke: '',
        showWhetherDring: false,
        whetherDringArr: ['不喝酒', '社交需要喝', '兴致时小酌', '酒不离口'],
        myWhetherDring: '',
        showDoHomework: false,
        doHomeworkArr: ['任劳任怨', '希望对方承担家务', '一起分工合作', '看各自闲忙，协商分担'],
        myDoHomework: '',
        showDoFood: false,
        doFoodArr: ['色香味俱全', '能做几样可口的小菜', '不太会，但愿为心爱的人学习'],
        myDoFood: '',
        inputintrod: '',
        inputxg: '',
        inputwxh: '',
        inputcjsh: '',
        inputwdar: '',
        showArea: false,
        areaArr: [],
        myArea: '',
        flagArea: null,
        otherArea: '',
        phone: '',
        qq: '',
        myEmail: '',
        musicList: [{
          flagCheck: false,
          name: '轻音乐'
        }, {
          flagCheck: false,
          name: '另类'
        }, {
          flagCheck: false,
          name: '电音'
        }, {
          flagCheck: false,
          name: '蓝调'
        }, {
          flagCheck: false,
          name: '国语流行'
        }, {
          flagCheck: false,
          name: '节奏布鲁斯'
        }, {
          flagCheck: false,
          name: '电影原声'
        }, {
          flagCheck: false,
          name: '民谣'
        }, {
          flagCheck: false,
          name: '说唱'
        }, {
          flagCheck: false,
          name: '硬摇滚'
        }, {
          flagCheck: false,
          name: '雷鬼'
        }, {
          flagCheck: false,
          name: '港台流行'
        }, {
          flagCheck: false,
          name: '宗教音乐'
        }, {
          flagCheck: false,
          name: '日韩流行'
        }, {
          flagCheck: false,
          name: '古典'
        }, {
          flagCheck: false,
          name: '重金属'
        }, {
          flagCheck: false,
          name: '摇滚'
        }, {
          flagCheck: false,
          name: '乡村'
        }, {
          flagCheck: false,
          name: '歌剧'
        },
          {
            flagCheck: false,
            name: '软摇滚'
          }, {
            flagCheck: false,
            name: '舞曲'
          }, {
            flagCheck: false,
            name: '爵士乐'
          }, {
            flagCheck: false,
            name: '拉丁'
          },
          {
            flagCheck: false,
            name: '欧美流行'
          },
        ],
        myMusicList: [],
        showOtherAge: false,
        otherAgeArr: [],
        myAgeArr: '',
        showOtherHeight: false,
        otherHeightArr: [],
        myOtherHeight: '',
        showMb: true
      }
    },
    mounted() {
      var that = this;
      mui.back = function () {
        window.history.go(-1);
        that.$toast('恭喜您，已注册一线姻缘');
      }
    },
    created() {
      console.log('created');
      this.getHuji();
    },
    methods: {
//			aaa(){
//				this.showMb=false;
//				console.log('aaaaaaa')
//			},
 JumpStap1() {
//      this.$toast('恭喜您，已注册一线姻缘');
//      var that = this;
//      setTimeout(function () {
//        that.$router.push('/index');
//      }, 300)
				  this.stepNUm = 3
//         this.$router.push('/index');
      },
      JumpStap2() {
//      this.$toast('恭喜您，已注册一线姻缘');
//      var that = this;
//      setTimeout(function () {
//        that.$router.push('/index');
//      }, 300)
				  this.stepNUm = 4
//         this.$router.push('/index');
      },
       JumpStap3() {
        this.$toast('恭喜您，已注册一线姻缘');
        var that = this;
        setTimeout(function () {
          that.$router.push('/index');
        }, 300)

//         this.$router.push('/index');
      },
      //体重范围
      getWeightRange() {
        var span = 5;
        var tempItem = '';
        var temp = [];
        for (var i = 40; i < 100; i += span) {
          tempItem = i + '-' + (i + span);
          temp.push(tempItem);
        }
      },
      //年龄范围
      getAgesRange() {
        var span = 10;
        var tempItem = '';
        var temp = [];
        for (var i = 5; i < 80; i += span) {
          tempItem = i + '-' + (i + span);
          temp.push(tempItem);
        }
        this.otherAgeArr = temp;
      },
      //身高范围
      getHeightRange() {

        var span = 10;
        var tempItem = '';
        var temp = [];
        for (var i = 140; i < 260; i += span) {
          tempItem = i + '-' + (i + span);
          temp.push(tempItem);
        }
        this.otherHeightArr = temp;

      },

      //生成自我介绍
      generateIntroduction() {
        this.introdType = 1;
        this.inputintrod = "我的性格特点是" + this.inputxg + '。业余时间我喜欢' + this.inputwxh + '。我憧憬的生活是' + this.inputcjsh + '。我希望我的爱人' + this.inputwdar
      },
      getHuji() {
        var requestUrl = this.apiUrl + 'user/getAreaList';
        var requestData = {
          pid: 0,
          //					arid: 1
        };
        this.showLoading = true;
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
          for (var i = 0; i < tempArea.length; i++) {
            tempArr.push(tempArea[i].areaName)

          }
          this.areaArr = tempArr
          console.log(this.areaArr);
          this.showLoading = false;
        })
          .catch((error) => {
            this.showLoading = false;
          })

        //this.$router.push('/activationAccout')
      },
      //完成注册
      completionRegistration() {
        var requestUrl = this.apiUrl + 'user/editUserInfo';
        //var requestUrl = this.apiUrl + 'user/getMatchingUserList';
        //var data1={
        //	uid: this.$store.state.uid,
        //	sex:"1"
        //}
        var requestData = {
          uid: this.$store.state.uid, //this.myPhone,
        }
        this.yueXMoney ? requestData.monthlyPay = this.actionsYxin.indexOf(this.yueXMoney) + 1 : '';
        this.myIndustry ? requestData.industry = this.industryArr.indexOf(this.myIndustry) + 1 : '';
        this.myHousingSituation ? requestData.housingConditions = this.housingSituationArr.indexOf(this.myHousingSituation) + 1 : '';
        this.myCar ? requestData.whetherBuyCars = this.bycarArr.indexOf(this.myCar) : '';
        this.myChildren ? requestData.withoutChildren = this.childrenArr.indexOf(this.myChildren) : '';
        this.myArea ? requestData.censusRegister = this.myArea : '';
        this.myNation ? requestData.nation = this.nationArr.indexOf(this.myNation) + 1 : '';
        this.myReligion ? requestData.religion = this.religionArr.indexOf(this.myReligion) + 1 : '';
        this.inputintrod ? requestData.selfIntroduction = this.inputintrod : '';
        this.phone ? requestData.phone = this.phone : '';
        this.myEmail ? requestData.email = this.myEmail : '';
        this.qq ? requestData.qq = this.qq : '';
        this.myParentSituation ? requestData.familyStatus = this.parentSituationArr.indexOf(this.myParentSituation) + 1 : '';
        this.myFamilyRanking ? requestData.rankingInHome = this.familyRankingArr.indexOf(this.myFamilyRanking) + 1 : '';
        this.myDailyLifeARest ? requestData.dailyRoutine = this.dailyLifeARestArr.indexOf(this.myDailyLifeARest) + 1 : '';
        this.myWhetherSomke ? requestData.whetherSmoking = this.whetherSomkeArr.indexOf(this.myWhetherSomke) + 1 : '';
        this.myWhetherDring ? requestData.whetherDrink = this.whetherDringArr.indexOf(this.myWhetherDring) + 1 : '';
        this.myDoHomework ? requestData.householdDuties = this.doHomeworkArr.indexOf(this.myDoHomework) + 1 : '';
        this.myDoFood ? requestData.cookingSkill = this.doFoodArr.indexOf(this.myDoFood) + 1 : '';
        this.myAgeArr ? requestData.ages = this.myAgeArr : '';
        this.myOtherHeight ? requestData.rheight = this.myOtherHeight : '';
        this.myEducation ? requestData.reducationalStatus = this.educationArr.indexOf(this.myEducation) : '';
        this.otherArea ? requestData.area = this.otherArea : '';
        this.marryName ? requestData.rmaritalStatus = this.actionsMarrys.indexOf(this.marryName) + 1 : '';
        this.myTimeMerry ? requestData.liveWithParents = this.liveWithParentArr.indexOf(this.myLiveWithParent) + 1 : '';
        this.myHaveChildren ? requestData.wantChildren = this.haveChildrenArr.indexOf(this.myHaveChildren) + 1 : '';
        this.myWhatAppiontment ? requestData.appointment = this.whatAppiontmentArr.indexOf(this.myWhatAppiontment) + 1 : '';
        this.myWhatMerry ? requestData.wedding = this.whatMerryArr.indexOf(this.myWhatMerry) + 1 : '';
        this.myWhatHalfNeed ? requestData.appreciate = this.whatHalfNeedArr.indexOf(this.myWhatHalfNeed) + 1 : '';
        this.myLabelList.length!=0 ? requestData.hobbiesAndInterests = this.myLabelList.join(',') : '';
        this.myYSLabelList.length!=0 ? requestData.dietaryHabit = this.myYSLabelList.join(',') : '';
        this.myMusicList.length!=0 ? requestData.music = this.myMusicList.join(',') : '';
        this.myYunDLabelList.length!=0? requestData.sport = this.myYunDLabelList.join(',') : '';
        this.myDianYLabelList.length!=0 ? requestData.movie = this.myDianYLabelList.join(',') : '';
// requestData.type=1;

console.log(requestData);
this.showLoading=true;
        // var requestData = {
        // 	uid: this.$store.state.uid, //this.myPhone,
        // 	monthlyPay: this.actionsYxin.indexOf(this.yueXMoney) + 1, //s "100"
        // 	industry: this.industryArr.indexOf(this.myIndustry) + 1, //s "1"
        // 	housingConditions: this.housingSituationArr.indexOf(this.myHousingSituation)+1, //s "1"
        // 	whetherBuyCars: this.bycarArr.indexOf(this.myCar), //i 1
        // 	withoutChildren: this.childrenArr.indexOf(this.myChildren), //i 1
        // 	censusRegister: this.myArea, //s "dfd"
        // 	nation: this.nationArr.indexOf(this.myNation) + 1, //s  "1"
        // 	religion: this.religionArr.indexOf(this.myReligion) + 1, //s "1"
        // 	selfIntroduction: this.inputintrod, //s "fdf"
        // 	phone: this.phone, //s "dfdf"
        // 	email: this.myEmail, //s "122"
        // 	qq: this.qq, //s "4"
        //             familyStatus:this.parentSituationArr.indexOf(this.myParentSituation)+1,
        //             rankingInHome:this.familyRankingArr.indexOf(this.myFamilyRanking)+1,
        //             dailyRoutine:this.dailyLifeARestArr.indexOf(this.myDailyLifeARest)+1,
        //             whetherSmoking:this.whetherSomkeArr.indexOf(this.myWhetherSomke)+1,
        //             whetherDrink:this.whetherDringArr.indexOf(this.myWhetherDring)+1,
        //             householdDuties:this.doHomeworkArr.indexOf(this.myDoHomework)+1,
        //             cookingSkill:this.doFoodArr.indexOf(this.myDoFood)+1,
        // 	ages: this.myAgeArr, //s "44"
        // 	rheight: this.myOtherHeight, //s :411
        // 	reducationalStatus: this.educationArr.indexOf(this.myEducation), //i 1
        // 	area: this.otherArea, //s "1"
        // 	rmaritalStatus: this.actionsMarrys.indexOf(this.marryName) + 1, //i 1
        // 	marry: this.timeMerryArr.indexOf(this.myTimeMerry) + 1, //i 1
        // 	liveWithParents: this.liveWithParentArr.indexOf(this.myLiveWithParent) + 1, //i 1
        // 	wantChildren: this.haveChildrenArr.indexOf(this.myHaveChildren) + 1, //i 1
        // 	appointment: this.whatAppiontmentArr.indexOf(this.myWhatAppiontment) + 1, //i 1
        // 	wedding: this.whatMerryArr.indexOf(this.myWhatMerry) + 1, //i 1
        // 	appreciate: this.whatHalfNeedArr.indexOf(this.myWhatHalfNeed) + 1, //i 1
        // 	hobbiesAndInterests: this.myLabelList.join(','), //s
        // 	dietaryHabit: this.myYSLabelList.join(','), //s "22"
        // 	music: this.myMusicList.join(','), //s "sff"
        // 	sport: this.myYunDLabelList.join(','), //s "sf"
        // 	movie: this.myDianYLabelList.join(','), //s"dfdf"
        // 	type: 1, //i 1
        //
        // };
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
            this.$router.push({
              path: '/',
            });
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
      //择偶年龄范围
      selectOtherAge() {
        this.showOtherAge = true;
        this.getAgesRange();
      },
      onConfirmCheckOtherAge(e) {
        this.myAgeArr = e;
        this.showOtherAge = false;
      },
      //择偶身高范围
      selectOtherHeight() {
        this.showOtherHeight = true;
        this.getHeightRange();
      },
      onConfirmCheckOtherHeight(e) {
        this.myOtherHeight = e;
        this.showOtherHeight = false;
      },
      //户籍地区
      selectArea() {
        this.showArea = true;
        this.flagArea = 1;
      },
      //地区
      selectOtherArea() {
        this.showArea = true;
        this.flagArea = 2;
      },
      onConfirmCheckArea(e) {
        if (this.flagArea == 1) {
          this.myArea = e;
        }
        if (this.flagArea == 2) {
          this.otherArea = e;
        }

        this.showArea = false;
      },
      //厨艺
      onConfirmCheckDoFood(e) {
        this.myDoFood = e;
        this.showDoFood = false;
      },
      //家务
      onConfirmCheckDoHomework(e) {
        this.myDoHomework = e;
        this.showDoHomework = false;
      },
      //是否喝酒
      onConfirmCheckWhetherDring(e) {
        this.myWhetherDring = e;
        this.showWhetherDring = false;
      },
      //是否抽烟
      onConfirmCheckWhetherSomke(e) {
        this.myWhetherSomke = e;
        this.showWhetherSomke = false;
      },
      //生活作息
      onConfirmCheckDailyLifeARest(e) {
        this.myDailyLifeARest = e;
        this.showDailyLifeARest = false;
      },
      //家庭排行
      onConfirmCheckFamilyRanking(e) {
        this.myFamilyRanking = e;
        this.showFamilyRanking = false;
      },


      //父母情况
      onConfirmCheckParentSituation(e) {
        this.myParentSituation = e;
        this.showParentSituation = false;
      },
      //另一半需要什么
      onConfirmCheckHalfNeed(e) {
        this.myWhatHalfNeed = e;
        this.showWhatHalfNeed = false;
      },
      //是否怎么样的婚礼
      onConfirmCheckWhatMerry(e) {
        this.myWhatMerry = e;
        this.showWhatMerry = false;
      },
      //是否怎么样的婚礼
      onConfirmCheckWhatMerry(e) {
        this.myWhatMerry = e;
        this.showWhatMerry = false;
      },
      //是否怎么样的约会
      onConfirmCheckWhatAppiontment(e) {
        this.myWhatAppiontment = e;
        this.showWhatAppiontment = false;
      },
      //是否想要小孩
      onConfirmCheckHaveChildren(e) {
        this.myHaveChildren = e;
        this.showHaveChildren = false;
      },

      //是否同意与父母同住
      onConfirmCheckLiveWithParent(e) {
        this.myLiveWithParent = e;
        this.showLiveWithParent = false;
      },
      //何时结婚

      onConfirmCheckTimeMerry(e, index) {
        this.myTimeMerry = e;
        this.showTimeMerry = false;
      },
      //选择婚否

      onConfirmCheckMerry(e, index) {
        this.marryName = e;
        this.shoumarryStaty = false;

      },
      cancelCheckMerry() {
        this.shoumarryStaty = false
      },
      //选择教育
      selectEduction() {
        this.showEducation = true;
      },

      cancelCheckEducation() {
        this.showEducation = false;
      },
      onConfirmCheckEducation(e) {
        this.myEducation = e;
        this.showEducation = false;
      },
      //宗教
      selectReligion() {
        this.showReligion = true;
      },
      cancelCheckReligion() {
        this.showReligion = false;
      },
      onConfirmCheckReligion(e) {
        this.myReligion = e;
        this.showReligion = false;
      },

      //选择民族
      selectNation() {
        this.showNation = true;
      },
      cancelCheckNation() {
        this.showNation = false;
      },
      onConfirmCheckNation(e) {
        this.myNation = e;
        this.showNation = false;
      },
      //是否有小孩
      selectChildren() {
        this.showChildren = true;
      },
      cancelCheckChildren() {
        this.showChildren = false;
      },
      onConfirmCheckChildren(e) {
        this.myChildren = e;
        this.showChildren = false;
      },
      //是否购车
      selectCar() {
        this.showBycar = true;
      },
      cancelCheckBycar() {
        this.showBycar = false;
      },
      onConfirmCheckBycar(e) {
        this.myCar = e;
        this.showBycar = false;
      },
      //住房情况
      selectHouse() {
        this.showHousingSituation = true;
      },
      cancelCheckHousingSituation() {
        this.showHousingSituation = false;
      },
      onConfirmCheckHousingSituation(e) {
        this.myHousingSituation = e;
        this.showHousingSituation = false;
      },
      //选择所在行业
      selectIndustry() {
        this.showIndustry = true;
      },
      cancelCheckIndustry() {
        this.showIndustry = false;
      },
      onConfirmCheckIndustry(e) {
        this.myIndustry = e;
        this.showIndustry = false;
      },
      //选择月薪
      selectYxin() {
        this.showYxin = true
      },
      cancelCheckYxin() {
        this.showYxin = false;
      },
      onConfirmCheckYxin(e) {
        this.yueXMoney = e;
        this.showYxin = false;
      },
      //跳到第二步
      toSecondStep() {
           if ( this.myIndustry.length == 0 || this.myHousingSituation.length == 0 || this.myCar.length == 0 ||
             this.myChildren.length == 0 ||
             this.myArea.length == 0 ||
             this.myNation.length == 0 ||
             this.myReligion.length == 0 ||
             
//           this.phone.length == 0 ||
//           this.qq.length == 0 ||
//           this.myEmail.length == 0 ||
//           this.myAgeArr.length == 0 ||
//           this.myOtherHeight.length == 0 ||
//           this.myEducation.length == 0 ||
//           this.marryName.length == 0 ||
//           this.otherArea.length == 0 ||
             
             
             this.inputintrod.length == 0) {
             this.$toast('内容未填写完整');
             return;
           }
        this.stepNUm = 2;
        console.log(this.inputintrod);
      },
      toThirdStep() {
        // if (this.myTimeMerry.length == 0
        //   || this.myLiveWithParent.length == 0
        //   || this.myHaveChildren.length == 0
        //   || this.myWhatAppiontment.length == 0
        //   || this.myWhatMerry.length == 0
        //   || this.myWhatHalfNeed.length == 0
        // ) {
        //   this.$toast('内容未填写完整');
        //   return;
        // }
        this.stepNUm = 3
      },
      toFourthStep() {
        // if (this.myParentSituation.length == 0
        //   || this.myFamilyRanking.length == 0
        //   || this.myDailyLifeARest.length == 0
        //   || this.myWhetherSomke.length == 0
        //   || this.myWhetherDring.length == 0
        //   || this.myDoHomework.length == 0
        //   || this.myDoFood.length == 0
        // ) {
        //   this.$toast('内容未填写完整');
        //   return;
        // }
        this.stepNUm = 4
      },
      //喜欢的电影
      selectDianYLabels(index, name) {
        this.dianYlabelList[index].flagCheck = !this.dianYlabelList[index].flagCheck
        var nameIndex = this.myDianYLabelList.indexOf(name);
        if (nameIndex > -1) {
          this.myDianYLabelList.splice(nameIndex, 1);
        } else {
          this.myDianYLabelList.push(name)
        }
      },

      //我喜欢的运动
      selectYunDLabels(index, name) {
        this.yunDlabelList[index].flagCheck = !this.yunDlabelList[index].flagCheck
        var nameIndex = this.myYunDLabelList.indexOf(name);
        if (nameIndex > -1) {
          this.myYunDLabelList.splice(nameIndex, 1);
        } else {
          this.myYunDLabelList.push(name)
        }
      },

      //选择兴趣爱好
      selectLabels(index, name) {
        this.labelList[index].flagCheck = !this.labelList[index].flagCheck
        var nameIndex = this.myLabelList.indexOf(name);
        if (nameIndex > -1) {
          this.myLabelList.splice(nameIndex, 1);
        } else {
          this.myLabelList.push(name)
        }
      },
      //选择饮食习惯
      selectYSLabels(index, name) {
        this.yslabelList[index].flagCheck = !this.yslabelList[index].flagCheck
        var nameIndex = this.myYSLabelList.indexOf(name);
        if (nameIndex > -1) {
          this.myYSLabelList.splice(nameIndex, 1);
        } else {
          this.myYSLabelList.push(name)
        }

      },
      //选择音乐
      selectMusic(index, name) {
        this.musicList[index].flagCheck = !this.musicList[index].flagCheck
        var nameIndex = this.myMusicList.indexOf(name);
        if (nameIndex > -1) {
          this.myMusicList.splice(nameIndex, 1);
        } else {
          this.myMusicList.push(name)
        }

      },
      goBack() {
//      this.$toast('恭喜您，已注册一线姻缘');
//      var that = this;
//      setTimeout(function () {
//        that.$router.push('/index');
//      }, 300)
				if(this.stepNUm == 1){
					this.$router.go(-1);
				}else if(this.stepNUm == 2){
					this.stepNUm = 1
				}else if(this.stepNUm == 3){
					this.stepNUm = 2
				}else if(this.stepNUm == 4){
					this.stepNUm = 3
				}
 						
//         this.$router.go(-1);
      },

      settime(obj) {
        if (this.countdown == 0) {
          this.countdown = 60;
          return;
        } else {
          this.countdown--;
          console.log(this.countdown)
        }
        ;
        setTimeout(function () {
          settime(obj)
        }, 1000)
      },
      getCode() {

        //				var number = 60;
        //				var countdown = function() {
        //					if(number == 0) {
        ////						number = 60;
        ////						return;
        //					} else {
        //						number--;
        //					}
        //					setTimeout(countdown, 1000);
        //				}
        //				setTimeout(countdown, 1000);
        //				console.log(number)
      },

    }

  }
</script>
<style scoped lang="scss">
  @import "../../styles/mycomstyle.css";

  * {
    padding: 0;
    margin: 0;
  }

  .actionTitle {
    color: #3A3A3A;
  }

  /*表格样式*/

  .userInfoInput {
    pointer-events: auto;
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
          /*padding-bottom: 10px;*/
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
      margin: 10px 20px;
      color: #AAAAAA;
      font-size: 12px;
    }

    .introdTextarea {
      margin: 0 20px;
      flex: 1;

      textarea {
        /*background: red;*/
        flex: 1;
        width: 90%;
        padding: 10px;
        margin: auto;
        display: block;
        background: none;
        border: none;
        outline: none;

        height: 120px;
        background-color: white;
      }
    }

    .user_com {
      margin: 0 20px;
      border-bottom: 0.5px solid #D2D2D2;
      height: 40px;
      line-height: 40px;
      display: flex;
      white-space: nowrap;
      justify-content: space-between;
      align-items: center;

      .left {
      	width: 130px;
        color: #3A3A3A;
        font-size: 15px;
      }

      .right {
        /*width:300px;
        overflow: hidden;*/
        color: #999999;
        font-size: 15px;

        img {
          margin-left: 8px;
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

  .title_com {
    margin: 15px 20px 10px 20px;
    font-size: 15px;
    pointer-events: auto;

    .labelsBox {
      width: 100%;
      flex: 1;
      display: flex;
      flex-wrap: wrap;

      .label_single {
        padding: 7px 10px;
        background-color: #E1E1E1;
        border-radius: 4px;
        font-size: 14px;
        margin: 3px;
        min-width: 52px;
        max-width: 150px;
        text-align: center;
        color: #767676;
      }

      .label_single_action {
        background-color: #FB7BA0;
        color: white;
      }
    }
  }

  /*完善个人信息*/

  .submitMyIntrod {
    margin: 30px auto;
    padding: 0 20px;
    background-color: #FF5773;
    flex: 1;
    /*width: 133px;*/
    display: inline-block;
    box-sizing: content-box;
    height: 34px;
    line-height: 34px;
    color: white;
    text-align: center;
    font-size: 14px;
    border-radius: 5px;
    letter-spacing: 3px;
  }

  /*下一步*/

  .loginBtn {
    margin: 20px;
    background-color: #FF8737;
    flex: 1;
    height: 55px;
    line-height: 55px;
    color: white;
    text-align: center;
    font-size: 18px;
    border-radius: 5px;
    /*box-shadow: 0 0 4px 2px #FF8737;*/
    letter-spacing: 3px;
  }

  .loginBtn1 {
    margin: 20px;
    background-color: #FFFFFF;
    flex: 1;
    height: 55px;
    line-height: 55px;
    color: #FF8737;
    text-align: center;
    font-size: 18px;
    border-radius: 5px;
    letter-spacing: 3px;
    border: 1px solid #FF8737;
  }

  .fixedBottom {
    position: fixed;
    width: 100%;
    height: 50px;
    line-height: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
    pointer-events: none;
  }

  .Btnmt {
    margin-top: 130px;
  }
</style>
