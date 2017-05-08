var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('products', {title : 'All products'})
})

router.get('/wallpapers', (req, res, next)=>{
    res.render('products/wallpapers', {title : 'Wallpapers'})
})

router.get('/wallpanels', (req, res, next)=>{
    res.render('products/wall-panels', {title : 'Wallpapers'})
})

router.get('/windowblinds', (req, res, next)=>{
    res.render('products/windows-blinds', {title : 'Wallpapers'})
})

router.get('/woodenfloors', (req, res, next)=>{
    res.render('products/wooden-floors', {title : 'Wallpapers'})
})


module.exports = router