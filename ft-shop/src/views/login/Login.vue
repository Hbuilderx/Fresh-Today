<template>
  <div class="login-container">
      <!--登录面板内容部分-->
      <div class="login-inner">
          <!--面板头部-->
          <div class="login-header">
              <div class="login-logo">
                  <!-- <img src="./images/lk_logo_sm.png" alt="" width="300"> -->
              </div>
              <!--面板标题-->
              <div class="login-header-title">
                  <a href="javascript:;" :class="{current:loginMode}" @click="changeLoginMode">手机登录</a>
                  <a href="javascript:;" :class="{current:!loginMode}"  @click="changeLoginMode">密码登录</a>
              </div>
          </div>
          <!--面板表单部分-->
          <div class="login-content">
              <form>
                  <!--手机验证码登录部分-->
                  <div :class="{current:loginMode}">
                      <section class="login-message">
                          <input type="number" maxlength="11" placeholder="手机号" v-model="phone">
                          <button  
                            class="get-verification" 
                            v-if="!countDown" 
                            :class="{phone_right:checkPhone}"
                            @click="getVerifyCode()"
                          >获取验证码</button>
                          <button v-else disabled="disabled" class="get-verification">
                              已发送({{countDown}}s)
                          </button>
                      </section>
                      <section class="login-verification">
                          <input type="number" maxlength="8" placeholder="验证码" v-model="code"/>
                      </section>
                      <section class="login-hint">
                          温馨提示：未注册小撩买菜的手机号，登录时将自动注册，且代表已同意
                          <a href="javascript:;">服务协议与隐私政策</a>
                      </section>
                  </div>
                  <!--账号登录部分-->
                  <div  :class="{current:!loginMode}">
                      <section>
                          <section class="login-message">
                              <input type="tel" maxlength="11" placeholder="用户名">
                          </section>
                          <section class="login-verification">
                              <input  type="password" maxlength="20" placeholder="密码" autocomplete="off" />
                              <!--<input  type="text" maxlength="20" placeholder="密码" autocomplete="off" />-->
                              <div class="switch-show">
                                  <img src="./images/hide_pwd.png" class="on" alt="" width="20">
                                  <img src="./images/show_pwd.png" alt="" width="20">
                              </div>
                          </section>
                          <section class="login-message">
                              <input type="text" maxlength="4" placeholder="验证码">
                              <img
                                class="get-verification"
                                src="images/captcha.svg"
                                alt="captcha"
                              >
                          </section>
                      </section>
                  </div>
                  <button class="login-submit" @click="handleLogin">登录</button>
              </form>
              <button class="login-back" @click="back">返回</button>
          </div>
      </div>
  </div>
</template>

<script>
  import {Toast} from "vant"
  import {getPhoneCode,phoneCodeLogin} from "../../api/index.js"
  export default {
    name:"Login",
    data(){
      return{
        loginMode:true,
        phone:"18855055159",
        countDown:0,//倒计时
        code:666665,
      }
    },
    computed:{
      checkPhone(){
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(this.phone)) {
            return false;
        } else {
            return true;
        }
      },
    },
    methods:{
      changeLoginMode(){
        this.loginMode=!this.loginMode
      },
      back(){
        this.$router.go(-1)
      },
      
     async getVerifyCode(){      
        if(this.checkPhone){
          //倒计时
          this.countDown=10
          this.intervalId=setInterval(()=>{
            this.countDown--
            if(this.countDown===0){
              clearInterval(this.intervalId)
            }
          },1000)
        }
         //获取验证码
        let res=await getPhoneCode(this.phone) 
        console.log(res)
       // this.code=res
        
      },
      
      //登录
     async handleLogin(){
        //判断模式
        if(this.loginMode){
          if(!this.phone.trim()){
            Toast.fail({
              message:"请输入手机号",
              duration:1000
            });
            return
          }else if(!this.checkPhone){
            Toast.fail({
              message:"手机号格式不正确",
              duration:1000
            });
            return
          };
          
          if(!this.code){
            Toast.fail({
              message:"请输入验证码",
              duration:1000
            });
            return
          }else if(!(/^d{6}$/gi.test(this.code))){/* 有问题 */
            Toast.fail({
              message:"验证码格式不正确",
              duration:1000
            });
            return
          };
                            
          let res=await phoneCodeLogin(this.phone,this.code)                  
        }else{//用户密码登录
          
        }
      },
      
    }
  }
</script>

<style scoped="scoped">
  .login-container {
      width: 100%;
      height: 100%;
      background: #fff;
  }

  .login-container .login-inner {
      padding-top: 60px;
      width: 80%;
      margin: 0 auto;
  }

  .login-container .login-inner .login-header .login-logo {
      font-size: 40px;
      font-weight: bold;
      color: #75a342;
      text-align: center
  }

  .login-container .login-inner .login-header .login-header-title {
      padding-top: 40px;
      padding-bottom: 10px;
      text-align: center;
  }

  .login-container .login-inner .login-header .login-header-title > a {
      color: #333;
      font-size: 14px;
      padding-bottom: 4px;
      text-decoration: none;
  }

  .login-container .login-inner .login-header .login-header-title > a:first-child {
      margin-right: 40px
  }

  .login-container .login-inner .login-header .login-header-title > a.current {
      color: #75a342;
      font-weight: 700;
      border-bottom: 2px solid #75a342
  }

  .login-container .login-inner .login-content > form > div {
      display: none;
  }

  .login-container .login-inner .login-content > form > div.current {
      display: block
  }

  .login-container .login-inner .login-content > form > div input {
      width: 100%;
      height: 100%;
      padding-left: 8px;
      box-sizing: border-box;
      border: 1px solid #ddd;
      border-radius: 4px;
      outline: 0;
      font: 400 14px Arial;
  }

  .login-container .login-inner .login-content > form > div input:focus {
      border: 1px solid #75a342
  }

  .login-container .login-inner .login-content > form > div .login-message {
      position: relative;
      margin-top: 16px;
      height: 48px;
      font-size: 14px;
      background: #fff;
  }

  .login-container .login-inner .login-content > form > div .login-message .get-verification {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      border: 0;
      color: #ccc;
      font-size: 14px;
      background: transparent;
  }

  .login-container .login-inner .login-content > form > div .login-message .get-verification.phone_right {
      color: #75a342
  }

  .login-container .login-inner .login-content > form > div .login-verification {
      position: relative;
      margin-top: 16px;
      height: 48px;
      font-size: 14px;
      background: #fff;
  }

  .login-container .login-inner .login-content > form > div .login-verification .switch-show {
      position: absolute;
      right: 10px;
      top: 12px;
  }

  .login-container .login-inner .login-content > form > div .login-verification .switch-show img {
      display: none
  }

  .login-container .login-inner .login-content > form > div .login-verification .switch-show img.on {
      display: block
  }

  .login-container .login-inner .login-content > form > div .login-hint {
      margin-top: 12px;
      color: #999;
      font-size: 12px;
      line-height: 20px;
  }

  .login-container .login-inner .login-content > form > div .login-hint > a {
      color: #75a342
  }

  .login-container .login-inner .login-content > form .login-submit {
      display: block;
      width: 100%;
      height: 42px;
      margin-top: 30px;
      border-radius: 4px;
      background: #75a342;
      color: #fff;
      text-align: center;
      font-size: 16px;
      line-height: 42px;
      border: 0
  }

  .login-container .login-inner .login-content .login-back {
      display: block;
      width: 100%;
      height: 42px;
      margin-top: 15px;
      border-radius: 4px;
      background: transparent;
      border: 1px solid #75a342;
      color: #75a342;
      text-align: center;
      font-size: 16px;
      line-height: 42px
  }
</style>
