<template>
  <div class="list">
    <Title></Title>
    <div class="list-item">
      <div  v-for="(item,index) in buying" :key="index">
        <img src="" alt="">
        <p>{{item.product_name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Title from './title.vue'
  export default {
    name:"PanicBuying",
    components:{Title},
    props:{
      buying:{
        type:Array,
      }
    },
    data(){
      return {
        
      }
    },
  }
</script>

<style scoped="scoped" lang="less">
  .list {
    width: 100%;
    min-height: 200px;
    background-color: #fff;
    margin-top: 10px;
    padding-top: 10px;
  }
</style>
