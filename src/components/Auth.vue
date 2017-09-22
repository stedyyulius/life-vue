<template>
  <div class="body">
    <div class="login-form">
      <!-- <img class="logo"
        src="https://lh4.googleusercontent.com/FUeR_vfW20c0t9aGpMDaD5n4NkcP6oJ_zT8Ub6bysfP4NfK8IMh7YSgoHRLY12csRD17Tm1hZ8Jm6B8=w1366-h662-rw"
        alt="logo" />
        <img class="logo-text"
          src="https://lh6.googleusercontent.com/0SqgRXxPg04yk4EX1fbs8QkvCMWL5oo-gO5nVha02OrN6rOKg-HEhqSOXn7HETqxYdN0Ya1LFx9cR18=w1366-h662"
          alt="logo" /> -->
       <div class="form-group">
         <input type="text" class="form-control" placeholder="Username " id="UserName" />
         <i class="fa fa-user"></i>
       </div>
       <div class="form-group log-status">
         <input type="password" class="form-control" placeholder="Password" id="Passwod" />
         <i class="fa fa-lock"></i>
       </div>
       <button type="button" class="log-btn" @click="login()">Log in</button>
     </div>
   </div>
</template>

<script>
export default {
  name: 'Auth',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    login(){
         this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url(https://fonts.googleapis.com/css?family=Vibur);
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  font-family: arial;
}

.logo {
  width: 120px;
  height: 120px;
  margin: auto;
  display: block;
}

.logo-text{
  width: 90px;
  height: 45px;
  margin: auto;
  margin-bottom: 30px;
  display: block;
}

body{
  background-image: url("../assets/Life-Logo-in-Background.jpg");
  background-size: cover;
}

.login-form {
  width: 350px;
  padding: 20px 20px;
  background: #eee;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 100px;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.form-group {
  position: relative;
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  height: 50px;
  border: none;
  padding: 5px 7px 5px 15px;
  background: #fff;
  color: #666;
  border: 2px solid #ddd;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
}
.form-control:focus, .form-control:focus + .fa {
  border-color: #00AEEF;

}

.form-group .fa {
  position: absolute;
  right: 15px;
  top: 17px;
  color: #999;
}

.log-status.wrong-entry {
  -moz-animation: wrong-log 0.3s;
  -webkit-animation: wrong-log 0.3s;
  animation: wrong-log 0.3s;
}

.log-status.wrong-entry .form-control, .wrong-entry .form-control + .fa {
  border-color: #ed1c24;
  color: #ed1c24;
}

.log-btn {
  background: #00AEEF;
  dispaly: inline-block;
  width: 100%;
  font-size: 16px;
  height: 50px;
  color: #fff;
  text-decoration: none;
  border: none;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
}

.link {
  text-decoration: none;
  color: #C6C6C6;
  float: right;
  font-size: 12px;
  margin-bottom: 15px;
}
.link:hover {
  text-decoration: underline;
  color: #8C918F;
}

.alert {
  display: none;
  font-size: 12px;
  color: #f00;
  float: left;
}

@-moz-keyframes wrong-log {
  0%, 100% {
    left: 0px;
  }
  20% , 60% {
    left: 15px;
  }
  40% , 80% {
    left: -15px;
  }
}
@-webkit-keyframes wrong-log {
  0%, 100% {
    left: 0px;
  }
  20% , 60% {
    left: 15px;
  }
  40% , 80% {
    left: -15px;
  }
}
@keyframes wrong-log {
  0%, 100% {
    left: 0px;
  }
  20% , 60% {
    left: 15px;
  }
  40% , 80% {
    left: -15px;
  }
}
</style>
