import { expect } from 'chai'
import Graph from '../lib/Graph.mjs'
import Vertex from '../lib/Vertex.mjs'

describe('The vertex class', () => {
  it('Allows adding a directed edge between 2 vertices', () => {
    let vertexA = new Vertex('A')
    let vertexB = new Vertex('B')

    vertexA.addEdge(vertexB, { weight: 10 })

    expect(vertexA.getOutgoingEdges().length).to.equal(1)
    expect(vertexA.getOutgoingEdges()[0].getDest()).to.equal(vertexB)
    expect(vertexA.getOutgoingEdges()[0].getWeight()).to.equal(10)
    expect(vertexB.getOutgoingEdges().length).to.equal(0)
  })

  it('Allows adding a bidirectional edge between 2 vertices', () => {
    let vertexA = new Vertex('A')
    let vertexB = new Vertex('B')

    vertexA.addEdge(vertexB, { weight: 10, bidirectional: true })

    expect(vertexA.getOutgoingEdges().length).to.equal(1)
    expect(vertexA.getOutgoingEdges()[0].getDest()).to.equal(vertexB)
    expect(vertexA.getOutgoingEdges()[0].getWeight()).to.equal(10)
    
    expect(vertexB.getOutgoingEdges().length).to.equal(1)
    expect(vertexB.getOutgoingEdges()[0].getDest()).to.equal(vertexA)
    expect(vertexB.getOutgoingEdges()[0].getWeight()).to.equal(10)
  })
})