<template>
  <div class="dashboard" id="dashboard">   
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name:"Dashboard",
    components:{},
    props:{},
    data(){
      return{
        
      }
    },
  }
</script>

<style scoped="scoped" lang="less">
  #dashboard {
    width: 100%;
    height: 100%;
    background-color: #FFCD43;
  }
</style>
