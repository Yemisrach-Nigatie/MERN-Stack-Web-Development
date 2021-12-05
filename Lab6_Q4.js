var MongoClient =require('mongodb').MongoClient;
var url = "mongodb+srv://Yemi:ebC5azwhIbuKefho@clustery.g6vrb.mongodb.net/Sep24-Db1";
MongoClient.connect(url, function(err, db) {
 if (err) throw err;
 var dbo = db.db("Sep24-Db1");
 let Collection = dbo.collection("ExchangeRates"); 

 Collection.find().toArray(function(err, result) {
 if (err) throw err;
 console.log(result);
 db.close();
 });
});
