<template>
  <van-swipe 
    :autoplay="3000" 
    class="my-swipe"  
    :stop-propagation=false 
    indicator-color="#ffffff"
    ref="my-swipe"
  >
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image.icon_url" style="width: 100%;"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  export default {
    name:"Sowing",
    props:{
      images:{
        type:Array,
        required:true,
        default:()=>{}
      }
    }
    
  }
</script>

<style scoped="scoped">
  .my-swipe  {
    width: 100%;
    height: 237px;
  }
  .my-swipe van-swipe-item{
    width: 100%;
  }
  .my-swipe van-swipe-item img{
    display: block;
    max-width: 100% !important;
  }
</style>
