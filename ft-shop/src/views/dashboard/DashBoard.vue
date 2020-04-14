<template>
  <div class="dashboard" id="dashboard" >  
    <van-tabbar v-model="active" active-color="#75A342" > 
        <van-tabbar-item to="/dashboard/home">
          <span>首页</span>
          <img slot="icon" slot-scope="props" :src="props.active ? tabbars[0].active : tabbars[0].inactive" />
        </van-tabbar-item> 
         <van-tabbar-item to="/dashboard/category">
           <span>分类</span>
           <img slot="icon" slot-scope="props" :src="props.active ? tabbars[1].active : tabbars[1].inactive" />
         </van-tabbar-item> 
                
         <van-tabbar-item to="/dashboard/cart" :badge="goodsNum>0?goodsNum:''">
           <span>购物车</span>
           <img slot="icon" slot-scope="props" :src="props.active ? tabbars[2].active : tabbars[2].inactive" />
         </van-tabbar-item> 
                     
         <van-tabbar-item to="/dashboard/mine">
           <span>我的</span>
           <img slot="icon" slot-scope="props" :src="props.active ? tabbars[3].active : tabbars[3].inactive" />
         </van-tabbar-item> 
    </van-tabbar>  
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex' //在tabbar切换时就初始化数据
  export default {
    name:"Dashboard",
    components:{},
    props:{},
    data() {
      return {
        active: Number(sessionStorage.getItem("tabBarActiveIndex"))||0, //初始时取值，转为整数
        tabbars:[
          {
            name:"/dashboard/home",
            title:"首页",
            active: require("@/images/tabbar/home_selected.png"),
            inactive: require("@/images/tabbar/home_default.png"),
          },
          {
            name:"/dashboard/category",
            title:"分类",
            active: require("@/images/tabbar/category_selected.png"),
            inactive: require("@/images/tabbar/category_default.png"),
          },
           {
             name:"/dashboard/cart",
             title:"购物车",
             active: require("@/images/tabbar/shoppingcart_selected.png"),
             inactive: require("@/images/tabbar/shoppingcart_default.png"),
           },
           {
             name:"/dashboard/mine",
             title:"我的",
              active: require("@/images/tabbar/mine_selected.png"),
              inactive: require("@/images/tabbar/mine_default.png"),
            },
        ],
         
      }
    },
    watch:{
      active(value){
        console.log(value)
        let tabBarActiveIndex=value>0?value:0
        //存入当前激活的tabbar下标至session
        sessionStorage.setItem("tabBarActiveIndex",value)
      }
    },
    
    computed:{
      ...mapState(["shopCart"]),
      goodsNum(){
        if(this.shopCart){
          let num=0 //购物车商品数量
          //取出所有的商品对象，存入数组,遍历累加商品数量,显示在购物车的角标上
          Object.values(this.shopCart).forEach((goods,index)=>{
            num=num+goods.num
          }) ;         
          return num
        }else{
          return 0
        }
      }
    },
    mounted() {
      this.INIT_SHOP_CART()
    },
    methods:{
      ...mapMutations(["INIT_SHOP_CART"])
     
    }
  }
</script>

<style scoped="scoped" lang="less">
  #dashboard {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }
</style>
