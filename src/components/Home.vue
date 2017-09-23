<template lang="html">
  <div>
  <Navbar></Navbar>
  <Sidebar></Sidebar>
  <div class="content">
    <div class="header container">
        <div class="logo">
            <img width="200px" src="../assets/logo.png"><br>
            <img width="200px" src="../assets/LM.png">
        </div>
    </div>
    <div class="blockList">
    <div class="col-md-12">
      <div class="title"><img class="diamond" src="http://www.smiledesignnyc.com/wp-content/uploads/2016/10/Animated-Icon-for-cutting-edge-education.gif" width="20px">
        <router-link to="/mission?id=1">Tanggung Jawab</router-link></div>
      <div class="title"><br />
        <img class="photo" src="../assets/FRAMED-REWARD-BAG.png">
      </div>
    </div>
    <div class="col-md-12">
      <div class="title"><img class="diamond" src="http://www.smiledesignnyc.com/wp-content/uploads/2016/10/Animated-Icon-for-cutting-edge-education.gif" width="20px">&nbsp;
        <router-link to="/mission?id=2">Kebersihan</router-link></div>
      <div class="title"><br />
        <img class="photo" src="../assets/FRAMED-REWARD-BICYCLE.png">
      </div>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'
export default {
  components:{
    Navbar,Sidebar
  }
}
</script>

<style lang="css">
a{
  font-weight: bold;
  font-size: 20px;
}

.photo{
  width: 310px;
  height: 310px;
  margin-top: 0px;
}

.col-md-12{
  margin: 50px 50px;
}
.diamond{
  width: 50px;
  height: 50px;
}

.mission{
  padding: 50px;
}
.header {
  width: 100%;
  height: 550px;
  background-image: url("../assets/Sky.jpg");
  background-size: cover;
  background-position: center center;
  position: relative;
}
.logo{
    display: block;
    margin: auto;
    margin-top: 100px;
    text-align: center;
}
.quest{
    display: block;
    margin: auto;
    text-align: center;
}

.list
{
-moz-column-count: 2;
-moz-column-gap: 2.5em;
-webkit-column-count: 2;
-webkit-column-gap: 2.5em;
column-count: 2;
column-gap: 2.5em;
}
.blockList{
    margin-top: 30px;
    text-align: center;
}
.rewards{
    font-weight: bold;
    color:#00aeef;
    margin-right: 10px;
    text-shadow: 1px 1px #000;
}
.mission ul li{
  margin-bottom: 50px;
}
</style>
