import Vue from 'vue'
import Router from 'vue-router'

// 引入dashboard一级组件
import DashBoard from './../views/dashboard/DashBoard'

//引入dashboard二级组件
const Home =()=>import('../views/home/Home.vue')
const Cart=()=>import('../views/cart/Cart.vue')
const Category=()=>import('../views/category/Category.vue')
const Mine=()=>import("../views/mine/Mine.vue")

//引入订单一级组件
import Order from '../views/order/Order.vue'

//引入订单二级组件
const MyAddress=()=>import("../views/order/children/MyAddress.vue")

//引入订单三级组件
const AddAddress=()=>import("../views/order/children/children/AddAddress.vue")
const EditAddress=()=>import("../views/order/children/children/EditAddress.vue")

//用户登录
const Login=()=>import("../views/login/Login.vue")

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', redirect: '/dashboard'},
        {
          path: '/dashboard',
          name: 'dashboard',
          component: DashBoard,
          children: [
              {path: '/dashboard', redirect: '/dashboard/home'},
              {path: 'home', name:'home', component: Home, meta: { keepAlive: true}},
              {path: 'category', name:'category', component: Category, meta: { keepAlive: true}},
              {path: 'cart', name:'cart', component: Cart},
              {path: 'mine', name:'mine', component: Mine},
              
          ]
        },
        
        {
          path:'/confirmOrder',
          name:'order',
          component:Order,
          children:[           
            {
              path:"myAddress",
              name:"myAddress",
              component:MyAddress,
              children:[
                {path:"addAddress",name:"addAddress",component:AddAddress},
                {path:"editAddress",name:"editAddress",component:EditAddress},
              ]
            },
            
          ]
          
        },
        
        {
          path:"/login",
          name:"login",
          component:Login
        }
    ]
});