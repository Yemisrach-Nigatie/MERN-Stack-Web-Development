var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Yemi:ebC5azwhIbuKefho@clustery.g6vrb.mongodb.net/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = {"Phone No": "537-736-3316" };
  var newvalues = { $set: {first_name: "Claybourne", last_name: "Bolwell" } };
  dbo.collection("sep29").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});