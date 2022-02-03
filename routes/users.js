var mongoose= require('mongoose')

mongoose.connect('mongodb://localhost/booksapp')

var userSchema = mongoose.Schema({
  name:String,
  email:String,
  referredUser:{type:mongoose.Schema.Types.ObjectId ,ref:'user'},
  isPaymentMade: Boolean,
  totalEarnings : Number
})

module.exports = mongoose.model('user', userSchema)