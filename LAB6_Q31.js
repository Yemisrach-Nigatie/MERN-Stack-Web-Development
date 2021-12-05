var MongoClient =
require('mongodb').MongoClient;
var url = "mongodb+srv://Yemi:Cx5j8C8Fv4WNiHqk@clustery.g6vrb.mongodb.net/Sep28_Yemisrach";
MongoClient.connect(url, function(err, db) {
 if (err) throw err;
 var dbo = db.db("Sep28_Yemisrach");
 var myobj = [{ phoneNo:"25198374698", Email:"Miky@gmail.com", Fname: "Miky", Last_name:"Get"},
 { phoneNo:"25198171616", Email:"Heny@gmail.com", Fname: "Heny", Last_name:"Get"}, 
 { phoneNo:"25187354678", Email:"TG@gmail.com", Fname: "TG", Last_name:"Get"}];
dbo.collection("PhoneBook").insertMany(myobj, function(err, res) {
 if (err) throw err;
 console.log("Database and Collection Created and 3 document inserted");
 db.close();
});
});


