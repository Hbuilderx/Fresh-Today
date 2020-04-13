import {ADD_GOODS} from './mutations-type.js'

export default {
  //1.往购物车添加数据(不要传goods对象，涉及到深拷贝)
  [ADD_GOODS](state,{goodsId,goodsName,smallImage,goodsPrice}){
    let shopCart=state.shopCart
    //判断商品是否存在
    if(shopCart[goodsId]){
      shopCart[goodsId]['num']++
    }else{
      shopCart[goodsId]={
        "num":1,
        "id":goodsId,
        "nmae":goodsName,
        "small_image":smallImage,
        "price":goodsPrice,
        "checked":true
      }
    };
    //产生新对象
    state.shopCart={...shopCart}
  }
}