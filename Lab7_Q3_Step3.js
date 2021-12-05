var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Yemi:ebC5azwhIbuKefho@clustery.g6vrb.mongodb.net";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var mysort = {Phoneno: 1};
  dbo.collection("sep29").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});