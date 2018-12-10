const { PATH_SEPARATOR } = require('./constants')
const { head, splitNamePath , getParentAndMyName } = require('./utils')

function createNewNode(id, name, size, childrens=true) {
  const newNode = { id, name, size }
  return childrens
    ? { ...newNode, children: [] }
    : newNode
}

/* 
  Time Complexity: O(N), N - number of the nodes
  We need to iterate through all N nodes
  To find the parent node of processing node is O(1) because of the
  reference object.
  To put node into children's array of a parent is
  simple push which can be done also on O(1)
*/
function makeTree(data) {
  if (data.length === 0) return {}
  const [ rootNode, ...tail ] = data
  const { name: rootName, size: rootSize, _id: rootId } = rootNode
  const tree = { id: rootId, name: rootName, size: rootSize, children: [] }
  const nodeRefs = {}
  nodeRefs[rootName] = tree
  for (let node of tail) {
    const { _id: nodeId, name: nodePath, size: nodeSize } = node
    const [ parentName, nodeName ] = getParentAndMyName(nodePath)
    const newNode = nodeSize
      ? createNewNode(nodeId, nodeName, nodeSize)
      : createNewNode(nodeId, nodeName, nodeSize, false)
    const parentNode = nodeRefs[parentName]
    parentNode.children.push(newNode)
    nodeRefs[nodeName] = newNode
  }
  return {...tree}
}

module.exports = {
  makeTree
}