// const {
//    MongoClient
// } = require('mongodb');
// const url = "mongodb://localhost:27017/demo";

// const client = new MongoClient(url);

// module.exports = {
//    client
// }

const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/demo";

module.exports = {
   connect: () => {
      mongoose.connect(url, {
         useNewUrlParser: true,
         useUnifiedTopology: true
      }).then(() => console.log('Database is connected.'))
   }
}