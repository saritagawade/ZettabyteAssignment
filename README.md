# ZettabyteAssignment
sample User data format
{
	"user_name":"kiran",
	"email_id" :"kiran.devkar@gmail.com",
	"adrress":{
        "adrressLine1":"karvenagar",
        "city":"Pune",
        "pincode":400010,
        "state":"MH"
    },
    "uploaded_picture":[{
    	"category":"personal pic",
    	 "fileName":"per.jpg",
    	"filePath":"https://thumb1.shutterstock.com/display_pic_with_logo/1290487/322015064/stock-vector-school-building-bus-and-front-yard-with-students-children-flat-style-vector-illustration-isolated-322015064.jpg"
           
    },
    {
    	"category":"Sarita pic",
    	 "fileName":"Sarita.jpg",
    	"filePath":"https://thumb1.shutterstock.com/display_pic_with_logo/1290487/322015064/stock-vector-school-building-bus-and-front-yard-with-students-children-flat-style-vector-illustration-isolated-322015064.jpg"
           
    }]
    }
	
	
UserCRUD Operations
1) /users:To add user
2) /getUsers:To get All users
3) /getUserById/:email_id':To get user by email_id
4) /delete/:email_id': To delete user
5) '/updateUser/:email_id': To update user

PictureCRUD operation
1) /pictures/get/:fileName: to get Pictures by picture name
2) /pictures/delete/:fileName :to delete picture by pictureName



To run this Application use command
node bin/www

    
	
