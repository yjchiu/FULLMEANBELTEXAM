var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
   index: function(req,res){
       User.find({})
       .then(data => {
           res.json(data);
       })
       .catch(err => {
           res.json(err);
           console.log('error in controller -find !!');
       })
   },
   new: function(req, res){
       console.log("body: ", req.body);
       User.create(req.body)
       .then(data => {
           res.json(data);
       })
       .catch(err => {
           res.json(err);
           console.log('error in controller -create!!');
       })
   }
    
}