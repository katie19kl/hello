var msg = "hi there";

console.log(msg);

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/myDB";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("myDB");
    var myobj = [
        { name: 'John', address: 'Highway 71'},
        { name: 'Peter', address: 'Lowstreet 4'}
      ];
    dbo.collection("customers").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("num of documents inserted: " + res.insertedCount);
        db.close();
    });
  });

