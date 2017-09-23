<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    
  },
  created: ()=>{

  },
  computed:{
    currentUrl(){
      let url = window.location.hash
      return url  
    }
  }
}
</script>

<style>
.content {
    width: calc(100vw - 300px);
    min-height: 100vh;
    margin-left: 300px;
    padding: 20px;
    padding-top: 80px;
    background-color: #efefef;
    -webkit-transition: width 0.3s ease-in-out;
    -o-transition: width 0.3s ease-in-out;
    transition: width 0.3s ease-in-out;
}
.title{
  text-align: center;
}
.page-header{
  display:block;
  margin: auto;
  margin-top: 10px;
  width: 50%;
}
.app{
  padding-bottom: 100px
}
</style>
