import { expect } from 'chai'
import Graph from '../lib/Graph.mjs'
import Vertex from '../lib/Vertex.mjs'

describe('The graph class', () => {
  it('Allows adding vertices', () => {
    let graph = new Graph()
    let vertex = new Vertex('A')
    graph.add(vertex)

    expect(graph.countVertices()).to.equal(1)
  })

  it('Allows getting a vertex by its name', () => {
    let graph = new Graph()
    let vertex = new Vertex('A')
    graph.add(vertex)

    expect(graph.get('A')).to.equal(vertex)
  })
})