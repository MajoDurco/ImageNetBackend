const mongo = require('mongoose')

try {
  mongo.connect('mongodb://user:12345user12345@data-shard-00-00-xiuly.mongodb.net:27017,data-shard-00-01-xiuly.mongodb.net:27017,data-shard-00-02-xiuly.mongodb.net:27017/test?ssl=true&replicaSet=Data-shard-0&authSource=admin&retryWrites=true')
} catch (err) {
  console.err('Mongo connection error:', err)
}

module.exports = mongo
