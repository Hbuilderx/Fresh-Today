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