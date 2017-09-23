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
      <div class="title"><span class="rewards">REWARDS</span><br />
        <img class="photo" src="https://eigeradventure.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/1/2174e01a-1.jpg">
      </div>
    </div>
    <div class="col-md-12">
      <div class="title"><img class="diamond" src="http://www.smiledesignnyc.com/wp-content/uploads/2016/10/Animated-Icon-for-cutting-edge-education.gif" width="20px">&nbsp;
        <router-link to="/mission?id=2">Kebersihan</router-link></div>
      <div class="title"><span class="rewards">REWARDS</span><br />
        <img class="photo" src="http://mikesbikes.com/images/library/large/specialized-stumpjumper-fsr-expert-carbon-evo-650b-copy-234859-1.jpg">
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
  width: 200px;
  height: 200px;
  margin-top: 50px;
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
  height: 300px;
  background-image: url("../assets/Sky.jpg");
  background-size: cover;
  background-position: center center;
  position: relative;
}
.logo{
    display: block;
    margin: auto;
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
    margin-top: 50px;
    text-align: center;
    border: 2px solid gray;
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
