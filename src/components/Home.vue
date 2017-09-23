<template lang="html">
  <div>
  <Navbar></Navbar>
  <Sidebar></Sidebar>
  <div class="content container">
    <div class="header">
        <div class="logo">
            <img width="200px" src="../assets/logo.png"><br>
            <img width="200px" src="../assets/LM.png">
        </div>
    </div>
    <div class="quest">
        <img width="200px" src="../assets/Quest.png">
    </div>
    <div class="blockList">
        <ul class="list">
        <li><img src="../assets/Diamond.png" width="20px">&nbsp;Intermediate Spanish</li>
        <li><img src="../assets/Diamond.png" width="20px">&nbsp;Microsoft Word</li>
        <li><img src="../assets/Diamond.png" width="20px">&nbsp;Microsoft Power Point</li>
        <li><img src="../assets/Diamond.png" width="20px">&nbsp;Microsoft Excel</li>
        <li><img src="../assets/Diamond.png" width="20px">&nbsp;Dreamweaver</li>
        <li><span class="rewards">REWARDS</span>Adobe Photoshop</li>
        <li><span class="rewards">REWARDS</span>CAD Lab</li>
        <li><span class="rewards">REWARDS</span>Visual Basic</li>
        <li><span class="rewards">REWARDS</span>C++</li>
        <li><span class="rewards">REWARDS</span>Java</li>
    </ul>
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
.mission{
  padding: 50px;
}
.header {
  width: 100%;
  height: 300px;
  background-image: url("../assets/Banner.jpg");
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
    margin-top: 10px;
    display: block;
    margin: auto;
    width: 500px;
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
