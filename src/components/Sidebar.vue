<template>
  <div :class="show">
     <div class="sidebar-avatar">
       <div class="sidebar-overlay">
         <div class="sidebar-inner">
           <div class="sidebar-image">
             <img src="https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" alt="Avatar"/>
           </div>
           <div class="sidebar-name"> User: {{user}}</div>
         </div>
       </div>
     </div>
     <ul class="nav nav-pills nav-stacked" v-for="(page,index) in pages">
       <li>
         <router-link :to="page.url">
           {{page.name}}
           <i :class="page.icon"></i>
         </router-link>
       </li>
     </ul>
     <ul class="nav nav-pills nav-stacked">
       <li>
         <router-link to="/login">
           Logout
           <i class="glyphicon glyphicon-off"></i>
         </router-link>
       </li>         
     </ul>
   </div>
</template>

<script>
export default {
  data () {
    return {
      pages: [{
        name: 'Home',
        url: '/',
        icon: 'ion-home',
        section: 'home'
    }],
      user: 'Stedy',
      show: 'sidebar sidebar-show'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidebar {
	width: 300px;
	height: 100vh;
	max-height: 100vh;
	background-color: #8c8c8c;
	position: fixed;
	top: 0;
	left: 0;
    -webkit-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    margin-left: 0;
    padding-top: 60px;
}

.sidebar.sidebar-show {
	margin-left: 0;
}

.sidebar-avatar {
  width: 100%;
  height: 200px;
  background-image: url("../assets/Life-Logo-in-Background.jpg");
  background-size: cover;
  background-position: center center;
  position: relative;
}
.sidebar-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(37, 37, 37, 0.3);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}
.sidebar-image {
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
}
.sidebar-image img {
  width: 100%;
  height: auto;
}
.sidebar-inner {

}
.sidebar-name {
	font-size: 16px;
	font-family: 'Oswald', sans-serif;
	color: #ffffff;
  margin-top: 10px;
  text-align: center;
}
.sidebar .nav-pills li {
  margin: 0;
}
.sidebar .nav-pills li a {
  border-radius: 0;
  color: rgba(255, 255, 255, 0.8);
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  transition: all 0.3s ease-in-out;
}
.sidebar .nav-pills li a i {
  font-size: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  margin: 0;
  left: auto;
}
.sidebar .nav-pills li a:hover, .sidebar .nav-pills li a:focus, .sidebar .nav-pills li a:active {
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

.sidebar .nav-pills li .collapse .nav-pills {
  background-color: #141f29;
}

.sidebar .nav-pills li .collapse .nav-pills li a {
  padding: 16px 20px 16px 40px;
}

@media (max-width: 768px) {
	.sidebar {
		margin-left: -100%;
	}
}
</style>
