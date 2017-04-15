var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/gallery', function(req, res){
  res.render('gallery', { title : 'Gallery'})
})

router.get('/contact', (req, res)=>{
  res.render('contacts', {title : 'Contact Us'})
})

module.exports = router;
