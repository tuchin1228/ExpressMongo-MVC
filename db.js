// const {
//     mongoose
// } = require('mongoose');

// mongoose.connect("mongodb://localhost/testdb")


const mongo = require('mongodb').MongoClient
const url = "mongodb://localhost:27017";

mongo.connect(url, function (err, client) {
   console.log('connect success!');
});