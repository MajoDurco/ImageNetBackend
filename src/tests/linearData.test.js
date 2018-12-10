const { linearNodes } = require('../linearData')

describe('linearNodes', () => {
  it('Should create only one node from root', () => {
    const node = {
      "$": {
        "words": "Node 1",
      },
    }
    expect(linearNodes(node, null)).toEqual([{
      name: 'Node 1',
      parent: '',
      size: 0
    }])
  })
  it('Should create 2 nodes', () => {
    const node = {
      "$": {
        "words": "Node 1",
      },
      "synset": [{
        "$": {
          "words": "Node 2",
        },
      }],
    }
    expect(linearNodes(node, null)).toEqual([
      {
        name: 'Node 1',
        parent: '',
        size: 1
      },
      {
        name: 'Node 1 > Node 2',
        parent: 'Node 1',
        size: 0
      },
    ])
  })
  it('Should create 2 nodes in from', () => {
    const node = {
      "$": {
        "words": "Node 2",
      },
      "synset": [{
        "$": {
          "words": "Node 3",
        },
      }],
    }
    expect(linearNodes(node, 'Node 1')).toEqual([
      {
        name: 'Node 1 > Node 2',
        parent: 'Node 1',
        size: 1
      },
      {
        name: 'Node 1 > Node 2 > Node 3',
        parent: 'Node 1 > Node 2',
        size: 0
      },
    ])
  })
})