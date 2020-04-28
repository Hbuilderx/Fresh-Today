import ajax from './ajax.js'


//  定义基础路径
const BASE_URL = 'http://demo.itlike.com/web/xlmc';

//1.首页和商品分类
export const getHomeData = () => ajax(BASE_URL + '/api/homeApi');
export const getCategories = () => ajax(BASE_URL + '/api/homeApi/categories');
export const getCategoriesDetail = (preParams) => ajax(BASE_URL + '/api/homeApi/categoriesdetail' + preParams);

//2.用户中心
const LOCAL_BASE_URL = 'http://localhost:3000/web/xlmc';
// 2.1 获取短信验证码(GET)
export const getPhoneCode = (phone) => ajax(LOCAL_BASE_URL + '/api/send_code', {phone});
// 2.2 手机验证码登录(POST)
export const phoneCodeLogin = (phone, code) => ajax(LOCAL_BASE_URL + '/api/login_code', {phone, code}, 'POST');
// 2.3 用户名和密码登录(POST)
export const pwdLogin = (user_name, user_pwd, captcha) => ajax(LOCAL_BASE_URL + '/api/login_pwd', {user_name, user_pwd, captcha}, 'POST');