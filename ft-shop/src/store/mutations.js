import {
  ADD_GOODS,
  INIT_SHOP_CART,
  REDUCE_CART,
  SELECTED_SINGER_GOODS,
  SELECTED_All_GOODS,
  CLEAR_CRAT
} from './mutations-type.js'

import Vue from 'vue'
import {
  saveStore,
  getStore
} from '../config/global.js'

export default {
  //1.往购物车添加数据(不要传goods对象，涉及到深拷贝)
  [ADD_GOODS](state, {
    goodsId,
    goodsName,
    smallImage,
    goodsPrice
  }) {
    let shopCart = state.shopCart
    //判断商品是否存在
    if (shopCart[goodsId]) {
      shopCart[goodsId]['num']++
    } else {
      shopCart[goodsId] = {
        "num": 1,
        "id": goodsId,
        "name": goodsName,
        "small_image": smallImage,
        "price": goodsPrice,
        "checked": true
      }
    };
    //产生新对象
    state.shopCart = { ...shopCart
    }
    //存入本地
    saveStore("shopCart", state.shopCart)
  },
  //2.页面初始化，获取本地数据
  [INIT_SHOP_CART](state) {
    let initShopCart = getStore("shopCart")
    if (initShopCart) {
      state.shopCart = JSON.parse(initShopCart)
    }
  },

  //3.删除商品
  [REDUCE_CART](state, { goodsId }) {
    let shopCart = state.shopCart;
    let goods = shopCart[goodsId];
    if (goods) { // 找到该商品
      // debugger
      if (goods['num'] > 0) {
        goods['num']--;
        // 3.1 判断是否只有0个
        if (goods['num'] === 0) {
          delete shopCart[goodsId];
          // 3.2 同时数据                 
        }
      } else {
        goods = null;
      }
      state.shopCart = { ...shopCart};
      saveStore('shopCart', state.shopCart);
    }
  },
  
  //4.单个商品的选中与取消选中
  [SELECTED_SINGER_GOODS](state,{goodsId}){
    let shopCart = state.shopCart;
    let goods = shopCart[goodsId];
    if(goods){
      if(goods.checked){
        goods.checked=!goods.checked
      }else{
        Vue.set(goods, 'checked', true); //没有checked属性时，添加一个属性
      }
     state.shopCart = { ...shopCart};
     saveStore('shopCart', state.shopCart); 
    }
  },
  
  //5.全选和取消全选
  [SELECTED_All_GOODS](state, {isSelected}){
      let shopCart = state.shopCart;
      Object.values(shopCart).forEach((goods, index)=>{
          if(goods.checked){ // 存在该属性
              goods.checked = !isSelected;
          } else {
              Vue.set(goods, 'checked', !isSelected);
          }
      });
      state.shopCart = {...shopCart};
  },
  
  //5.清空购物车
  [CLEAR_CRAT](state){
    state.shopCart=null
    state.shopCart={...state.shopCart}
    saveStore('shopCart', state.shopCart); 
  }
}
