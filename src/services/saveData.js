const mongo = require('../mongo')
const Node = require('../models/node')
const { linearNodes, parsedData } = require('../linearData')

async function saveData() {
  await Node.deleteMany() // delete all
  const parsedXml = await parsedData()
  const linearData = linearNodes(parsedXml.ImageNetStructure.synset[0], null)
  return Node.insertMany(linearData)
}

module.exports = {
  saveData,
}
