var express = require('express');
var router = express.Router();
var user=require('../models/userModel');
var _ = require('lodash');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/users');



/* GET users listing. */
router.get('/', function(req, res) {
 // res.send('respond with a resource');
});




//save user
router.post('/users',(req, res)=>{
  var users = new user();
  console.log(JSON.stringify(req.body));
   
  users.user_name = req.body.user_name;
    users.email_id = req.body.email_id;
    users.adrress = req.body.adrress;
   users.uploaded_picture = req.body.uploaded_picture; 
    users.save(function (err) {
        if (err) {
            res.send(err);
        }
         
        res.send("user created successfully");
    });
  res.send(req.body);
});



//list all data
   router.route('/getUsers').get(function (req, res,next) {
    user.find(function (err, users) {
        if (err) {
            res.send(err);
        }
        res.send(users);
    });
}); 

//getUserBy MailId
router.route('/getUserById/:email_id').get(function(req,res,next){
user.find({"email_id":req.params.email_id},function(err,users){
  if(err)
    res.send(err);
  res.json(users);
});
});

//Api to delete the user
router.route('/delete/:email_id').delete(function(req,res,next){
  user.remove({"email_id":req.params.email_id},function(err,users){
    if(err)
      res.send(err);

    res.json({message:"successfully deleted"});
  });
});


//To Update The user
router.route('/updateUser/:email_id').patch(function(req,res){
  console.log(req.params.email_id);
  var body = _.pick(req.body,['user_name','email_id','address','uploaded_picture']);
  user.update({'email':req.params.email_id}, {$set: body}, (err, doc)=>{
      console.log('Inside',doc);
                if(err){
                    console.log('Error',err);
                    res.status(403).send(doc);
                }else{
                     let content = {
                        success: true,
                        doc :doc
                    }
                  res.status(201).send(content);
                }
            });
  });
module.exports = router;
