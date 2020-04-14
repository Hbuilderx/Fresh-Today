<template>
  <div id="cart">
      <!--头部区域-->
      <header class="titleWrapper">
          <h4><strong>购物车</strong></h4>
          <h5 @click="clearCart"><strong style="color: #E9232C;">清空购物车</strong></h5>
      </header>
      <div class="contentWrapper">
          <!--中间内容-->
          <main class="contentWrapperList">
              <section>
                  <div class="shopCartListCon" v-for="(item,index) in shopCart" :key="index">
                      <div class="left">
                          <a href="javascript:;" class="cartCheckBox" @click.stop="singerGoodsSelected(item.id)">                           
                            <van-icon :name="item.checked?'checked':'circle'" color="#75A342" />
                           </a>
                      </div>
                      <div class="center">
                          <img :src="item.small_image" alt="">
                      </div>
                      <div class="right">
                          <a href="#" >{{item.name}}</a>
                          <div class="bottomContent">
                              <p class="shopPrice">&yen;{{item.price}}</p>
                              <div class="shopDeal">
                                  <span @click="removeOutCart(item.id,item.num)">-</span>
                                  <input disabled type="number" :value="item.num">
                                  <span @click="addToCart(item.id,item.name,item.small_image,item.price)">+</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </main>
          <!--底部通栏-->
          <div class="tabBar">
              <div class="tabBarLeft">
                  <a href="javascript:;" class="cartCheckBox" checked @click.stop="selectedAll(isSelectedAll)">
                    <van-icon :name="isSelectedAll?'checked':'circle'" color="#75A342" />
                   </a>
                  <span style="font-size: 16px;">全选</span>
                  <div class="selectAll">
                      合计：<span class="totalPrice">{{totalPrice|moneyFormat}}</span>
                  </div>
              </div>
              <div class="tabBarRight">
                  <a href="#" class="pay">去结算({{selectedGoodsCount}})</a>
              </div>
          </div>
      </div>
  </div>
</template>

<script >
  import{mapState,mapMutations} from 'vuex'
  import {Dialog} from 'vant'
  export default {
    name:"Cart",
    components:{},
    props:{},
    data(){
      return{
        
      }
    },
    
    mounted() {
      console.log(this.shopCart)
    },
    computed:{
     // 拿到数据
     shopCart(){
       return this.$store.getters.shopCart
     },
     //商品全选判断
     isSelectedAll(){
       let tag=Object.values(this.shopCart).length>0; /* 根据商品个数，判断一开始的全选状态*/
       Object.values(this.shopCart).forEach((goods,index)=>{
         if(!goods.checked){
           tag=false
         }
         
       });
       return tag
     },
     
     //总价格
     totalPrice(){
       let totalPrice=0
       Object.values(this.shopCart).forEach((goods,index)=>{
         if(goods.checked){
           totalPrice+=goods.num*goods.price
         }
       });
       return totalPrice
     },
     
     //选中的商品总个数
     selectedGoodsCount(){
       let selectedGoodsCount=0
       Object.values(this.shopCart).forEach((goods,index)=>{
         if(goods.checked){
           selectedGoodsCount+=1
         }
       });
       return selectedGoodsCount      
     },    
    },
    methods:{
      ...mapMutations(["REDUCE_CART","ADD_GOODS","SELECTED_SINGER_GOODS","SELECTED_All_GOODS","CLEAR_CRAT"]),
      //1.移出购物车
      removeOutCart(goodsId, goodsNum){
        if(goodsNum > 1){
          this.REDUCE_CART({goodsId});
        }else if(goodsNum === 1){
          Dialog.confirm({
            title: '温馨提示',
            message: '确定删除该商品吗？'
          }).then(() => {
            //debugger
            this.REDUCE_CART({goodsId}); //不要回车
          }).catch(() => {
            // on cancel
          });
        }
      },
      
      //2.增加商品个数
      addToCart(goodsId, goodsName, smallImage, goodsPrice){
        this.ADD_GOODS({goodsId, goodsName, smallImage, goodsPrice})
      },
      
      //3.单个商品的选中与否
      singerGoodsSelected(goodsId){
        this.SELECTED_SINGER_GOODS({goodsId})
      },
      
      //4.全选
      selectedAll(isSelected){
          this.SELECTED_All_GOODS({isSelected});
      },
      
      //5.清空购物车
      clearCart(){
        Dialog.confirm({
          title: '温馨提示',
          message: '确定清空购物车？'
        }).then(() => {
          //debugger
          this.CLEAR_CRAT() //不要回车
        }).catch(() => {
          // on cancel
        });
      },
    }
  }
</script>

<style scoped lang="less">
    #cart{
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
    }

    .titleWrapper{
        width: 100%;
        height: 2.6rem;
        background: #fff;
        -webkit-background-size: 0.1rem 4.4rem;
        background-size: 0.1rem 4.4rem;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding-left: 15px;
        padding-right: 15px;
    }

    .contentWrapper{
        padding-top: 3.5rem;
    }

    /*列表内容*/
    .contentWrapperList{
        padding-bottom: 6rem;
    }

    .contentWrapperList section{
        background-color: #f5f5f5;
        
    }

    .cartCheckBox{
       // background: url("/images/shop-icon.png ") no-repeat; 
       //background-color: red;
        -webkit-background-size: 2.5rem 5rem;
        background-size: 2.5rem 5rem;
        width: 1rem;
        height: 1rem;
    }

    .cartCheckBox[checked]{
        background-position: -1.2rem 0;
    }

    .shopCartListCon{
        width: 96%;
        margin: 0 auto;
        display: flex;
        height: 6rem;
        border-bottom:  0.01rem solid #e0e0e0;
        margin-bottom: 0.7rem;
        padding: 0.5rem 0;
        background-color:#fff;
        border-radius: 10px;
    }

    .shopCartListCon .left{
        /*background: purple;*/
        flex: 1;
        display: flex;
        /*justify-content: center;*/
    }

    .shopCartListCon .left a{
        display: inline-block;
        margin-top: 0.8rem;
        margin-left: 0.5rem;
    }


    .shopCartListCon .center{
        /*background: blue;*/
        flex: 3;
    }

    .shopCartListCon .center img{
        width: 100%;
        height: 100%;
    }

    .shopCartListCon .right{
        /*background: orangered;*/
        flex: 6;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 0.5rem;
        margin-right: 0.5rem;

        position: relative;
    }

    .shopCartListCon .right a{
        height: 2.2rem;
        line-height: 1.2rem;
        overflow: hidden;
        margin-bottom: 0.3rem;
        font-size: 0.8rem;
        color: #000;
    }

    .shopCartListCon .bottomContent{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .shopCartListCon .bottomContent .shopPrice{
        font-size: 0.8rem;
        color: #E9232C;
    }

    .shopCartListCon .right .shopDeal span{
        display: inline-block;
        width: 1rem;
        height: 1.2rem;
        line-height: 1.2rem;
        text-align: center;
        float: left;
    }

    .shopCartListCon .right .shopDeal input{
        float: left;
        width: 2rem;
        height: 1.2rem;
        text-align: center;
        margin: 0 0.2rem;
        font-size: 0.8rem;
    }

    /*底部通栏*/
    .tabBar{
        position: fixed;
        left:0;
        bottom:2.7rem;
        width:100%;
        height: 3.5rem;
        background-color: #fff;

        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 0.01rem solid #e0e0e0;
    }

    .tabBarLeft{
        display: flex;
        align-items: center;
        margin-left: 0.5rem;
    }

    .tabBarLeft .selectAll{
        margin-left: 1rem;
        font-size: 1rem;
    }

    .totalPrice{
        color: #E9232C;
        font-weight: 600;
    }


    .tabBarRight .pay{
        width:5rem;
        height: 2rem;
        background-color: #E9232C;
        border-radius: 1rem;
        margin-right: 0.5rem;

        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        color: #fff;
    }
</style>
