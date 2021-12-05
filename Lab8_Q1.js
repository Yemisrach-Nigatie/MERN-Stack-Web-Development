var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Yemi:ebC5azwhIbuKefho@clustery.g6vrb.mongodb.net/Sep28_Yemisrach";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("sample_mflix");
  var mysort = {year: 1};
      collection =  dbo.collection("movies")
      .find({"imdb.rating": { $gt: 8 } },{projection:{_id:0,title:1,directors:1,year:1}})
      .sort(mysort).limit(10)
            collection.forEach(function(result, err){   
            if (err) throw err;
                console.log(result);
                db.close();
            });
        });