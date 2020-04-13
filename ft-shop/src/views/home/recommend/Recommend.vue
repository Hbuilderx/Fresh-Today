<template>
  <div class="recommend">
    <van-divider :style="{ color: '#75A342', borderColor: '#75A342', padding: '0 16px' }">
      今日推荐
    </van-divider>
    
    <div class="list">
      <ListCart v-for="(item,index) in recommend " :key="index" :item="item">
       
      </ListCart>
    </div>
  </div>
</template>

<script>
  import ListCart from './ListCart.vue'
  export default {
    name:"Recommend",
    components:{ListCart},
    props:{
      recommend:{
        type:Array
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
  .recommend {
    margin-top: 10px;
   // height: 300px;
    
    .title {
      position: relative;
      height: 24px;
      .line {
        position: absolute;
        height: 2px;
        width: 100%;
        border-bottom: 1px solid #333;
        top: 10px;
      }
      .con {
        position: absolute;
        text-align: center;
        font-size: 16px;
       // width: 100%;
        background-color: #F5F5F5;
        left: 50%;
        transform: translate(-50%);
        padding-left: 15px;
        padding-right: 15px;
      }
    }
    
    .list {
     // background-color: #fff;
      width: 100%;
      margin-top: 5px;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }
</style>
