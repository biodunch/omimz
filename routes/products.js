var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('products', {title : 'All products'})
})

router.get('/wallpapers', (req, res, next)=>{
    res.render('products/wallpapers', {title : 'Wallpapers'})
})

router.get('/wall-panels', (req, res, next)=>{
    res.render('products/wall-panels', {title : 'Wallpapers'})
})

router.get('/windows-blinds', (req, res, next)=>{
    res.render('products/windows-blinds', {title : 'Wallpapers'})
})

router.get('/wooden-floors', (req, res, next)=>{
    res.render('products/wooden-floors', {title : 'Wallpapers'})
})


module.exports = router