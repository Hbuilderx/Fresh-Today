<template>
  <div class="home" id="home">
    <Header></Header>
  </div>
</template>

<script>
  import Header from './header/Header.vue'
  import {getHomeData} from '../../api/index.js'
  export default {
    name:"Home",
    components:{Header},
    props:{},
    data(){
      return{
        
      }
    },
    created() {
      getHomeData().then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    }
  }
</script>

<style scoped="scoped">
  #home {
    width: 100%;
    height: 100%;
    background-color: #DD001B;
  }
</style>
