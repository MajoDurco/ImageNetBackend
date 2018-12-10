const mongo = require('mongoose')

const { mongo: mongoConfig } = require('../config')

try {
  mongo.connect(mongoConfig.atlasUrl)
} catch (err) {
  console.err('Mongo connection error:', err)
}

module.exports = mongo
