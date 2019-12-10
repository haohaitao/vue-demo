<template>
<div id="login" class="unloaded">
<div class="wrapper">
  <header>
   <nav role="navigation" class="navbar">
    <div class="container">
	  <div class="navbar-left">
      <a href="/" class="navbar-brand">蒲公英</a>
      </div>
	  <div class="navbar-right">
      <a href="/" class="navbar-brand">登录</a>
	  <a href="/" class="navbar-brand">注册</a>
      </div>
     </div>
   </nav>
  </header>
 </div>
  <div class="login">
   <form action="/" method="post" class="container offset1 loginform">
    <div id="owl-login" :class="{password : this.click_password}">
     <div class="eyes"></div>
     <div class="arm-up-right"></div>
     <div class="arm-up-left"></div>
     <div class="arm-down-left"></div>
     <div class="arm-down-right"></div>
    </div>
    <div class="pad">
     <div class="control-group">
      <div class="controls">
        <el-input
            placeholder="请输入邮箱"
            prefix-icon="el-icon-user-solid"
            v-model="username">
        </el-input>
      </div>
     </div>
     <div class="control-group">
      <div class="controls">
        <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-warning"
            show-password
            @focus="get_focus()"
            @blur="lose_blur()"
            v-model="password">
        </el-input>
     </div>
     </div>
    </div>
    <div class="form-actions">
     <a href="#" tabindex="5" class="btn pull-left btn-link text-muted">忘记密码？</a>
     <a href="#" tabindex="6" class="btn btn-link text-muted">注册</a>
     <button type="submit" tabindex="4" class="btn btn-primary">登录</button>
    </div>
   </form>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
        username:'', //邮箱
        password:'', //密码
        click_password:false, //默认为false，聚焦后为true
    }
  },
    methods:{
        //获得焦点
        get_focus(){
            this.click_password = true;
        },
        //失去焦点
        lose_blur(){
            this.click_password = false;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#login, #register, #unsubscribe, .login {
    background-color: #eee;
}

body {
    background-color: #018ef5;
    font-family: open sans,sans-serif;
}

body {
    margin: 0;
}

body>.wrapper {
    background: #fff;
}

header .container{
    background-color: #018ef5;
    width: 1170px;
    z-index: 10000;
	height:50px;
    padding: 5px;
	padding-bottom:50px;
	line-height: 50px;
}

header .navbar>.container {
}

#login header, #register header, #unsubscribe header, .login header {
    position: relative;
}

#login .login, #unsubscribe .login {
    background-color: #018ef5;
    height: 200px;
}

#login, #register, #unsubscribe, .login {
    background-color: #eee;
}


#login .loginform, #register .loginform, #unsubscribe .loginform, .login .loginform {
    margin-top: 200px;
    position: relative;
    border: 1px solid #ddd;
    background-color: #fff;
    position: relative;
    max-width: 400px;
    padding: 0;
}

#login .loginform, #unsubscribe .loginform {
    margin-top: 0;
    top: 100px;
}

.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

.container:before, .container:after {
    display: table;
    content: " ";
}

#login #owl-login, #register #owl-login, #unsubscribe #owl-login, .login #owl-login {
    width: 116px;
    height: 92px;
    background-image: url(../../assets/imgs/login/face.png);
    position: absolute;
    top: -82px;
    left: 50%;
    margin-left: -64px;
}

#login #owl-login .eyes, #register #owl-login .eyes, #unsubscribe #owl-login .eyes, .login #owl-login .eyes {
    width: 100%;
    height: 100%;
    background-image: url(../../assets/imgs/login/eyes.png);
    opacity: 0;
    -ms-filter: "alpha(opacity=0)";
    filter: alpha(opacity=0);
    -webkit-transition: .1s ease-out 0s;
    -moz-transition: .1s ease-out 0s;
    -o-transition: .1s ease-out 0s;
    -ms-transition: .1s ease-out 0s;
    transition: .1s ease-out 0s;
}

#login #owl-login .arm-up-right, #register #owl-login .arm-up-right, #unsubscribe #owl-login .arm-up-right, .login #owl-login .arm-up-right {
    width: 51px;
    height: 41px;
    background-image: url(../../assets/imgs/login/arm-up-right.png);
    position: absolute;
    bottom: 11px;
    right: 5px;
    -webkit-transform: translateX(57px) scale(.8);
    -moz-transform: translateX(57px) scale(.8);
    -o-transform: translateX(57px) scale(.8);
    -ms-transform: translateX(57px) scale(.8);
    transform: translateX(57px) scale(.8);
    -webkit-transform-origin: 0 40px;
    -moz-transform-origin: 0 40px;
    -o-transform-origin: 0 40px;
    -ms-transform-origin: 0 40px;
    transform-origin: 0 40px;
    -webkit-transition: background-position .3s ease-out,-webkit-transform .3s ease-out,opacity 0s linear .3s;
    -moz-transition: background-position .3s ease-out,-moz-transform .3s ease-out,opacity 0s linear .3s;
    -o-transition: background-position .3s ease-out,-o-transform .3s ease-out,opacity 0s linear .3s;
    -ms-transition: background-position .3s ease-out,-ms-transform .3s ease-out,opacity 0s linear .3s;
    transition: background-position .3s ease-out,transform .3s ease-out,opacity 0s linear .3s;
    background-position: 0 25px;
    background-repeat: no-repeat;
    opacity: 0;
    -ms-filter: "alpha(opacity=0)";
    filter: alpha(opacity=0);
}

#login #owl-login .arm-up-left, #register #owl-login .arm-up-left, #unsubscribe #owl-login .arm-up-left, .login #owl-login .arm-up-left {
    width: 52px;
    height: 41px;
    background-image: url(../../assets/imgs/login/arm-up-left.png);
    position: absolute;
    bottom: 11px;
    left: -3px;
    -webkit-transform: translateX(-34px) scale(.8);
    -moz-transform: translateX(-34px) scale(.8);
    -o-transform: translateX(-34px) scale(.8);
    -ms-transform: translateX(-34px) scale(.8);
    transform: translateX(-34px) scale(.8);
    -webkit-transform-origin: 0 40px;
    -moz-transform-origin: 0 40px;
    -o-transform-origin: 0 40px;
    -ms-transform-origin: 0 40px;
    transform-origin: 0 40px;
    -webkit-transition: background-position .3s ease-out,-webkit-transform .3s ease-out,opacity 0s linear .3s;
    -moz-transition: background-position .3s ease-out,-moz-transform .3s ease-out,opacity 0s linear .3s;
    -o-transition: background-position .3s ease-out,-o-transform .3s ease-out,opacity 0s linear .3s;
    -ms-transition: background-position .3s ease-out,-ms-transform .3s ease-out,opacity 0s linear .3s;
    transition: background-position .3s ease-out,transform .3s ease-out,opacity 0s linear .3s;
    background-position: 0 25px;
    background-repeat: no-repeat;
    opacity: 0;
    -ms-filter: "alpha(opacity=0)";
    filter: alpha(opacity=0);
}

#login #owl-login .arm-down-left, #register #owl-login .arm-down-left, #unsubscribe #owl-login .arm-down-left, .login #owl-login .arm-down-left {
    width: 43px;
    height: 25px;
    background-image: url(../../assets/imgs/login/arm-down-left.png);
    position: absolute;
    bottom: 2px;
    left: -34px;
    -webkit-transition: .3s ease-out;
    -moz-transition: .3s ease-out;
    -o-transition: .3s ease-out;
    -ms-transition: .3s ease-out;
    transition: .3s ease-out;
}

#login #owl-login .arm-down-right, #register #owl-login .arm-down-right, #unsubscribe #owl-login .arm-down-right, .login #owl-login .arm-down-right {
    width: 43px;
    height: 26px;
    background-image: url(../../assets/imgs/login/arm-down-right.png);
    position: absolute;
    bottom: 1px;
    right: -40px;
    -webkit-transition: .3s ease-out;
    -moz-transition: .3s ease-out;
    -o-transition: .3s ease-out;
    -ms-transition: .3s ease-out;
    transition: .3s ease-out;
}

#login .loginform .pad, #register .loginform .pad, #unsubscribe .loginform .pad, .login .loginform .pad {
    overflow: hidden;
    padding: 30px;
}

#login .loginform input {
    padding: 9px 6px 9px 40px;
    height: auto;
}

#login .loginform input, #register .loginform input, #unsubscribe .loginform input, .login .loginform input {
    color: #444;
}

button, input, select[multiple], textarea {
    background-image: none;
}

input, button, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

button, input {
    line-height: normal;
}

button, input, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: 100%;
}

#login .loginform .controls, #register .loginform .controls, #unsubscribe .loginform .controls, .login .loginform .controls {
    position: relative;
    margin-bottom: 10px;
}

#login .loginform label {
    position: absolute;
    top: 13px;
    left: 13px;
    font-size: 16px;
    color: rgba(0,0,0,.3);
}

.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

label {
    display: inline-block;
    margin-bottom: 5px;
    font-weight: 700;
}

#login .loginform input {
    padding: 9px 6px 9px 40px;
    height: auto;
}

#login .loginform input, #register .loginform input, #unsubscribe .loginform input, .login .loginform input {
    color: #444;
}

.form-control {
    display: block;
    width: 280px;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.428571429;
    color: #555;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}

button, input, select[multiple], textarea {
    background-image: none;
}

#login #owl-login.password .eyes,#register #owl-login.password .eyes,#unsubscribe #owl-login.password .eyes,.login #owl-login.password .eyes {
	opacity: 1;
	-ms-filter: none;
	filter: none;
	-webkit-transition: .1s ease-out .2s;
	-moz-transition: .1s ease-out .2s;
	-o-transition: .1s ease-out .2s;
	-ms-transition: .1s ease-out .2s;
	transition: .1s ease-out .2s
}

#login #owl-login.password .arm-down-left,#register #owl-login.password .arm-down-left,#unsubscribe #owl-login.password .arm-down-left,.login #owl-login.password .arm-down-left {
	-webkit-transform: translateX(40px) scale(0) translateY(-10px);
	-moz-transform: translateX(40px) scale(0) translateY(-10px);
	-o-transform: translateX(40px) scale(0) translateY(-10px);
	-ms-transform: translateX(40px) scale(0) translateY(-10px);
	transform: translateX(40px) scale(0) translateY(-10px);
	opacity: 0;
	-ms-filter: "alpha(opacity=0)";
	filter: alpha(opacity=0)
}

#login #owl-login.password .arm-up-left,#register #owl-login.password .arm-up-left,#unsubscribe #owl-login.password .arm-up-left,.login #owl-login.password .arm-up-left {
	-webkit-transform: scale(1);
	-moz-transform: scale(1);
	-o-transform: scale(1);
	-ms-transform: scale(1);
	transform: scale(1);
	background-position: 0 0;
	opacity: 1;
	-ms-filter: none;
	filter: none;
	-webkit-transition: background-position .3s ease-out,-webkit-transform .3s ease-out;
	-moz-transition: background-position .3s ease-out,-moz-transform .3s ease-out;
	-o-transition: background-position .3s ease-out,-o-transform .3s ease-out;
	-ms-transition: background-position .3s ease-out,-ms-transform .3s ease-out;
	transition: background-position .3s ease-out,transform .3s ease-out
}

#login #owl-login.password .arm-down-right,#register #owl-login.password .arm-down-right,#unsubscribe #owl-login.password .arm-down-right,.login #owl-login.password .arm-down-right {
	-webkit-transform: translateX(-32px) scale(0) translateY(-8px);
	-moz-transform: translateX(-32px) scale(0) translateY(-8px);
	-o-transform: translateX(-32px) scale(0) translateY(-8px);
	-ms-transform: translateX(-32px) scale(0) translateY(-8px);
	transform: translateX(-32px) scale(0) translateY(-8px);
	opacity: 0;
	-ms-filter: "alpha(opacity=0)";
	filter: alpha(opacity=0)
}

#login #owl-login.password .arm-up-right,#register #owl-login.password .arm-up-right,#unsubscribe #owl-login.password .arm-up-right,.login #owl-login.password .arm-up-right {
	-webkit-transform: scale(1);
	-moz-transform: scale(1);
	-o-transform: scale(1);
	-ms-transform: scale(1);
	transform: scale(1);
	background-position: 0 0;
	opacity: 1;
	-ms-filter: none;
	filter: none;
	-webkit-transition: background-position .3s ease-out,-webkit-transform .3s ease-out;
	-moz-transition: background-position .3s ease-out,-moz-transform .3s ease-out;
	-o-transition: background-position .3s ease-out,-o-transform .3s ease-out;
	-ms-transition: background-position .3s ease-out,-ms-transform .3s ease-out;
	transition: background-position .3s ease-out,transform .3s ease-out
}

#login .loginform .form-actions, #register .loginform .form-actions, #unsubscribe .loginform .form-actions, .login .loginform .form-actions {
    border-top: 1px solid #e4e4e4;
    background-color: #f7f7f7;
    padding: 15px 30px;
    text-align: right;
}

a.btn-link.text-muted {
    color: #ccc;
}

a.btn-link {
    color: #018ef5;
}

.btn-primary {
    background-color: #018ef5;
}

.btn-primary {
    color: #fff;
    background-color: #428bca;
    border-color: #357ebd;
}

.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.428571429;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
}

.btn-link {
    font-weight: 400;
    color: #428bca;
    cursor: pointer;
    border-radius: 0;
}

a.btn-link.text-muted:hover, a.btn-link.text-muted:active, a.btn-link.text-muted:focus {
    color: #018ef5;
}

.navbar{
    background-color: #018ef5;
}
.navbar-left{
	float:left;
}
.navbar-right{
	float:right;
}
.navbar-brand{
	color: #fff;
    text-decoration: none;
	padding: 15px 12px;
}
.pull-left {
    float: left!important;
}
</style>