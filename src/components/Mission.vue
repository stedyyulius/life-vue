<template lang="html">
  <div class="content">
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <div>
      <h2 class="title">{{missions[mission].mission}}</h2>
      <img class="page-header" :src="missions[mission].reward">
        <img class="bars" src="../assets/pb0.png" v-if="progress === false">
        <img class="bars" src="../assets/pb20.png" v-if="progress === true">
      <div class="wrap">
      <nav>
        <ul class="primary">
          <li v-for="(m,index) in missions[mission].quest">
            <a @click="setQuest(index)">{{index + 1}}</a>
          </li>
        </ul>
      </nav>
      </div>
      <div class="detail">
        <h3 class="title">{{missions[mission].quest[index]}}</h3>
        <input class="title" type="file">
        <br />
        <button class="btn btn-success" @click="report()">Submit</button>
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
  },
  data(){
    return{
      mission: 1,
      missions:
      [{
        "id": 1,
        "mission":"a",
        "quest" : ['a','b'],
        "reward": "url"
      },{
        "id":2,
        "mission":"b",
        "quest"  :["a","b"],
        "reward" : "url"
        },{
        "id":3,
        "mission":"c",
        "quest"  :["a","b"],
        "reward" : "url"
      }],
      index:"",
      progress: false
    }
  },
  methods:{
    setData(){
      this.mission = this.$route.query.id
    },
    setQuest(index){
      this.index = index
    },
    report(){
      var self = this
      console.log(self.missions[self.mission].quest[self.index]);
      axios.post(`http://localhost:3000/sendEmail`,{
        image: self.missions[self.mission].reward,
        quest: self.missions[self.mission].quest[self.index]
      })
      .then(res=>{
        console.log(res);
        setTimeout(()=>{self.progress = true},7000)
      })
    }
  },
  created: function(){
    this.setData()
  }
}
</script>

<style lang="css">
.bars{
  width: 100%;
  height: 100%;
  display: inline-block;
  z-index: -1;
  /*margin-top: -170px;*/
}
.value{
  color: black;
  text-align: center;
  font-weight: bold;
}

.wrap {
 display: inline-block;
 -webkit-box-shadow: 0 0 70px #fff;
 -moz-box-shadow: 0 0 70px #fff;
 box-shadow: 0 0 70px #fff;
 margin-top: -280px;
 z-index: 200;
}

/* a little "umph" */
.decor {
 background: #6EAF8D;
 background: -webkit-linear-gradient(left, #CDEBDB 50%, #6EAF8D 50%);
 background: -moz-linear-gradient(left, #CDEBDB 50%, #6EAF8D 50%);
 background: -o-linear-gradient(left, #CDEBDB 50%, #6EAF8D 50%);
 background: linear-gradient(left, white 50%, #6EAF8D 50%);
 background-size: 50px 25%;;
 padding: 2px;
 display: block;
}

a {
 text-decoration: none;
 color: #fff;
 display: block;
}

ul {
 list-style: none;
 position: relative;
 text-align: left;
}

li {
 float: left;
}

/* clear'n floats */
ul:after {
 clear: both;
}

ul:before,
ul:after {
   content: " ";
   display: table;
}

nav {
 position: relative;
 background: #2B2B2B;
 background-image: -webkit-linear-gradient(bottom, #2B2B2B 7%, #333333 100%);
 background-image: -moz-linear-gradient(bottom, #2B2B2B 7%, #333333 100%);
 background-image: -o-linear-gradient(bottom, #2B2B2B 7%, #333333 100%);
 background-image: linear-gradient(bottom, #2B2B2B 7%, #333333 100%);
 text-align: center;
 letter-spacing: 1px;
 text-shadow: 1px 1px 1px #0E0E0E;
 -webkit-box-shadow: 2px 2px 3px #888;
 -moz-box-shadow: 2px 2px 3px #888;
 box-shadow: 2px 2px 3px #888;
 border-bottom-right-radius: 8px;
 border-bottom-left-radius: 8px;
}

/* prime */
ul.primary li a {
 display: block;
 padding: 20px 30px;
 border-right: 1px solid #3D3D3D;
}

ul.primary li:last-child a {
 border-right: none;
}

ul.primary li a:hover {
 
 color: #000;
}

/* subs */
ul.sub {
 position: absolute;
 z-index: 200;
 box-shadow: 2px 2px 0 #BEBEBE;
 width: 35%;
 display:none;
}

ul.sub li {
 float: none;
 margin: 0;
}

ul.sub li a {
 border-bottom: 1px dotted #ccc;
 border-right: none;
 color: #000;
 padding: 15px 30px;
}

ul.sub li:last-child a {
 border-bottom: none;
}

ul.sub li a:hover {
 color: #000;
 background: #eeeeee;
}

/* sub display*/
ul.primary li:hover ul {
 display: block;
 background: #fff;
}

/* keeps the tab background white */
ul.primary li:hover a {
 background: #fff;
 color: #666;
 text-shadow: none;
}

ul.primary li:hover > a{
 color: #000;
} 

@media only screen and (max-width: 600px) {
 .decor {
   padding: 3px;
 }
 
 .wrap {
   width: 100%;
   margin-top: 0px;
 }
 
  li {
   float: none;
 }
 
 ul.primary li:hover a {
   background: none;
   color: #8B8B8B;
   text-shadow: 1px 1px #000;
 }

 ul.primary li:hover ul {
   display: block;
   background: #272727;
   color: #fff;
 }
 
 ul.sub {
   display: block;  
   position: static;
   box-shadow: none;
   width: 100%;
 }
 
 ul.sub li a {
   background: #272727;
   border: none;
   color: #8B8B8B;
 }
 
 ul.sub li a:hover {
   color: #ccc;
   background: none;
 }
}
</style>
