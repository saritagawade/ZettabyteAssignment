var mongoose=require('mongoose');

var schema=mongoose.Schema;

var userSchema= new schema({
    user_name:String,
    email_id:String,
    adrress:{
        adrressLine1:String,
        city:{type:String},
        pincode:{type:Number},
        state:{type:String},
    },
    uploaded_picture:[{
        "category":String,
    	 "fileName":String,
    	"filePath":String
    }]    
});
module.exports=mongoose.model('User',userSchema);