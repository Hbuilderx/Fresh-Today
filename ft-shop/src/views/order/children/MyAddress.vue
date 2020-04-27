<template>
  <div class="my-addr">
    <van-nav-bar
      title="我的地址"
      left-text="返回"
      :border=true
      :fixed=true
      :placeholder=true
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    
    <!-- 列表-->
    <van-contact-list
      v-model="chosenContactId"
      :list="list"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />
    
 
    <router-view></router-view>
  </div>
</template>

<script>
  import {Toast} from'vant'
  export default {
    name:"MyAddress",
    props:{},
    data(){
      return{
        chosenContactId: null,
        editingContact: {},
        showList: false,
        showEdit: false,
        isEdit: false,
        list: [{
          name: '张三',
          tel: '13000000000',
          id: 0
        },
        {
          name: '李四',
          tel: '13000000001',
          id: 1
        }]
      };
    },
    methods: {
      onClickLeft() {
        alert(1)
        this.$router.replace("/confirmOrder")
      },
      onClickRight() {
        alert(2)
      },
      
       onAdd() {
        this.editingContact = { id: this.list.length };
        this.isEdit = false;
        this.showEdit = true;
        this.$router.push({
          path:"/confirmOrder/myAddress/addAddress"
        })
       // alert("add")
      },
  
      // 编辑联系人
      onEdit(item) {
        this.isEdit = true;      
        this.showEdit = true;
        this.editingContact = item;
        this.$router.push({
          path:"/confirmOrder/myAddress/editAddress"
        })
      },
  
      // 选中联系人
      onSelect() {
        this.showList = false;
      },
    },
  }
</script>

<style scoped="scoped">
  .my-addr{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #F5F5F5;
    z-index: 300;
  }
</style>
