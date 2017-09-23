var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
require('dotenv').config()
var transport = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: process.env.HELLO,
        pass: process.env.WORLD
    }
}));

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sendEmail', function(req, res, next) {
    var job = {
    from:`LIFE <life@gmail.com>`,
    to: `stedy.yulius@orori.com`,
    subject: `Quest Report ${req.body.quest}`,
    text: 'Done',
    html: `<img src=${req.body.image} height="200" width="200"><button onclick="accept()" class=btn btn-primary>Accept</button><button class=btn btn-danger>Reject</button>`
  }
  
  transport.sendMail(job, (error, info) => {
          if (error) {
            console.log(error);
            res.send(error);
          }
          else{
            console.log(`sukses`);
            res.send('success!')
          }        
      });
      
});

const accept = () =>{
  console.log(`halo`);
}


module.exports = router;
