<template>
  <div class="nav">
    <div class="nav-item" v-for="(item,index) in nav" :key="index" @click="handleClick">
      <img :src="item.icon_url" alt="">
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
   import {Toast} from "vant"
  export default {
    name:"Nav",
    props:{
      nav:{
        type:Array,
        
      }
    },
    
    methods:{
      handleClick(){
        Toast({
          message: '哎呀，服务器暂时挂了',
          icon: 'like-o'
        });
      }
    }
  }
</script>

<style lang="less" scoped="scoped">
  .nav {
    width: 100%;
    height: 180px;
    background-color: #fff;
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
   align-content: space-around;
    .nav-item {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      height: 70px;
      width: 70px;
      img {
        width: 50px;
        display: block;
        border-radius: 50%;
      }
      span{
        width: 100%;
        display: block;
        font-size: 12px;
        text-align: center;
        color: #646566;
      }
    }
  }
</style>
