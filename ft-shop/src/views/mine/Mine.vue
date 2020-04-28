<template>
  <div class="mine" id="mine" v-if="userInfo.token">
    <header>
      <span>个人中心</span>
    </header>
     
    <van-cell-group class="profile">
      <van-cell class="cell" :center=true>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <div class="person">
           <img src="../../images/mine/header.jpg" alt="">
           <div class="person-info">
             <span class="name">徐圳玉</span>
             <span class="wechat">2539881356</span>
           </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    
    <van-cell-group>
      <van-cell title="我的订单" value="查看所有订单" icon="orders-o"  is-link/>
    </van-cell-group>
    
    <van-grid square>
      <van-grid-item 
        v-for="(order,index) in orders" 
        :key="index" 
        :icon="order.icon" 
        :text="order.title" 
      />
    </van-grid>
    
    <van-cell-group style="margin-top: 0.5rem;">
      <van-cell title="我的优惠券" value="查看所有优惠券" icon="coupon-o"  is-link/>
      <van-cell title="收货地址" value="河南省鹿邑县玄武镇" icon="location-o"  />
    </van-cell-group>  
    
    <van-cell-group style="margin-top: 0.5rem;">
      <van-cell title="客服" value="客服时间:8:00--22:00" icon="service-o"  is-link/>
      <van-cell title="意见反馈"  icon="records"  is-link/>
    </van-cell-group>  
    
    <van-cell-group style="margin-top: 0.5rem;">
      <van-cell title="今日优鲜" value="APP尽情期待" icon="apps-o" />
    </van-cell-group> 
    
  </div>
  
  <SelectLogin v-else></SelectLogin>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import SelectLogin from '../login/SelectLogin.vue'
  export default {
    name:"Mine",
    components:{SelectLogin},
    props:{},
    data(){
      return{
        orders:[
          {title:"待支付",icon:"warning"},
          {title:"待发货",icon:"bag"},
          {title:"待收货",icon:"clock"},
          {title:"待评价",icon:"comment-circle"},
          //{title:"售后",icon:"service"},
        ]
      }
    },
    methods:{
      
    },
    
    computed:{
      ...mapState(["userInfo"])
    }
  }
</script>

<style scoped="scoped" >
  #mine{
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;
  }
  
  header {
    width: 100%;
    display: flex;
    height: 44px;
    background-color: #3CB963;
    color: #fff;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    margin: 0;
  }
  
  .profile {
   /* margin-top: .5rem; */
  }
  
  .profile .cell {
    background-color: #3CB963;
    color: #fff;
  }
  
  .profile .cell .person {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
  }
  
  .profile .cell .person  img {
    height: 70px;
   border-radius: 50%;
    border: 2px solid #fff;
    margin-right: 1rem;
  }
  
  .profile .cell .person .person-info span {
    display: block;
  }
  

</style>

<style>
   .van-cell__left-icon::before {
    color: #FFCD43 !important;
    font-size: 1rem;
  }
  
  .van-grid-item__icon::before {
    color: #323233 !important;
  }
</style>