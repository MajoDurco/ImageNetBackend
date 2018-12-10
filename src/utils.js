const { PATH_SEPARATOR } = require('./constants')

function head(array) {
  return array.length > 1 ? array[0]: null
}

function splitNamePath(namePath) {
  return namePath.split(PATH_SEPARATOR)
}

function getParentAndMyName(pathNames) {
  return splitNamePath(pathNames).slice(-2)
}

module.exports = {
  head,
  splitNamePath,
  getParentAndMyName,
}
