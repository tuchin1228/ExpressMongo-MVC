var express = require('express');

var router = express.Router();
// const User = require("../Model/User")

// const MongoConnect = require('../db')
const {
  MongoClient
} = require('mongodb');
const url = "mongodb://localhost:27017/demo";
const client = new MongoClient(url);


/* GET users listing. */
router.get('/', async function (req, res, next) {

  await client.connect();
  console.log('Connected successfully to server');
  const dbo = client.db("demo");
  const collection = dbo.collection('employee');
  const employee = await collection.find().toArray()
  console.log(employee);

  res.send(employee);
});


router.post('/test', function (req, res, next) {

    let body = req.body;
    res.json(body)

})

module.exports = router;