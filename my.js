var ep = require('express')
var data = require('mongoose')
var cors = require('cors')
var dotenv = require('dotenv')
var bip = require('bip39')
var eth = require('ethereum-mnemonic-privatekey-utils')
var tron = require('tronweb')
var web3 = require('web3')
var pkey = require('ethereum-private-key-to-address')
const privateKeyToAddress = require('ethereum-private-key-to-address')
dotenv.config()
var app = ep()
var id = process.env.id
var port = process.env.PORT || 1000

app.get('/',(req , res) => {
    res.json({})
    })

 //   
app.get('/create',async (req , res) => {
var m = bip.generateMnemonic()
var key = eth.getPrivateKeyFromMnemonic(m)
var erc20 =privateKeyToAddress(key)
res.json({
    key : key ,
    mnemonic : m,
    address : {
    tron :  tron.address.fromPrivateKey(key) ,
    erc20 : erc20,
    bep20 : erc20
    }
})
})
//

app.get('/get/:e',async (req , res) => {
    var x = req.params.e
    res.json({
        key : eth.getPrivateKeyFromMnemonic(x)  
    })
    })
 app.get('*', function(req, res){
    res.json({})
      });
app.listen(port,() => {

})
