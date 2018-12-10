const fs = require('fs')
const path = require('path')
const util = require('util')

const xml2js = require('xml2js')

const { PATH_SEPARATOR } = require('./constants')
const { head, splitNamePath , getParentAndMyName } = require('./utils')

const parser = new xml2js.Parser();
const content = fs.readFileSync(path.resolve(__dirname, '../data/structure_released.xml'))

const parseXml = util.promisify(parser.parseString)
const parsedData = () => parseXml(content)

const getParentNamePath = (pathNames) => splitNamePath(pathNames).slice(0, -1).join(PATH_SEPARATOR)

function linearNodes(node, nameFromAbove) {
  let nameFromRoot = [nameFromAbove, node['$'].words].join(PATH_SEPARATOR)
  if(!nameFromAbove) nameFromRoot = node['$'].words // initial call
  let data = [{
    name: nameFromRoot,
    parent: getParentNamePath(nameFromRoot),
    size: 0,
  }]
  let [ dataHead ] = data;
  if ('synset' in node) {
    dataHead.size += node.synset.length
    for (let deeperNode of node.synset) {
      const dataFromBelow = linearNodes(deeperNode, nameFromRoot)
      const [ head ] = dataFromBelow
      data.push(...dataFromBelow)
      dataHead.size += head.size
    }
  }
  return data
}

module.exports = {
  linearNodes,
  parsedData,
  parseXml,
}
