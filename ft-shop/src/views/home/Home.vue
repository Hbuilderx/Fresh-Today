<template>
  <div class="home" id="home">
    <div v-if="!showLoading">
      <Header></Header>
      <Sowing :images="images"></Sowing>
      <Nav :nav="nav"> </Nav>
      <PanicBuying :buying="buying"></PanicBuying>
    </div>
    <van-loading size="12px" v-if="showLoading" class="loading">加载中,很快就好...</van-loading>
  </div>
</template>

<script>
  import Header from './header/Header.vue'
  import Sowing from './sowing/Sowing.vue'
  import Nav from './nav/Nav.vue'
  import PanicBuying from './panicBuying/index.vue'
  import {getHomeData} from '../../api/index.js'
  export default {
    name:"Home",
    components:{Header,Sowing,Nav,PanicBuying},
    props:{},
    data(){
      return{
        images:[],
        showLoading:true,
        nav:[],
        buying:[]
      }
    },
    created() {
      getHomeData().then((res)=>{
        console.log(res.data.list)
        this.images=res.data.list[0].icon_list
        this.nav=res.data.list[2].icon_list
        this.buying=res.data.list[3].product_list
        this.showLoading=!this.showLoading
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
</script>

<style scoped="scoped" lang="less">
  #home {
    width: 100%;
    height: 100%;
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
