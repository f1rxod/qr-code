const express = require('express')
const bp = require('body-parser')
const ejs = require('ejs')
const qrcode = require('qrcode-js')
const app = express()
app.set('view engine', 'ejs')
app.use(bp.urlencoded({extended:true}))
app.use(express.static('public'))
app.listen(3000,function(){
    console.log('On it..')
})
app.get('/',function(req,res){
    res.render('index')
})
app.post('/scan',function(req,res){
    var input = req.body.data
    var size = req.body.size
    var qr = qrcode.toDataURL(input,size)
    res.render('ready',{src:qr})
})