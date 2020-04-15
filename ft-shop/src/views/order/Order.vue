<template>
  <div id="order">
    <van-nav-bar
      title="填写订单"
      left-text="返回"
      :border=true
      :fixed=true
      :placeholder=true
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    
    <!-- 收货人卡片 -->
    <van-contact-card
      :type="cardType"
      :name="currentContact.name"
      :tel="currentContact.tel"
      @click="selectAddress"
    />
    
    <transition name="router-slider" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
  <!-- 
    -->
</template>

<script>
  import {Toast} from "vant"
  export default {
    name:"Order",
    components:{},
    data(){
      return {
        chosenContactId: null,
        editingContact: {},
        showList: false,
        showEdit: false,
        isEdit: false,
        list: [{
          name: '张三',
          tel: '13000000000',
          id: 0
        }]
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
      selectAddress(){
        //选择收获地址
        alert()
        this.$router.push("/confirmOrder/myAddress")
      },
    },
    
    computed: {
      cardType() {
        return this.chosenContactId !== null ? 'edit' : 'add';
      },
  
      currentContact() {
        const id = this.chosenContactId;
        return id !== null ? this.list.filter(item => item.id === id)[0] : {};
      }
    },
  }
</script>

<style scoped="scoped">
  #order{
    height: 100%;
    width: 100%;
    background-color: #76DA96;
  }
  
  /*转场动画*/
  .router-slider-enter-active, .router-slider-leave-active {
      transition: all 0.3s;
  }

  .router-slider-enter, .router-slider-leave-active {
      transform: translate3d(2rem, 0, 0);
      opacity: 0;
  }
</style>
