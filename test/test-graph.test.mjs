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

  it('Allows adding an edge directly without having to get the vertex', () => {
    let graph = new Graph()
    graph.add(new Vertex('A'), new Vertex('B'))
    graph.addEdge('A', 'B', { weight: 5, attrs: { name: 'test' }})
    expect(graph.get('A').getOutgoingEdges().length).to.equal(1)
    expect(graph.get('A').getOutgoingEdges()[0].getDest()).to.equal(graph.get('B'))
    expect(graph.get('A').getOutgoingEdges()[0].getAttr('name')).to.equal('test')
  })
})