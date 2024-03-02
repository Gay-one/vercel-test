const express = require('express')
const router = express.Router()
router.post('/',(req,res)=>{
    const username = req.body.username
    console.log(username)
    res.render('homepage.ejs',{username:username})
});
router.get('/subYai',(req,res)=>{
    res.render('Yai.ejs')
});
router.get('/login',(req,res)=>{
    res.render('login.ejs')
});
router.get('/game',(req,res)=>{
    res.render('main.ejs')
});
module.exports.router = router