<template lang="html">
  <div>
  <Navbar></Navbar>
  <Sidebar></Sidebar>
    <div class="content row">
      <div class="header col-md-12">
        <img class="page-header" src="../assets/LIFE-CHECK-UP-RED.png">
        <p class="subtitle col-md-offset-2 col-md-8">
          How do you look into the mirror and truly asses yourself?</p>
        <p class="subtitle col-md-offset-2 col-md-8">
          can you accurately determine where you will in 1,2 or even 5 years?
        </p>
      </div>    
      <div class="container col-md-12">
        <h1 class="step"> Step {{page}} </h1>
        <!-- Page 1 -->
        <div class="table row" v-if="page === 1">
          <h3 class="table-title">PERSONAL INFO</h3>
          <table class="first-table">
            <tr class="first-table-key">
              <td class="first-table-key">Nama</td>
              <input class="table-input" type="text" value="Stedy">
            </tr>
            <tr class="first-table-key">
              <td class="first-table-key">Umur</td>
              <input class="table-input" type="text" value="26">
            </tr>
            <tr class="first-table-key">
              <td class="first-table-key">Pekerjaan</td>
              <input class="table-input" type="text" value="Front-End Developer @ Orori.com">
            </tr>
          </table>
          <h3 class="table-title">INCOME /month</h3>
          <table class="first-table">
            <tr class="first-table-key">
              <td class="first-table-key">Gaji</td>
              <input class="table-input" type="text" value="Rp11.000.000">
            </tr>
            <tr class="first-table-key">
              <td class="first-table-key">Saham</td>
              <input class="table-input" type="text" value="0">
            </tr>
            <tr class="first-table-key">
              <td class="first-table-key">Aset</td>
              <input class="table-input" type="text" value="0">
            </tr>
            <tr class="first-table-key">
              <td class="first-table-key">Investasi</td>
              <input class="table-input" type="text" value="0">
            </tr>
            <tr class="first-table-key">
              <td class="first-table-key">TOTAL</td>
              <input class="total" type="text" value="Rp11.000.000">
            </tr>
          </table>
        </div>
        <!-- Page 2 -->
        <div class="table row" v-if="page === 2">
          <h3 class="table-title">PERSONAL EXPENSE</h3>
          <table class="second-table">
            <tr class="second-table-key">
              <td class="second-table-key">Makan</td>
              <input class="table-input" type="text" value="Rp1.200.000">
            </tr>
            <tr class="second-table-key">
              <td class="second-table-key">Pulsa</td>
              <input class="table-input" type="text" value="Rp100.000">
            </tr>
            <tr class="second-table-key">
              <td class="second-table-key">Cicilan Kartu Kredit</td>
              <input class="table-input" type="text" value="0">
            </tr>
            <tr class="second-table-key">
              <td class="second-table-key">Cicilan Lain</td>
              <input class="table-input" type="text" value="Rp2.300.000">
            </tr>
            <tr class="second-table-key">
              <td class="second-table-key">Asuransi</td>
              <input class="table-input" type="text" value="0">
            </tr>
            <tr class="second-table-key">
              <td class="second-table-key">Transportasi</td>
              <input class="table-input" type="text" value="Rp200.000">
            </tr>
            <tr class="second-table-key">
              <td class="second-table-key">Keperluan pribadi</td>
              <input class="table-input" type="text" value="Rp1.000.000">
            </tr>
            <tr class="second-table-key">
              <td class="second-table-key">Lain-lain</td>
              <input class="table-input" type="text" value="Rp1.500.000">
            </tr>
            <tr class="second-table-key">
              <td class="second-table-key">Total</td>
              <input class="total" type="text" value="Rp6.300.000">
            </tr>
          </table>
          <h3 class="table-title">Household Expense /month (Jika Ada)</h3>
          <table class="second-table">
            <tr class="second-table-key">
              <td class="second-table-key">Belanja Bulanan</td>
              <input class="table-input" type="text" value="Rp100.000">
            </tr>
            <tr class="second-table-key">
              <td class="second-table-key">Listrik, Gas, Air, Keamanan</td>
              <input class="table-input" type="text" value="Rp50.000">
            </tr>
            <tr class="second-table-key">
              <td class="second-table-key">Internet Rumah</td>
              <input class="table-input" type="text" value="0">
            </tr>
            <tr class="second-table-key">
              <td class="second-table-key">Anak (Jika ada)</td>
              <input class="table-input" type="text" value="0">
            </tr>
            <tr class="second-table-key">
              <td class="second-table-key">Cicilan Property</td>
              <input class="table-input" type="text" value="0">
            </tr>
            <tr class="second-table-key">
              <td class="second-table-key">Pembantu</td>
              <input class="table-input" type="text" value="0">
            </tr>
            <tr class="second-table-key">
              <td class="second-table-key">Hutang</td>
              <input class="table-input" type="text" value="0">
            </tr>
            <tr class="second-table-key">
              <td class="second-table-key">Arisan</td>
              <input class="table-input" type="text" value="0">
            </tr>
            <tr class="second-table-key">
              <td class="second-table-key">Total</td>
              <input class="total" type="text" value="Rp150.000">
            </tr>
          </table>
        </div>
        <!-- Page 3 -->
        <div class="table row" v-if="page === 3">
          <h3 class="table-title">TOTAL AKHIR</h3>
          <table class="second-table">
            <tr class="second-table-key">
              <td class="second-table-key">TOTAL INCOME</td>
              <input class="total" type="text" value="Rp11.000.000">
            </tr>
            <tr class="second-table-key">
              <td class="second-table-key">TOTAL EXPENSE</td>
              <input class="total" type="text" value="Rp6.450.000">
            </tr>
            <tr class="second-table-key">
              <td class="second-table-key">JUMLAH AKHIR</td>
              <input class="total" type="text" value="Rp4.550.000">
            </tr>
          </table>
          <h3 class="table-title">KESEHATAN KEUANGAN</h3>
          <table class="second-table">
            <tr class="second-table-key">
              <input class="table-input" type="text" value="">
            </tr>
            <tr class="second-table-key">
              <input class="table-input" type="text" value="">
            </tr>
          </table>
        </div>
        <!-- Page 4 -->
        <div v-if="page === 4" class="col-md-offset-2 col-md-8">
          <div class="data-form" v-for="d in data">
           <div class="data-head">{{formatDate(new Date())}}</div>
           <div v-for="header in d.header">
             {{header}}
           </div>
           <div class="data-key">
             Total: {{d.total}}
           </div>
          </div>
          <div>Total Expenses on {{formatDate(new Date())}}: 
            <div class="data-key">Rp{{currencyFormatter(totalDay)}}</div>
          </div>
        <div class="speech-form">
          <h4>Input Your Expense</h4>
          <button @click="speechToText()"><i class="fa fa-microphone"></i></button>
          <div v-for="s in stringSpeech">
            <input type="text" :value="s">
          </div>
          <select>
            <option>{{monthlyExpenses[expenseIndex]}}</option>
          </select>
          <input v-model="numberSpeech" type="text">
          <button type="button" class="btn btn-primary" @click="save()">Save</button>
        </div>
      </div>
      <button class="page-header btn btn-primary" @click="nextPage()" v-if="page < 3">Next Step</button>
      <button class="page-header btn btn-success" @click="submit()" v-if="page === 3">Submit</button>
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
      stringSpeech    : "",
      numberSpeech    : "",
      counter         : 0,
      result          : [],
      data            : [],
      totalDay        : "",
      monthlyExpenses : ["halo","juga"],
      expenseIndex    : 0,
      page            : 1
    }
  },
  methods:{
    nextPage(){
      this.page += 1
    },
    formatDate(date) {
      var monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
      ];

      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();

      return day + ' ' + monthNames[monthIndex] + ' ' + year;
    },
    save(){
      var self = this;
      let tmp = 0
      let inputData = {
        header: self.stringSpeech,
        total : self.numberSpeech
      }
      self.data.push(inputData)
      for(let i = 0; i < self.data.length; i++){
        tmp += +self.data[i].total.replace(/\D/g, '')
        self.totalDay = tmp
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
              if(self.expenseIndex < self.monthlyExpenses.length - 1){
                 self.expenseIndex += 1
              } else{
                self.expenseIndex = 0
              }  
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
  .step{
    margin-top: 10px;
    text-align: center;
  }
  .table{
    text-align: center;
    margin: auto;
  }

  .required{
    color: red;
  }

  .first-table{
    border: 2px solid red;
    font-size: 25px;
    text-align: center;
    width: 100%;
  }

  .first-table-key{
    border: 2px solid red;
    margin: 10px;
    padding-left: 30px;
    padding-right: 30px;
    font-weight: bold;
  }
  
  .second-table{
    border: 2px solid blue;
    font-size: 25px;
    text-align: center;
    width: 100%;
  }

  .second-table-key{
    border: 2px solid blue;
    margin: 10px;
    padding-left: 30px;
    padding-right: 30px;
    font-weight: bold;
  }
  
  table, th, td {
    border: 1px solid black;
}

  .table-input{
    width:100%;
    text-align: center;
    font-weight: normal;
    padding-left: 30px;
    padding-right: 30px;
  }
  
  .total{
    text-align: center;
    font-weight: bold;
    padding-left: 30px;
    padding-right: 30px;
  }

  .table-title{
    text-align: center;
    font-size: 25px;
    color: gray;
    font-weight: bold;
  }

  .subtitle{
    text-align: center;
    color: gray;
    margin-top: -13px;
    font-size: 18px;
  }

  .speech-form{
    margin-top: 50px;
  }
  
  .header{
    border-bottom: 2px solid gray;
    margin-bottom: 0px;
  }
  
  .data-head{
    font-weight: bold;
    border-bottom: 2px solid;
  }
  
  .data-form{
    margin: 40px;
    border: 2px solid;
    text-align: center;
  }
  .data-key{
    font-weight: bold;
  }
</style>
