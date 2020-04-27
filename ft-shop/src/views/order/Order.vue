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
    
    <!-- 具体收货信息-->
    <van-cell-group class="cell-group">
      <van-cell title="送达时间" value="请选择送达时间" is-link />
      <van-cell value="内容" is-link :center=true>
        <template #title>
          <van-image
            width="6rem"
            height="3rem"
            fit="contain"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          /> 
        </template>
      </van-cell>
    </van-cell-group>
    
    <van-cell-group class="cell-group">
      <van-cell title="支付方式" value="微信"  />
    </van-cell-group>
    
    <van-cell-group class="cell-group">
      <van-cell title="备注">
        <template #right-icon>
          <input type="text" value="" placeholder="请备注您的特殊需求(选填)"/>
        </template>
      </van-cell>
    </van-cell-group>
    
    <van-cell-group class="cell-group">
      <van-cell title="商品金额" value="¥ 63.00"  />
       <van-cell title="配送费" value="¥ 3.00"  />
    </van-cell-group>
    
    <van-submit-bar 
      :price=price 
      button-text="提交订单" 
      @submit="onSubmit" 
      class="submit"/>
    
    
    <transition name="router-slider" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
  <!-- 
    -->
</template>

<script>
  import {Toast,SubmitBar} from "vant"
  export default {
    name:"Order",
    components:{},
    data(){
      return {
        price:4000,
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
      
      onSubmit(){
        
      }  
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
    background-color: #f5f5f5;
  }
  
  .cell-group {
    margin-top: .5rem;
  }
  
  .submit {
    position: fixed;
    bottom: 0;
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
