var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');
module.exports = {
   index: function(req,res){
       Poll.find({})
       .then(data => {
           res.json(data);
       })
       .catch(err => {
           res.json(err);
           console.log('error in poll controller -find !!');
       })
   },
   new: function(req, res){
       console.log("poll controller new function: ", req.body);
       Poll.create(req.body)
       .then(data => {
           res.json(data);
       })
       .catch(err => {
           res.json(err);
           console.log('error in controller -create!!');
       })
   },
   delete: function(req,res){
    //    console.log("poll controller delete function: ", req.body);
       Poll.remove({_id:req.body.id})
       .then(data=> {
        //    console.log("Server side delete succeesfully.", data);
           res.json(data);
       })
       .catch(err=>{
           console.log("Server side delete function error: ", err);
       })
   },
   findOne:function(req,res){
        console.log('server side findOne function', req.body);
        Poll.findOne({_id:req.body.id})
        .then(data=>{
            console.log("findOne")
            // console.log(data);
            res.json(data);
        })
        .catch(err=>{
            console.log(err);
        })
    },
    pollsbyname: function(req,res){
        console.log('server side pollsbyname function', req.body);
        Poll.find({name:req.body.name})
        .then(data=>{
            res.json(data);
        })
        .catch(err=>{
            console.log(err);
        })
    },
    vote1: function(req,res){
        console.log('server side vote1 function', req.body);
        Poll.findOneAndUpdate({_id:req.body.id}, {$inc:{option1_count:1}}, function(err,data){
            if(err) { console.log(err); }
            if(data) { res.json(data); }
        })
    },
    vote2: function(req,res){
        console.log('server side vote1 function', req.body);
        Poll.findOneAndUpdate({_id:req.body.id}, {$inc:{option2_count:1}}, function(err,data){
            if(err) { console.log(err); }
            if(data) { res.json(data); }
        })
    },
    vote3: function(req,res){
        console.log('server side vote1 function', req.body);
        Poll.findOneAndUpdate({_id:req.body.id}, {$inc:{option3_count:1}}, function(err,data){
            if(err) { console.log(err); }
            if(data) { res.json(data); }
        })
    },
    vote4: function(req,res){
        console.log('server side vote1 function', req.body);
        Poll.findOneAndUpdate({_id:req.body.id}, {$inc:{option4_count:1}}, function(err,data){
            if(err) { console.log(err); }
            if(data) { res.json(data); }
        })
    }
    
}