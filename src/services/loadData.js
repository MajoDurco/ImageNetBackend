const Node = require('../models/node')
const { makeTree } = require('../makeTree')
const { linearNodes, parsedData } = require('../linearData')

async function loadData(nodes) {
  const linearData = await Node.find()
  return makeTree(linearData)
}

module.exports = {
  loadData,
}
