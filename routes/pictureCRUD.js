var express = require('express');
var router = express.Router();
var user=require('../models/userModel');
var _ = require('lodash');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/users');



/* GET users listing. */
router.get('/pictures', function(req, res) {
  res.send('respond with a resource');
});

//Get API
router.route('/get/:fileName').get(function(req,res,next){  
  user.find({"uploaded_picture.fileName":req.params.fileName},function(err,users){
        if(err)
      res.send(err);
        else{
          res.send(users[0].uploaded_picture);
        }
  });
});

//Api to delete the user
router.route('/delete/:fileName').delete(function(req,res,next){
  var data = [];
  user.find({"uploaded_picture.fileName":req.params.fileName},function(err,users){
        if(err)
      res.send(err);
        else{
          //var userData = new user();
          userData = {
            user_name : users[0].user_name,
            email_id : users[0].email_id,
            adrress : users[0].adrress
          }
          for(var i=0;i<users[0].uploaded_picture.length;i++){
              if(users[0].uploaded_picture[i].fileName != req.params.fileName){
                console.log('In if',users[0].uploaded_picture[i].fileName,req.params.fileName);
                upload = {
                  category :users[0].uploaded_picture[i].category,
                  fileName:users[0].uploaded_picture[i].fileName,
                  filePath:users[0].uploaded_picture[i].filePath
                }
                  data.push(upload);
              }
          }
            //console.log("data to push>>>",data);
            userData.uploaded_picture =data;
            console.log(">>>>>>User Data",userData);
            //var user = new user(userData);
            //var body = _.pick(userData,['user_name','address','uploaded_picture']); 
            //console.log('>>>>>>body',body);
            user.update({'email_id':userData.email_id},{$set:userData},function(err,user){
              if(err)
                res.send(err);
              else
                res.json({
                  success : 'true',
                  message : "Deleted image Successfully"
                });
            })
        }
    });
});

module.exports = router;
