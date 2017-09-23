<template lang="html">
  <div>
  <Navbar></Navbar>
  <Sidebar></Sidebar>
    <div class="content">
      <div class="data-form" v-for="d in data">
        {{formatDate(new Date())}}
        <div class="data-key" v-for="header in d.header">
          {{header}}
        </div>
        <div class="data-total">
          Total: {{d.total}}
        </div>
      </div>
      Rp{{currencyFormatter(totalDay)}}
      <div class="speech-form">
        <button @click="speechToText()"><i class="fa fa-microphone"></i></button>
        <div v-for="s in stringSpeech">
          <input type="text" :value="s">
        </div>
        <input v-model="numberSpeech" type="text" >
        <button type="button" class="btn btn-primary" @click="save()">Save</button>
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
      stringSpeech  : "",
      numberSpeech  : "",
      counter       : 0,
      result        : [],
      data          : [],
      totalDay      : 0
    }
  },
  methods:{
    formatDate(date) {
      var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];

      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();

      return day + ' ' + monthNames[monthIndex] + ' ' + year;
    },
    save(){
      var self = this;
      let inputData = {
        header: self.stringSpeech,
        total : self.numberSpeech
      }
      self.data.push(inputData)
      for(let i = 0; i < self.data.length; i++){
        self.totalDay += +self.data[i].total.replace(/\D/g, '')
        console.log(+self.data[i].total.replace(/\D/g, ''));
      }
      self.stringSpeech = []
      self.numberSpeech = 0
    },
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
            var transcript = event.results[i][0].transcript;
            transcript.replace("\n", "<br>");
            // if(event.results[i]){
            //   console.log(event.results[i]);
            //   setTimeout(function(){
            //     event.results[i].isFinal = true
            //   },500)
            // }
            if(event.results[i].isFinal){
              // var filterString = transcript.split(' ').filter(function(f,index){
              //   return !+f && f !== ""
              // })
              finalTranscripts += transcript;
            }else{
              interimTranscripts += transcript;
            }
            var spreadWords = finalTranscripts.split(' ')
            var total = 0
            var strings = []
            var tmp = 0
            console.log(spreadWords);
            for(var i = 0; i < spreadWords.length; i ++){
                let regexNumber = +spreadWords[i].replace(/\D/g, '')
              if(regexNumber){
                console.log(regexNumber);
                total += regexNumber
                // if(regexNumber > 0){
                //   self.numbers.push(regexNumber)    
                // }
              } else{
                strings.push(spreadWords[i])
              }
            }
          }
            self.stringSpeech = strings 
            self.numberSpeech = `Rp${self.currencyFormatter(total)}`
            self.counter      = self.counter += 1             
        };
        speechRecognizer.onerror = function (event) {
        };
      }else{
        alert:'Your Browser is not Supported';
      }
    },
    currencyFormatter(num){
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    },
    filterWords(word){
      var self = this
      var lastResult = 0
      var arrayed = word.split(' ')
      var tmp = self.result[self.result.length - 1] || 0
      var counter = 0
      var firstWord = arrayed[0]
      var numbers = ['nol','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas']
      var values = ['puluh','ratus','ribu','juta','milyar']
      var numValues = [10,100,1000,1000000,1000000000]
      
      for(var i = 0; i < numbers.length;i++){
        if(firstWord === numbers[i]){
          self.result.push(i)
          tmp = i
          counter += 1
        }
      }
      
      for(var j = 0; j < values.length; j++){
        if(firstWord === 'belas'){
          self.result.splice(-1,1)
          self.result.push(tmp + 10)
          counter += 1
        }
        if(firstWord === values[j]){
          self.result.splice(-1,1)
          self.result.push(tmp * numValues[j])
          counter += 1
        }
      }
      
      if(firstWord === 'seratus'){
        self.result.push(100)
        counter += 1
      }
       if(firstWord === 'seribu'){
        self.result.push(1000)
        counter += 1
      }
       if(firstWord === 'sejuta'){
        self.result.push(1000000)
        counter += 1
      }
       if(firstWord === 'semilyar'){
        self.result.push(1000000000)
        counter += 1
      }
      
      if(counter === 0){
        self.result.push(firstWord)
      }
      
      if(arrayed.length > 1){
        arrayed.shift()
        return filterWords(arrayed.join(' '))
      }
      for(var x =0; x < self.result.length; x++){
        if(typeof self.result[x] === 'string'){
          lastResult += ` ${self.result[x]}`
        }else{
          lastResult += self.result[x]
        }    
      }
      return lastResult
    }
  }
}
</script>

<style lang="css">
  .data-form{
    margin: 40px;  
  }
  .data-key{
    font-weight: bold;
  }
</style>
