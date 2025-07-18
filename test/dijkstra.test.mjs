import { expect } from 'chai'
import Graph from '../lib/Graph.mjs'
import Vertex from '../lib/Vertex.mjs'
import { backtrack, dijkstra } from '../lib/Dijkstra.mjs'

describe('Dijkstra', () => {
  it('Finds the shortest path from a source to all vertices', () => {
    let edges = [[6,0,3,1], [6,7,4,3], [6,5,6,2], [5,7,10,5], [4,8,8,5], [5,4,8,2],
      [8,9,1,2], [7,8,1,3], [8,3,2,3], [1,10,5,4], [0,1,10,3], [10,2,7,2],
      [3,2,15,2], [9,3,2,2], [2,4,10,5]]

    let graph = new Graph()
    let vertices = new Set()
    let vertexIDs = edges.map(edge => edge.slice(0, 2)).reduce((a, e) => a.concat(e), []).filter(id => {
      if (vertices.has(id)) return false
      return vertices.add(id) || true
    })
    for (let vertex of vertexIDs) graph.add(new Vertex(vertex))
    for (let edge of edges) {
      graph.addEdge(edge[0], edge[1], { weight: edge[2] })
    }

    let { dist, pred } = dijkstra(graph, 6)
    let expectedDist = [3, 13, 22, 7, 14, 6, 0, 4, 5, 6, 18]
    let expectedPred = [6, 0, 3, 8, 5, 6, null, 6, 7, 8, 1].map(vertex => vertex !== null ? graph.get(vertex) : null)

    expect(dist).to.deep.equal(expectedDist.reduce((acc, e, i) => {
      acc[i] = e
      return acc
    }, {}))

    expect(pred).to.deep.equal(expectedPred.reduce((acc, e, i) => {
      acc[i] = e
      return acc
    }, {}))
  })

  it('Finds the shortest path from a source to a target if it is given', () => {
    let edges = [[6,0,3,1], [6,7,4,3], [6,5,6,2], [5,7,10,5], [4,8,8,5], [5,4,8,2],
      [8,9,1,2], [7,8,1,3], [8,3,2,3], [1,10,5,4], [0,1,10,3], [10,2,7,2],
      [3,2,15,2], [9,3,2,2], [2,4,10,5]]

    let graph = new Graph()
    let vertices = new Set()
    let vertexIDs = edges.map(edge => edge.slice(0, 2)).reduce((a, e) => a.concat(e), []).filter(id => {
      if (vertices.has(id)) return false
      return vertices.add(id) || true
    })
    for (let vertex of vertexIDs) graph.add(new Vertex(vertex))
    for (let edge of edges) {
      graph.addEdge(edge[0], edge[1], { weight: edge[2] })
    }

    let { dist, pred } = dijkstra(graph, 6, 8)
    let expectedDist = [3, 13, Infinity, Infinity, Infinity, 6, 0, 4, 5, Infinity, Infinity]
    let expectedPred = [6, 0, null, null, null, 6, null, 6, 7, null, null].map(vertex => vertex !== null ? graph.get(vertex) : null)

    expect(dist).to.deep.equal(expectedDist.reduce((acc, e, i) => {
      acc[i] = e
      return acc
    }, {}))

    expect(pred).to.deep.equal(expectedPred.reduce((acc, e, i) => {
      acc[i] = e
      return acc
    }, {}))
  })
})

describe('Path reconstruction', () => {
  it('Backtracks to find the vertices visited', () => {
    let edges = [[6,0,3,1], [6,7,4,3], [6,5,6,2], [5,7,10,5], [4,8,8,5], [5,4,8,2],
      [8,9,1,2], [7,8,1,3], [8,3,2,3], [1,10,5,4], [0,1,10,3], [10,2,7,2],
      [3,2,15,2], [9,3,2,2], [2,4,10,5]]

    let graph = new Graph()
    let vertices = new Set()
    let vertexIDs = edges.map(edge => edge.slice(0, 2)).reduce((a, e) => a.concat(e), []).filter(id => {
      if (vertices.has(id)) return false
      return vertices.add(id) || true
    })
    for (let vertex of vertexIDs) graph.add(new Vertex(vertex))
    for (let edge of edges) {
      graph.addEdge(edge[0], edge[1], { weight: edge[2] })
    }

    let { dist, pred } = dijkstra(graph, 6)
    let path = backtrack(graph, pred, 3)

    let expectedSteps = [6, 7, 8, 3].map(vertex => graph.get(vertex))
    expect(path).to.deep.equal(expectedSteps)
  })
})