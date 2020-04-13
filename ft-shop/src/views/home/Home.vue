<template>
  <div class="home" id="home">
    <div v-if="!showLoading">
      
      <Header></Header>
      <Sowing :images="images"></Sowing>
      <Nav :nav="nav"> </Nav>
      <PanicBuying :buying="buying"></PanicBuying>
      <Recommend :recommend="recommend"></Recommend>
      <MarkPage v-if="showBackStatus" :scrollToTop="scrollToTop"></MarkPage>
    </div>
    <van-loading size="12px" v-if="showLoading" class="loading">加载中,很快就好...</van-loading>
  </div>
</template>

<script>
  import Header from './header/Header.vue'
  import Sowing from './sowing/Sowing.vue'
  import Nav from './nav/Nav.vue'
  import PanicBuying from './panicBuying/index.vue'
  import Recommend from './recommend/Recommend.vue'
  import MarkPage from './markPage/MarkPage.vue'
  import {getHomeData} from '../../api/index.js'
  // 3. 引入处理返回顶部的函数
  import {showBack, animate} from "@/config/global";
  export default {
    name:"Home",
    components:{Header,Sowing,Nav,PanicBuying,Recommend,MarkPage},
    props:{},
    data(){
      return{
        images:[],
        showLoading:true,
        nav:[],
        buying:[],
        recommend:[],
        // 是否显示返回顶部的按钮
        showBackStatus: false
      }
    },
    created() {
      this.reqHomeData()
      /* getHomeData().then((res)=>{
        console.log(res.data.list)
        this.images=res.data.list[0].icon_list //轮播图
        this.nav=res.data.list[2].icon_list//导航
        this.buying=res.data.list[3].product_list//秒杀
        this.recommend=res.data.list[4].product_list//猜你喜欢
        showBack((status)=>{
            // console.log(status);
            this.showBackStatus = status;
        });
        this.showLoading=!this.showLoading
      }).catch((err)=>{
        console.log(err)
      }) */
    },
    methods:{
      async reqHomeData(){
      let res= await getHomeData()
        if(res){
          console.log(res.data.list)
          this.images=res.data.list[0].icon_list //轮播图
          this.nav=res.data.list[2].icon_list//导航
          this.buying=res.data.list[3].product_list//秒杀
          this.recommend=res.data.list[4].product_list//猜你喜欢
          showBack((status)=>{
              // console.log(status);
              this.showBackStatus = status;
          });
          this.showLoading=!this.showLoading
        }
      },
          
      scrollToTop() {
        // 做缓动动画返回顶部
        let docB = document.documentElement || document.body;
        animate(docB, {scrollTop: '0'}, 800, 'ease-out');
      },
    }
  }
</script>

<style scoped="scoped" lang="less">
  #home {
    width: 100%;
    min-height: 300rem;
   // background-color: #DD001B;
   //overflow: hidden;
    .loading {
      text-align: center; 
      position: absolute;
      left: 50%;
      top: 35%;
     transform: translate(-50%);
    }
  }
</style>
