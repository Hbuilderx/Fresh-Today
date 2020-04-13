import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index.js'

//======================配置fastclick=========================
import FastClick from 'fastclick'
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
};

//======================引入全局样式====================
  //@表示别名，在src目录下
import './style/common.less'

//=====================配置rem=========================
import './config/rem.js'


//=======================引入Vant配置====================
import './plugins/Vant.js'


//======================引入全局过滤器=========
// 5. 引入全局过滤器
import './config/filter.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
