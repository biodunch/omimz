var express = require('express');
var router = express.Router();

router.get('/wallpapers', (req, res, next)=>{
    res.render('products/wallpapers', {title : 'Wallpapers'})
})

module.exports = router