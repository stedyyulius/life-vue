<template>
  <div class="navbar navbar-default navbar-fixed-top">
     <div class="container-fluid">
         <div class="navbar-header">
             <div class="navbar-brand">Life</div>
             <div class="sidebar-trigger"><i class="fa fa-bars"></i></div>
         </div>
         <ul class="nav navbar-nav">
             <li class="stats">
                <img class="icon col-2" src="https://vignette.wikia.nocookie.net/unisonleague/images/4/42/Stat-ATK_002_Icon.png/revision/latest?cb=20160715021011">
                0
             </li>
             <li class="stats">
                <img class="icon col-2" src="http://www.freeiconspng.com/uploads/brain-icon-png-12.png">
                0
             </li>
             <li class="stats">
                <img class="icon col-2" src="https://s-media-cache-ak0.pinimg.com/originals/4a/40/e2/4a40e24c59c5a9546f19d8c99c05f045.png">
                0
             </li>
             <li class="stats">
                <img class="icon col-2" src="http://www.iconarchive.com/download/i82801/succodesign/love-is-in-the-web/heart.ico">
                0
             </li>
             <li class="stats">
                <img class="icon col-2" src="https://maxcdn.icons8.com/Share/icon/p1em/Messaging//visible1600.png">
                0
             </li>
         </ul>
     </div>
   </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
	background-color: #00AEEF;
	border: 0;
	box-shadow: 0 1px 10px rgba(4, 4, 4, 0.45);
}

.stats{
  margin-top: 10px;
  margin-left: 50px;
  margin-right: 50px;  
}

.icon{
	width: 30px;
	height:30px;
}
.navbar .container-fluid {
	padding-left: 0;
	padding-right: 30px;
}

.navbar .navbar-header {
	background-color: #8c8c8c;
	width: 300px;
	padding: 4px 20px;
	position: relative;
}

.navbar .navbar-header .navbar-brand,
.navbar .navbar-header .sidebar-trigger {
	color: #FFFFFF;
}

.navbar .navbar-header .navbar-brand {
	text-transform: uppercase;
	font-family: 'Oswald', sans-serif;
}

.navbar .navbar-header .sidebar-trigger {
    padding: 15px 20px;
    font-size: 20px;
    position: absolute;
    right: 0;
    background-color: ;
    cursor: pointer;
    margin-top: -4px;
    visibility: hidden;
}

.navbar .navbar-nav li a {
	color: #FFFFFF;
	opacity: 0.8;
	padding: 9px 20px;
	font-size: 14px;
}

.navbar .navbar-nav li a.harga-jual,
.navbar .navbar-nav li a.harga-jual:hover,
.navbar .navbar-nav li a.harga-jual:active,
.navbar .navbar-nav li a.harga-jual:focus,
.navbar .navbar-nav li a.harga-beli,
.navbar .navbar-nav li a.harga-beli:hover,
.navbar .navbar-nav li a.harga-beli:active,
.navbar .navbar-nav li a.harga-beli:focus {
	opacity: 1;
	font-size: 12px;
	text-align: center;
}

.navbar .navbar-nav li a.harga-naik,
.navbar .navbar-nav li a.harga-naik:hover,
.navbar .navbar-nav li a.harga-naik:active,
.navbar .navbar-nav li a.harga-naik:focus {
	background-color: ;
}

.navbar .navbar-nav li a.harga-turun,
.navbar .navbar-nav li a.harga-turun:hover,
.navbar .navbar-nav li a.harga-turun:active,
.navbar .navbar-nav li a.harga-turun:focus {
	background-color: ;
}

.navbar .navbar-nav li a .desciption-title {
	opacity: 0.8;
	font-size: 12px;
	text-align: center;
}

.navbar .navbar-nav li.dropdown ul li a {
	color: #F5AB35;
	padding: 8px 20px;
	background-color: transparent;
}

.navbar .navbar-nav li.dropdown ul li a:hover,
.navbar .navbar-nav li.dropdown ul li a:active,
.navbar .navbar-nav li.dropdown ul li a:focus {
	color: #FFFFFF;
	background-color: ;
}

.navbar .navbar-nav>.open>a,
.navbar .navbar-nav>.open>a:focus,
.navbar .navbar-nav>.open>a:hover {
	color: #FFFFFF;
	background-color: ;
}

.navbar .navbar-nav>.open>a,
.navbar .navbar-nav li a:hover,
.navbar .navbar-nav li a:active,
.navbar .navbar-nav li a:focus {
	color: #FFFFFF;
	opacity: 1;
	background-color: ;
}

@media (max-width: 768px) {
	.navbar .container-fluid {
		padding: 0;
	}
	.navbar .navbar-header {
		width: 100%;
		margin: 0;
	}
	.navbar .navbar-nav {
		display: none;
	}
	.navbar .navbar-header .sidebar-trigger {
		visibility: visible;
	}
}
</style>
