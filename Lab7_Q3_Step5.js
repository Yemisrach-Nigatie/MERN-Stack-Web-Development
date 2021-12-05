var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Yemi:ebC5azwhIbuKefho@clustery.g6vrb.mongodb.net/";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { PhoneNo:"910-372-3972" };
  dbo.collection("sep29").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});