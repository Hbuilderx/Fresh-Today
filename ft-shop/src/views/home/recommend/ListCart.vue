<template>
  <div class="list-card">
    <img :src="item.small_image" alt="" class="img" v-if="item.small_image">
    <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" class="img" v-if="!item.small_image">
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
    </van-image>
    <p class="name">{{item.product_name}}</p>
    <p class="price">
      <span class="now-price">{{item.price | moneyFormat}}</span>
      <span class="origin-price">{{item.origin_price | moneyFormat  }}</span>
    </p>
    <p class="spec">
      “{{item.spec}}
    </p>
     <p class="total-sales">月销{{item.total_sales}}笔</p>
     <p class="cart" @click="addToCart(item)">
       <van-icon name="shopping-cart-o" color="#ffffff"/>
     </p>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    name:"ListCart",
    props:{
      item:{
        type:Object
      }
    },
    data(){
      return{
        
      }
    },
    methods:{
      //发布添加到购车的消息
      addToCart(goods){
        PubSub.publish("homeAddToCart",goods)
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
  .list-card {   
    // border: 1px solid red;
      width: 46%;
     // height: 270px;
      margin-bottom: 5px;
      background-color: #fff;
      padding-left: 10px;
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-radius: 5px;
      box-sizing: border-box;
      //flex-grow: 1;
      .img {
        max-width: 80%;
        margin: 0 auto;
      }
      .name {
        font-size: 14px;
        color: #666666;
       // height: 35px;
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .price {
        .now-price {
          color: #FF5000;
          font-size: 14px;
          font-weight: 600;
          margin-right: 5px;
        }
        .origin-price {
          color: #999999;
          text-decoration: line-through;
          font-size: 12px;
        }
        
      }
      .spec {
        font-size: 10px;
        color: #FF976A;
        min-height: 25px;
      }
      .total-sales {
          font-size: 12px;
          color: #999999;
        }
    
      .cart {
        width: 32px;
        height: 32px;
        background-color: #40AF6D;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5px;
      }
    
     
  }
</style>
