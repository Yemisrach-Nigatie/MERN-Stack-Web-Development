var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) 
{
 if (err) throw err;
 var dbo = db.db("Sep28_Yemisrach");
 
 let PN = { phoneNo:'25198374698'} 
 
 dbo.collection("PhoneBook").findOne(PN).then(doc => {
  
  console.log(doc);
}).catch((err) => {
  console.log(err);
}).finally(() => {
  db.close();
});
}); 