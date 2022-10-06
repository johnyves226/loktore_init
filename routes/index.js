const fs = require('fs')
const path= require ('path')
const ejs= require(  'ejs')
const pdf= require( 'html-pdf')

var express = require('express');
var router = express.Router();
var options = { format: 'Letter' };

var data={
  LiasseName:100000
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sunu', function(req, res, next) {
    res.render('sunu', { title: 'FDS sunu' });
  });

router.get('/sonar', function(req, res, next) {
    res.render('sonar', { title: 'FDS sonar' });
  });

  router.get('/sunuredirect', function(req, res, next) {
    ejs.renderFile(path.join(__dirname, '..', 'views', 'sunu.ejs'), {}, function(err, str) {
      if (err) return res.send(err);
      
      // str now contains your rendered html
      pdf.create(str,options).toFile("test.pdf", function(err, data) {
        if (err) return res.send(err);
        res.send('Ok');
        });    
      });
  });


 

 module.exports = router;

