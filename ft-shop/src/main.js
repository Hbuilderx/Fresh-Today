import Vue from 'vue'
import App from './App.vue'
import store from './store'

//======================配置fastclick=========================
import FastClick from 'fastclick'
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
};

//======================引入全局样式====================
  //@表示别名，在src目录下
import '@/style/common.less'


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
