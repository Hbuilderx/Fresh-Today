<template>
  <div class="my-addr">
    <van-nav-bar
      title="我的地址"
      left-text="1111"
      :border=true
      :fixed=true
      :placeholder=true
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
  export default {
    name:"MyAddress",
    props:{},
    data(){
      return{
        
      };
    },
    methods: {
      onClickLeft() {
        //alert(1)
        this.$router.back()
      },
      onClickRight() {
        alert(2)
      },
    },
  }
</script>

<style scoped="scoped">
  .my-addr{
    height: 100%;
    width: 100%;
    background-color: red;
  }
</style>
