<template lang="html">
  <div>
  <Navbar></Navbar>
  <Sidebar></Sidebar>
  <div class="content container">
    <div class="mission">
      <ul>
        <li>
          <img src="http://lorempixum.com/100/100/nature/1" >
          <router-link to="/mission?id=1"><h3>The Grasslands</h3></router-link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p>
        </li>
          
        <li>
          <img src="http://lorempixum.com/100/100/nature/2" >
          <router-link to="/mission?id=2"><h3>The Grasslands</h3></router-link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p>
        </li>

        <li>
          <img src="http://lorempixum.com/100/100/nature/3" >
          <router-link to="/mission?id=3"><h3>The Grasslands</h3></router-link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod ultrices ante, ac laoreet nulla vestibulum adipiscing. Nam quis justo in augue auctor imperdiet.</p>
        </li>

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

.mission ul li{
  margin-bottom: 50px;
}
</style>
