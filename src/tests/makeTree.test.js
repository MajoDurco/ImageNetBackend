
const { makeTree } = require('../makeTree')

describe('makeTree', () => {
  it('Should return empty object when data is empty', () => {
    expect(makeTree([])).toEqual({})
  })
  it('Should create only one root', () => {
    const data = [
      {
        _id: '1',
        name: 'Name1',
        size: 0,
      }
    ]
    expect(makeTree(data)).toEqual({ id: '1', name: "Name1", size: 0, children: [] })
  })
  it('Should create root and one child', () => {
    const data = [
      {
        _id: '1',
        name: 'Name1',
        size: 1,
      },
      {
        _id: '2',
        name: 'Name1 > Name2',
        size: 0,
      },
    ]
    expect(makeTree(data)).toEqual(
      {
        id: '1', name: "Name1", size: 1, children: [
        { id: '2', name: "Name2", size: 0 },
      ]})
  })
  it('Should create root with 2 childs', () => {
    const data = [
      {
        _id: '1',
        name: 'Name1',
        size: 2,
      },
      {
        _id: '2',
        name: 'Name1 > Name2',
        size: 0,
      },
      {
        _id: '3',
        name: 'Name1 > Name3',
        size: 0,
      },
    ]
    expect(makeTree(data)).toEqual(
      {
        id: '1', name: "Name1", size: 2, children: [
        { id: '2', name: "Name2", size: 0 },
        { id: '3', name: "Name3", size: 0 },
      ]})
  })
  it('Should create tree of level 2', () => {
    const data = [
      {
        _id: '1',
        name: 'Name1',
        size: 2,
      },
      {
        _id: '2',
        name: 'Name1 > Name2',
        size: 1,
      },
      {
        _id: '3',
        name: 'Name1 > Name2 > Name3',
        size: 0,
      },
    ]
    expect(makeTree(data)).toEqual(
      {
        id: '1', name: "Name1", size: 2, children: [
        { id: '2', name: "Name2", size: 1, children: [
          { id: '3', name: "Name3", size: 0 },
        ]},
      ]})
  })
})
