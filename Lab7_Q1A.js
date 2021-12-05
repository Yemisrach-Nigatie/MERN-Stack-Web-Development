var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Yemi:ebC5azwhIbuKefho@clustery.g6vrb.mongodb.net";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("sample_restaurants");
  var mysort = {cuisine: -1};
  dbo.collection("restaurants").find({},{projection:{_id:0,cuisine:1,address:1}}).sort(mysort).limit(10).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
//dbo.collection("restaurants").find().sort({cuisine:1}).forEach(i in restaurants);
