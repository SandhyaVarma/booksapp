var express = require('express');
var router = express.Router();
var userModel = require('./users')


router.get('/', function(req, res, next) {
  userModel.create({
    name:'B',
    referredUser: null,
    isPaymentMade: true,
    totalEarnings: 20
  })
  .then(function(b){
    userModel.create({
    name: 'A',
    email:'email@gmail.com',
    referredUser: b._id,
    isPaymentMade: false,
    totalEarnings: 0
  })
  .then(function(a){
      res.status(200).json({a,b})    
  })
  }) 
});


router.get('/:id', async function(req,res){
 let usera = await userModel.findOne({_id:req.params.id})
  usera.isPaymentMade = true
  usera.save()
  .then(async function(){
    let userb = await userModel.findOne({name:'B'})
    userb.totalEarnings += 10
    await userb.save()
     res.status(200).json({usera,userb})   
  })
})

module.exports = router;