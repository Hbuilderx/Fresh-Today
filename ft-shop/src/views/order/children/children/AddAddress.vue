<template>
  <div class="add-address">
    <van-nav-bar
      title="添加地址"
      left-text="返回"
      :border=true
      :fixed=true
      :placeholder=true
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
  
  
</template>

<script>
  import {Toast} from 'vant'
  export default {
    name:"AddAddress",
    data() {
       return {
         areaList,
         searchResult: [],
       };
     },
    methods:{
      onClickLeft(){
        this.$router.go(-1)
      },
      onClickRight(){
        
      },
      onSave() {
        Toast('save');
      },
      onDelete() {
        Toast('delete');
      },
      onChangeDetail(val) {
        if (val) {
          this.searchResult = [
            {
              name: '黄龙万科中心',
              address: '杭州市西湖区',
            },
          ];
        } else {
          this.searchResult = [];
        }
      },          
      
    }
    
  }
</script>

<style scoped="scoped">
  .add-address {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #F5F5F5;
    z-index: 9999;
  }
</style>
