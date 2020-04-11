<template>
  <div class="dashboard" id="dashboard" >  
    <van-tabbar v-model="active" active-color="#75A342">     
      <van-tabbar-item v-for="(item,index) in tabbars" :key="index" :to="(item.name)">
        <span>{{item.title}}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.inactive" />
      </van-tabbar-item>     
    </van-tabbar>  
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name:"Dashboard",
    components:{},
    props:{},
    data() {
      return {
        active: 0,
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
    }
  }
</script>

<style scoped="scoped" lang="less">
  #dashboard {
    width: 100%;
    height: 100%;
    background-color: #FFCD43;
  }
</style>
