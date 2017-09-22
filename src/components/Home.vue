<template lang="html">
  <div>
  <Navbar></Navbar>
  <Sidebar></Sidebar>
    <div class="content">
      <button @click="speechToText()"><i class="fa fa-microphone"></i></button>
      <textarea v-model="stringSpeech" rows=9 cols=19></textarea>
      <input v-model="numberSpeech" type="text" >
      {{counter}}
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
      stringSpeech  : "",
      numberSpeech  : "",
      counter       : 0
    }
  },
  methods:{
    speechToText(){
      var self = this
      if('webkitSpeechRecognition' in window){
        var speechRecognizer = new webkitSpeechRecognition();
        speechRecognizer.continuous = true;
        speechRecognizer.interimResults = true;
        speechRecognizer.lang = 'id-ID';
        speechRecognizer.start();
        
        var finalTranscripts = '';
        speechRecognizer.onresult = function(event){
          var interimTranscripts = '';
          for(var i = event.resultIndex; i < event.results.length; i++){
            var checkLength = 0
            var transcript = event.results[i][0].transcript;
            transcript.replace("\n", "<br>");
            if(event.results[i].isFinal){
              var filterString = transcript.split(' ').filter(function(f,index){
                return !+f && f !== ""
              })
              checkLength += filterString.length
              finalTranscripts += transcript;
            }else{
              interimTranscripts += transcript;
            }
            var spreadWords = finalTranscripts.split(' ')
            var total = 0
            var strings = ""
            for(var i = 0; i < spreadWords.length; i ++){
                let regexNumber = +spreadWords[i].replace(/\D/g, '')
              if(regexNumber){
                total += regexNumber    
              } else{
                strings += `\n${spreadWords[i]}`
              }
            }
          }
            self.stringSpeech = strings   
            self.numberSpeech = total 
            self.counter      = self.counter += 1             
        };
        speechRecognizer.onerror = function (event) {
        };
      }else{
        alert:'Your Browser is not Supported';
      }
    }
  }
}
</script>

<style lang="css">
</style>
