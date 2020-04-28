//=====底部导航栏
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);

//=====轮播图
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

//=====Loading
import { Loading } from 'vant';
Vue.use(Loading);

//=====图标
import { Icon } from 'vant';
Vue.use(Icon);

//========分割线
import { Divider } from 'vant';

Vue.use(Divider);

//========Toast
import { Toast } from 'vant';
Vue.use(Toast);

//========Dialog
import { Dialog } from 'vant';
Vue.use(Dialog);

//=======导航栏
import { NavBar } from 'vant';
Vue.use(NavBar);

//=========联系人
import { ContactCard, ContactList, ContactEdit } from 'vant';

Vue.use(ContactCard).use(ContactList).use(ContactEdit); /* 链式调用*/

//========地质编辑
import { AddressEdit } from 'vant';
Vue.use(AddressEdit);

//=======单元格
import { Cell, CellGroup } from 'vant';
Vue.use(Cell).use(CellGroup);


//=======图片
import { Image as VanImage } from 'vant';
Vue.use(VanImage);

//=======提交订单
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);

//========宫格
import { Grid, GridItem } from 'vant';
Vue.use(Grid);
Vue.use(GridItem);