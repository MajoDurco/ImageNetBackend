const mongo = require('../mongo')
const Node = require('../models/node')
const { linearNodes, parsedData } = require('../linearData')

async function searchData(query) {
  if ('name' in query) return searchByName(query.name, query.lastId)
  if ('parent' in query) return searchByParent(query.parent)
}

async function searchByName(name, lastId) {
  if (lastId) return Node.find({ '_id': { $gt: lastId } ,name: new RegExp(name, 'i') }, null, { limit: 50 })
  return Node.find({ name: new RegExp(name, 'i') }, null, { limit: 50 })
}

async function searchByParent(parentName) {
  return Node.find({ parent: parentName })
}

module.exports = {
  searchData,
}
