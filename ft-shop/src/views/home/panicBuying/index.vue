<template>
  <div class="list">
    <Title></Title>
    <div class="list-item">
      <div  v-for="(item,index) in buying" :key="index">
        <img :src="item.small_image" alt="">
        <p class="name">{{item.product_name}}</p>
        <p class="price">
          <span class="now-price"><i>¥</i>{{item.price}}</span>
          <span class="origin-price">{{item.origin_price}}</span>
        </p>
         <!-- <p class="total-sales">月销{{item.total_sales}}笔</p> -->
         <p class="cart">
           <van-icon name="shopping-cart-o" color="#ffffff"/>
         </p>
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
    .list-item {
      margin-top: 10px;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      
      div {
       // border: 1px solid red;
        width: 170px;
        height: 250px;
        margin-bottom: 5px;
        img {
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
      
    }
  }
</style>
