var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Yemi:ebC5azwhIbuKefho@clustery.g6vrb.mongodb.net";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("mydb");
const fs = require('fs');
let myData = fs.readFileSync('MOCK_DATA.json');
let contacts = JSON.parse(myData);
console.log(contacts);
dbo.collection("sep29").insertMany(contacts, function(err, res) {
 if (err) throw err;
 console.log("Collection Created and JSON document inserted");
 db.close();
});
});
