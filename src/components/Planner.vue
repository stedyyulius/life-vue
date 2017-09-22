<template lang="html">
  <div>
  <Navbar></Navbar>
  <Sidebar></Sidebar>
  <div class="content container">
     <form id="contact" action="" method="post">
       <img class="page-header"
         src="../assets/Life-Logo-in-Background.jpg">
       <h4 class="title">Planner</h4>
       <fieldset>
         <input placeholder="Your name" type="text" tabindex="1" required autofocus />
       </fieldset>
       <fieldset>
         <input placeholder="Your Email Address" type="email" tabindex="2" required />
       </fieldset>
       <fieldset>
         <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required />
       </fieldset>
       <fieldset>
         <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required />
       </fieldset>
       <fieldset>
         <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
       </fieldset>
       <fieldset>
         <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
       </fieldset>
     </form>
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
</style>
