<template>
  <div class="title">
    <span class="name">限时抢购</span>
    <span class="time">08:00场</span>
    <span class="status">已结束</span>
   <!-- <span class="more">更多</span> -->
  </div>
</template>

<script>
  export default {
    name:"Title",
    props:{}
  }
</script>

<style scoped="scoped" lang="less">
  .title {

    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    span{
      margin-left: 10px;
      &.name {
        border-left: 4px solid #44B372;
         
        padding-left: 5px;
        font-weight: 500;
        font-size: 16px;
      }
      &.time{
       
        font-size: 14px;
        color: #F2826A;
      }
      
      &.status{
        color: #CBCBCC;
        font-size: 14px;
        border: 1px solid #CBCBCC;
        border-radius: 3px;
      }
      &.more {
        align-self: flex-end;
      }
    }
  }
</style>
